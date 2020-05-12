<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="包含标题，内容和操作。"
  >
    <boss-card class="box-card">
      <div slot="header" class="card_header">
        <span style="flex:1">卡片名称</span>
        <boss-button type="text">操作按钮</boss-button>
      </div>
      <div v-for="o in 4" :key="o">{{'列表内容 ' + o }}</div>
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
.card_header {
  display: flex;
  align-items: center;
}

.box-card {
  width: 480px;
}
</style>