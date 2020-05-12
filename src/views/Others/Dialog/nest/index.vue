<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。"
  >
    <boss-button type="text" @click="outerVisible = true">点击打开外层 Dialog</boss-button>

    <boss-dialog title="外层 Dialog" :visible.sync="outerVisible">
      <boss-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body></boss-dialog>
      <div slot="footer" class="dialog-footer">
        <boss-button @click="outerVisible = false">取 消</boss-button>
        <boss-button type="primary" @click="innerVisible = true">打开内层 Dialog</boss-button>
      </div>
    </boss-dialog>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      outerVisible: false,
      innerVisible: false
    };
  }
};
</script>