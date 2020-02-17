<template>
	<div class="city-list">
		<div class="item">
			<img class="img" src="~assets/img/home/hotcity.jpg" alt="">
			<p class="addr">三亚市</p>
		</div>
		<div class="item">
			<img class="img" src="~assets/img/home/hotcity.jpg" alt="">
			<p class="addr">三亚市</p>
		</div>
		<div class="item">
			<img class="img" src="~assets/img/home/hotcity.jpg" alt="">
			<p class="addr">三亚市</p>
		</div>
		<div class="item">
			<img class="img" src="~assets/img/home/hotcity.jpg" alt="">
			<p class="addr">三亚市</p>
		</div>
		<div class="item">
			<img class="img" src="~assets/img/home/hotcity.jpg" alt="">
			<p class="addr">三亚市</p>
		</div>
		<div class="item">
			<img class="img" src="~assets/img/home/hotcity.jpg" alt="">
			<p class="addr">三亚市</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'IndexCity',
	}
</script>

<style lang="less" scoped>
	.city-list{
		display:flex;
		flex-wrap:wrap;
		justify-content:space-around;
		text-align:center;
		padding:2px 5px;
		background:#fff;
		.item{
			width:33%;
			overflow:hidden;
			margin-bottom:20px;
			.img{
				width:110px;
				height:110px;
				border-radius:50%;
			}
			p{
				margin:5px 0;
				font-size:12px;
			}
		}
	}

</style>