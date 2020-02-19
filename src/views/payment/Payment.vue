<template>
	<div class="payment">
		<scroll class="content">
			<div class="infor">
				<div class="head">酒店名称名称-豪华双人间</div>
				<div class="form-wrap">
					<div class="item">
						<div class="item-l">
							<img src="~assets/img/hotel/date.png" alt="">
							<span>服务时间</span>
						</div>
						<div class="item-r">
							2018-02-20 至 2018-02-23
						</div>
					</div>
					<div class="item">
						<div class="item-l">
							<img src="~assets/img/hotel/date.png" alt="">
							<span>到店时间</span>
						</div>
						<div class="item-r">
							<input type="date" placeholder="请选择到店时间">	
						</div>
					</div>
					<div class="item">
						<div class="item-l">
							<img src="~assets/img/hotel/date.png" alt="">
							<span>房费</span>
						</div>
						<div class="item-r">
							￥215
						</div>
					</div>
					<div class="line"></div>
					<div class="item">
						<div class="item-l">
							<span>房间数量</span>
						</div>
						<div class="item-r">
							1间
						</div>
					</div>
					<div class="item">
						<div class="item-l">
							<span>房间原件</span>
						</div>
						<div class="item-r">
							215元
						</div>
					</div><div class="item">
						<div class="item-l">
							<span>您共需支付</span>
						</div>
						<div class="item-r">
							215元
						</div>
					</div>
					<div class="reserve-btn" @click="ToPay">确认支付</div>
					<div class="tips">
						<span>温馨提示：</span>
						<div>
                1、订单成功后将收到确认短信，如有疑问请联系小鸟客服；<br> 2、订单因自身原因或其他非因法定原因要求变更或取消，将扣收全额预付款，如因酒店或平台原因订单无法确认，房费全额退还；
                <br> 3、本酒店目前不接待外宾，入住人须持本人有效大陆身份证，凭订单确认短信入住；
                <br> 4、发票由酒店前台提供，赠送积分消费部分不提供发票。
            </div>
					</div>
				</div>
			</div>
		</scroll>
	</div>
</template>

<script>
	import Scroll from 'components/scroll/Scroll'
	export default {
		name:'Payment'
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
		z-index:11;
		.infor{
			padding:15px;
			.head{
				font-size:15px;
				padding-bottom:15px;
				font-weight:bold;
				text-align:center;
				border-bottom:1px solid #eee;
			}
			.form-wrap{
				padding:10px 0;
				.item{
					border:0;
					padding:6px 0;
					input{
						font-size:12px;
					}
				}
				.line{
					border-bottom:1px solid #eee;
					margin:15px 0;
				}
				.tips{
					margin-top: 40px;
					font-size:15px;
					div{
						margin-top:10px;
						line-height:24px;
						font-size:14px;
					}
				}
			}
		}
	}
</style>