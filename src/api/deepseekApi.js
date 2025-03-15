import axios from 'axios';

const API_BASE_URL = 'https://api.deepseek.com/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const askQuestion = async (question) => {
  try {
    if (!process.env.DEEPSEEK_API_KEY) {
      throw new Error('请先配置DeepSeek API密钥');
    }
    
    const response = await api.post('/chat/completions', {
      model: 'deepseek-chat',
      messages: [{
        role: 'user',
        content: `以佛学智慧解答：${question}`
      }]
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('API请求失败:', error);
    throw new Error('获取解答失败，请稍后重试');
  }
};