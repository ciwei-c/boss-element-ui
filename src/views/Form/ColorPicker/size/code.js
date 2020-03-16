let code = `<template>
  <boss-row>
    <boss-col span="2">
      <boss-color-picker v-model="color"></boss-color-picker>
    </boss-col>
    <boss-col span="2">
      <boss-color-picker v-model="color" size="medium"></boss-color-picker>
    </boss-col>
    <boss-col span="2">
      <boss-color-picker v-model="color" size="small"></boss-color-picker>
    </boss-col>
    <boss-col span="2">
      <boss-color-picker v-model="color" size="mini"></boss-color-picker>
    </boss-col>
  </boss-row>
</template>
<script>
export default {
  data() {
    return { color: "#409EFF" };
  }
};
</script>
`
export default {
  data() {
    return {
      code,
      codeDesc: "",
      anchor: {
        id: "size",
        title: "不同尺寸"
      }
    }
  }
}