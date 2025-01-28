import { questionHandlers } from './question';
import { subscriptionHandlers } from './subscription';
import { wikiHandlers } from './wiki';

export const handlers = [...questionHandlers, ...subscriptionHandlers, ...wikiHandlers];
