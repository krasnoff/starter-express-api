import { Configuration, OpenAIApi } from "openai";

async function createCompletion(prompt: string) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 100,
    temperature: 0.9,
  });

  return response.data;
}

export default {
  createCompletion
}; 