<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="基础的、简洁的标签页。"
    :codeDesc="codeDesc"
  >
    <boss-tabs v-model="activeName">
      <boss-tab-pane label="用户管理" name="first">用户管理</boss-tab-pane>
      <boss-tab-pane label="配置管理" name="second">配置管理</boss-tab-pane>
      <boss-tab-pane label="角色管理" name="third">角色管理</boss-tab-pane>
      <boss-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</boss-tab-pane>
    </boss-tabs>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      activeName: "second"
    };
  }
};
</script>
