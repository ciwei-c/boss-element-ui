let code = `<template>
  <boss-carousel arrow="hover">
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
      codeDesc:"arrow属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将arrow设置为always，则会一直显示；设置为never，则会一直隐藏。",
      anchor:{
        id:"arrow",
        title:"切换箭头"
      }
    }
  }
}