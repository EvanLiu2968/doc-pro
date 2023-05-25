// import Cookies from './js-cookie'

const TokenKey = 'token'
const expires = new Date('2048/01/01') // expires = new Date('2048/01/01').toUTCString()

export const getToken = () => {
  // return Cookies.get(TokenKey) || ''
  return sessionStorage.getItem(TokenKey) || ''
}

export const setToken = (token) => {
  // return Cookies.set(TokenKey, token, { expires })
  return sessionStorage.setItem(TokenKey, token, { expires })
}

export const removeToken = () => {
  // return Cookies.remove(TokenKey)
  return sessionStorage.removeItem(TokenKey)
}
// 渠道: 1 微信H5，2 微信小程序，3 H5，4 PC，5 QQ，6 钉钉，7 微博，8 其他
export const getChannel = () => {
  console.log(navigator.userAgent)
  const isWX = /micromessenger/i.test(navigator.userAgent.toLowerCase())
  const isQQ = /qq/i.test(navigator.userAgent.toLowerCase())
  const isDD = /ding\s?talk/i.test(navigator.userAgent.toLowerCase())
  const isWB = /WeiBo/i.test(navigator.userAgent.toLowerCase())
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent)
  if (isWX) {
    return 1
  }
  if (isQQ) {
    return 5
  }
  if (isDD) {
    return 6
  }
  if (isWB) {
    return 7
  }
  if (isMobile) {
    return 3
  }
  return 4
}
