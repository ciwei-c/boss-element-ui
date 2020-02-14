<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="当展示类型为图片的时候，图片加载失败的 fallback 行为"
  >
    <boss-row>
      <boss-avatar :size="60" src="https://empty" :error="errorHandler">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </boss-avatar>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  methods: {
    errorHandler() {
      console.log("图片不存在")
      return true;
    }
  }
};
</script>