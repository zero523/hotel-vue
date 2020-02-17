<template>
	<div class="index-head">
		<div class="cloudafter"></div>
	</div>
</template>

<script>
	export default {
		name:'IndexHead',
	}
</script>

<style lang="less" scoped>
	.index-head{
		padding-top:60px;
		background:url('~assets/img/home/logoBg.png') no-repeat center;
		background-size:cover;
		position:relative;
		.cloudafter{
			width:100%;
			position:absolute;
			left:0;
			bottom:0;
			margin-left:0;
			height:50px;
			overflow:hidden;
			&:before,&after{
				content:'';
				position:absolute;
				left:0;
				bottom:0;
				width:400%;
				heigth:100%;
				background-repeat:repeat-x;
				background-position:0 bottom;
			}
			&:before{
				background-image:url('~assets/home/cloudbefore.png');
				background-size:50% 42px;
				-webkit-animation:cloudmove 12s linear infinite;
				-moz-animation:cloudmove 12s linear infinite;
				animation:cloudmove 12s linear infinite;
			}
			&:after{
				background-image:url('~assets/home/cloudafter.png');
				background-size:50% 49px;
				-webkit-animation:cloudmove 12s linear infinite;
				-moz-animation:cloudmove 12s linear infinite;
				animation:cloudmove 12s linear infinite;
			}
		}
	}
</style>