<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="Drawer 组件也拥有多层嵌套的方法"
  >
    <boss-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</boss-button>

    <boss-drawer title="我是外面的 Drawer" :visible.sync="drawer" size="50%">
      <div>
        <boss-button @click="innerDrawer = true">打开里面的!</boss-button>
        <boss-drawer
          title="我是里面的"
          :append-to-body="true"
          :before-close="handleClose"
          :visible.sync="innerDrawer"
        >
          <p>_(:зゝ∠)_</p>
        </boss-drawer>
      </div>
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
      innerDrawer: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("还有未保存的工作哦确定关闭吗？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>