import { join } from "upath";

let _client = null;

const state = {
  connected: false,
  roomName: "",
  roomMembers: [],
};

const getters = {};

const mutations = {
  SOCKET_CONNECT(state, { client }) {
    console.log('client connected')
    state.connected = true;
    _client = client;

    //FIXME: handle reconnection and state push
  },
  SOCKET_DISCONNECT(state) {
    console.log('client disconnected');
    state.connected = false;
    _client = null;
  },
  SET_ROOM(state, roomName) {
    state.roomName = roomName;
  },
  SET_ROOM_MEMBERS(state, membersList) {
    state.roomMembers = membersList;
  }
};

const actions = {
  joinRoom({ commit }, payload) {
    if (!_client) {
      throw new Error("Disconnected");
    }
    _client.emit('MESSAGE', { type: "join", payload: payload.roomName })
  },
  // Handle received messages
  socket_MESSAGE({ commit }, { data }) {
    console.log("CALLED", data[0]);
    receivedMessageHandler(commit, data[0])
  }
};


function receivedMessageHandler(commit, message) {
  switch (message.type) {
    case 'ACK':
      if (message.sourceType === 'join') {
        commit('SET_ROOM', message.sourcePayload);
      }
      break;
    case 'MEMBERS_LIST':
      console.log('RECEIVED MEMBERS_LIST', message)
        commit('SET_ROOM_MEMBERS', message.payload);
      break;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
