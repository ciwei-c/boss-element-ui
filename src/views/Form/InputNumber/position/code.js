let code = `<template>
  <boss-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10" label="描述文字"></boss-input-number>
</template>
<script>
export default {
  data() {
    return {
      num: 1
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置 controls-position 属性可以控制按钮位置 （只在 element 风格下）",
      anchor:{
        id:"position",
        title:"按钮位置"
      }
    }
  }
}