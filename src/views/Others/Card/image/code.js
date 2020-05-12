let code = `<template>
  <boss-card :body-style="{ padding: '0px' }" style="width:236px">
  <img
    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
  />
  <div style="padding: 14px;margin-top:-5px">
    <span>Europe Street beat</span>
    <div style="font-size: 13px;color: #999;line-height:12px;margin-top:10px">www.instagram.com</div>
  </div>
  </boss-card>
</template>
<style>
.card__image img {
  width: 100%;
  display: block;
}
</style>
`
export default {
  data(){
    return {
      code,
      codeDesc:"配置body-style属性来自定义body部分的style，我们还使用了布局组件。",
      anchor:{
        id:"image",
        title:"带图片"
      }
    }
  }
}