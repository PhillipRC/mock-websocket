import { EventTarget } from '../dom-types';
import CloseEvent from './close';
import Event from './event';
import MessageEvent from './message';
interface IEventFactoryConfig {
    type: string;
    target?: EventTarget;
}
declare function createEvent(config: IEventFactoryConfig): Event;
interface IMessageEventFactoryConfig extends IEventFactoryConfig {
    data?: any;
    origin?: string;
}
declare function createMessageEvent(config: IMessageEventFactoryConfig): MessageEvent;
interface ICloseEventFactoryConfig extends IEventFactoryConfig {
    code?: number;
    reason?: string;
    wasClean?: boolean;
}
declare function createCloseEvent(config: ICloseEventFactoryConfig): CloseEvent;
export { createEvent, createMessageEvent, createCloseEvent };
//# sourceMappingURL=factory.d.ts.map