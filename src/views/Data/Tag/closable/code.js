let code = `<template>
  <boss-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">{{tag.name}}</boss-tag>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" }
      ]
    };
  }
};
</script>
  <style lang="scss" scoped>
  .boss-tag {
    margin-right: 10px;
  }
</style>`
export default {
  data(){
    return {
      code,
      codeDesc:"设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置disable-transitions属性，它接受一个Boolean，true 为关闭。",
      anchor:{
        id:"closable",
        title:"可移除标签"
      }
    }
  }
}