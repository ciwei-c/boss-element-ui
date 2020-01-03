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
      codeDesc:"trigger 属性用于设置何时触发 Popover，支持四种触发方式：hover，click，focus 和 manual。对于触发 Popover 的元素，有两种写法：使用 slot='reference' 的具名插槽，或使用自定义指令 v-popover 指向 Popover 的索引 ref ",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}