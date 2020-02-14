<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="支持三种类型：图标、图片和字符"
  >
    <boss-row>
      <boss-col :span="8">
        <boss-avatar icon="boss-icon-user-solid"></boss-avatar>
      </boss-col>
      <boss-col :span="8">
        <boss-avatar :src="src"></boss-avatar>
      </boss-col>
      <boss-col :span="8">
        <boss-avatar>user</boss-avatar>
      </boss-col>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      src: require("@/assets/avatar.png")
    };
  }
};
</script>