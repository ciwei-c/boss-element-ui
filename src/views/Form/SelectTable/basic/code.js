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
      codeDesc:"data 为列表的数据源，v-model 的值为当前被选中的节点值，使用它需要先设置 row-key 属性，row-key 值应为数据中存在的字段，并且再整个列表中是唯一的存在，例如 row-key='id'，因为需要根据 row-key 判断选中及数据回溯渲染，确保回溯渲染时能选中当前 v-model 的值",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}