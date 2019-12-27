<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    desc="可编辑单元格用法示例"
    :code="code"
    :codeDesc="codeDesc"
  >
    <boss-table :sourceData="tableData" :editable="true">
      <boss-table-column
        prop="date"
        label="日期(日期控件)"
        :editable="true"
        width="180"
        :editWidgetProps="{
          'value-format':'yyyy-MM-dd'
        }"
        editWidget="date-picker"
      ></boss-table-column>
      <boss-table-column prop="name" label="姓名(输入框)" width="180" :editable="true"></boss-table-column>
      <boss-table-column
        prop="sex"
        width="180"
        label="性别(下拉框)"
        :editable="true"
        editWidget="select"
        :editWidgetProps="{
          options:[{
            label:'男',
            value:1
          },{
            label:'女',
            value:0
          }]
        }"
        :formatter="(row)=>{ return row.sex === 1 ? '男' : '女' }"
      ></boss-table-column>
      <boss-table-column
        prop="address"
        label="地址(自定义可编辑的单元格行列)"
        :editable="(row, index)=>{ return index % 2 === 0}"
        editWidget="select-tree"
        :editWidgetProps="{
          data:[{
            label:'中国',
            children:[{
              label:'福建',
              children:[{
                label:'福州'
              }]
            }]
          }],
          multiple:true,
          nodeKey:'label'
        }"
        :formatter="(row)=>{ return row.address.join(' - ') }"
      ></boss-table-column>
    </boss-table>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          sex: 1,
          address: ["中国","福建","福州"]
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          sex: 0,
          address: ["上海市普陀区金沙江路 1517 弄"]
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          sex: 1,
          address: ["中国"]
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          sex: 0,
          address: ["上海市普陀区金沙江路 1516 弄"]
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

