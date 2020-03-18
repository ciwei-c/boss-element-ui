<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="当你不需要标题到时候, 你还可以去掉标题"
  >
    <boss-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</boss-button>
    <boss-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <span>我来啦!</span>
    </boss-drawer>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      drawer: false,
    };
  }
};
</script>