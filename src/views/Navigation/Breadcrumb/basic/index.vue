<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="适用广泛的基础用法。"
    :codeDesc="codeDesc"
  >
    <boss-breadcrumb separator="/">
      <boss-breadcrumb-item :to="{ path: '/' }">首页</boss-breadcrumb-item>
      <boss-breadcrumb-item>
        <a href="/">活动管理</a>
      </boss-breadcrumb-item>
      <boss-breadcrumb-item>活动列表</boss-breadcrumb-item>
      <boss-breadcrumb-item>活动详情</boss-breadcrumb-item>
    </boss-breadcrumb>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
