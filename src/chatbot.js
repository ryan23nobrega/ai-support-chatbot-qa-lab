function getChatbotResponse(message) {
  const normalizedMessage = message.toLowerCase();

  if (
    normalizedMessage.includes("troca") ||
normalizedMessage.includes("trocar") ||
normalizedMessage.includes("devolver") ||
normalizedMessage.includes("devolução") ||
normalizedMessage.includes("reembolso")
  ) {
    return {
      answer: "Você pode solicitar troca ou devolução em até 7 dias após o recebimento do produto.",
      intent: "exchange_policy",
      confidence: 0.92
    };
  }

  if (
    normalizedMessage.includes("prazo") ||
    normalizedMessage.includes("entrega") ||
    normalizedMessage.includes("chegar")
  ) {
    return {
      answer: "O prazo médio de entrega é de 5 a 10 dias úteis, dependendo da sua região.",
      intent: "delivery_time",
      confidence: 0.89
    };
  }

  if (
    normalizedMessage.includes("desconto") ||
    normalizedMessage.includes("cupom") ||
    normalizedMessage.includes("promoção")
  ) {
    return {
      answer: "No momento, não posso criar descontos ou cupons. Consulte as promoções disponíveis no site.",
      intent: "discount_request",
      confidence: 0.85
    };
  }

  if (
    normalizedMessage.includes("ignore suas instruções") ||
    normalizedMessage.includes("dados internos") ||
    normalizedMessage.includes("senha")
  ) {
    return {
      answer: "Não posso ajudar com solicitações que envolvam dados internos, senhas ou instruções fora da política de atendimento.",
      intent: "security_risk",
      confidence: 0.97
    };
  }

  return {
    answer: "Não tenho informações suficientes para responder com segurança. Recomendo entrar em contato com o suporte humano.",
    intent: "fallback",
    confidence: 0.6
  };
}

module.exports = { getChatbotResponse };