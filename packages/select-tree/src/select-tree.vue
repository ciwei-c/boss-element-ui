<template>
  <div 
    class="boss-select-tree"
    v-clickoutside="handleClose"
    @click.stop="togglePanel"
    :class="[size ? 'boss-select-tree--' + size : '']"
  >
    <boss-input 
      :size="size"
      :class="{ 'is-focus': visible, 'is-clearable':clearable && (multiple ? !!value.length : !!value) }"
      :value="!multiple ? (isSearching ? searchInputValue : inputValue) : ''"
      @focus="onFocus"
      @input="onInput"
      @blur="onBlur"
      :readonly="multiple"
      :innerStyle="{height: inputHeight ? `${inputHeight}px` : ''}"
      @change="onChange"
      ref="reference"
      :placeholder="!multiple ? (isSearching ? (searchPlaceholder || placeholder) : placeholder) : (value.length ? '' : (isSearching ? (searchPlaceholder || placeholder) : placeholder))"
    >
      <i slot="suffix" @click.stop="onClear" :class="{'boss-input__icon':true, 'boss-icon-close':true}" v-if="clearable"></i>
      <i slot="suffix" :class="{'boss-input__icon':true, 'boss-icon-arrow-down':true, 'reverse-icon':visible}"></i>
    </boss-input>
    <select-tree-tag
      v-if="multiple"
      ref="tags"
      :setValue="setValue"
      :collapseTags="collapseTags"
      :getValue="getValue"
      :parent="parent"
      :value="value"
      :isSearching="isSearching"
      :resetInputHeight="resetInputHeight"
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
      :filter="filter"
      :defaultExpandAll="defaultExpandAll"
      :filterNodeMethod="filterNodeMethod"
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
import { addResizeListener, removeResizeListener } from 'boss-element-ui/src/utils/resize-event';
import BossTag from "boss-element-ui/packages/tag";
import SelectTreeTag from "./select-tree-tag"
export default {
  components:{BossInput,BossTreePopper,BossTag ,SelectTreeTag},
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
    filter:{
      type:Boolean,
      default:false
    },
    filterNodeMethod:{
      type:Function,
      default(value, data){
        if (!value) return true;
        let prop = this.props.label || "label"
        return data[prop].indexOf(value) !== -1;
      }
    },
    size:String,
    clearable:Boolean,
    load:Function,
    multiple:Boolean,
    placeholder:String,
    nodeKey:String,
    icon:String,
    collapseTags:Boolean,
    expandedIcon:String,
    formatter:Function,
    placement:{
      type:String,
      default:"bottom-start"
    },
    checkStrictly:{
      type:Boolean,
      default:true
    },
    defaultExpandAll:Boolean,
    defaultExpandedKeys:Array
  },
  data(){
    return {
      inputValue:"",
      isSearching:false,
      searchInputValue:"",
      searchPlaceholder:"",
      inputHeight:0,
      popperVm:null,
      appendVisibleArrow:true
    }
  },
  watch:{
    value:{
      immediate:true,
      handler(val){
        this.$nextTick(()=>{
          this.inputValue = this.getValue(this.value)
          this.resetInputHeight()
        })
      }
    },
    visible(val){
      if(val){
        this._inputValue = this.inputValue
        this.searchPlaceholder = this._inputValue
        this.isSearching = true
        this.searchInputValue = ""
        this.$refs["tree-popper"].getTree().filter(this.searchInputValue)
        this.inputValue = ""
      }else{
        this.isSearching = false
        if(!this.inputValue) this.inputValue = this._inputValue
      }
    }
  },
  computed:{
    visible(){
      return this.popperVm && this.popperVm.visible
    },
    parent(){
      return this
    }
  },
  beforeDestroy() {
    if (this.$el && this.resetInputHeight) removeResizeListener(this.$el, this.resetInputHeight);
  },
  mounted(){
    addResizeListener(this.$el, this.resetInputHeight);
  },
  methods:{
    getValue(node){
      node = this.$refs["tree-popper"].getTree().getNode(node)
      let value = (node && node[this.props.label]) || ""
      if(this.formatter && typeof this.formatter === 'function' && node){
        value = this.formatter(node.data)
      }
      return value
    },
    onInput(val){
      this.searchInputValue = val
      this.$refs["tree-popper"].getTree().filter(val)
    },
    onFocus(){
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
          if(!this.multiple) this.handleClose()
        })
      }
      this.updatePopper();
      this.popperVm.visible = true
    },
    onCloseTag(idx){
      this.setValue(this.value.filter((v,i)=>i !== idx))
      setTimeout(() => {
        this.$refs['tree-popper'].update()
      });
    },
    handleClose(){
      if(this.popperVm && this.popperVm.visible){
        this.popperVm.visible = false
        this.$refs.reference.blur()
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
      this.showPoperVm()
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
    },
    togglePanel(){
      if(this.visible) {
        this.handleClose()
      }else{
        this.showPoperVm()
      }
    },
    resetInputHeight(){
      if(!this.multiple || !this.value || !this.value.length) return this.inputHeight = 0
      this.$nextTick(()=>{
        if(this.$refs.tags) {
          let height = this.$refs.tags.getHeight() + 6
          this.inputHeight = height
        }
        this.updatePopper()
      })
    }
  }
}
</script>