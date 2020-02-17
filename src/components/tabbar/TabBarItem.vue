<template>
	<div class="tabbar-item" @click="itemClick()">
		<slot v-if="!isActive" name="item-img"></slot>
		<slot v-else name="item-img-active"></slot>
	</div>
</template>

<script>
	export default{
		name:'TabBarItem',
		props:{
			path:{
				type:String,
				default:''
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			}
		},
		methods:{
			itemClick(){
				if(this.$route.path != this.path){
					this.$router.replace(this.path)
					console.log(this.$route.path.indexOf(this.path))
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.tabbar-item{
		flex:1;
		img{
			display:block;
			margin:7px auto;
			width:30px;
			height:30px;
		}
	}
</style>