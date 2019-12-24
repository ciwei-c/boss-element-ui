<template>
  <div 
    class="boss-select-tree"
  >
    <boss-input 
      :value="inputValue"
      v-clickoutside="handleClose"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      @clear="onClear"
      clearable
      ref="reference"
      :placeholder="placeholder"
    />
    <boss-tree-popper 
      ref="tree-popper"
      :data="treeData"
      :value="value"
      :defaultKey="value"
      :multiple="multiple"
      :nodeKey="nodeKey"
      :icon="icon"
      :load="treeLoad"
      :props="treeProps"
      :expandedIcon="expandedIcon"
    />
  </div>
</template>
<script>
import Clickoutside from "boss-element-ui/src/utils/clickoutside";
import BossInput from "boss-element-ui/packages/input";
import BossTreePopper from "./tree-popper"
import Popper from 'boss-element-ui/src/utils/vue-popper';
export default {
  components:{BossInput,BossTreePopper},
  mixins:[Popper],
  name:"BossSelectTree",
  directives: { Clickoutside },
  props:{
    value:String | Array,
    treeData:{
      type:Array,
      default(){
        return []
      }
    },
    treeProps:{
      type:Object,
      default(){
        return {
          label:"label",
          children:"children",
          disabled:"disabled"
        }
      }
    },
    treeLoad:Function,
    multiple:Boolean,
    placeholder:String,
    nodeKey:String,
    icon:String,
    expandedIcon:String
  },
  data(){
    return {
      inputValue:"",
      popperVm:null,
      appendVisibleArrow:true
    }
  },
  watch:{
    value:{
      immediate:true,
      handler(val){
        this.$nextTick(()=>{
          let tree = this.$refs["tree-popper"].getTree()
          if(Array.isArray(val)){
            this.inputValue = val.map(v=>{
              let node = tree.getNode(v)
              return (node && node.label) || ""
            }).filter(v=>!!v).join(",")
          }else{
            try {
              this.inputValue = tree.getNode(val).label
            } catch (error) {
              this.inputValue = ""
            }
          }
        })
      }
    }
  },
  methods:{
    onFocus(){
      this.showPoperVm()
      this.$emit("focus")
    },
    showPoperVm(){
      if(!this.popperVm) {
        this.referenceElm = this.$refs.reference.$el;
        this.popperVm = this.$refs['tree-popper'];
        this.popperElm = this.popperVm.$el;
        this.popperVm.$on("dodestroy", this.handleClose)
        this.popperVm.$on("pick", (v)=>{
          this.setInputValue(v)
          this.handleClose()
        })
      }
      this.updatePopper();
      this.popperVm.visible = true
    },
    handleClose(){
      if(this.popperVm && this.popperVm.visible){
        this.popperVm.visible = false
        this.$refs.reference.blur()
        this.doDestroy()
      }
    },
    setInputValue(value){
      if(!value){
        return this.setValue()
      }
      if(Array.isArray(value)){
        this.setValue(value.map(v=>v[this.nodeKey]).filter(v=>!!v))
      }else{
        this.setValue(value[this.nodeKey])
      }
    },
    setValue(value){
      if(!value) value = this.multiple ? [] : ""
      this.$emit("input", value)
    },
    onBlur(){
      this.$emit("blur")
    },
    onClear(){
      this.handleClose()
      this.setInputValue(null)
    },
    onChange(){
      this.$emit("change")
    }
  }
}
</script>