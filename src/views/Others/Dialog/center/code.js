let code = `<template>
  <boss-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</boss-button>

  <boss-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
    <span>需要注意的是内容是默认不居中的</span>
    <span slot="footer" class="dialog-footer">
      <boss-button @click="centerDialogVisible = false">取 消</boss-button>
      <boss-button type="primary" @click="centerDialogVisible = false">确 定</boss-button>
    </span>
  </boss-dialog>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"将center设置为true即可使标题和底部居中。center仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。",
      anchor:{
        id:"center",
        title:"居中布局"
      }
    }
  }
}