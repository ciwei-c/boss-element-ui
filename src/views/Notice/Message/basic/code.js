let code = `<template>
  <boss-button :plain="true" @click="open">打开消息提示</boss-button>
  <boss-button :plain="true" @click="openVn">VNode</boss-button>
</template>
<script>
export default {
  methods: {
    open() {
      this.$message("这是一条消息提示");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    }
  }
};
</script>`
export default {
  data(){
    return {
      code,
      codeDesc:"Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Element 注册了一个 $message 方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}