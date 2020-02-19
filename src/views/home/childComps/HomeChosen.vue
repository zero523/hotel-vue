<template>
	<div class="chosen-list">
		<div class="item">
			<img class="img" src="~assets/img/home/pro2.jpg" alt="">
			<p class="name">酒店名称</p>
			<p class="room">酒店房型</p>
			<p class="date">2019-03-04</p>
		</div>
		<div class="item">
			<img class="img" src="~assets/img/home/pro2.jpg" alt="">
			<p class="name">酒店名称</p>
			<p class="room">酒店房型</p>
			<p class="date">2019-03-04</p>
		</div>
		<div class="item">
			<img class="img" src="~assets/img/home/pro2.jpg" alt="">
			<p class="name">酒店名称</p>
			<p class="room">酒店房型</p>
			<p class="date">2019-03-04</p>
		</div>
		<div class="item">
			<img class="img" src="~assets/img/home/pro2.jpg" alt="">
			<p class="name">酒店名称</p>
			<p class="room">酒店房型</p>
			<p class="date">2019-03-04</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeChosen',
	}
</script>

<style lang="less" scoped>
	.chosen-list{
		display:flex;
		flex-wrap:wrap;
		justify-content:space-around;
		padding:2px 5px;
		background:#fff;
		.item{
			width:48%;
			overflow:hidden;
			margin-bottom:20px;
			.img{
				width:100%;
				border-radius:5px;
			}
			p{
				margin:5px 0;
				font-size:12px;
				&.date{
					color:#999;
				}
			}
		}
	}


</style>