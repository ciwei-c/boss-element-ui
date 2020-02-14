<template>
  <demo-sample-panel :title="anchor.title" :panel-id="anchor.id" :code="code" desc="基础的按钮用法。" :codeDesc="codeDesc">
    <boss-row>
      <boss-radio v-model="size" label="default">默认尺寸</boss-radio>
      <boss-radio v-model="size" label="medium">大尺寸</boss-radio>
      <boss-radio v-model="size" label="small">小尺寸</boss-radio>
      <boss-radio v-model="size" label="mini">迷你尺寸</boss-radio>
    </boss-row>
    <boss-row>
      <boss-button :size="size" >默认按钮</boss-button>
      <boss-button :size="size" type="primary">主要按钮</boss-button>
      <boss-button :size="size" type="success">成功按钮</boss-button>
      <boss-button :size="size" type="info">信息按钮</boss-button>
      <boss-button :size="size" type="warning">警告按钮</boss-button>
      <boss-button :size="size" type="danger">Danger</boss-button>
    </boss-row>
    <boss-row>
      <boss-button :size="size" plain>朴素按钮</boss-button>
      <boss-button :size="size" type="primary" plain>主要按钮</boss-button>
      <boss-button :size="size" type="success" plain>成功按钮</boss-button>
      <boss-button :size="size" type="info" plain>信息按钮</boss-button>
      <boss-button :size="size" type="warning" plain>警告按钮</boss-button>
      <boss-button :size="size" type="danger" plain>Danger</boss-button>
    </boss-row>
    <boss-row v-if="currentTheme === 'ant'">
      <boss-button :size="size" type="dashed" plain>虚线按钮</boss-button>
    </boss-row>
    <boss-row style="background:#bec8c8;padding:10px" v-if="currentTheme === 'ant'">
      <boss-button :size="size" type="primary" ghost>幽灵按钮</boss-button>
      <boss-button :size="size" type="danger" ghost>Danger</boss-button>
      <boss-button :size="size" type="dashed" ghost>虚线按钮</boss-button>
      <boss-button :size="size" plain ghost>朴素按钮</boss-button>
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
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data(){
    return {
      size:"default",
      currentTheme:""
    }
  },
  created(){
    this.currentTheme = this.$store.state.app.theme;
  }
};
</script>
