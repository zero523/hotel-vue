<template>
	<div class="hotel-list">
		<div class="item" @click="ToHotelDetail">
			<hotel-top/>
			<div class="desc1">
				<div class="score">
					<ul class="star-list">
	          <li class="all"></li>
	          <li class="all"></li>
	          <li class="all"></li>
					
	          <li class="all"></li>
	          <li class="off"></li>
		      </ul>
		      <span>评分 5分</span>
				</div>
				<div class="price"><span>￥<b>268</b></span>起</div>
			</div>
			<div class="desc2">
				<i class="icon"></i>
				<span>金牛区</span>
				<span>经济型</span>
			</div>
		</div>
		<div class="item" @click="ToHotelDetail">
			<hotel-top/>
			<div class="desc1">
				<div class="score">
					<ul class="star-list">
	          <li class="all"></li>
	          <li class="all"></li>
	          <li class="all"></li>
					
	          <li class="all"></li>
	          <li class="off"></li>
		      </ul>
		      <span>评分 5分</span>
				</div>
				<div class="price"><span>￥<b>268</b></span>起</div>
			</div>
			<div class="desc2">
				<i class="icon"></i>
				<span>金牛区</span>
				<span>经济型</span>
			</div>
		</div>
	</div>
</template>

<script>
	import HotelTop from 'components/hotelTop/HotelTop'
	export default {
		name:'HotelList',
		components:{
			HotelTop
		},
		methods:{
			ToHotelDetail(){
				this.$router.push('/hotelDetail')
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '~assets/css/base.less';
	.hotel-list{
		background: #fff;
		.item{
			padding-bottom: 10px;
			.desc1{
				padding:0 10px;
				overflow:hidden;
				.score{
					float:left;
					font-size:12px;
					
					span{
						display:inline-block;
						vertical-align:2px;
					}
				}
				.price{
					float:right;
					font-size:14px;
					span{
						color:#3ac8a3;
						font-size:12px;
						margin-right: 5px;
						b{
							font-size:16px;
						}
					}
				}
			}
			.desc2{
				padding:3px 10px;
				font-size:13px;
				.icon{
					.posit-icon;
				}
				span{
					margin-left:10px;
				}
			}
		}
	}
</style>