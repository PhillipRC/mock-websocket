import { AddEventListenerOptions, Event as DOMEvent, EventListenerOptions, EventListenerOrEventListenerObject, EventTarget as DOMEventTarget } from '../dom-types';
export default class EventTarget implements DOMEventTarget {
    listeners: {
        [type: string]: any[];
    };
    constructor();
    addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
    dispatchEvent(event: DOMEvent, ...customArguments: any[]): boolean;
}
//# sourceMappingURL=target.d.ts.map