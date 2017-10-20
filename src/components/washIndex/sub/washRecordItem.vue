<template>
	<div class="washRecordItem">
		<div class="title" v-on:click="show = !show">
			<span>2017.10.16 12:12 ￥4</span>
			<span> < </span>
		</div>
		<transition
	    name="custom-classes-transition"
	    enter-active-class="animated fadeIn"
	    leave-active-class="animated fadeOut"
	  >
			<div class="detailBox" v-if="show">
				<div class="washInfo">
					<div class="washIcon">
						<img src="../../../../static/image/logo.png" alt="" />
					</div>
					<div class="washDetail">
						<div class="washDetailTop">
							<span>1301号洗衣机</span>
							<span>已完成</span>
						</div>
						<div class="washDetailBottom">
							<span style="font-size:12px;color:#999;">杭州电子科技大学</span>
						</div>
					</div>
				</div>
				<div class="washRunDes">
					<span>启动方式： 远程启动</span>
					<span>未使用优惠券</span>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
  export default {
    name: 'washRecordItem',
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style lang="less">
	.washRecordItem{
		padding: 8px;
		margin-top: 12px;
		border:1px solid #eee;
		border-radius:4px;
		.title{
			display: flex;
			justify-content: space-between;
		}
		.detailBox{
			animation-duration: 0.3s;
			display:flex;
			flex-direction: column;
			.washInfo{
				display:flex;
				padding-top:5px;
				.washIcon{
					width:36px;
					height:36px;
					img{
						width:36px;
						height:100%;
					}
				}
				.washDetail{
					/*background: red;*/
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					width:100%;
					padding-left: 5px;
					.washDetailTop{
						display: flex;
						justify-content: space-between;
					}
				}
			}
			.washRunDes{
				display: flex;
				justify-content: space-between;
				font-size:12px;
				color:#999;
				padding-top: 5px;
			}
		}
	}
</style>