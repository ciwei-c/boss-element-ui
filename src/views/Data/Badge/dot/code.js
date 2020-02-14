let code = `<template>
  <boss-badge :value="12" style="margin-right:40px">
    <boss-button size="small">评论</boss-button>
  </boss-badge>
  <boss-badge :value="3" style="margin-right:40px">
    <boss-button size="small">回复</boss-button>
  </boss-badge>
  <boss-badge :value="1" style="margin-right:40px" type="primary">
    <boss-button size="small">评论</boss-button>
  </boss-badge>
  <boss-badge :value="2" style="margin-right:40px" type="warning">
    <boss-button size="small">回复</boss-button>
  </boss-badge>
  <boss-dropdown trigger="click">
    <span class="boss-dropdown-link">
      点我查看
      <i class="boss-icon-caret-bottom boss-icon--right"></i>
    </span>
    <boss-dropdown-menu slot="dropdown">
      <boss-dropdown-item class="clearfix">
        评论
        <boss-badge class="mark" :value="12" />
      </boss-dropdown-item>
      <boss-dropdown-item class="clearfix">
        回复
        <boss-badge class="mark" :value="3" />
      </boss-dropdown-item>
    </boss-dropdown-menu>
  </boss-dropdown>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"除了数字外，设置is-dot属性，它接受一个Boolean。",
      anchor:{
        id:"dot",
        title:"小红点"
      }
    }
  }
}