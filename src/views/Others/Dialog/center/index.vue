<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="标题和底部可水平居中"
  >
    <boss-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</boss-button>

    <boss-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <boss-button @click="centerDialogVisible = false">取 消</boss-button>
        <boss-button type="primary" @click="centerDialogVisible = false">确 定</boss-button>
      </span>
    </boss-dialog>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      centerDialogVisible: false
    };
  }
};
</script>