<template>
	<div class="city-list">
		<div class="item"
		v-for="(item,index) in lists" :key="index"
		@click="ToHotelList(item.cid)">
			<img class="img" :src="item.img" alt="">
			<p class="addr">{{item.city}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeCity',
		props:{
			lists:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			ToHotelList(cid){
				this.$router.push('/hotelList/'+ cid)
			}
		}
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