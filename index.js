const TelegramBot = require("node-telegram-bot-api");

const token = "7247572793:AAGgHpDggQQxKTk2KK6xgCEY_WXPZhmsLSw";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (message) => {
    const chatId = message.chat.id;
    const text = message.text;

    bot.sendMessage(chatId, "Hello puk...");
});
