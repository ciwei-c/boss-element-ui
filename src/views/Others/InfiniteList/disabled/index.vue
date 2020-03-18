<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc=""
  >
    <div class="infinite-list" style="overflow:auto">
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
      </ul>
      <div style="text-align:center" v-if="loading"><boss-icon name="loading"></boss-icon></div>
      <p v-if="noMore" style="#5e6d82">没有更多了</p>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      count: 10,
      loading: false
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>
<style lang="scss">
.infinite-list {
  height: 300px;
  text-align: center;
  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #fff6f6;
    color: #ff8484;
    margin: 10px 0;
  }
}
</style>