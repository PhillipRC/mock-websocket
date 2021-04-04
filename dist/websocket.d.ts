import { BinaryType, CloseEvent, Event, MessageEvent, WebSocket as DOMWebSocket } from './dom-types';
import EventTarget from './event/target';
declare type OpenEventListener = (ev: Event) => any;
declare type MessageEventListener = (ev: MessageEvent) => any;
declare type ErrorEventListener = (ev: Event) => any;
declare type CloseEventListener = (ev: CloseEvent) => any;
/**
 * The main websocket class which is designed to mimick the native WebSocket class as close
 * as possible.
 */
export default class WebSocket extends EventTarget implements DOMWebSocket {
    static readonly CONNECTING = 0;
    static readonly OPEN = 1;
    static readonly CLOSING = 2;
    static readonly CLOSED = 3;
    binaryType: BinaryType;
    readonly CLOSED = 3;
    readonly CLOSING = 2;
    readonly CONNECTING = 0;
    readonly OPEN = 1;
    private _bufferedAmount;
    private _extensions;
    private _protocol;
    private _readyState;
    private _url;
    private _onclose;
    private _onerror;
    private _onmessage;
    private _onopen;
    readonly bufferedAmount: number;
    readonly extensions: string;
    readonly protocol: string;
    readonly readyState: number;
    readonly url: string;
    onclose: CloseEventListener | null;
    onerror: ErrorEventListener | null;
    onmessage: MessageEventListener | null;
    onopen: OpenEventListener | null;
    /**
     * @param {string} url
     */
    constructor(url: string, protocol?: string | string[]);
    /**
     * Transmits data to the server over the WebSocket connection.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#send()
     */
    send(data: any): void;
    /**
     * Closes the WebSocket connection or connection attempt, if any.
     * If the connection is already CLOSED, this method does nothing.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close()
     */
    close(code?: number, reason?: string): void;
    _moveToState(state: number): void;
}
export {};
//# sourceMappingURL=websocket.d.ts.map