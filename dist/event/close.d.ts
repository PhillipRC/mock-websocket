import { CloseEvent as DOMCloseEvent, CloseEventInit } from '../dom-types';
import Event from './event';
export default class CloseEvent extends Event implements DOMCloseEvent {
    readonly code: number;
    readonly reason: string;
    readonly wasClean: boolean;
    constructor(type: string, eventInit?: CloseEventInit);
}
//# sourceMappingURL=close.d.ts.map