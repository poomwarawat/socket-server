const crypto = require("crypto");

const queues = [];

const addQueue = ({ fromId, toId }) => {
  fromId = fromId.trim().toLowerCase();
  toId = toId.trim().toLowerCase();

  if (!fromId && !toId) return { error: "fromId and to Id are required" };

  const roomId = crypto.randomBytes(16).toString("hex");
  const queue = { fromId, toId, roomId };
  queues.push(queue);

  return { queue };
};

const waitingRoom = [];

const addWaitingRoom = (uuid) => {
  const exitingRoom = waitingRoom.find((room) => room.uuid === uuid);

  if (exitingRoom) return { room: exitingRoom };

  const roomId = crypto.randomBytes(16).toString("hex");
  const room = {
    uuid: uuid,
    roomId: roomId,
  };

  waitingRoom.push(room);
  return { room };
};

const getWaitingRoom = (uuid) => {
  const room = waitingRoom.find(
    (room) => parseInt(room.uuid) === parseInt(uuid)
  );
  return { room };
};

module.exports = { addQueue, addWaitingRoom, getWaitingRoom };
