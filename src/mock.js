//引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random;

//使用mockjs模拟数据
//
///home请求数据////////
// home的轮播图片
Mock.mock('/home/banner', (req, res) => {
  let list = [];
  for(let i = 0; i < 3; i++) {
    let listObject = {
      id: Random.string(5),
      img: Random.image('375x200', Random.color(), '#FFF', 'picture')
    }
    list.push(listObject);
  }
  return {
    data: list
  }
})
// home的精选酒店
Mock.mock('/home/hotel', (req, res) => {
  let list = [];
  for(let i = 0; i < 4; i++) {
    let listObject = {
      hid: Random.string(5),
      name: Random.ctitle(6,10),
      room: Random.ctitle(6,10),
      date: Random.date('yyyy-MM-dd'),
      img: Random.image('175x95', '#50B347', '#FFF', 'picture')
    }
    list.push(listObject);
  }
  return {
    data: list
  }
})
// home的热门城市
Mock.mock('/home/hot', (req, res) => {
  let list = [];
  for(let i = 0; i < 6; i++) {
    let listObject = {
      cid: Random.string(5),
      city: Random.city(),
      img: Random.image('110x110', '#894FC4', '#FFF', 'picture')
    }
    list.push(listObject);
  }
  return {
    data: list
  }
})
// home的推荐酒店
Mock.mock('/home/recommend', (req, res) => {
  let list = [];
  for(let i = 0; i < 2; i++) {
    let listObject = {
      hid: Random.string(5),
      addr:Random.city() +''+ Random.ctitle(6,10),
      num:Random.integer(100, 9999),
      img: Random.image('355x200', '#FF6600', '#FFF', 'picture')
    }
    list.push(listObject);
  }
  return {
    data: list
  }
})

// 
// hotelList
Mock.mock('/hotelList',(req,res) => {
  let list = [];
  for(let i = 0; i < 4; i++) {
    let listObject = {
      hid: Random.string(5),//酒店hid
      name:'酒店名称'+Random.ctitle(6,10),
      score:Random.integer(0, 5),
      price:Random.integer(100, 1000),
      addr:Random.county(),
      room:'房型'+Random.ctitle(3,5),
      img: Random.image('355x200', '#FF6600', '#FFF', 'picture'),
      isCollet:Random.boolean()
    }
    list.push(listObject);
  }
  return {
    data: list
  }
})