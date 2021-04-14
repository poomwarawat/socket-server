const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const crypto = require("crypto");
const iv = crypto.randomBytes(16);
const { socketConnect, server } = require("./gateways/controller");

// const io = socketio(server);

socketConnect();
// let initUsersState = [
//   { uuid: 1, name: "poomwarawat" },
//   { uuid: 2, name: "kaiky" },
//   { uuid: 3, name: "mephoo" },
// ];

// io.on("connect", (socket) => {
//   socket.on("join", ({ name, room }, callback) => {
//     //find chatroom between from-user and to-user if doesn't have a roomId must be create roomId else get roomId from database

//     const { error, user } = addUser({ id: socket.id, name, room });

//     if (error) return callback(error);

//     socket.join(user.room);

//     socket.emit("message", {
//       user: "admin",
//       text: `${user.name}, welcome to room ${user.room}.`,
//     });
//     socket.broadcast
//       .to(user.room)
//       .emit("message", { user: "Admin", text: `${user.name} has joined!` });

//     io.to(user.room).emit("roomData", {
//       room: user.room,
//       users: getUsersInRoom(user.room),
//     });

//     callback();
//   });
//   socket.on("sending-room", ({ roomId, fromId }, callback) => {
//     console.log(roomId, fromId);
//     socket.join(fromId);
//     socket.emit("receive-room", { message: "received roomId", roomId: roomId });
//     socket
//       .to(fromId)
//       .emit("receive-room", { message: "received roomId", roomId: roomId });
//   });
//   socket.on("waiting-queue", ({ toId, fromId }, callback) => {
//     socket.join(toId);
//     fromId === undefined ? undefined : fromId;
//     const iv = crypto.randomBytes(16).toString("hex");
//     socket.emit("receive-queue", {
//       message: "test",
//       toId: toId,
//       fromId: fromId,
//       roomId: iv,
//     });
//     socket.to(toId).emit("receive-queue", {
//       message: "you queue is accept",
//       toId: toId,
//       fromId: fromId,
//       roomId: iv,
//     });
//     callback();
//   });

//   socket.on("sendMessage", (message, callback) => {
//     const user = getUser(socket.id);
//     console.log(user);
//     io.to(user.room).emit("message", { user: user.name, text: message });

//     callback();
//   });

//   socket.on("disconnect", () => {
//     const user = removeUser(socket.id);

//     if (user) {
//       io.to(user.room).emit("message", {
//         user: "Admin",
//         text: `${user.name} has left.`,
//       });
//       io.to(user.room).emit("roomData", {
//         room: user.room,
//         users: getUsersInRoom(user.room),
//       });
//     }
//   });
// });

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started.`)
);
