import 'dotenv/config';
import { Bot, session, InlineKeyboard } from 'grammy';
import { i18n } from './utils/i18n/index';
import { i18nMiddleware } from './utils/i18n/middleware';
import { translations } from './translations/index';
import { BotContext } from './types';

const bot = new Bot<BotContext>(process.env.BOT_TOKEN || '');

bot.use(
  session({
    initial: () => ({ stage: 'language', language: 'uz' }),
  })
);
bot.use(i18nMiddleware(translations));

const language_keyboard = new InlineKeyboard()
  .text('🇺🇸 English', 'en')
  .text('🇷🇺 Русский', 'ru')
  .row()
  .text("🇺🇿 O'zbekcha", 'uz')
  .text('🇨🇳 中文', 'cn');

bot.command('start', (ctx) =>
  ctx.reply(ctx.i18n('welcome_message'), {
    reply_markup: { ...language_keyboard, one_time_keyboard: true },
    parse_mode: 'HTML',
  })
);

// Wait for click events with specific callback data.
bot.callbackQuery(['en', 'ru', 'uz', 'cn'], async (ctx) => {
  console.log(ctx.callbackQuery.data);
  ctx.session.language = ctx.callbackQuery.data;
  // reset i18 middleware
  ctx.i18n = i18n(ctx.session.language, translations);
  //delete itself
  await ctx.deleteMessage();

  //stop query
  await ctx.answerCallbackQuery();
});

bot.start();
