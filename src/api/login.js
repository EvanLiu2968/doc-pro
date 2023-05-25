import request from '@/utils/request'

/** 登录，返回 token */
export function accountLogin(data) {
  return request({
    url: '/loginAction/login.do',
    method: 'post',
    data
  })
}
// 校验登录验证码
export function verifyLoginCode(code) {
  return request({
    url: '/kaptchaAction/imgvrifyControllerDefaultKaptcha.do',
    method: 'post',
    data: {
      vrifyCode: code
    }
  })
}
/** 获取用户详情 */
export function getUserInfo() {
  return request({
    url: '/users/info',
    method: 'post'
  })
}
