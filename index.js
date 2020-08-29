const TeleBot = require('telebot');
const token = require('./secrets.json');
const BOT_TOKEN = token.BOT_TOKEN;
const bot = new TeleBot(BOT_TOKEN);

bot.on('text', (msg) => msg.reply.text(msg.text));

bot.start();
