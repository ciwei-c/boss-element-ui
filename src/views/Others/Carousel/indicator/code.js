let code = `<template>
  <boss-carousel indicator-position="outside">
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
      codeDesc:"indicator-position属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为outside则会显示在外部；设置为none则不会显示指示器。",
      anchor:{
        id:"indicator",
        title:"指示器"
      }
    }
  }
}