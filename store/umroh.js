const cookieparser = process.server ? require("cookieparser") : undefined;

export const state = () => {
  return {
    umroh: null
  };
};
export const mutations = {
  setUmroh(state, auth) {
    state.umroh = auth;
  }
};
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let umroh = null;
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        umroh = JSON.parse(parsed.umroh);
      } catch (err) {
        // No valid cookie found
      }
    }
    commit("setUmroh", umroh);
  }
};
