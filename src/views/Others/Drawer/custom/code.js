let code = `<template>
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
</template>
<script>
export default {
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
`
export default {
  data(){
    return {
      code,
      codeDesc:"和 Dialog 组件一样, Drawer 同样可以在其内部嵌套各种丰富的操作",
      anchor:{
        id:"custom",
        title:"自定义内容"
      }
    }
  }
}