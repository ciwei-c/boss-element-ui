let code = `<template>
  <boss-row>默认</boss-row>
  <boss-menu
    :default-active="activeIndex"
    class="boss-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <boss-menu-item index="1">处理中心</boss-menu-item>
    <boss-submenu index="2">
      <template slot="title">我的工作台</template>
      <boss-menu-item index="2-1">选项1</boss-menu-item>
      <boss-menu-item index="2-2">选项2</boss-menu-item>
      <boss-menu-item index="2-3">选项3</boss-menu-item>
      <boss-submenu index="2-4">
        <template slot="title">选项4</template>
        <boss-menu-item index="2-4-1">选项1</boss-menu-item>
        <boss-menu-item index="2-4-2">选项2</boss-menu-item>
        <boss-menu-item index="2-4-3">选项3</boss-menu-item>
      </boss-submenu>
    </boss-submenu>
    <boss-menu-item index="3" disabled>消息中心</boss-menu-item>
    <boss-menu-item index="4">订单中心</boss-menu-item>
  </boss-menu>
  <boss-row><hr>自定义主题</boss-row>
  <boss-menu
    :default-active="activeIndex2"
    class="boss-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <boss-menu-item index="1">处理中心</boss-menu-item>
    <boss-submenu index="2">
      <template slot="title">我的工作台</template>
      <boss-menu-item index="2-1">选项1</boss-menu-item>
      <boss-menu-item index="2-2">选项2</boss-menu-item>
      <boss-menu-item index="2-3">选项3</boss-menu-item>
      <boss-submenu index="2-4">
        <template slot="title">选项4</template>
        <boss-menu-item index="2-4-1">选项1</boss-menu-item>
        <boss-menu-item index="2-4-2">选项2</boss-menu-item>
        <boss-menu-item index="2-4-3">选项3</boss-menu-item>
      </boss-submenu>
    </boss-submenu>
    <boss-menu-item index="3" disabled>消息中心</boss-menu-item>
    <boss-menu-item index="4">订单中心</boss-menu-item>
  </boss-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"导航菜单默认为垂直模式，通过mode属性可以使导航菜单变更为水平模式。另外，在菜单中通过submenu组件可以生成二级菜单。Menu 还提供了background-color、text-color和active-text-color，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}