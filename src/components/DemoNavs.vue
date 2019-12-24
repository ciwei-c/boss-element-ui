<template>
  <boss-scrollbar class="boss-ui-demo__nav">
    <div class="boss-ui-demo__nav-group" v-for="(v,k) in navs" :key="k">
      {{k}}
      <router-link
        :class="[{
          'boss-ui-demo__nav-item':true,
          'boss-ui-demo__nav-item--active':nav.route === $route.path
        }]"
        v-for="nav in v"
        :key="nav.route"
        :to="nav.route"
      >{{nav.title}}</router-link>
    </div>
  </boss-scrollbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    scrollWrapCls: String
  },
  computed: {
    ...mapState({
      navs: state => state.navs.navs
    })
  },
  watch: {
    $route({ path }) {
      this.$store.commit("SET_ANCHORS", []);
      for (const key in this.navs) {
        let _navs = this.navs[key];
        for (let i = 0; i < _navs.length; i++) {
          let { route, title, desc, fileSource } = _navs[i];
          if (path === route) {
            this.$store.commit("SET_TITLE", title);
            this.$store.commit("SET_DESC", desc);
            this.$store.commit("SET_FILE_SOURCE", fileSource);
            return;
          }
        }
      }
    }
  }
};
</script>
<style lang="scss">
.boss-ui-demo__nav {
  .boss-scrollbar__view {
    padding-bottom: 100px;
    padding-top: 50px;
  }
}
</style>
<style lang="scss" scoped>
.boss-ui-demo__nav {
  position: fixed;
  width: 230px;
  height: 100%;
  margin-left: 50px;
  box-shadow: 7px 0px 5px -8px rgba(0, 0, 0, 0.1);
  > div {
    position: relative;
  }
  &-group {
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
  }
  &-item {
    cursor: pointer;
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    &--active {
      color: #409eff;
    }
  }
  &-item:hover {
    color: #409eff;
  }
}
</style>