<template>
  <boss-scrollbar class="boss-ui-demo__main" wrap-class="boss-ui-demo__scrollbar__wrap">
    <demo-navs :scrollWrapCls="scrollWrapCls"/>
    <demo-route-wrap />
    <demo-anchors :scrollWrapCls="scrollWrapCls" />
    <boss-backtop :target="scrollWrapCls"></boss-backtop>
    <div style="position:fixed;left:0;top:50%;z-index:99;transition:all .3s" :style="{
      transform: navsShow ? 'rotate(0deg)' : 'rotate(180deg)'
    }">
      <boss-button icon="boss-icon-arrow-left" type="text" @click="onToggleNav"></boss-button>
    </div>
  </boss-scrollbar>
</template>

<script>
import DemoNavs from "@/components/DemoNavs";
import DemoRouteWrap from "@/components/DemoRouteWrap";
import DemoAnchors from "@/components/DemoAnchors";
import { mapState } from "vuex";
export default {
  components: { DemoNavs, DemoRouteWrap, DemoAnchors },
  data() {
    return {
      scrollWrapCls: ".boss-ui-demo__scrollbar__wrap.boss-scrollbar__wrap"
    };
  },
  computed: {
    ...mapState({
      navsShow: state => state.navs.show
    })
  },
  methods:{
    onToggleNav(){
      this.$store.commit("SET_NAVTOGGLE");
    }
  },
};
</script>
<style lang="scss" scoped>
.boss-ui-demo__main {
  height: 100%;
}
</style>