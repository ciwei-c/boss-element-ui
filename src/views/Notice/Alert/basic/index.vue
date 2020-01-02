<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="页面中的非浮层元素，不会自动消失。"
    :codeDesc="codeDesc"
  >
    <boss-row>
      <boss-alert title="成功提示的文案" type="success"></boss-alert>
    </boss-row>
    <boss-row>
      <boss-alert title="消息提示的文案" type="info"></boss-alert>
    </boss-row>
    <boss-row>
      <boss-alert title="警告提示的文案" type="warning"></boss-alert>
    </boss-row>
    <boss-row>
      <boss-alert title="错误提示的文案" type="error"></boss-alert>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
