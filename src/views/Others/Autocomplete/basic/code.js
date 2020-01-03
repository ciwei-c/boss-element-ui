let code = `<template>
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
</template>
<script>
export default {
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
      console.log(val)
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"fetch-suggestions 回调方法返回搜索值",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}