import { i18n } from './index';
import { BotContext } from '../../types';

export const i18nMiddleware = (translations: { [key: string]: any }) => {
  return async (ctx: BotContext, next: () => Promise<void>) => {
    ctx.i18n = i18n(ctx.session.language, translations);
    await next();
  };
};
