<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="包含标题，内容和操作。"
  >
    <boss-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <boss-button style="float: right; padding: 3px 0" type="text">操作按钮</boss-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </boss-card>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>