<template>
		<!--<transition
		    name="custom-classes-transition"
		    enter-active-class="animated slideInUp"
		    leave-active-class="animated slideOutDown"
		  >-->
		<div class="dialogBox" v-show="show">
			<div class="dialogBg" v-on:click="$emit('close')" ></div>
			<transition
		    name="custom-classes-transition"
		    enter-active-class="animated slideInUp"
		    leave-active-class="animated slideOutDown"
		  >
			<div class="contentBox" v-bind:style="styleObject" v-if="show">
				<div class="topTitle">
					<slot name="title">标题</slot>
					<span v-on:click="$emit('close')"> X </span>
				</div>
				<div class="mainContent">
					<slot name="mainContent"></slot>
				</div>
			</div>
			</transition>
		</div>
	<!--</transition>-->
</template>

<script>
  export default {
    name: 'dialog',
    props: {
      height: String,
      duration: String
    },
    data () {
      return {
        show: false,
        styleObject: {
          'height': this.height,
          'animation-duration': this.duration,
          '-webkit-animation-duration': this.duration
        }
      }
    },
    methods: {
      showContent: function () {
        this.show = true
      },
      hideContent: function () {
        this.show = false
      }
    }
  }
</script>

<style lang="less">
	.dialogBox{
		position: fixed;
		top:0px;
		left:0px;
		width:100%;
		height:100%;
		.dialogBg{
			width:100%;
			height:100%;
			background: black;
			opacity: 0.2;
		}
		.contentBox{
			/*animation-duration: 0.5s;*/
			position: absolute;
			bottom:0px;
			left:0px;
			width:calc(~"100% - 32px");
			/*height:0px;*/
			padding:10px 16px;
			background: #fff;
			.topTitle{
				display: flex;
				justify-content: space-between;
				height:24px;
				line-height:24px;
				width:100%;
				border-bottom:1px solid #eee;
			}
			.mainContent{
				width:100%;
				height:calc(~"100% - 32px");
				/*background: bisque;*/
				overflow-x: scroll;
			}
		}
	}
</style>