import { io } from "socket.io-client";

export function createSocket(url?: string) {
  return io(url);
}

export function disconnectSocket(socket: ReturnType<typeof io>) {
  socket.disconnect();
}
