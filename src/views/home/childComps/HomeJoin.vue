<template>
	<div class="home-join">
		<div class="tit1">小鸟联盟</div>
		<p class="tit2">身在四海，如在家</p>
		<div class="mask"></div>
	</div>
</template>

<script>
	export default {
		name:'HomeJoin'
	}
</script>

<style lang="less" scoped>
	.home-join{
		border-top:4px solid #3dc7a2;
		padding-top:220px;
		position:relative;
		background:url('~assets/img/home/indexBg3.jpg') no-repeat center;
		background-size:cover;
		color:#fff;
		text-align:center;
		.tit1{
			position:absolute;
			top:20px;
			width:100%;
			font-size:16px;
			z-index:2;
		}
		.tit2{
			position:absolute;
			top:45px;
			width:100%;
			font-size:13px;
			z-index:2;
		}
		.mask{
			position:absolute;
			top:0;
			right:0;
			bottom:0;
			left:0;
			background:rgba(0,0,0,.3);
		}
	}
</style>