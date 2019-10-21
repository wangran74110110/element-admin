import request from '@/api/request'

//执行登录
function getArticleList(data){
  return request ({
    url: '/admin/xy/news/list',
    method:'get',
    data
  })
}

function delArticleList(data){
    return request ({
      url: '/admin/xy/news/del',
      method:'get',
      data
    })
  }

  function upArticleList(data){
    return request ({
      url: '/admin/xy/news/update',
      method:'post',
      data
    })
  }

  function saveArticleList(data){
    return request ({
      url: '/admin/xy/news/save',
      method:'post',
      data
    })
  }

  function detailArticle(data){
    return request ({
      url: '/admin/xy/news/detail',
      method:'post',
      data
    })
  }
  
export default {
    delArticleList,
    getArticleList,
    upArticleList,
    saveArticleList,
    detailArticle
}