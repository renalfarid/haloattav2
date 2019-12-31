import axios from 'axios';
const cookieparser = require('cookieparser');

export const state = () => {
  return {
    auth: null
  };
};
export const mutations = {
  setAuth(state, auth) {
    state.auth = auth;
  },
  resetUser(state) {
    state.auth = null;
  }
};
export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    let dataAuth = null;
    let headers = {};
    if (req.headers.cookie) {
      const parsed = await cookieparser.parse(req.headers.cookie);

      try {
        headers = {
          Authorization: 'Bearer ' + parsed.auth
        };
        let { data } = await axios.get(process.env.baseUrl + 'user/info', {
          headers
        });

        dataAuth = data.data;
        commit('setAuth', dataAuth);
      } catch (err) {
        commit('resetUser');
        console.log(err);
      }
    } else {
      // console.log('ayolah else');
    }
  }
};
