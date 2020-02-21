<template>
	<div class="reserve">
		<scroll class="content">	
			<my-swiper :banners="banners"></my-swiper>
			<div class="desc">
				<div class="name">豪华双人间</div>
				<div class="eqiup">
					<span>无早餐</span>
					<span>30m²</span>
					<span>1.2*1.2 1.2*1.2床</span>
					<div class="more-btn">设施详情</div>
				</div>
			</div>
			<div class="form-wrap">
				<div class="item">
					<div class="item-l">
						<img src="~assets/img/hotel/amount.png" alt="">
						<span>房间数量</span>
					</div>
					<div class="item-r">
						<input type="number" value="1"> <span class="unit">间</span>
					</div>
				</div>
				<div class="item">
					<div class="item-l">
						<img src="~assets/img/hotel/date.png" alt="">
						<span>入住时间</span>
					</div>
					<div class="item-r">
						<input type="date">
					</div>
				</div>
				<div class="item">
					<div class="item-l">
						<img src="~assets/img/hotel/user01.png" alt="">
						<span>联系人姓名</span>
					</div>
					<div class="item-r">
						<input type="text" placeholder="请输入您的姓名">
					</div>
				</div>
				<div class="item">
					<div class="item-l">
						<img src="~assets/img/hotel/phone.png" alt="">
						<span>手机号码</span>
					</div>
					<div class="item-r">
						<input type="number" placeholder="请输入您的电话号码">
					</div>
				</div>
				<div class="item">
					<div class="item-l">
						<img src="~assets/img/hotel/houster.png" alt="">
						<span>备注</span>
					</div>
					<div class="item-r">
						<textarea placeholder="请输入您的备注"></textarea>
					</div>
				</div>
				<div class="item">
					<div class="item-l">
						<img src="~assets/img/hotel/money.png" alt="">
						<span>总额</span>
					</div>
					<div class="item-r">
						<span>￥215</span>
					</div>
				</div>
				<div class="reserve-btn" @click="ToPay">立即预定</div>
			</div>
		</scroll>
	</div>
</template>

<script>
	import MySwiper from 'components/swiper/Swiper'
	import Scroll from 'components/scroll/Scroll'

	import {getHomeBanner} from 'network/home'
	export default{
		name:'Reserve',
		components:{
			MySwiper,
			Scroll,
		},
		data(){
			return{
				banners:[],
			}
		},
		methods:{
			ToPay(){
				this.$router.push('/payment')
			}
		},
		mounted(){
			getHomeBanner().then(res =>{
				this.banners=res.data
			})
		}
	}
</script>

<style lang="less" scoped>
	@import '~assets/css/base.less';
	.content{
		position:absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background:#fff;
		z-index: 11;
		.desc{
			padding:14px 15px;
			border-bottom: 1px solid #f7f7f7;
			.name{
				font-size:15px;
				font-weight: bold;
				line-height: 25px;
			}
			.eqiup{
				padding:10px 0 0;
				span{
					margin-right: 6px;
					font-size:13px;
					color:#666;
				}
				.more-btn{
					float:right;
					font-size:15px;
					color:@color-high-text;
				}
			}
		}
	}
</style>