<template>
	<div class="home-title">
		<div class="title1">
			< {{title[0]}} >
		</div>
		<div class="title2">
			<div class="text">{{title[1]}}</div>
			<div class="line"></div>
		</div>
		<div class="title3">
			"{{title[2]}}" <span>{{title[3]}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'HomeTitle',
		props:{
			title:{
				type:Array,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '~assets/css/base.less';

	.home-title{
		background: #fff;
		text-align:center;
		color:@color-text;
		padding:20px 0;
		.title1{
			font-size: 20px;
		}
		.title2{
			position: relative;
			line-height: 30px;
			height:30px;
			.text{
				display:inline-block;
				font-size: 12px;
				position: relative;
				padding: 0 3px;
				z-index:2;
				background:#fff;
			}
			.line{
				position: absolute;
				top:50%;
				left:0;
				right:0;
				border-top: 1px solid #444;
			}
		}
		.title3{
			font-size: 10px;
			span{
				color:@color-high-text;
			}
		}
	}
</style>