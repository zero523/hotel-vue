<template>
	<scroll class="content">	
		<div class="hotel-detail">
			<hotel-top :is-show="true"/>
			<div class="infor">
				<div class="comment">
					<p class="score"><span>4</span>分</p>
					<ul class="star-list">
	          <li class="all"></li>
	          <li class="all"></li>
	          <li class="all"></li>
	          <li class="all"></li>
	          <li class="off"></li>
		      </ul>
		      <p class="number">23条点评 <i class="icon"></i></p>
				</div>
				<div class="map">
					<img src="~assets/img/hotel/map.jpg" alt="">
					<div class="addr">
						<i class="icon"></i>
						<span>四川省成都市盛邦街19号</span>
					</div>
				</div>
			</div>
			<div class="intro">
				<div class="cont" :class="{'active':!isOpen}">早安，即生活在别处。用当下去体味彼岸的情趣。 这里从来不只是酒店，更多的是一种共同价值观的分享。当我们每天奔波，奋斗在这个城市里，偶尔平静下来时，总会想跟远方道一声，早安。 这里精心打造不同风格的房型，就是希望每一位房客都能感受到自己内心的理想国，也能在这找到自己热爱的生活方式，一种不同于其他酒店的体验。 成都早安云克精品艺术酒店位于高新区盛邦街与益州大道交界口，毗邻新会展中心，环球中心等商贸中心，距离会展中心地铁口只有5分钟步行，距离双流机场只有20分钟车程，距离天府广场和春熙路只有30分钟车程，出则繁华，入则静谧。早安云克酒店拥有豪华大床房，豪华机麻房，豪华双标房，豪华蜜月套房，豪华电影房及豪华行政复式套房等多种房型，总有您的理想国。 酒店周边景点：铁像寺水街-南广场，南孚梦幻岛、银湖体育公园、回澜塔、绿洲足球公园，极地海洋世界。交通：162、815A、815、805等；开车来的朋友直接导航腾讯和百度地图。美食：一品家餐厅、一福记餐厅、酒城故事、凤凰沱江鱼火锅、炭火烤鱼、码头故事、龙抄手、食无语餐厅、年舍餐厅、海味大排档、佩米咖啡、众记老牌川菜、台湾牛肉面等。
	        </div>
	      <div class="tips" @click="clickToggle">
	      	<div v-show="!isOpen">查看详情 <i class="icon down-icon"></i></div>
	      	<div v-show="isOpen">收起 <i class="icon up-icon"></i></div>
	      </div>
			</div>
			<hotel-room :room-list="roomList"/>
		</div>
	</scroll>	
</template>

<script>
	import HotelTop from 'components/hotelTop/HotelTop'
	import HotelRoom from 'components/hotelRoom/HotelRoom'
	import Scroll from 'components/scroll/Scroll'
	export default{
		name:'HotelDetail',
		components:{
			HotelTop,
			HotelRoom,
			Scroll,
		},
		data(){
			return{
				isOpen:false,
				roomList:[{
					id:'001',img:'~assets/img/hotel/roomimg1.jpg',name:'豪华双人间',price:'215'
				},{
					id:'001',img:'~assets/img/hotel/roomimg1.jpg',name:'豪华双人间',price:'215'
				},{
					id:'003',img:'~assets/img/hotel/roomimg1.jpg',name:'豪华双人间',price:'215'
				}]
			}
		},
		methods:{
			clickToggle(){
				this.isOpen=!this.isOpen
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '~assets/css/base.less';
	.content{
		position:fixed;
		top:0;
		bottom:44px;
	}
	.hotel-detail{
		background:#fff;
		.infor{
			position:relative;
			height:190px;
			border-top:1px solid #eee;
			border-bottom:1px solid #eee;
			.comment{
				position:absolute;
				top:0;
				left:0;
				width:100px;
				text-align:center;
				.score{
					font-size:14px;
					color:#f26a6a;
					margin:30% 0 10px;
					span{
						font-size:20px;
						margin-right:5px;
					}
				}
				.number{
					margin:10px 0;
					color:#666;
					font-size:14px;
					.icon{
						.arrow-l-icon;
						float:none;
						background-size:60%;
						vertical-align:-1px;
					}
				}
			}
			.map{
				position:absolute;
				top:0;
				left:101px;
				right:0;
				border-left:1px solid #eee;
				img{
					width:100%;
					height:150px;
				}
				.addr{
					line-height: 40px;
					padding-left: 10px;
					font-size:14px;
					.icon{
						.posit-icon;
						background-size:100%;
						vertical-align:-1px;
						margin-right: 5px;
					}
				}
			}
		}
		.intro{
			padding:20px;
			.cont{
				line-height: 22px;
				font-size:15px;
				color:#777;
			}
			.active{
				overflow:hidden;
				text-oveflow:ellipsis;
				display:-webkit-box;
				-webkit-line-clamp:3;
				-webkit-box-orient:vertical;
			}
			.tips{
				padding:15px 0 0;
				color:@color-high-text;
				text-align:center;
			}
		}
	}
</style>