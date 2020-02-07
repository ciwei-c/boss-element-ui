let code = `<template>
  <boss-row>
    <boss-row>
      <boss-button :size="size" type="primary" disabled>主要按钮</boss-button>
    </boss-row>
    <boss-row v-if="currentTheme === 'ant'">
      <boss-button :size="size" type="dashed" plain disabled>虚线按钮</boss-button>
    </boss-row>
    <boss-row style="background:#bec8c8;padding:10px" v-if="currentTheme === 'ant'">
      <boss-button :size="size" type="primary" ghost disabled>幽灵按钮</boss-button>
      <boss-button :size="size" type="danger" ghost disabled>Danger</boss-button>
    </boss-row>
    <boss-row>
      <boss-button :size="size" round disabled>圆角按钮</boss-button>
    </boss-row>
    <boss-row>
      <boss-button :size="size" icon="boss-icon-search" circle disabled></boss-button>
      <boss-button :size="size" type="text" disabled>Link</boss-button>
    </boss-row>
  </boss-row>
</template>
<script>
export default {
  data() {
    return {
      size: "default",
      currentTheme: ""
    };
  },
  created() {
    this.currentTheme = this.$store.state.app.theme;
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"disabled",
        title:"禁用按钮"
      }
    }
  }
}