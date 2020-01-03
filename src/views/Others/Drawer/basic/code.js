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
      codeDesc:"需要设置 visible 属性，它的类型是 boolean,当为 true 时显示 Drawer。Drawer 分为两个部分：title 和 body，title 需要具名为 title 的 slot, 也可以通过 title 属性来定义，默认值为空。需要注意的是, Drawer 默认是从右往左打开, 当然可以设置对应的 direction, 详细请参考 direction 用法 最后，本例还展示了 before-close 的用法",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}