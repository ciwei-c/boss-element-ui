<template>
  <div class="boss-ui-demo__header">
    <div class="boss-ui-demo__header-logo">
      <div class="boss-ui-demo__header-title">BossUI Vue</div>
    </div>
    <div style="margin-right:20px;font-size:12px;">
      <boss-dropdown style="margin-right:20px"  @command="onClickTheme">
        <span class="boss-dropdown-link" style="cursor: pointer; color: #409eff;">
          切换风格主题
          <i class="boss-icon-arrow-down boss-icon--right"></i>
        </span>
        <boss-dropdown-menu slot="dropdown">
          <boss-dropdown-item
            command="element"
            :class="{
              'active':currentTheme === 'element'
            }"
          >Element</boss-dropdown-item>
          <boss-dropdown-item
            command='ant'
            :class="{
              'active':currentTheme === 'ant'
            }"
          >Ant Design</boss-dropdown-item>
        </boss-dropdown-menu>
      </boss-dropdown>
      <router-link to="/test">开发调试</router-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    currentTheme() {
      return this.$store.state.app.theme;
    }
  },
  methods:{
    onClickTheme(theme){
      if(theme === this.currentTheme) return;
      this.$store.commit("SET_THEME", theme);
    }
  }
};
</script>
<style lang="scss">
  .boss-dropdown-menu__item.active {
    color: #409eff !important;
  }
</style>
<style lang="scss" scoped>
.boss-ui-demo__header {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  display: flex;
  &-logo {
    display: flex;
    align-items: center;
    padding: 10px 50px;
  }
  &-title {
    font-weight: 600;
    color: #409eff;
    font-size: 24px;
  }
}
</style>