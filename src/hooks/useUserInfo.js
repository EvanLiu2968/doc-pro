import { ref } from 'vue'
import { getUserById } from '@/api'

export const getEmptyUserInfo = (info) => {
  return {}
}

const getUserInfo = () => {
  const s = sessionStorage.getItem('userInfo')
  if (s) return JSON.parse(s)
  return null
}

const userInfo = ref(getUserInfo() || getEmptyUserInfo())

export const useUserInfo = () => {
  console.log(userInfo)
  return {
    userInfo
  }
}

export const updateUserInfoById = (id) => {
  return getUserById(id).then(res => {
    userInfo.value = res.result || {}
  })
}

export const updateUserInfo = (info) => {
  userInfo.value = info
  sessionStorage.setItem('userInfo', JSON.stringify(info))
}
