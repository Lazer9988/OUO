<template>
	<div id="washPerCenter">
		<div class="box">
			<div class="square">
				<div class="item">
					<div class="btn" v-on:click="showDialog('recharge')">
						<div class="icon">
							<img src="../../../static/image/logo.png" alt="" />
						</div>
						<div class="txt">
							<span style="font-weight: bold;">充值</span><br />
							<span style="font-size:12px;color:#999;">充50送30</span><br />
							<span style="font-size:12px;color:#999;">充50送30</span>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="btn" v-on:click="showDialog('washRecord')">
						<div class="icon">
							<img src="../../../static/image/logo.png" alt="" />
						</div>
						<div class="txt">
							<span style="font-weight: bold;">洗衣记录</span><br />
							<span style="font-size:12px;color:#999;">本月洗衣3次</span><br />
							<span style="font-size:12px;color:#999;">距离上次洗衣8天</span>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="btn" v-on:click="showDialog('coupond')">
						<div class="icon">
							<img src="../../../static/image/logo.png" alt="" />
						</div>
						<div class="txt">
							<span style="font-weight: bold;">优惠券</span><br />
							<span style="font-size:12px;color:#999;">您有3张优惠券</span><br />
							<span style="font-size:12px;color:#999;">2张即将过期</span>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="btn" v-on:click="showDialog('bindWash')">
						<div class="icon">
							<img src="../../../static/image/logo.png" alt="" />
						</div>
						<div class="txt">
							<span style="font-weight: bold;">绑定洗衣机</span><br />
							<span style="font-size:12px;color:#999;">1301号洗衣机</span><br />
							<span style="font-size:12px;color:#999;">点击重新绑定</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!--<div class="dialogBox" v-if="isShowDialog">
			<div class="dialogBg" v-on:click="hideDialog"></div>
			<div class="content">
				我去饿饿哇
			</div>
		</div>-->
		<!--充值中心-->
		<dialogComponent ref="recharge" @close="hideDialog('recharge')" height="300px" duration="0.3s">
			<span slot="title">充值</span>
			<div slot="mainContent" style="background:red;">
				sdadsad
			</div>
		</dialogComponent>
		
		<!--洗衣记录-->
		<dialogComponent ref="washRecord" @close="hideDialog('washRecord')" height="10rem" duration="0.3s">
			<span slot="title">洗衣记录</span>
			<div slot="mainContent" style="background:#fff;" v-for="i in 10">
				<washRecordItem></washRecordItem>
			</div>
			<!--<div slot="mainContent" style="height:100%;display: flex;flex-direction:column;justify-content: center;align-items: center;">
				<img src="../../../static/image/logo.png" />
				<p>您还没有洗过衣服，快去试一下吧</p>
			</div>-->
		</dialogComponent>
		
		<!--优惠券-->
		<dialogComponent ref="coupond" @close="hideDialog('coupond')" height="300px" duration="0.5s">
			<span slot="title">优惠券</span>
		</dialogComponent>
		
		<!--绑定洗衣机-->
		<dialogComponent ref="bindWash" @close="hideDialog('bindWash')" height="300px" duration="0.5s">
			<span slot="title">绑定洗衣机</span>
			<div slot="mainContent" class="bindWashContent">
				<div class="menuContain">
					<button>ads</button>
					<button>ads</button>
					<button>ads</button>
				</div>
				<div class="btnContain">
					<button>确认</button>
					<button>扫码</button>
				</div>
			</div>
		</dialogComponent>
	</div>
</template>

<script>
  import dialogComponent from '../common/dialogComponent'
  import washRecordItem from './sub/washRecordItem'
  export default {
    name: 'washPerCenter',
    components: {
      dialogComponent,
      washRecordItem
    },
    data () {
      return {
        aaa: false
      }
    },
    methods: {
      showDialog: function (dialogRef) {
        this.$refs[dialogRef].showContent()
      },
      hideDialog: function (dialogRef) {
        this.$refs[dialogRef].hideContent()
      }
    }
  }
</script>

<style lang="less">
	#washPerCenter{
		.box{
			/*background: red;*/
			display: flex;
			justify-content: center;
			.square{
				/*background: brown;*/
				display: flex;
				flex-flow: wrap;
				width:6rem;
				height:6rem;
				.item{
					display: flex;
					justify-content: center;
				  align-items: center;
					width:50%;
					height:50%;
					outline: 1px solid #999;
					.btn{
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width:2rem;
						height:2rem;
						/*background: red;*/
						.icon{
							width:1rem;
							height:1rem;
							/*background: red;*/
							img{
								width:100%;
								height:100%;
							}
						}
						.txt{
							text-align: center;
						}
					}
				}
			}
		}
		.bindWashContent{
			height:100%;
			background: red;
			.menuContain{
				display: flex;
				flex-direction: column;
			}
			.btnContain{
				display:flex;
			}
		}
		/*.dialogBox{
			position: fixed;
			top:0px;
			left:0px;
			width:100%;
			height:100%;
			.dialogBg{
				width:100%;
				height:100%;
				background: gray;
				opacity: 0.3;
			}
			.content{
				position: absolute;
				bottom:0px;
				left:0px;
				width:100%;
				height:200px;
				background: #f0f0f0;
			}
		}*/
	}
</style>