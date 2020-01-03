import { setAuthToken, resetAuthToken } from '~/utils/auth'
import cookies from 'js-cookie'
import Axios from 'axios'



export const state = () => ({
    authUser: {},
    authLogin: {}
})

export const mutations = {
    set_user(state, user) {
        state.authUser = user
    },
    set_login(state, result) {
        state.authLogin = result
    },
    reset_user(state) {
        state.authUser = null
    },
    reset_login(state) {
        state.authLogin = null
    },
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.authLogin) {
            commit('set_login', req.session.authLogin)
        }
    },

    async fetch({ commit }, token) {
        const config = {
            headers: {
              Authorization: "Bearer " + token
            }
          };
        return Axios.get(process.env.baseUrl + "user/info", config)
            .then(response => {
                commit('set_user', response.data.result)
                return response
            })
            .catch(error => {
                commit('reset_user')
                return error
            })
    },
    login({ commit }, data) {
        return Axios.post(process.env.token, {
              username: this.username,
              password: this.password,
              grant_type: "password",
              client_id: 8,
              client_secret: "Uu4QDKCnPbcwMXf5ScMrfkdIFLEewIP5Z7NQSVt2"
        })
            .then(response => {
                commit('set_login', response.data.data)
                setAuthToken(response.data.access_token)
                cookies.set('Authorization', response.data.access_token, { expires: 7000 })
                return response
                console.log(response.data.user)
            })
    },

    reset({ commit }) {
        commit('reset_user')
        commit('reset_login')
        resetAuthToken()
        cookies.remove('x-access-token')
        return Promise.resolve()
    }
}

