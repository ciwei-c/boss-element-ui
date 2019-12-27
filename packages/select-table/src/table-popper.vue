<template>
  <transition name="boss-zoom-in-top" @after-enter="handleEnter" @after-leave="handleLeave">
    <div
      :class="[{
        'boss-popper':true,
        'boss-select-table__popper':true
      }]"
      v-show="visible"
    >
      <boss-scrollbar 
        noresize 
        wrap-class="boss-select-table__scrollbar"
      >
        <boss-table
          ref="table"
          :highlight-current-row="!multiple"
          border
          size="small"
          @current-change="handleCurrentChange"
          @selection-change="onConfirm"
          :url="url"
          :sourceData="tableData"
          :selectOnClickRow="true"
          :jsonReader="jsonReader"
        >
          <boss-table-column type="selection" v-if="multiple"></boss-table-column>
          <table-column v-for="(column,idx) in tableColumns" :key="idx" :column="column"/>
        </boss-table>
      </boss-scrollbar>
    </div>
  </transition>
</template>
<script>
import BossTable from "boss-element-ui/packages/table";
import BossButton from "boss-element-ui/packages/button";
import BossScrollbar from "boss-element-ui/packages/scrollbar";
import TableColumn from "./table-column"
export default {
  name: "BossTablePopper",
  components: { BossTable, BossButton, BossScrollbar, TableColumn },
  props: {
    multiple: Boolean,
    popperWidth: Number | String,
    value:String | Array,
    maxPopperHeight: Number | String,
    tableColumns:Array,
    tableData:Array,
    url:String,
    jsonReader:Object
  },
  watch: {
    visible(val) {
      if (val) {
        this.$nextTick(()=>{
          if(!this.url && !this.tableData) console.error((`[Select-table warn]: tableData or url one of them must be set`));
          this.update()
        })
      }
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed:{
    key(){
      return this.$parent.rowKey
    },
    width(){
      return this.calcPx(this.popperWidth, '500px')
    },
    height(){
      return this.calcPx(this.maxPopperHeight, '500px')
    }
  },
  mounted(){
    this.$nextTick(()=>{
      try {
        let $scrollbar = this.$el.querySelector(".boss-select-table__scrollbar")
        $scrollbar.style.width = this.width
        $scrollbar.style.maxHeight = this.height
      } catch (error) {
        
      }
    })
  },
  created() {},
  methods: {
    update(){
      let row = null
      if (this.multiple) {
        if(!Array.isArray(this.value)) console.error((`[Select-table warn]: Expected Array with value \n [${JSON.stringify(this.value,null,2)}] \n got Object with value \n ${JSON.stringify(this.value,null,2)}`));
        let unSelections = []
        this.$refs.table.getSelections().forEach(row => {
          if(this.value.findIndex(v=>v[this.key] === row[this.key]) < 0) unSelections.push(row)
        })
        unSelections.forEach(row=>{
          this.$refs.table.toggleRowSelection(row, false)
        })
        this.value.forEach(v => {
          row = this.$refs.table.getRowByParam(this.key, v[this.key])
          if(row) this.$refs.table.toggleRowSelection(row, true)
        })
      } else {
        try {
          row = this.$refs.table.getRowByParam(this.key, this.value[this.key])
        } catch (error) {
        }
        this.$refs.table.setCurrentRow(row)
      }
    },
    calcPx(value, defaultValue){
      return value ? value.endsWith('px') ? value : `${value}px` : defaultValue
    },
    handleEnter() {
      document.body.addEventListener("keydown", this.handleKeydown);
    },

    handleCurrentChange(row){
      if(this.multiple) return
      if(row) this.$emit("pick", row)
    },

    handleLeave() {
      this.$emit("dodestroy");
      document.body.removeEventListener("keydown", this.handleKeydown);
    },

    onConfirm() {
      this.$emit("pick", this.$refs.table.getSelections());
    }
  }
};
</script>