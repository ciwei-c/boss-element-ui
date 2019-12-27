<template>
  <transition name="boss-zoom-in-top" @after-enter="handleEnter" @after-leave="handleLeave">
    <div
      :class="[{
        'boss-popper':true,
        'boss-select-tree__popper':true
      }]"
      v-show="visible"
    >
      <div class="boss-select-tree__filter" v-if="filter">
        <boss-input placeholder="请输入关键字进行过滤" size="mini" v-model="filterValue" clearable/>
      </div>
      <boss-scrollbar noresize wrap-class="boss-select-tree__scrollbar">
        <boss-tree
          ref="tree"
          v-show="visible"
          :load="load"
          :lazy="!!load"
          :highlight-current="!multiple"
          :expand-on-click-node="false"
          :props="props"
          :data="data"
          :node-key="nodeKey"
          :show-checkbox="multiple"
          :check-on-click-node="true"
          :check-strictly="checkStrictly"
          :default-expand-all="defaultExpandAll"
          :icon="icon"
          :default-expanded-keys="defaultExpandedKeys"
          :expandedIcon="expandedIcon"
          :filter-node-method="filterNodeMethod"
          @check="onNodeClick"
          @node-click="onNodeClick"
        ></boss-tree>
      </boss-scrollbar>
      <!-- <div class="boss-select-tree__bottom" v-if="multiple">
        <boss-button size="mini" type="text" @click="handleLeave">取消</boss-button>
        <boss-button size="mini" type="text" @click="onConfirm">确定</boss-button>
      </div> -->
    </div>
  </transition>
</template>
<script>
import BossTree from "boss-element-ui/packages/tree";
import BossButton from "boss-element-ui/packages/button";
import BossInput from "boss-element-ui/packages/input";
import BossScrollbar from 'boss-element-ui/packages/scrollbar';
export default {
  name: "BossTreePopper",
  components: { BossTree, BossButton, BossScrollbar, BossInput },
  props:{
    parent:Object,
    props:Object,
    data:Array,
    value:String | Array,
    defaultKey:String | Array,
    multiple:Boolean,
    nodeKey:{
      type:String,
      default:"label"
    },
    load:Function,
    icon:String,
    expandedIcon:String,
    defaultExpandedKeys:Array,
    defaultExpandAll:Boolean,
    checkStrictly:Boolean,
    filter:Boolean,
    filterNodeMethod:Function
  },
  watch:{
    visible(val){
      if(val){
        this.update()
      }
    },
    filterValue(val){
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      visible:false,
      filterValue:""
    };
  },
  created(){
  },
  methods:{
    update(){
      if(this.multiple){
        this.clearChecked()
        if(!Array.isArray(this.value)) console.error((`[Select-tree warn]: Expected Array with value ["${this.value}"], got String with value "${this.value}"`));
        this.$refs.tree.setCheckedKeys(this.value, false)
        if(!this.checkStrictly){
          this.$parent.setValue(this.$refs.tree.getCheckedNodes())
        }
      }else{
        this.clearCurrentKey()
        this.$refs.tree.setCurrentKey(this.value)
      }
    },
    filterNode(value,data){
      return data.label.indexOf(value) > -1
    },
    handleEnter() {
      document.body.addEventListener('keydown', this.handleKeydown);
    },

    handleLeave() {
      this.$emit('dodestroy');
      document.body.removeEventListener('keydown', this.handleKeydown);
    },

    onNodeClick(node){
      if(!this.multiple) {
        this.$emit("pick", node)
      }else{
        this.$emit("pick", this.$refs.tree.getCheckedNodes())
      }
    },

    clearChecked(){
      this.$refs.tree.clearAllCheckNodes()
    },

    clearCurrentKey(){
      this.$refs.tree.clearCurrentKey()
    },
    getTree(){
      return this.$refs.tree
    }
  }
};
</script>