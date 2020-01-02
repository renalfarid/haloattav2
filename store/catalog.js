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

export const getters = {
  umroh(state) {
    return state.umroh;
  }
};
