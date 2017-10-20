<template>
	<div id="couponCard">
		<div class="box" v-bind:style="{background: 'url('+ ordinaryCard +') 100%/100% no-repeat'}">
			<div class="topBox">
				<div class="cardType">
					<span>可用余额</span>
					<span>普通卡</span>
				</div>
				<div class="cardAmount">
					<span>￥</span>
					<span style="font-size: 28px;" class="text-gradient ">80</span>
					<span> / 无折扣</span>
				</div>
			</div>
			<div class="bottomBox">
				<div class="cardNumber">
					8207 0918
				</div>
				<div class="cardMessage">
					<span>升级尊享卡，享受全年洗衣8.8折优惠</span>
					<span> > </span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'couponCard',
    data () {
      return {
        ordinaryCard: '../../../static/image/temp.jpg'
      }
    },
    created: function () {
      console.log('11')
    }
  }
</script>

<style lang="less">
	#couponCard{
		.text-gradient {
		  display: inline-block;
		  font-family: "microsoft yahei";
		  background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(197, 135, 2, 1)), to(rgba(197, 135, 2, 0.3)));
		  -webkit-background-clip: text;
		  -webkit-text-fill-color: transparent;
		};
		.box{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height:3rem;
			padding: 12px;
			border-radius: 8px;
			border: 1px solid #999;
			.topBox{
				background: beige;
				.cardType{
					display: flex;
					justify-content: space-between;
				}
			}
			.bottomBox{
				background: beige;
				.cardMessage{
					display: flex;
					justify-content: space-between;
					padding: 6px;
					border-radius: 4px;
					border:1px solid #999;
				}
			}
		}
	}
</style>