const telegramBot = require('node-telegram-bot-api');
const token = '631222270:AAHvAs4NqEPq_Kz0vmIy3z-UkXpf-V0pPi8';

const bot = new telegramBot(token {polling: true});

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Ты мне отправил: "${msg.text}"?`);
})
