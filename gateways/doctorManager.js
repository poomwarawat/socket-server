const createWaitingRoom = (socket) => {
  socket.on("waiting-room", (data, callback) => {
    const { uuid } = data;
    const room = `waiting-room:${uuid}`;
    socket.join(room);
    callback(room);
  });
};

const sendingQueuetoRoom = (socket) => {
  socket.on("sending-queue", (data, callback) => {
    const { toId, fromId } = data;
    const sendingRoom = `waiting-room:${toId}`;
    console.log(sendingRoom);
    socket.to(sendingRoom).emit("Hello");
  });
};

module.exports = { createWaitingRoom, sendingQueuetoRoom };
