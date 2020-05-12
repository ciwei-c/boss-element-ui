<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="可对阴影的显示进行配置。"
  >
    <boss-row :gutter="12">
      <boss-col :span="8">
        <boss-card shadow="always">总是显示</boss-card>
      </boss-col>
      <boss-col :span="8">
        <boss-card shadow="hover">鼠标悬浮时显示</boss-card>
      </boss-col>
      <boss-col :span="8">
        <boss-card shadow="never">从不显示</boss-card>
      </boss-col>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>