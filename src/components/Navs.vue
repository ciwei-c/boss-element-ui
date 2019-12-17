<template>
  <div class="boss-ui-demo__nav">
    <div class="boss-ui-demo__nav-group" v-for="(v,k) in navs" :key="k">
      {{k}}
      <router-link class="boss-ui-demo__nav-item" v-for="nav in v" :key="nav.route" :to="nav.route">{{nav.title}}</router-link>
    </div>
  </div>
</template>

<script>
import navs from "@/navs";
export default {
  data() {
    return {
      navs
    };
  }
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 4px;
  background-color: transparent;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background: #ccc;
}
$navWidth: 250px;
.boss-ui-demo__nav {
  position: fixed;
  width: $navWidth;
  height: 100%;
  overflow: auto;
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
  }
  &-group:last-child {
    padding-bottom: 100px;
  }
  &-item:hover {
    color: #409eff;
  }
}
</style>