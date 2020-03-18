let code = `<template>
  <boss-row>
    <boss-alert title="不可关闭的 alert" type="success" :closable="false"></boss-alert>
  </boss-row>
  <boss-row>
    <boss-alert title="自定义 close-text" type="info" close-text="知道了"></boss-alert>
  </boss-row>
  <boss-row>
    <boss-alert title="设置了回调的 alert" type="warning" @close="hello"></boss-alert>
  </boss-row>
</template>
<script>
export default {
  methods: {
    hello() {
      alert("Hello World!");
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。closable属性决定是否可关闭，接受boolean，默认为true。你可以设置close-text属性来代替右侧的关闭图标，注意：close-text必须为文本。设置close事件来设置关闭时的回调。",
      anchor:{
        id:"close",
        title:"自定义关闭按钮"
      }
    }
  }
}