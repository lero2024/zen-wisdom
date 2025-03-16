import axios from 'axios';

// DeepSeek API配置
const API_KEY = 'sk-453aa010dca34e33b279fef31aceae5b';
const API_URL = 'https://api.deepseek.com/v1/chat/completions';

// 创建一个axios实例，设置超时和缓存控制
const apiClient = axios.create({
  timeout: 60000, // 60秒超时
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
});

export const askQuestion = async (question) => {
  try {
    console.log(`发送问题: "${question}"`);
    
    // 系统提示词
    const systemPrompt = '你是一位精通佛学的智者，擅长用简洁、富有智慧的语言回答关于佛教、禅修和生活哲学的问题。回答应体现佛教的核心理念，如慈悲、无常、无我等，并尽量引用经典原文或禅宗公案。回答应详尽全面，至少2000字。即使是简单的问题，也要给出深入、全面的回答。';
    
    // 添加时间戳防止缓存
    const timestamp = new Date().getTime();
    const response = await apiClient.post(`${API_URL}?t=${timestamp}`, {
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: `以佛学智慧解答：${question}`
        }
      ],
      temperature: 0.7,
      max_tokens: 4000
    });

    // 确保我们获取到完整的回答
    if (!response.data || !response.data.choices || !response.data.choices[0] || !response.data.choices[0].message) {
      console.error('API响应格式不正确:', response.data);
      throw new Error('API响应格式不正确');
    }

    // 打印回答长度，用于调试
    const answerContent = response.data.choices[0].message.content;
    console.log(`回答长度: ${answerContent.length} 字符`);
    console.log(`回答前100个字符: ${answerContent.substring(0, 100)}...`);

    return response.data;
  } catch (error) {
    console.error('API请求失败:', error);
    throw new Error('获取解答失败，请稍后重试');
  }
};