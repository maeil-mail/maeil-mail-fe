import { questionHandlers } from './question';
import { subscriptionHandlers } from './subscription';
import { wikiHandlers } from './wiki';
import { authHandlers } from './auth';
export const handlers = [
  ...questionHandlers,
  ...subscriptionHandlers,
  ...wikiHandlers,
  ...authHandlers,
];
