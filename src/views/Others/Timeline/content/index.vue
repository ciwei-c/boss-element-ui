<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。"
  >
    <boss-timeline>
      <boss-timeline-item timestamp="2018/4/12" placement="top">
        <boss-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </boss-card>
      </boss-timeline-item>
      <boss-timeline-item timestamp="2018/4/3" placement="top">
        <boss-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </boss-card>
      </boss-timeline-item>
      <boss-timeline-item timestamp="2018/4/2" placement="top">
        <boss-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </boss-card>
      </boss-timeline-item>
    </boss-timeline>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>