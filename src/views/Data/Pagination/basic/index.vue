<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="基础的分页用法。"
  >
    <div>
      <span class="demonstration">页数较少时的效果</span>
      <boss-pagination
        layout="prev, pager, next"
        :total="50">
      </boss-pagination>
    </div>
    <div>
      <span class="demonstration">大于 7 页时的效果</span>
      <boss-pagination
        layout="prev, pager, next"
        :total="1000">
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