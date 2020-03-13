let code = `<template>
  <boss-row>
    <span>不显示间断点</span>
    <boss-slider v-model="value1" :step="10"></boss-slider>
  </boss-row>
  <boss-row>
    <span>显示间断点</span>
    <boss-slider v-model="value2" :step="10" show-stops></boss-slider>
  </boss-row>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 0
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"改变step的值可以改变步长，通过设置show-stops属性可以显示间断点",
      anchor:{
        id:"stops",
        title:"离散值"
      }
    }
  }
}