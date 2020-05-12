<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="适用广泛的基础用法。"
    :codeDesc="codeDesc"
  >
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
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
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
