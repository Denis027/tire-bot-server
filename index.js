const TelegramBot = require("node-telegram-bot-api");

const token = "7247572793:AAGgHpDggQQxKTk2KK6xgCEY_WXPZhmsLSw";
// webAppUrl = "https://www.google.ru/?hl=ru";
webAppUrl = "https://lighthearted-blancmange-54de70.netlify.app/";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (message) => {
    const chatId = message.chat.id;
    const text = message.text;

    if (text === "/start") {
        await bot.sendMessage(chatId, "Hello puk...", {
            reply_markup: {
                keyboard: [
                    [{ text: "Перейти на сайт", web_app: { url: webAppUrl } }],
                    [
                        {
                            text: "Заказать обратный звонок",
                            web_app: { url: webAppUrl },
                        },
                    ],
                ],
            },
        });

        await bot.sendMessage(chatId, "Перейди на сайт", {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Перейди на сайт",
                            web_app: { url: webAppUrl },
                        },
                    ],
                ],
            },
        });
    }
});
