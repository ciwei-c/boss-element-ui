<template>
  <demo-sample-panel :title="anchor.title" :panel-id="anchor.id" :code="code" desc="基础的表格展示用法。">
    <boss-table
      border
      ref="table"
      highlight-current-row
      :pagination="pagination"
      :keySpecEnabled="true"
      :before-begin-edit="onBeginEdit"
      :before-select="beforeSelect"
      @current-change="onchange"
      @on-begin-edit="onBeginEdit"
      @on-end-edit="onEndEdit"
      @after-data-render="afterDataRender"
      :jsonReader="{'data':'data.list'}"
      :show-summary="true"
      sum-text="合计"
      :editable="true"
      title="表格标题"
      bottom="表格尾部"
      url="/tables"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <boss-table-column type="index" width="50" />
      <boss-table-column type="expand">
        <template slot-scope="props">{{props.row}}</template>
      </boss-table-column>
      <boss-table-column
        prop="name"
        label="姓名"
        :editable="(row,index)=>index%2 === 0 ? true : false"
        editWidget="input"
        sortable
      ></boss-table-column>

      <boss-table-column
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="(value, row, column)=>{
        const property = column['property'];
        return row[property] === value;
      }"
        prop="date"
        label="日期"
        :editable="true"
        editWidget="date-picker"
        :editWidgetProps="{
          'value-format':'yyyy-MM-dd'
        }"
        sortable
      ></boss-table-column>
      <boss-table-column prop="address" label="地址" :showOverflowTooltip="true"></boss-table-column>
      <boss-table-column :editable="true" prop="age" label="年龄" editWidget="input-number"></boss-table-column>
    </boss-table>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      pagination: {
        total: 30,
        pageSizes: [10, 20, 50],
        pageSize: 10,
        currentPage: 1
      },
      tableData: []
    };
  },
  created() {},
  methods: {
    filterTag(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    onchange(v) {
      // console.log(v);
    },
    onBeginEdit(row, $index) {},
    onEndEdit(row, $index) {},
    beforeSelect({ address }) {
      // return address === '上海市普陀区金沙江路 1518 弄' ? false : true
    },
    afterDataRender() {
      // console.log("afterDataRender");
    }
  }
};
</script>

