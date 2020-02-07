<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="文字链接禁用状态"
    :codeDesc="codeDesc"
  >
    <div>
      <boss-link style="margin-right:10px" disabled>默认链接</boss-link>
      <boss-link style="margin-right:10px" disabled type="primary">主要链接</boss-link>
      <boss-link style="margin-right:10px" disabled type="success">成功链接</boss-link>
      <boss-link style="margin-right:10px" disabled type="warning">警告链接</boss-link>
      <boss-link style="margin-right:10px" disabled type="danger">危险链接</boss-link>
      <boss-link style="margin-right:10px" disabled type="info">信息链接</boss-link>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
