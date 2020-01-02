let code = `<template>
  <boss-select-table 
    v-model="value"
    row-key="id"
    :data="tableData"
    :columns="tableColumns"
    placeholder="请从表格中选择数据"
    :formatter="(row)=>{return \`\${row.name}-\${row.address}\`}"
  >
  </boss-select-table>
</template>
<script>
export default {
  data() {
    return {
      value:{
        date: "2016-05-02",
        name: "王小虎1",
        id:1,
        sex: 1,
        address: ["中国","福建","福州"]
      },
      tableColumns:[{
        label:"日期",
        prop:"date"
      },{
        label:"名字",
        prop:"name"
      },{
        label:"地址",
        prop:"address",
        "show-overflow-tooltip":true
      }],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          id:1,
          sex: 1,
          address: ["中国","福建","福州"]
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          id:2,
          sex: 0,
          address: ["上海市普陀区金沙江路 1517 弄"]
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          id:3,
          sex: 1,
          address: ["中国"]
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          id:4,
          sex: 0,
          address: ["上海市普陀区金沙江路 1516 弄"]
        }
      ]
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"配置 formatter 方法用来做有具体意义的格式化展现，若没有设置，则默认显示数据源中 row-key 值所对应的键值",
      anchor:{
        id:"format",
        title:"格式化展示"
      }
    }
  }
}