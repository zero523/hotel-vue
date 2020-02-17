<template>
	<div id="home">
		<scroll class="content">
			<my-swiper :banners="banners"></my-swiper>

			<index-title :title="title1"/>
			<index-chosen/>
			<index-title class="mt-10" :title="title2"/>
			<index-city/>
			<index-title :title="title3"/>
		</scroll>
	</div>
</template>

<script>
	import IndexTitle from './childComps/IndexTitle'
	import IndexChosen from './childComps/IndexChosen'
	import IndexCity from './childComps/IndexCity'
	import MySwiper from 'components/swiper/Swiper'
	import Scroll from 'components/scroll/Scroll'
	export default{
		name:'Home',
		components:{
			IndexTitle,
			IndexChosen,
			IndexCity,
			MySwiper,
			Scroll,
		},
		data(){
			return{
				banners:[{
					'id':'001',
					'img':'~assets/img/home/banner1.jpg'
				},{
					'id':'002',
					'img':'~assets/img/home/banner2.jpg'
				},{
					'id':'003',
					'img':'~assets/img/home/banner2.jpg'
				}],
				title1:['Service Tips','关注最新资讯，签订最佳体验','一周点评','精选点评'],
				title2:['Hot Overseas City','身在四海，如在家，尽享世界风光','小鸟联盟','热门城市'],
				title3:['Recommendation','告别匆忙，给我们一个理由去旅行','一周点评','店主推荐']
			}
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
</style>