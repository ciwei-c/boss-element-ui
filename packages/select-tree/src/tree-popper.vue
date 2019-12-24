<template>
  <transition name="boss-zoom-in-top" @after-enter="handleEnter" @after-leave="handleLeave">
    <div
      :class="[{
        'boss-popper':true,
        'boss-select-tree__popper':true
      }]"
      v-show="visible"
    >
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
          :check-strictly="true"
          :icon="icon"
          :expandedIcon="expandedIcon"
          @node-click="onNodeClick"
        ></boss-tree>
      </boss-scrollbar>
      <div class="boss-select-tree__bottom" v-if="multiple">
        <boss-button size="mini" type="text" @click="handleLeave">取消</boss-button>
        <boss-button size="mini" type="text" @click="onConfirm">确定</boss-button>
      </div>
    </div>
  </transition>
</template>
<script>
import BossTree from "boss-element-ui/packages/tree";
import BossButton from "boss-element-ui/packages/button"
import BossScrollbar from 'boss-element-ui/packages/scrollbar';
export default {
  name: "BossTreePopper",
  components: { BossTree, BossButton, BossScrollbar },
  props:{
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
    expandedIcon:String
  },
  watch:{
    visible(val){
      if(val){
        if(this.multiple){
          this.clearChecked()
          this.$refs.tree.setCheckedKeys(this.value,true)
        }else{
          this.clearCurrentKey()
          this.$refs.tree.setCurrentKey(this.value)
        }
      }
    }
  },
  data() {
    return {
      visible:false
    };
  },
  created(){
  },
  methods:{
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
      }
    },

    clearChecked(){
      this.$refs.tree.clearAllCheckNodes()
    },

    clearCurrentKey(){
      this.$refs.tree.clearCurrentKey()
    },

    onConfirm(){
      this.$emit("pick", this.$refs.tree.getCheckedNodes())
    },
    getTree(){
      return this.$refs.tree
    }
  }
};
</script>