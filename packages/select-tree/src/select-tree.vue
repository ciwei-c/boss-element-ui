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
      :clearable="clearable"
      ref="reference"
      :placeholder="placeholder"
    />
    <boss-tree-popper 
      ref="tree-popper"
      :data="data"
      :value="value"
      :defaultKey="value"
      :multiple="multiple"
      :nodeKey="nodeKey"
      :checkStrictly="checkStrictly"
      :defaultExpandedKeys="defaultExpandedKeys"
      :icon="icon"
      :load="load"
      :props="props"
      :expandedIcon="expandedIcon"
    />
  </div>
</template>
<script>
import Clickoutside from "boss-element-ui/src/utils/clickoutside";
import BossInput from "boss-element-ui/packages/input";
import BossTreePopper from "./tree-popper"
import Popper from 'boss-element-ui/src/utils/vue-popper';
import BossTag from "boss-element-ui/packages/tag";
export default {
  components:{BossInput,BossTreePopper,BossTag},
  mixins:[Popper],
  name:"BossSelectTree",
  directives: { Clickoutside },
  props:{
    value:String | Array,
    data:{
      type:Array,
      default(){
        return []
      }
    },
    props:{
      type:Object,
      default(){
        return {
          label:"label",
          children:"children",
          disabled:"disabled"
        }
      }
    },
    clearable:Boolean,
    load:Function,
    multiple:Boolean,
    placeholder:String,
    nodeKey:String,
    icon:String,
    expandedIcon:String,
    formatter:Function,
    placement:{
      type:String,
      default:"bottom-start"
    },
    checkStrictly:{
      type:Boolean,
      default:false
    },
    defaultExpandedKeys:Array
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
          if(!Array.isArray(val)) val = [val]
          this.inputValue = val.map(v=>{
            let node = tree.getNode(v)
            let value = (node && node[this.props.label]) || ""
            if(this.formatter && typeof this.formatter === 'function' && node){
              value = this.formatter(node.data)
            } 
            return value
          }).filter(v=>!!v).join(",")
        })
      }
    }
  },
  created(){
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
          this.setValue(v)
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
    setValue(value){
      if(!value){
        return this._setValue()
      }
      if(Array.isArray(value)){
        this._setValue(value.map(v=>v[this.nodeKey]).filter(v=>!!v))
      }else{
        this._setValue(value[this.nodeKey])
      }
    },
    _setValue(value){
      if(!value) value = this.multiple ? [] : ""
      this.$emit("input", value)
    },
    focus(){
      this.$refs.reference.focus()
    },
    onBlur(){
      this.$emit("blur")
    },
    onClear(){
      this.handleClose()
      this.setValue(null)
      this.$emit("clear")
    },
    onChange(){
      this.$emit("change")
    }
  }
}
</script>