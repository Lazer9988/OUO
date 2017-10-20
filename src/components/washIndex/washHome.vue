<template>
	<div id="washHome">
		<div class="box">
			<div class="washTitle">
				<div class="washIcon">
					<img src="../../../static/image/logo.png" alt="洗衣机" />
				</div>
				<div class="washInfo">
					<div class="washNumber">
						<span style="font-size:16px;">
							1301号洗衣机
							<span>( 点击切换 )</span>
						</span>
						<span style="color:#666;">空闲中</span>
					</div>
					<div class="washAddress">
						<span style="font-size: 12px;color:#999;">杭州电子科技大学10号寝室南楼324</span>
					</div>
				</div>
			</div>
			<div class="washType">
				<div class="washing" v-if="!isWash">
					<img src="../../../static/image/logo.png" alt=""/>
					<span style="font-size: 16px;color:#999;">剩余时间 12 : 20</span>
				</div>
				<div class="typeSquare" v-if="isWash">
					<div class="typeItem">
						<div class="itemBtn">
							<div class="itemIcon">
								<img src="../../../static/image/logo.png" alt="单独脱水" />
							</div>
							<div class="itemTxt">单独脱水￥1</div>
						</div>
					</div>
					<div class="typeItem">
						<div class="itemBtn">
							<div class="itemIcon">
								<img src="../../../static/image/logo.png" alt="单独脱水" />
							</div>
							<div class="itemTxt">快速洗涤￥2</div>
						</div>
					</div>
					<div class="typeItem">
						<div class="itemBtn">
							<div class="itemIcon">
								<img src="../../../static/image/logo.png" alt="单独脱水" />
							</div>
							<div class="itemTxt">标准洗涤￥3</div>
						</div>
					</div>
					<div class="typeItem">
						<div class="itemBtn">
							<div class="itemIcon">
								<img src="../../../static/image/logo.png" alt="单独脱水" />
							</div>
							<div class="itemTxt">大件物品￥4</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'washHome',
    data () {
      return {
        isWash: true
      }
    }
  }
</script>

<style lang="less">
	#washHome{
		.box{
			.washTitle{
				display: flex;
				/*background:red;*/
				.washIcon{
					width:44px;
					img{
						width:100%;
						height:100%;
					}
				}
				.washInfo{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					padding-left: 12px;
					width:100%;
					.washNumber{
						display: flex;
						justify-content: space-between;
					}
				}
			}
			.washType{
				/*background: red;*/
				display: flex;
				justify-content: center;
				.typeSquare{
					/*background: brown;*/
					display: flex;
					flex-flow: wrap;
					justify-content: space-around;
					align-items:center;
					width: 6rem;
					height: 6rem;
					.typeItem{
						display: flex;
						justify-content: center;
						align-items: center;
						width:50%;
						height:50%;
						outline:1px solid #999;
						.itemBtn{
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							width:2rem;
							height:2rem;
							/*border:1px solid #999;*/
							.itemIcon{
								width:1rem;
								height:1rem;
								/*background: red;*/
								img{
									width:100%;
									height:100%;
								}
							}
						}
					}
				}
				.washing{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width:6rem;
					height:6rem;
					border:1px solid #999;
				}
			}
		}
	}
</style>