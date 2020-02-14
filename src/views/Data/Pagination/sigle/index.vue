<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="当只有一页时，通过设置 hide-on-single-page 属性来隐藏分页。"
  >
    <div>
      <boss-switch v-model="value"></boss-switch>
      <boss-pagination :hide-on-single-page="value" :total="5" layout="prev, pager, next"></boss-pagination>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value: false
    };
  }
};
</script>