import { openai } from "@/openai.config";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { uid, humanize, prompt, currentConversation } = req.body.params;

  const gptModel =
    uid === process.env.VIDITKHANDELWAL_USER_ID
      ? "gpt-4-0314"
      : "gpt-3.5-turbo";
  let message = prompt;
  if (humanize) {
    message += ". I want you to humanize your response";
  }
  let newConversation = currentConversation;
  newConversation.push({ role: "user", content: message })
  const completion =  await openai.createChatCompletion({
    model: gptModel,
    messages: currentConversation,
  });
  newConversation.push({
    role: "assistant",
    content: completion!.data!.choices[0]!.message!.content!,
  });
}

const generate = async (prompt: string, gptModel: string) => {};
