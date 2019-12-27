<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="适用广泛的基础单选"
  >
    <boss-row>
      <boss-col :offset="4">
        <boss-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
          <boss-button>上边</boss-button>
        </boss-tooltip>
      </boss-col>
    </boss-row>
    <boss-row>
      <boss-col :span="4" >
        <boss-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
          <boss-button>左边</boss-button>
        </boss-tooltip>
      </boss-col>
      <boss-col :span="4" :offset="4">
        <boss-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
          <boss-button>右边</boss-button>
        </boss-tooltip>
      </boss-col>
    </boss-row>
    <boss-row>
      <boss-col :offset="4">
        <boss-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
          <boss-button>下边</boss-button>
        </boss-tooltip>
      </boss-col>
    </boss-row>
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