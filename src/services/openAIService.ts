import { Configuration, OpenAIApi } from 'azure-openai';
import { eChartObjectPrompt } from './prompts';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  azure: {
    apiKey: import.meta.env.VITE_OPENAI_KEY,
    endpoint: import.meta.env.VITE_OPENAI_BASE,
  },
});

const openai = new OpenAIApi(configuration);

export function getEChartOption(data: string) {
  const content = eChartObjectPrompt(data);

  return openai.createChatCompletion({
    model: 'gpt-35-turbo',
    messages: [{ role: 'user', content }],
    max_tokens: 2048,
    n: 1,
    stop: 'none',
    temperature: 0.5,
  });
}
