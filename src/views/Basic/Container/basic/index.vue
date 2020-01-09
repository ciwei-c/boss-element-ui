<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="常见布局"
    :codeDesc="codeDesc"
  >
    <boss-container>
      <boss-header>Header</boss-header>
      <boss-main>Main</boss-main>
    </boss-container>
    <br/>
    <boss-container>
      <boss-header>Header</boss-header>
      <boss-main>Main</boss-main>
      <boss-footer>Footer</boss-footer>
    </boss-container>
    <br/>
    <boss-container>
      <boss-aside width="200px">Aside</boss-aside>
      <boss-main>Main</boss-main>
    </boss-container>
    <br/>
    <boss-container>
      <boss-header>Header</boss-header>
      <boss-container>
        <boss-aside width="200px">Aside</boss-aside>
        <boss-main>Main</boss-main>
      </boss-container>
    </boss-container>
    <br/>
    <boss-container>
      <boss-header>Header</boss-header>
      <boss-container>
        <boss-aside width="200px">Aside</boss-aside>
        <boss-container>
          <boss-main>Main</boss-main>
          <boss-footer>Footer</boss-footer>
        </boss-container>
      </boss-container>
    </boss-container>
    <br/>
    <boss-container>
      <boss-aside width="200px">Aside</boss-aside>
      <boss-container>
        <boss-header>Header</boss-header>
        <boss-main>Main</boss-main>
      </boss-container>
    </boss-container>
    <br/>
    <boss-container>
      <boss-aside width="200px">Aside</boss-aside>
      <boss-container>
        <boss-header>Header</boss-header>
        <boss-main>Main</boss-main>
        <boss-footer>Footer</boss-footer>
      </boss-container>
    </boss-container>
    <br/>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
<style lang="scss" scoped>
.boss-header,
.boss-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.boss-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.boss-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .boss-container {
  margin-bottom: 40px;
}

.boss-container:nth-child(5) .boss-aside,
.boss-container:nth-child(6) .boss-aside {
  line-height: 260px;
}

.boss-container:nth-child(7) .boss-aside {
  line-height: 320px;
}
</style>
