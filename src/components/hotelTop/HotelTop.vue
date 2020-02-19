<template>
	<div class="hotel-top">
		<div class="img">
			<img class="pic" src="~assets/img/hotel/hotelimg1.jpg" alt="">

			<div class="collet">
				<img src="~assets/img/hotel/gzhu.png" alt="">
			</div>
		</div>
		<div class="name">酒店名称名称名称</div>
		
		<div class="tips" v-if="isShow">
			<div class="number">
				<i class="icon"></i>
				<span>5张</span>
			</div>
			<div class="tel">
				<i class="icon"></i>
				<b>联系商家</b>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'HotelTop',
		props:{
			isShow:{
				type:Boolean,
				dafault:false,
			}
		}
	}
</script>

<style lang="less" scoped>
	.hotel-top{
		height:200px;
		background:#fff;
		position:relative;
		.img{
			position:relative;
			width:100%;
			height:160px;
			.pic{
				width:100%;
				height:100%;
			}
			.collet{
				position:absolute;
				right:20px;
				top:20px;
				width:26px;
				height:26px;
				line-height:26px;
				text-align:center;
				border-radius:50%;
				background:rgba(0,0,0,.6);
				img{
					width:13px;
					height:12px;
				}
			}
		}
		.name{
			line-height: 40px;
			padding:0 10px;
			font-size:16px;
			font-weight:bold;
		}
		.tips{
			.number{
				position:absolute;
				left:15px;
				bottom:55px;
				color:#fff;
				.icon{
					display:inline-block;
					width:18px;
					height:15px;
					background: url('~assets/img/hotel/pck.png') no-repeat center;
					background-size:100%;
					vertical-align:-1px;
					margin-right:5px;
				}
			}
			.tel{
				position:absolute;
				right:20px;
				bottom:10px;
				.icon{
					display:inline-block;
					width:15px;
					height:15px;
					vertical-align:-1px;
					background: url('~assets/img/hotel/phonebig.png') no-repeat center;
					background-size:100%;
					margin-right: 5px;
				}
			}
		}
	}
</style>