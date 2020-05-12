<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="当然，你还可以嵌套操作，这相比 Dialog 更为轻量："
  >
    <boss-popover placement="top" width="160" v-model="visible">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <boss-button size="mini" type="text" @click="visible = false">取消</boss-button>
        <boss-button type="primary" size="mini" @click="visible = false">确定</boss-button>
      </div>
      <boss-button slot="reference">删除</boss-button>
    </boss-popover>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      visible: false
    };
  }
};
</script>