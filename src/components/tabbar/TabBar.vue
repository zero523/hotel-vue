<template>
	<div class="tabbar">
		<tab-bar-item path="/home">
			<img slot="item-img" src="~assets/img/tabbar/home.png" alt="">
			<img slot="item-img-active" src="~assets/img/tabbar/home-active.png" alt="">
		</tab-bar-item>
		<tab-bar-item path="/search">
			<img slot="item-img" src="~assets/img/tabbar/search.png" alt="">
			<img slot="item-img-active" src="~assets/img/tabbar/search-active.png" alt="">
		</tab-bar-item>
		<tab-bar-item path="/profile">
			<img slot="item-img" src="~assets/img/tabbar/user.png" alt="">
			<img slot="item-img-active" src="~assets/img/tabbar/user-active.png" alt="">
		</tab-bar-item>
	</div>
</template>

<script>
	import TabBarItem from './TabBarItem'
	export default{
		name:'TabBar',
		components:{
			TabBarItem
		}
	}
</script>

<style lang="less" scoped="">
	.tabbar{
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		display:flex;
		justify-content:center;
		height:44px;
		line-height:44px;
		text-align:center;
		box-shadow:0 -2px 3px rgba(100,100,100,.2);
		background:#fff;
		z-index:10;
	}
</style>