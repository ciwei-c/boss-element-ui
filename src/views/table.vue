<template>
  <div class="component-demo">
    <boss-input v-model="inputValue"></boss-input>
    <boss-checkbox v-model="checkValue"></boss-checkbox>
    <boss-checkbox-group v-model="checkValues">
      <boss-checkbox-button label="1"></boss-checkbox-button>
      <boss-checkbox-button label="2"></boss-checkbox-button>
      <boss-checkbox-button label="3"></boss-checkbox-button>
    </boss-checkbox-group>
    <boss-checkbox-group v-model="checkValues" @change="onchange">
      <boss-checkbox label="1"></boss-checkbox>
      <boss-checkbox label="2"></boss-checkbox>
      <boss-checkbox label="3"></boss-checkbox>
    </boss-checkbox-group>
    <boss-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期">
    </boss-date-picker>
    <!-- <boss-time-select
      v-model="value1"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间">
    </boss-time-select> -->
    <boss-table
      ref="table"
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
      <boss-table-column type="index" />
      <boss-table-column type="expand">
        <template slot-scope="props">{{props.row}}</template>
      </boss-table-column>
      <boss-table-column type="selection"></boss-table-column>
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
        sortable
      ></boss-table-column>
      <boss-table-column prop="address" label="地址" :showOverflowTooltip="true"></boss-table-column>
      <boss-table-column :editable="true" prop="age" label="年龄"></boss-table-column>
    </boss-table>
    <boss-tag>标签一</boss-tag>
    <boss-tag type="success">标签二</boss-tag>
    <boss-tag type="info">标签三</boss-tag>
    <boss-tag type="warning">标签四</boss-tag>
    <boss-tag type="danger">标签五</boss-tag>
    <boss-select v-model="value" placeholder="请选择">
      <boss-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></boss-option>
    </boss-select>
    <boss-tooltip content="test1212"><boss-button @click="ontest" size="mini" plain>test</boss-button></boss-tooltip>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      value1:"",
      pagination: {
        total: 30,
        pageSizes: [10, 20, 50],
        pageSize: 10,
        currentPage: 1
      },
      currentPage: 1,
      options: [
        {
          value: "黄金糕"
        },
        {
          value: "双皮奶"
        },
        {
          value: "蚵仔煎"
        },
        {
          value: "龙须面"
        },
        {
          value: "北京烤鸭"
        }
      ],
      value: "",
      inputValue: "",
      checkValue: true,
      checkValues: [],
      tableData: []
    };
  },
  created() {
    // this.$apis.test.tables().then(v => {
    //   this.tableData = v.data.list;
    // });
  },
  methods: {
    ontest() {
      // console.log(this.$refs.table.getEditor())
      // console.log(this.$refs.table.getColumns())
      // console.log(this.$refs.table.getSelections())
      // console.log(this.$refs.table.getRowByParam('address','上海市普陀区金沙江路 1516 弄'))
      // console.log(this.$refs.table.getRowByFilter((v)=>{
      //   if(v.address === "上海市普陀区金沙江路 1519 弄") return true
      //   return false
      // }))
      // console.log(this.$refs.table.getData())
      // console.log(this.$refs.table.getSelectedRowIndex())
      // console.log(this.$refs.table.getFooterRows())
      // console.log(this.$refs.table.getSummaryRow())
      // console.log(this.$refs.table.isSelectedRow(2))
      // console.log(this.$refs.table.getCurrentPager())
      // console.log(this.$refs.table.reload())
      // console.log(this.$refs.table.refreshData())
      // console.log(this.$refs.table.cancelEdit(0))
      console.log(this.$refs.table.getChanges());
    },
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

