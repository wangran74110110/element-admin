import request from '@/api/request'

//执行登录
function doLogin(data){
  return request ({
    url: '/admin/login/doLogin',
    method:'post',
    data
  })
}
// 获取登陆用户信息
function getUserInfo(data){
  return request ({
    url: '/admin/login/getUserInfo',
    method:'get',
    data
  })
}


// 退出登录
function doLogOut(data){
  return request ({
    url: '/admin/login/doLogOut',
    method:'get',
    data
  })
}


export default {
  doLogin,
  getUserInfo,
  doLogOut
}