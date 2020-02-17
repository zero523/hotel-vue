<template>
  <div id="app">
		<router-view></router-view>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar'
  export default {
    name: 'App',
    components:{
    	TabBar
    },
    motheds:{
    }
  }
</script>

<style lang="less" scoped>
	@import '~assets/css/normalize.css';
	@import '~assets/css/base.less';

	
</style>
