"use client";
import { Terminal as Xterminal } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";
import { FitAddon } from "@xterm/addon-fit";
import { useEffect, useRef } from "react";
import { createSocket, disconnectSocket } from "../../lib/api/socket";

export function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const term = new Xterminal({
        cursorBlink: true,
        fontFamily: "Fira Code, monospace",
        fontSize: 14,
        theme: {
          foreground: "#f8f8f2",
        },
      });
      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      term.open(ref.current);
      term.focus();
      term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m\r\nuser@terminal:~$ ");

      const socket = createSocket("http://localhost:3000");

      term.onData((data) => {
        term.write(data);
        socket.emit("input", data);
      });

      socket.on("output", (message: string) => {
        term.write("\r\n" + message + "\r\nuser@terminal:~$ ");
      });

      return () => {
        disconnectSocket(socket);
        term.dispose();
      };
    }
  }, []);
  return (
    <div
      className="bg-black text-green-500 font-mono p-4 rounded"
      ref={ref}
    ></div>
  );
}
