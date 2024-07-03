const TelegramBot = require("node-telegram-bot-api");

const express = require("express");
const tiresRouter = require("./routes/tires.routes");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use("/api", tiresRouter);

app.listen(PORT, () => {
    console.log(`server started on PORT: ${PORT}`);
});

const token = "7247572793:AAGgHpDggQQxKTk2KK6xgCEY_WXPZhmsLSw";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (message) => {
    const chatId = message.chat.id;
    const text = message.text;
    const webAppUrl =
        "https://667d974f2960c400089fcb0b--lighthearted-blancmange-54de70.netlify.app/";
    const webAppFormUrl =
        "https://667d974f2960c400089fcb0b--lighthearted-blancmange-54de70.netlify.app/form";

    if (text === "/start") {
        await bot.sendMessage(chatId, "Hello...", {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "Заказать обратный звонок",
                            web_app: { url: webAppFormUrl },
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
                            text: "Сайт",
                            web_app: { url: webAppUrl },
                        },
                    ],
                ],
            },
        });
    }

    if (text === "/puk") {
        await bot.sendMessage(chatId, "Oh no, you puknul...", {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Check",
                            web_app: { url: webAppUrl },
                        },
                    ],
                ],
            },
        });
    }

    if (message?.web_app_data?.data) {
        try {
            const data = JSON.parse(message?.web_app_data?.data);

            await bot.sendMessage(chatId, `Спасибо, ${data.name} !`);
            await bot.sendMessage(chatId, `Ваш номер телефона: ${data.phone}.`);

            setTimeout(async () => {
                await bot.sendMessage(
                    chatId,
                    `Наш оператор свяжется с вами в ближашее время!`
                );
            }, 2000);
        } catch (e) {
            console.log(e);
        }
    }
});
