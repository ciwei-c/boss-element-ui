<template>
  <div class="app">
    <navs />
    <route-wrap />
  </div>
</template>

<script>
import Navs from "@/components/Navs";
import RouteWrap from "@/components/RouteWrap";
export default {
  components: { Navs, RouteWrap }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>
<style lang="scss" scoped>
.app {
  padding: 0 20px;
}
</style>