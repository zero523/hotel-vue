<template>
	<div class="recommend-wrap">
		<div class="recommend-item">
			<div class="top">
				<img src="~assets/img/home/recommend1.jpg" alt="">
				<div class="desc">
					<span class="addr">广州市天河区中山大道西1138号合生骏景广场1222室</span>
					<span class="data">0</span>
				</div>
			</div>
			<div class="bott">
				<p>走在宁曼路拐角处安静的小巷里，</p>
				<p>我们看到了这几天要入住的白色小楼，</p>
				<p>老板已经在门口等我们了</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'HomeRecommend'
	}
</script>

<style lang="less" scoped>
	.recommend-wrap{
		background:#fff;
		padding:0 10px 20px;
		.recommend-item{
			border-bottom:1px solid #ddd;
			.top{
				position:relative;
				border-radius:8px;
				overflow:hidden;
				height:200px;
				img{
					width:100%;
					height:100%;
				}
				.desc{
					position:absolute;
					bottom:0;
					left:0;
					right:0;
					display:flex;
					justify-content:space-between;
					padding:10px 5px;
					background: rgba(256,256,256,.5);
					.addr{
						padding-left:20px;
						background:url('~assets/img/home/positionL.png') no-repeat 5px center;
						font-size:13px;
						background-size:10px 13px;
						width:80%;
						overflow:hidden;
						text-overflow:ellipsis;
						white-space:nowrap;
					}
					.data{
						padding:0 20px;
						font-size:9px;
						background:url('~assets/img/home/seen.png') no-repeat 3px center;
						background-size:13px 8px;
					}
				}
			}
			.bott{
				text-align:center;
				font-size:12px;
				line-height: 24px;
				padding:12px 0;
			}
		}
	}
</style>