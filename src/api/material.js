import request from '@/api/request'

//执行登录
function getImageList(data){
  return request ({
    url: '/admin/xy/upload/list',
    method:'post',
    data
  })
}

function delImage(data){
  return request ({
    url: '/admin/xy/upload/del',
    method:'get',
    data
  })
}

function upTitle(data){
  return request ({
    url: '/admin/xy/upload/updateTitle',
    method:'post',
    data
  })
}

export default {
  getImageList,
  delImage,
  upTitle
}