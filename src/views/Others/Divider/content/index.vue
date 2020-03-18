<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="可以在分割线上自定义文案内容。"
  >
    <div>
      <span>头上一片晴天，心中一个想念</span>
      <boss-divider content-position="left">少年包青天</boss-divider>
      <span>饿了别叫妈, 叫饿了么</span>
      <boss-divider>
        <i class="boss-icon-mobile-phone"></i>
      </boss-divider>
      <span>为了无法计算的价值</span>
      <boss-divider content-position="right">阿里云</boss-divider>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>