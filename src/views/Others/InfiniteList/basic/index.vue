<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="在要实现滚动加载的列表上上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。"
  >
    <div>
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow-y:scroll">
        <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
        <li style="text-align:center" v-if="loading"><boss-icon name="loading"></boss-icon></li>
      </ul>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data () {
    return {
      count: 10,
      loading:false
    }
  },
  methods: {
    load () {
      if(this.loading) return
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.count += 10
      }, 1000);
    }
  }
};
</script>
<style lang="scss">
.infinite-list {
  height: 300px;
  .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px 0;
    color: #7dbcfc;
  }
}
</style>