<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="表示某种状态时提升可读性。"
    :codeDesc="codeDesc"
  >
    <boss-row><boss-alert title="成功提示的文案" type="success" show-icon></boss-alert></boss-row>
    <boss-row><boss-alert title="消息提示的文案" type="info" show-icon></boss-alert></boss-row>
    <boss-row><boss-alert title="警告提示的文案" type="warning" show-icon></boss-alert></boss-row>
    <boss-row><boss-alert title="错误提示的文案" type="error" show-icon></boss-alert></boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
