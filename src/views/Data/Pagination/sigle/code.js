let code = `<template>
  <div>
    <boss-switch v-model="value"></boss-switch>
    <boss-pagination :hide-on-single-page="value" :total="5" layout="prev, pager, next"></boss-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false
    };
  }
};
</script>`
export default {
  data(){
    return {
      code,
      anchor:{
        id:"sigle",
        title:"当只有一页时隐藏分页"
      }
    }
  }
}