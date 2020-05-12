let code = `<template>
  <boss-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <boss-button slot="reference">hover 激活</boss-button>
  </boss-popover>

  <boss-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <boss-button slot="reference">click 激活</boss-button>
  </boss-popover>

  <boss-popover
    ref="popover"
    placement="right"
    title="标题"
    width="200"
    trigger="focus"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  ></boss-popover>
  <boss-button v-popover:popover>focus 激活</boss-button>

  <boss-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visible"
  >
    <boss-button slot="reference" @click="visible = !visible">手动激活</boss-button>
  </boss-popover>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"利用分发取代content属性",
      anchor:{
        id:"nest",
        title:"嵌套信息"
      }
    }
  }
}