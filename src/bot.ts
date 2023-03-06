import 'dotenv/config';
import { Bot, session } from 'grammy';
import { BotContext } from '@/types';
import { i18n } from './utils/i18n';

const bot = new Bot<BotContext>(process.env.BOT_TOKEN || '');

bot.use(
  session({
    initial: () => ({ stage: 'language', language: 'en' }),
  })
);

const translations = {
  uz: {
    hello: 'Salom Dunyo!',
  },
  ru: {
    hello: 'Привет Мир!',
  },
  en: {
    hello: 'Hello World!',
  },
};

const i18nMiddleware = (translations: { [key: string]: any }) => {
  return async (ctx: BotContext, next: () => Promise<void>) => {
    ctx.i18n = i18n(ctx.session.language, translations);
    await next();
  };
};

bot.use(i18nMiddleware(translations));
bot.command('start', (ctx) => ctx.reply(ctx.i18n('home')));

bot.start();
