import { questionHandlers } from './question';
import { subscriptionHandlers } from './subscription';

export const handlers = [...questionHandlers, ...subscriptionHandlers];
