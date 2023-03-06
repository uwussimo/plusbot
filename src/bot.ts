import 'dotenv/config';
import { Bot, session } from 'grammy';
import { i18nMiddleware } from './utils/i18n/middleware';
import { translations } from './translations/index';
import { BotContext } from './types';

const bot = new Bot<BotContext>(process.env.BOT_TOKEN || '');

bot.use(
  session({
    initial: () => ({ stage: 'language', language: 'en' }),
  })
);
bot.use(i18nMiddleware(translations));
bot.command('start', (ctx) => ctx.reply(ctx.i18n('welcome_message')));

bot.start();
