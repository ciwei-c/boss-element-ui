let code = `<template>
  <boss-button type="text" @click="dialogVisible = true">点击打开 Dialog</boss-button>
  <boss-dialog title="提示" :visible.sync="dialogVisible" :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <boss-button size="small" @click="dialogVisible = false">取 消</boss-button>
      <boss-button size="small" type="primary" @click="dialogVisible = false">确 定</boss-button>
    </span>
  </boss-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      done()
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"需要设置visible属性，它接收Boolean，当为true时显示 Dialog。Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。title属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了before-close的用法。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}