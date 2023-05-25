import store from '@/store'
import { defineStore } from 'pinia'
import { getToken, removeToken, setToken } from '@/utils/auth'
import { accountLogin, getUserInfo } from '@/api/login'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: getToken() || '',
      userInfo: null
    }
  },
  actions: {
    /** 登录 */
    login(userInfo) {
      return new Promise((resolve, reject) => {
        resolve(true)
        // accountLogin({
        //   username: userInfo.username.trim(),
        //   password: userInfo.password
        // })
        //   .then((res: any) => {
        //     setToken(res.data.accessToken)
        //     this.token = res.data.accessToken
        //     resolve(true)
        //   })
        //   .catch((error) => {
        //     reject(error)
        //   })
      })
    },
    /** 获取用户详情 */
    getUserInfo() {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res) => {
            const user = res.data.user
            this.userInfo = user
            resolve(user)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    /** 登出 */
    logout() {
      removeToken()
      this.token = ''
      this.userInfo = null
    },
    /** 重置 token */
    resetToken() {
      removeToken()
      this.token = ''
      this.userInfo = null
    }
  }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
