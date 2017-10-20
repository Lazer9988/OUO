<template>
	<div class="contain">
		<couponCard></couponCard>
		<washIndex></washIndex>
	</div>
</template>

<script>
  import couponCard from './card/couponCard'
  import washIndex from './washIndex/washIndex'
  
  export default {
    name: 'Home',
    components: {
      couponCard,
      washIndex
    }
  }
</script>

<style lang="less">
	.contain{
		padding: 0.5rem;
		background: bisque;
	}
</style>