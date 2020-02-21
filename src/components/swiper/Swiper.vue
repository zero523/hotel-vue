<template>
	<swiper class="my-swiper" ref="mySwiper" :not-next-tick="notNextTick" :option="swiperOption">
		<swiper-slide class="swiper-slide" v-for="item in banners">
			<img :src="item.img" alt="">
		</swiper-slide> 
		<!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name:'MySwiper',
		components: {
	    swiper,
	    swiperSlide
	  },
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			},
			notNextTick:{
				type:Boolean,
				default:true
			},
			swiperOption:{
				type:Object,
				default(){
					return {
	          // swiper options 所有的配置同swiper官方api配置
	          autoplay: 3000,
	          direction: 'vertical',
	          grabCursor: true,
	          setWrapperSize: true,
	          autoHeight: true,
	          pagination: {
	          	el:'.swiper-pagination',
	          	clickable:true
	          }
	        }
				}
			}
		},
		computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created(){
    	 console.log(this.banners)
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
     
      // this.swiper.slideTo(3, 1000, false)
    }
	}
</script>

<style lang="less" scoped>
	.swiper-slide img{
		width:100%;
		height:200px;
	}
</style>