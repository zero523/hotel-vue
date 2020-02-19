<template>
	<div id="profile">
		<div class="head">
			<div class="bg-img"></div>
			<div class="user-wrap">
				<img src="~assets/img/profile/userimg.png" alt="">
				<p>用户姓名</p>
			</div>
			<div class="set"></div>
		</div>
		<ul class="menu">
			<li class="item">
				<img class="icon" src="~assets/img/profile/info.png" alt="">
				<div class="txt">
					我的资料
					<i class="icon"></i>
				</div>
			</li>
			<li class="item">
				<img class="icon" src="~assets/img/profile/myorder.png" alt="">
				<div class="txt">
					我的订单
					<i class="icon"></i>
				</div>
			</li>
			<li class="item">
				<img class="icon" src="~assets/img/profile/myContent.png" alt="">
				<div class="txt">
					我的点评
					<i class="icon"></i>
				</div>
			</li>
			<li class="item">
				<img class="icon" src="~assets/img/profile/heart.png" alt="">
				<div class="txt">
					我的收藏
					<i class="icon"></i>
				</div>
			</li>
			<li class="item">
				<img class="icon" src="~assets/img/profile/message.png" alt="">
				<div class="txt">
					我的消息
					<i class="icon"></i>
				</div>
			</li>

			<li class="item">
				<img class="icon" src="~assets/img/profile/housekeeper.png" alt="">
				<div class="txt">
					联系客服
					<i class="icon"></i>
				</div>
			</li>
			<li class="item">
				<img class="icon" src="~assets/img/profile/housekeeper.png" alt="">
				<div class="txt">
					关于我们
					<i class="icon"></i>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Profile'
	}
</script>

<style lang="less" scoped="">
	@import '~assets/css/base.less';
	.head{
		padding-top:200px;
		position:relative;
		text-align:center;
		color:#fff;
		.bg-img{
			position:absolute;
			top:0;
			width:100%;
			height:100%;
			background:url('~assets/img/profile/orderImg.png') left center no-repeat;
			background-size: cover;
		}
		.user-wrap{
			position:absolute;
			top:50%;
			left:50%;
			transform:translate(-50%,-40%);
			img{
				width:100px;
				height:100px;
				border-radius:50%;
			}
			p{
				font-size:15px;
				margin:10px 0;
			}
		}
		.set{
			position:absolute;
			top:22px;
			right:22px;
			width:21px;
			height:21px;
			background:url('~assets/img/profile/set.png') no-repeat;
			background-size:100%;
		}
	}
	.menu{
		background: #fff;
		padding:20px;
		list-style:none;
		.item{
			padding:15px 0;
			display:flex;
			border-bottom:1px solid #eee;
			&:nth-last-child(1){
				border:0;
			}
			.icon{
				width:18px;
				height:18px;
			}
			.txt{
				padding-left: 10px;
				flex:1;
				.icon{
					.arrow-l-icon;
				}
			}
		}
	}
</style>