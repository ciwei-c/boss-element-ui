<template>
  <div :class="{
      'boss-ui-demo__router':true,
      'navs-hide':!navsShow
    }">
    <div>
      <h2>{{title}}</h2>
      <p>{{desc}}</p>
      <router-view />
      <div>
        <h2 id="api" style="margin-top:100px;margin-bottom:20px;">API</h2>
        <h3 style="margin-top:30px;margin-bottom:20px;font-size:22px;font-weight:400">Attribute</h3>
        <boss-table>
          <boss-table-column label="参数"></boss-table-column>
          <boss-table-column label="说明"></boss-table-column>
          <boss-table-column label="类型"></boss-table-column>
          <boss-table-column label="可选值"></boss-table-column>
          <boss-table-column label="默认值"></boss-table-column>
        </boss-table>
        <h3 style="margin-top:30px;margin-bottom:20px;font-size:22px;font-weight:400">Event</h3>
        <boss-table>
          <boss-table-column label="事件名"></boss-table-column>
          <boss-table-column label="说明"></boss-table-column>
          <boss-table-column label="参数"></boss-table-column>
        </boss-table>
        <h3 style="margin-top:30px;margin-bottom:20px;font-size:22px;font-weight:400">Methods</h3>
        <boss-table>
          <boss-table-column label="事件名"></boss-table-column>
          <boss-table-column label="说明"></boss-table-column>
          <boss-table-column label="参数"></boss-table-column>
        </boss-table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState({
      title:state => state.app.title,
      desc:state => state.app.desc,
      navsShow:state => state.navs.show
    })
  }
};
</script>
<style lang="scss" scoped>
.boss-ui-demo__router {
  padding: 50px 320px;
  height: 100%;
  transition: all .3s;
  > div {
    padding-bottom: 100px;
  }
  &.navs-hide {
    padding-left: 50px;
  }
  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 28px;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
    margin: 10px 0;
  }
}
</style>