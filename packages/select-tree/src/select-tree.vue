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
      :value="!multiple ? inputValue : ''"
      @focus="onFocus"
      @blur="onBlur"
      :innerStyle="{height: inputHeight ? `${inputHeight}px` : ''}"
      @change="onChange"
      ref="reference"
      :placeholder="!multiple ? placeholder : (value.length ? '' : placeholder)"
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
      :value="value"
      :resetInputHeight="resetInputHeight"
    />
    <!-- <template v-if="multiple && value.length">
      <div class="boss-select-tree__multiple-tags boss-select-tree__multiple-tags--collapsetags" v-if="collapseTags" ref="collapsetags">
        <boss-tag type="info" closable @close="onCloseTag(0)">{{ getValue(value[0]) }}</boss-tag>
        <boss-tag type="info" v-if="value.length > 1">+{{value.length - 1}}</boss-tag>
      </div>
      <transition-group class="boss-select-tree__multiple-tags" @after-leave="resetInputHeight" v-else ref="tags">
        <boss-tag type="info" v-for="(val,idx) in value" :key="idx" closable  @close="onCloseTag(idx)">{{ getValue(val) }}</boss-tag>
      </transition-group>
    </template> -->
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
      default(){
        return () => true
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
    }
  },
  computed:{
    visible(){
      return this.popperVm && this.popperVm.visible
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