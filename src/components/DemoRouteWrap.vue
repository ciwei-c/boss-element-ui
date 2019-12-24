<template>
  <div class="boss-ui-demo__router">
    <div>
      <h2>{{title}}</h2>
      <p>{{desc}}</p>
      <router-view />
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
    })
  }
};
</script>
<style lang="scss" scoped>
.boss-ui-demo__router {
  padding: 50px 320px;
  height: 100%;
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