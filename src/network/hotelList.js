import {request} from './request'

export function getHotelList(){
  return request({
      url:'/hotelList',
      // params:{
      // 	cid
      // }
  })
}