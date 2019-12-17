<template>
  <div class="boss-ui-demo__router">
    <h2>{{title}}</h2>
    <p>{{desc}}</p>
    <router-view />
  </div>
</template>

<script>
import navs from "@/navs";
export default {
  data() {
    return {
      title: "",
      desc: "",
      navs
    };
  },
  watch: {
    $route({ path }) {
      for (const key in this.navs) {
        let navs = this.navs[key];
        for (let i = 0; i < navs.length; i++) {
          let { route, title, desc } = navs[i];
          if (path === route) {
            this.title = title;
            this.desc = desc;
            return;
          }
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$navWidth: 250px;
.boss-ui-demo__router {
  margin: 20px 20px 20px $navWidth;
  padding-left: 20px;
  h2 {
    font-weight: 400;
    color: #1f2f3d;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
    margin: 10px 0;
  }
}
</style>