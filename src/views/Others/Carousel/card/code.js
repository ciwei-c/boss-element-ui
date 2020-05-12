let code = `<template>
  <boss-carousel :interval="4000" type="card" height="200px">
    <boss-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </boss-carousel-item>
  </boss-carousel>
</template>
<script>
export default {
};
</script>
<style>
  .boss-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }

  .boss-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .boss-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
`
export default {
  data(){
    return {
      code,
      codeDesc:"将type属性设置为card即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。",
      anchor:{
        id:"card",
        title:"卡片化"
      }
    }
  }
}