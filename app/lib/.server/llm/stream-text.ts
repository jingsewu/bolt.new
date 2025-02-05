import { convertToCoreMessages, streamText as _streamText } from 'ai';
import { MAX_TOKENS } from './constants';
import { getSystemPrompt } from './prompts';
import { getDeepSeekModel } from '~/lib/.server/llm/model';

interface ToolResult<Name extends string, Args, Result> {
  toolCallId: string;
  toolName: Name;
  args: Args;
  result: Result;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  toolInvocations?: ToolResult<string, unknown, unknown>[];
}

export type Messages = Message[];

export type StreamingOptions = Omit<Parameters<typeof _streamText>[0], 'model'>;

// export function streamText(messages: Messages, env: Env, options?: StreamingOptions) {
//   return _streamText({
//     model: getAnthropicModel(getAPIKey(env)),
//     system: getSystemPrompt(),
//     maxTokens: MAX_TOKENS,
//     headers: {
//       'anthropic-beta': 'max-tokens-3-5-sonnet-2024-07-15',
//     },
//     messages: convertToCoreMessages(messages),
//     ...options,
//   });
// }


export function streamText(messages: Messages, env: Env, options?: StreamingOptions) {
  return _streamText({
    model: getDeepSeekModel('sk-45288052b6f64b70844687307e5ad7d3'),
    system: getSystemPrompt(),
    maxTokens: MAX_TOKENS,
    // headers: {
    //   'anthropic-beta': 'max-tokens-3-5-sonnet-2024-07-15',
    // },
    messages: convertToCoreMessages(messages),
    ...options
  });
}


// export async function streamText(messages: Messages, env: Env, options?: StreamingOptions) {
//   const url = "https://infer-modelarts.cn-east-4.myhuaweicloud.com/v1/infers/937cabe5-d673-47f1-9e7c-2b4de0600431/v1/chat/completions";
//
//   const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer VDRcddFht4A16IWhDTCRiPH_-tY_i3BxZwwIte1FPfJ2t5w2RwrxiCWW3-nj9m5nreEqQxviFHYEen8XsmaWjg` // 假设你的API Key存储在env中
//   };
//
//   const data = {
//     model: "DeepSeek-R1-Distill-Qwen-32B",
//     max_tokens: options?.maxTokens || MAX_TOKENS,
//     messages: convertToCoreMessages(messages),
//     stream: true,
//     temperature: options?.temperature || 1.0
//   };
//
//   try {
//     const response = await axios.post(url, data, { headers });
//
//     if (response.status === 200) {
//       return response.data;
//     } else {
//       throw new Error(`Request failed with status code ${response.status}`);
//     }
//   } catch (error) {
//     console.error('Error calling Huawei Cloud API:', error);
//     throw error;
//   }
// }
