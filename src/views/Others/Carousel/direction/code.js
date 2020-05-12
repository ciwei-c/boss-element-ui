let code = `<template>
  <boss-carousel height="200px" direction="vertical" :autoplay="false">
    <boss-carousel-item v-for="item in 4" :key="item">
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
      codeDesc:"",
      anchor:{
        id:"direction",
        title:"方向"
      }
    }
  }
}