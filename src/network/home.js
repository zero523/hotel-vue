import {request} from './request'

export function getHomeBanner(){
  return request({
      url:'/home/banner'
  })
}

export function getHomeHotel(){
  return request({
      url:'/home/hotel'
  })
}

export function getHomeHot(){
  return request({
      url:'/home/hot'
  })
}

export function getHomeRecommend(){
  return request({
      url:'/home/recommend'
  })
}
