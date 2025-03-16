const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 提供静态文件
app.use(express.static(path.join(__dirname, 'dist')));

// DeepSeek API配置
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

// 禁用所有路由的缓存
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// 处理聊天请求
app.post('/api/deepseek', async (req, res) => {
  try {
    const { question } = req.body;
    console.log(`接收到问题: "${question}"`); // 记录接收到的问题
    
    // 创建API请求配置
    const requestConfig = {
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: '你是一位精通佛学的智者，擅长用简洁、富有智慧的语言回答关于佛教、禅修和生活哲学的问题。回答应体现佛教的核心理念，如慈悲、无常、无我等，并尽量引用经典原文或禅宗公案。你的回答必须详尽全面，包含多个层面的解释，必须至少2000字。即使是简单的问题，也要给出深入、全面的回答。不要仅仅给出简短的回答，必须详尽全面。'
        },
        {
          role: 'user',
          content: question
        }
      ],
      temperature: 0.7,
      max_tokens: 4000
    };
    
    console.log('发送API请求到DeepSeek...'); // 记录API请求开始
    
    const response = await axios.post(DEEPSEEK_API_URL, requestConfig, {
      headers: {
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
      timeout: 60000 // 60秒超时
    });
    
    // 记录API响应信息
    if (response.data && response.data.choices && response.data.choices[0] && response.data.choices[0].message) {
      const answerContent = response.data.choices[0].message.content;
      console.log(`API响应成功! 回答长度: ${answerContent.length} 字符`);
      console.log(`回答前100个字符: ${answerContent.substring(0, 100)}...`);
    } else {
      console.log('API响应格式异常:', JSON.stringify(response.data).substring(0, 500));
    }
    
    // 设置响应头，禁用缓存
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    
    // 返回响应
    res.json(response.data);
  } catch (error) {
    console.error('DeepSeek API调用失败:', error.response?.data || error.message);
    if (error.response) {
      console.error('错误状态码:', error.response.status);
      console.error('错误头信息:', error.response.headers);
    }
    res.status(500).json({
      error: '获取解答失败，请稍后重试',
      details: error.response?.data || error.message
    });
  }
});

// 处理所有其他请求，返回index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});
