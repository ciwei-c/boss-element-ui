<template>
  <div class="boss-ui-demo__sample">
    <h3 class="boss-ui-demo__sample-title" :id="panelId">{{title}}</h3>
    <p class="boss-ui-demo__sample-desc" :id="panelId">{{desc}}</p>
    <div class="boss-ui-demo__sample-panel">
      <div class="boss-ui-demo__sample-panel-display">
        <slot />
      </div>
      <div
        class="boss-ui-demo__sample-panel-code"
        v-if="visibleCodeRender"
        :style="{height:visibleCode?`${codeHeight}px`:0,opacity:visibleCode ? 1:0}"
      >
        <pre v-highlightjs="code"><code class="html"></code></pre>
      </div>
      <div class="boss-ui-demo__sample-panel-control" @click="visibleCode = !visibleCode" :style="{
        position:visibleCode?'sticky':'',
        bottom:0
      }">
        <div class="boss-ui-demo__sample-panel-control-desc" v-html="codeDesc"></div>
        <div style="display:flex;align-items:center">
          <i
            :class="{
          'boss-icon-caret-bottom':true,
          'boss-ui-demo__sample-panel-control--active':visibleCode
        }"
          ></i>
          <div class="boss-ui-demo__sample-panel-control-text">{{visibleCode?'隐藏':'查看'}}代码</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    panelId: String,
    desc: String,
    code: String,
    codeDesc: String
  },
  data() {
    return {
      visibleCode: false,
      visibleCodeRender: false,
      codeHeight: 0
    };
  },
  watch: {
    visibleCode(val) {
      if (val){
        this.visibleCodeRender = val
        this.$nextTick(()=>{
          this.codeHeight = this.$el.querySelector("code.hljs").offsetHeight;
        })
      } else {
        this.codeHeight = 0
        setTimeout(() => {
          this.visibleCodeRender = val
        }, 300);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.boss-ui-demo__sample {
  &-title {
    font-weight: 400;
    color: #1f2f3d;
    margin: 55px 0 20px;
    font-size: 22px;
  }
  &-desc {
    font-size: 14px;
    color: #5e6d82;
    padding-bottom: 10px;
  }
  &-panel {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
    &-display {
      padding: 24px;
    }
    &-code {
      transition: 0.3s;
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      overflow: hidden;
    }
    &-control {
      border-top: 1px solid #eaeefb;
      box-sizing: border-box;
      padding: 15px 20px;
      background-color: #f9fafc;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      position: relative;
      &:hover {
        color: #409eff;
        .boss-ui-demo__sample-panel-control-text {
          width: 60px;
          opacity: 1;
        }
      }
      > .boss-icon-caret-bottom {
        line-height: 44px;
        transition: 0.3s;
      }
      &-text {
        transition: 0.3s;
        width: 0;
        opacity: 0;
        margin-left: 10px;
        word-break: keep-all;
        overflow: hidden;
      }
      &--active {
        transform: rotate(180deg);
      }
      &-desc {
        width: calc(100% - 100px);
        text-align: left;
        color: #5e6d82;
        line-height: 1.8;
      }
    }
  }
}
</style>