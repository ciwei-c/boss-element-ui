<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="设置不同的主题"
  >
    <boss-row>
      <boss-row>
        <boss-radio v-model="effect" label="light"></boss-radio>
        <boss-radio v-model="effect" label="plain"></boss-radio>
        <boss-radio v-model="effect" label="dark"></boss-radio>
      </boss-row>
      <boss-tag :effect="effect">标签一</boss-tag>
      <boss-tag :effect="effect" type="success">标签二</boss-tag>
      <boss-tag :effect="effect" type="info">标签三</boss-tag>
      <boss-tag :effect="effect" type="warning">标签四</boss-tag>
      <boss-tag :effect="effect" type="danger">标签五</boss-tag>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data(){
    return {
      effect:"light"
    }
  }
};
</script>
<style lang="scss" scoped>
.boss-tag {
  margin-right: 10px;
}
</style>