<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="基础用法"
    :codeDesc="codeDesc"
  >
    <boss-page-header title="标题" @back="goBack" content="详情页面"></boss-page-header>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  methods: {
    goBack() {
      console.log("go back");
    }
  }
};
</script>