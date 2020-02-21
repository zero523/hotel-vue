<template>
	<div class="room-list">
		<div class="item"
		v-for="(item,index) in roomList"
		:key="index"
		@click="ToReserve">
			<img src="~assets/img/hotel/roomimg1.jpg" alt="">
			<div class="desc">
				<div class="name">{{item.name}}</div>
				<div class="price">￥<span>{{item.price}}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'HotelRoom',
		props:{
			roomList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			ToReserve(){
				this.$router.push('/reserve');
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '~assets/css/base.less';
	.room-list{
		.item{
			img{
				width:100%;
				height:150px;
			}
			.desc{
				overflow:hidden;
				padding:15px 20px;
				.name{
					font-size:15px;
					font-weight:bold;
					float:left;
				}
				.price{
					float:right;
					color:@color-high-text;
					font-size:12px;
					span{
						font-size:18px;
					}
				}
			}
		}
	}
</style>