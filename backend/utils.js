var randomstring = require("randomstring");

const ROOM_ID_LENGTH = 8;

function generateRoomId(){
  return randomstring.generate(ROOM_ID_LENGTH);
}

module.exports = {
  generateRoomId: generateRoomId
}