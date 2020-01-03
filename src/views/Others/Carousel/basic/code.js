let code = `<template>
  <div>
    <div>
      <span style="color:#222;margin:10px 0;display:inline-block">默认 Hover 指示器触发</span>
      <boss-carousel height="150px">
        <boss-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </boss-carousel-item>
      </boss-carousel>
    </div>
    <div>
      <span style="color:#222;margin:10px 0;display:inline-block">Click 指示器触发</span>
      <boss-carousel trigger="click" height="150px">
        <boss-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </boss-carousel-item>
      </boss-carousel>
    </div>
  </div>
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
      codeDesc:"结合使用 boss-carousel 和 boss-carousel-item 标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在 boss-carousel-item 标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置 trigger 属性为 click，可以达到点击触发的效果。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}