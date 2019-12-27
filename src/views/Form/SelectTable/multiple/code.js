let code = `<template>
  <div style="display:flex">
    <div>
      <span>设置 collapse-tags</span>
      <boss-select-table 
        v-model="value"
        row-key="id"
        collapse-tags
        multiple
        :data="tableData"
        :columns="tableColumns"
        placeholder="请从表格中选择数据"
        :formatter="(row)=>{return \`\${row.name}-\${row.address}\`}"
      >
      </boss-select-table>
    </div>
    <div>
      <span>不设置 collapse-tags</span>
      <boss-select-table 
        v-model="value"
        row-key="id"
        multiple
        :data="tableData"
        :columns="tableColumns"
        placeholder="请从表格中选择数据"
        :formatter="(row)=>{return \`\${row.name}-\${row.address}\`}"
      >
      </boss-select-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:[{
        date: "2016-05-02",
        name: "王小虎1",
        id:1,
        sex: 1,
        address: ["中国","福建","福州"]
      }],
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
      codeDesc:"boss-select-table 标签设置 multiple 属性为 true 开启多选， 当开启多选模式时，v-model 绑定值需要是一个 Array 类型的数据，默认情况下选中值会以 tag 的形式展现，你也可以设置 collapse-tags 属性将它们合并为一段文字。",
      anchor:{
        id:"multiple",
        title:"多选下拉表格"
      }
    }
  }
}