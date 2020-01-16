<template>
    <boss-table :sourceData="tableData" :select-on-indeterminate="false" ref="table">
      <boss-table-column type="selection"></boss-table-column>
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
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted(){
    this.$refs.table.toggleRowSelection(this.tableData[0]);
  },
  created() {},
  methods: {}
};
</script>

