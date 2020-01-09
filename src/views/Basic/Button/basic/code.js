let code = `<template>
  <boss-row>
    <boss-row>
      <boss-radio v-model="size" label="default">默认尺寸</boss-radio>
      <boss-radio v-model="size" label="medium">中尺寸</boss-radio>
      <boss-radio v-model="size" label="small">小尺寸</boss-radio>
      <boss-radio v-model="size" label="mini">迷你尺寸</boss-radio>
    </boss-row>
    <boss-row>
      <boss-button :size="size">默认按钮</boss-button>
      <boss-button :size="size" type="primary" disabled>主要按钮</boss-button>
      <boss-button :size="size" type="success">成功按钮</boss-button>
      <boss-button :size="size" type="info">信息按钮</boss-button>
      <boss-button :size="size" type="warning">警告按钮</boss-button>
      <boss-button :size="size" type="danger">危险按钮</boss-button>
    </boss-row>
    <boss-row>
      <boss-button :size="size" plain>朴素按钮</boss-button>
      <boss-button :size="size" type="primary" plain>主要按钮</boss-button>
      <boss-button :size="size" type="success" plain>成功按钮</boss-button>
      <boss-button :size="size" type="info" plain>信息按钮</boss-button>
      <boss-button :size="size" type="warning" plain>警告按钮</boss-button>
      <boss-button :size="size" type="danger" plain>危险按钮</boss-button>
    </boss-row>
    <boss-row>
      <boss-button :size="size" round>圆角按钮</boss-button>
      <boss-button :size="size" type="primary" round>主要按钮</boss-button>
      <boss-button :size="size" type="success" round>成功按钮</boss-button>
      <boss-button :size="size" type="info" round>信息按钮</boss-button>
      <boss-button :size="size" type="warning" round>警告按钮</boss-button>
      <boss-button :size="size" type="danger" round>危险按钮</boss-button>
    </boss-row>
    <boss-row>
      <boss-button :size="size" icon="boss-icon-search" circle></boss-button>
      <boss-button :size="size" type="primary" icon="boss-icon-edit" circle></boss-button>
      <boss-button :size="size" type="success" icon="boss-icon-check" circle></boss-button>
      <boss-button :size="size" type="info" icon="boss-icon-message" circle></boss-button>
      <boss-button :size="size" type="warning" icon="boss-icon-star-off" circle></boss-button>
      <boss-button :size="size" type="danger" icon="boss-icon-delete" circle></boss-button>
      <boss-button :size="size" type="text">Link</boss-button>
    </boss-row>
  </boss-row>
</template>
<script>
export default {
  data(){
    return {
      size:"small"
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"使用type、plain、round和circle属性来定义 Button 的样式。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}