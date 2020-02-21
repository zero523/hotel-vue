<template>
	<div class="chosen-list">
		<div class="item"
		v-for="(item,index) in lists" :key="index"
		@click="ToHotelDetail(item.hid)">
			<img class="img" :src="item.img" alt="">
			<p class="name">{{item.name}}</p>
			<p class="room">{{item.room}}</p>
			<p class="date">{{item.date}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeChosen',
		props:{
			lists:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			ToHotelDetail(hid){
				this.$router.push('/hotelDetail/'+ hid)
			}
		}
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