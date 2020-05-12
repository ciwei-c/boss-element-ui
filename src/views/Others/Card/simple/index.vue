<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="可以只有内容"
  >
    <boss-card class="box-card">
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
.box-card {
  width: 480px;
}
</style>