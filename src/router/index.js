import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('../views/home/Home')
const Search = () => import('../views/search/Search')
const Profile = () => import('../views/profile/Profile')

// 安装router
Vue.use(VueRouter)

// 设置映射关系
const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/search',
		component:Search
	},
	{
		path:'/profile',
		component:Profile
	}
]

// 创建router对象
const router = new VueRouter({
	routes,
	mode:'history'
})

// 导出
export default router