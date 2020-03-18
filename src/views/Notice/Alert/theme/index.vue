<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="Alert 组件提供了两个不同的主题：light和dark。"
    :codeDesc="codeDesc"
  >
    <boss-row>
      <boss-alert title="成功提示的文案" type="success" effect="dark"></boss-alert>
    </boss-row>
    <boss-row>
      <boss-alert title="消息提示的文案" type="info" effect="dark"></boss-alert>
    </boss-row>
    <boss-row>
      <boss-alert title="警告提示的文案" type="warning" effect="dark"></boss-alert>
    </boss-row>
    <boss-row>
      <boss-alert title="错误提示的文案" type="error" effect="dark"></boss-alert>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
