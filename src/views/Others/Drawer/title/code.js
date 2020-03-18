let code = `<template>
  <boss-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</boss-button>
  <boss-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
    <span>我来啦!</span>
  </boss-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"当遇到不需要 title 的场景时, 可以通过 withHeader 这个属性来关闭掉 title 的显示, 这样可以留出更大的空间给到用户, 为了用户的可访问性, 请务必设定 title 的值",
      anchor:{
        id:"title",
        title:"不添加title"
      }
    }
  }
}