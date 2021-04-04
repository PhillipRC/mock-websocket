import { CloseEventInit, WebSocket as DOMWebSocket } from './dom-types';
import WebSocket from './websocket';
interface IServerOptions {
    mockGlobal?: boolean;
    selectProtocol?: (protocols: string[]) => string;
    verifyClient?: () => boolean;
}
interface IEmitOptions {
    websockets?: WebSocket[];
}
declare type ErrorListener = (error: Error) => void;
declare type CloseListener = (socket?: WebSocket) => void;
declare type ConnectionListener = (socket: WebSocket) => void;
declare type MessageListener = (socket: WebSocket, data: any) => void;
interface IServerEventsMap {
    connection: ConnectionListener;
    close: CloseListener;
    message: MessageListener;
    error: ErrorListener;
}
declare class Server {
    url: string;
    originalWebSocket: DOMWebSocket | null;
    options: IServerOptions;
    listeners: Map<string, any>;
    constructor(url: string, options?: IServerOptions);
    start(): void;
    stop(callback?: () => void): void;
    on<K extends keyof IServerEventsMap>(type: K, cb: IServerEventsMap[K]): void;
    dispatchError(error: Error): void;
    dispatchSocketEvent(type: 'connection' | 'close' | 'message', s?: WebSocket, data?: any): void;
    send(data: any, options?: {}): void;
    emit(event: string, data: any, options?: IEmitOptions): void;
    close(options?: CloseEventInit): void;
    clients(): WebSocket[];
    simulate(event: string): void;
}
export default Server;
//# sourceMappingURL=server.d.ts.map