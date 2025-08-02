import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(import.meta.env.VITE_HF_TOKEN);

export async function enviarParaIA(mensagemUsuario, historicoConversa = []) {
  if (!mensagemUsuario?.trim()) {
    throw new Error("Mensagem vazia");
  }

  try {
    // Construir contexto da conversa
    const mensagensContexto = [
      {
        role: "system",
        content: `Você é um assistente de IA inteligente e conversacional. Suas características:

- Mantenha conversas naturais e envolventes
- Lembre-se do contexto da conversa anterior
- Faça perguntas de acompanhamento quando apropriado
- Seja detalhado e preciso em suas respostas
- Adapte seu tom ao contexto da conversa
- Ofereça insights úteis e perspectivas diferentes
- Quando possível, conecte temas e aprofunde discussões

Responda de forma natural, como se fosse uma conversa real entre amigos inteligentes.`
      }
    ];

    // Adicionar histórico recente (últimas 10 mensagens para manter contexto)
    const historicoRecente = historicoConversa.slice(-10);
    historicoRecente.forEach(msg => {
      if (msg.type === 'user') {
        mensagensContexto.push({ role: "user", content: msg.content });
      } else if (msg.type === 'ai') {
        mensagensContexto.push({ role: "assistant", content: msg.content });
      }
    });

    // Adicionar mensagem atual
    mensagensContexto.push({ role: "user", content: mensagemUsuario });

    const resposta = await client.chatCompletion({
      provider: "novita",
      model: "zai-org/GLM-4.5",
      messages: mensagensContexto,
      max_tokens: 1500,
      temperature: 0.8,
      top_p: 0.9,
      frequency_penalty: 0.1,
      presence_penalty: 0.1
    });

    const conteudo = resposta.choices?.[0]?.message?.content?.trim();
    
    if (!conteudo) {
      throw new Error("Resposta vazia da IA");
    }

    // Remove blocos de raciocínio se existirem
    return conteudo.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
    
  } catch (error) {
    console.error("Erro na API Hugging Face:", error);
    
    if (error.message?.includes("401") || error.message?.includes("unauthorized")) {
      throw new Error("Token de API inválido");
    }
    
    if (error.message?.includes("429") || error.message?.includes("rate limit")) {
      throw new Error("Muitas requisições. Tente novamente em alguns segundos");
    }
    
    if (error.message?.includes("network") || error.message?.includes("fetch")) {
      throw new Error("Erro de conexão. Verifique sua internet");
    }
    
    throw new Error("Erro inesperado ao conectar com a IA");
  }
}
