import request from '@/utils/request'

// 发送验证码
export const sendPhoneCode = phone => {
  const url = '/pm-expert/commons/sendSms'
  return request.post(url, {
    mobile: phone,
    smsmode: 0
  })
}

// 验证码登录
export const loginByPhone = params => {
  const url = '/pm-expert/user/verify/info'
  return request.post(url, params)
}

// 上传文件
export const uploadFile = params => {
  const url = '/pm-expert/commons/upload?type=1'
  return request.post(url, params, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}

// 提交专家信息
export const saveUserInfo = params => {
  const url = '/pm-expert/user/save/info'
  return request.post(url, params)
}

// 获取专家信息
export const getUserById = id => {
  const url = '/pm-expert/user/query/userInfo'
  return request.get(url, { params: { id } })
}

// 下拉列表
export const getSelectListByType = type => {
  const url = `/pm-expert/education-fix/getAll`
  return request.get(url, { params: { type } })
}

// 职称列表
export const getPositionListByType = type => {
  const url = `/pm-expert/fix/position-fix/getAll`
  return request.get(url, { params: { type } })
}
