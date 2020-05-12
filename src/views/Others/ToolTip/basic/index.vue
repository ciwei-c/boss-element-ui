<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="适用广泛的基础单选"
  >
    <div class="box">
      <div class="top">
        <boss-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
          <boss-button>上左</boss-button>
        </boss-tooltip>
        <boss-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
          <boss-button>上边</boss-button>
        </boss-tooltip>
        <boss-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
          <boss-button>上右</boss-button>
        </boss-tooltip>
      </div>
      <div class="left">
        <boss-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
          <boss-button>左上</boss-button>
        </boss-tooltip>
        <boss-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
          <boss-button>左边</boss-button>
        </boss-tooltip>
        <boss-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
          <boss-button>左下</boss-button>
        </boss-tooltip>
      </div>

      <div class="right">
        <boss-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
          <boss-button>右上</boss-button>
        </boss-tooltip>
        <boss-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
          <boss-button>右边</boss-button>
        </boss-tooltip>
        <boss-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
          <boss-button>右下</boss-button>
        </boss-tooltip>
      </div>
      <div class="bottom">
        <boss-tooltip
          class="item"
          effect="dark"
          content="Bottom Left 提示文字"
          placement="bottom-start"
        >
          <boss-button>下左</boss-button>
        </boss-tooltip>
        <boss-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
          <boss-button>下边</boss-button>
        </boss-tooltip>
        <boss-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
          <boss-button>下右</boss-button>
        </boss-tooltip>
      </div>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.box {
  width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
}
</style>