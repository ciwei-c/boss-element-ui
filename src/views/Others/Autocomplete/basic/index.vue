<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="远程搜索基本用法"
  >
    <boss-autocomplete 
      v-model="value"
      :fetchSuggestions="fetchSuggestions"
      placeholder="请输入要查询的关键字"
      :trigger-on-focus="false"
      @select="handleSelect"
    >
      <template slot-scope="props">
        <p>{{props.item.index}}</p>
      </template>
    </boss-autocomplete>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value: ""
    };
  },
  methods: {
    fetchSuggestions(search, cb) {
      let ret = []
      let random = Math.round(Math.random() * 10)
      for (let i = 0; i < random; i++) {
        ret.push({
          index:i
        })
      }
      setTimeout(() => {
        cb(ret);
      }, 1000);
    },
    handleSelect(val){
      this.$alert(JSON.stringify(val))
    }
  }
};
</script>