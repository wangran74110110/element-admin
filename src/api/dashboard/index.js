import request from '@/api/request'

//基本统计信息
function getBaseInfo(data){
  return request ({
    url: '/admin/xy/dashboard/base',
    method:'get',
    data
  })
}

export default {
	getBaseInfo
}