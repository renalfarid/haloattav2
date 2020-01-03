export const state = () => {
  return {
    umroh: {}
  };
};

export const mutations = {
  setUmroh(state, umroh) {
    state.umroh = umroh;
  }
};

export const actions = {
  setUmroh({ commit }, data) {
    commit('setUmroh', data);
  }
};

// export const getters = {
//   umroh(state) {
//     return state.umroh;
//   }
// };
