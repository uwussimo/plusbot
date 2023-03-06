import { SessionData } from '@/interfaces/Session.interface';
import { Context, SessionFlavor } from 'grammy';

type BotContext = Context &
  SessionFlavor<SessionData> & { i18n: (key: string) => string };

export { BotContext };
