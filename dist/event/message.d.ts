import { MessageEvent as DOMMessageEvent, MessageEventInit } from '../dom-types';
import Event from './event';
export default class MessageEvent extends Event implements DOMMessageEvent {
    readonly data: any;
    readonly lastEventId: string;
    readonly origin: string;
    readonly ports: never[];
    readonly source: null;
    constructor(type: string, eventInit?: MessageEventInit);
}
//# sourceMappingURL=message.d.ts.map