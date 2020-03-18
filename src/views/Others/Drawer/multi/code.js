let code = `<template>
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
</template>
<script>
export default {
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
`
export default {
  data(){
    return {
      code,
      codeDesc:"同样, 如果你需要嵌套多层 Drawer 请一定要设置 append-to-body 属性为 true",
      anchor:{
        id:"multi",
        title:"多层嵌套"
      }
    }
  }
}