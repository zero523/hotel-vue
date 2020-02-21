<template>
	<div id="home">
		<scroll class="content">
			<my-swiper :banners="banners"></my-swiper>
			<div class="home-reserve">
				<div class="btn">小鸟预定</div>
			</div>
			<home-title :title="title1"/>
			<home-chosen :lists="hotels"/>
			<home-title class="mt-10" :title="title2"/>
			<home-city :lists="cities"/>
			<home-title class="mt-10" :title="title3"/>
			<home-recommend :lists="recommends"/>
			<home-join class="mt-10"/>
		</scroll>
	</div>
</template>

<script>
	import HomeTitle from './childComps/HomeTitle'
	import HomeChosen from './childComps/HomeChosen'
	import HomeCity from './childComps/HomeCity'
	import HomeRecommend from './childComps/HomeRecommend'
	import HomeJoin from './childComps/HomeJoin'
	import MySwiper from 'components/swiper/Swiper'
	import Scroll from 'components/scroll/Scroll'

	import {getHomeBanner,
		getHomeHotel,
		getHomeHot,
	getHomeRecommend} from 'network/home'
	export default{
		name:'Home',
		components:{
			HomeTitle,
			HomeChosen,
			HomeCity,
			HomeRecommend,
			HomeJoin,
			MySwiper,
			Scroll,
		},
		data(){
			return{
				banners:[],
				hotels:[],
				cities:[],
				recommends:[],
				title1:['Service Tips','关注最新资讯，签订最佳体验','一周点评','精选点评'],
				title2:['Hot Overseas City','身在四海，如在家，尽享世界风光','小鸟联盟','热门城市'],
				title3:['Recommendation','告别匆忙，给我们一个理由去旅行','一周点评','店主推荐']
			}
		},
		mounted(){
			getHomeBanner().then(res =>{
				this.banners=res.data
			})
			getHomeHotel().then(res =>{
				this.hotels=res.data
			})
			getHomeHot().then(res =>{
				this.cities=res.data
			})
			getHomeRecommend().then(res =>{
				this.recommends=res.data
			})
		}
	}
</script>

<style lang="less" scoped="">
	.mt-10{
		margin-top:10px;
	}
	.content{
		position:absolute;
		top:0;
		left:0;
		right:0;
		bottom:44px;
	}
	.home-reserve{
		background:#fff;
		padding:25px 0 15px;
		text-align:center;
		.btn{
			width:50%;
			margin:0 auto;
			background:#3ac8a3;
			color:#fff;
			padding:8px 20px;
		}
	}
</style>