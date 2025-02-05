// import { createAnthropic } from '@ai-sdk/anthropic';
//
// export function getAnthropicModel(apiKey: string) {
//   const anthropic = createAnthropic({
//     apiKey,
//   });
//
//   return anthropic('claude-3-5-sonnet-20240620');
// }
import { createDeepSeek } from '@ai-sdk/deepseek';


export function getDeepSeekModel(apiKey: string) {
  const deepseek = createDeepSeek({
    "apiKey":apiKey
  });

  return deepseek('deepseek-chat'); // 使用 DeepSeek 的模型名称
}

// export function getDeepSeekModel(apiKey: string) {
//   const deepseek = createDeepSeek({
//     "apiKey":apiKey,
//     "baseURL":"https://infer-modelarts.cn-east-4.myhuaweicloud.com/v1/infers/937cabe5-d673-47f1-9e7c-2b4de0600431/v1/chat/completions"
//   });
//
//   return deepseek('DeepSeek-R1-Distill-Qwen-32B'); // 使用 DeepSeek 的模型名称
// }
