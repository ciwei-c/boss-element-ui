<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="分页器禁用用法"
  >
    <div>
      <boss-pagination
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      disabled
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
      </boss-pagination>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>