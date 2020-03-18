<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="使用 center 属性让文字水平居中。"
    :codeDesc="codeDesc"
  >
    <boss-row><boss-alert title="成功提示的文案" type="success" show-icon center></boss-alert></boss-row>
    <boss-row><boss-alert title="消息提示的文案" type="info" show-icon center></boss-alert></boss-row>
    <boss-row><boss-alert title="警告提示的文案" type="warning" show-icon center></boss-alert></boss-row>
    <boss-row><boss-alert title="错误提示的文案" type="error" show-icon center></boss-alert></boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
