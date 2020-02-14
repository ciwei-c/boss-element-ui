<template>
  <demo-sample-panel :title="anchor.title" :panel-id="anchor.id" :code="code" desc="小型的分页使用">
    <boss-pagination
      small
      :page-sizes="[10, 100, 200, 300, 400]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></boss-pagination>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>