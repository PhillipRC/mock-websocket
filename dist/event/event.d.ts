import { Event as DOMEvent, EventInit, EventTarget as DOMEventTarget } from '../dom-types';
export default class Event implements DOMEvent {
    static readonly NONE = 0;
    static readonly CAPTURING_PHASE = 1;
    static readonly AT_TARGET = 2;
    static readonly BUBBLING_PHASE = 3;
    cancelBubble: boolean;
    readonly composed: boolean;
    readonly defaultPrevented: boolean;
    readonly eventPhase: number;
    readonly isTrusted: boolean;
    returnValue: boolean;
    readonly timeStamp: number;
    readonly srcElement: null;
    readonly NONE = 0;
    readonly CAPTURING_PHASE = 1;
    readonly AT_TARGET = 2;
    readonly BUBBLING_PHASE = 3;
    private _bubbles;
    private _cancelable;
    private _type;
    private _target;
    private _currentTarget;
    readonly type: string;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly target: DOMEventTarget | null;
    readonly currentTarget: DOMEventTarget | null;
    constructor(type: string, eventInit?: EventInit);
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    composedPath(): DOMEventTarget[];
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    _setTarget(target: DOMEventTarget): void;
}
//# sourceMappingURL=event.d.ts.map