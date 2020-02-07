<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="可移除的标签"
  >
    <boss-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">{{tag.name}}</boss-tag>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.boss-tag {
  margin-right: 10px;
}
</style>