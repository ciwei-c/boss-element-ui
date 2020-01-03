<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="呼出一个临时的侧边栏, 可以从多个方向呼出"
  >
    <boss-radio-group v-model="direction">
      <boss-radio label="ltr">从左往右开</boss-radio>
      <boss-radio label="rtl">从右往左开</boss-radio>
      <boss-radio label="ttb">从上往下开</boss-radio>
      <boss-radio label="btt">从下往上开</boss-radio>
    </boss-radio-group>

    <boss-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</boss-button>

    <boss-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
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
      direction: "rtl"
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>