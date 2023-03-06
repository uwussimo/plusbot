import { Context, SessionFlavor } from 'grammy';
import { SessionData } from './../interfaces/Session.interface';

type BotContext = Context &
  SessionFlavor<SessionData> & { i18n: (key: string) => string };

export { BotContext };
