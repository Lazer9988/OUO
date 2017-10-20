<template>
	<div id="washIndex">
		<div class="box">
			<div class="nav">
				<div class="group">
					<router-link tag="span" to="/" exact>洗衣首页</router-link>
					<router-link tag="span" to="/washPerCenter" exact>个人中心</router-link>
				</div>
			</div>
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'washIndex'
	}
</script>

<style lang="less">
	#washIndex{
		.router-link-active {
		  color: #fff;
		  background:#999;
		}
		.box{
			background: beige;
			.nav{
				display: flex;
				justify-content: center;
				padding: 20px;
				.group{
					display: flex;
					justify-content: center;
					width:160px;
					height:24px;
					border:1px solid #909090;
					border-radius: 4px;
					span{
						width:80px;
						height:24px;
						line-height: 24px;
						text-align: center;
					}
				}
			}
		}
	}
</style>