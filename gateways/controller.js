const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const router = require("../router");
const { addWaitingRoom, getWaitingRoom } = require("../queue");

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

const server = http.createServer(app, {
  cors: {
    origin: "*",
  },
});
let io = socketio(server);
const socketConnect = () => {
  io.on("connect", (socket) => {
    console.log("user connected!");
    socket.on("waiting-room", ({ uuid }) => {
      const { room } = addWaitingRoom(uuid);
      socket.join(room.roomId);
    });

    socket.on("getting-room", ({ uuid, fromId }) => {
      const { room } = getWaitingRoom(uuid);

      socket.broadcast
        .to(room.roomId)
        .emit("queue", { roomId: room.roomId, fromId: fromId });
    });

    socket.on("disconnect", () => {
      console.log("user has left!");
    });
  });
};

module.exports = { socketConnect, server, app, io };
