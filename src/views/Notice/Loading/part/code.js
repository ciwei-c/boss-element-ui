let code = `<template>
  <boss-table v-loading="loading" :sourceData="tableData" style="width: 100%">
    <boss-table-column prop="date" label="日期" width="180"></boss-table-column>
    <boss-table-column prop="name" label="姓名" width="180"></boss-table-column>
    <boss-table-column prop="address" label="地址"></boss-table-column>
  </boss-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      loading: true
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"两种调用 Loading 的方法：指令和服务。对于自定义指令 v-loading，只需要绑定 Boolean 即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加 body 修饰符，可以使遮罩插入至 DOM 中的 body 上。",
      anchor:{
        id:"part",
        title:"局部加载"
      }
    }
  }
}