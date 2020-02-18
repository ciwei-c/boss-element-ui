<template>
  <div 
    class="boss-select-table"
    @click.stop="togglePanel"
    v-clickoutside="handleClose"
    :class="[size ? 'boss-select-table--' + size : '']"
  >
    <boss-input
      :class="{ 'is-focus': visible, 'is-clearable':clearable && (multiple ? !!value.length : !!value) }"
      :value="!multiple ? inputValue : ''"
      :innerStyle="{height: inputHeight ? `${inputHeight}px` : ''}"
      @focus="onFocus"
      @blur="onBlur"
      :size="size"
      @change="onChange"
      readonly
      :clearable="clearable"
      ref="reference"
      :placeholder="!multiple ? placeholder : (value.length ? '' : placeholder)"
    >
      <i slot="suffix" @click.stop="onClear" :class="{'boss-input__icon':true, 'boss-icon-close':true}" v-if="clearable"></i>
      <i slot="suffix" :class="{'boss-input__icon':true, 'boss-icon-arrow-down':true, 'reverse-icon':visible}"></i>
    </boss-input>
    <template v-if="multiple && value.length">
      <div class="boss-select-table__multiple-tags boss-select-table__multiple-tags--collapsetags" v-if="collapseTags" ref="collapsetags">
        <boss-tag type="info" closable @close="onCloseTag(0)">{{ getValue(value[0]) }}</boss-tag>
        <boss-tag type="info" v-if="value.length > 1">+{{value.length - 1}}</boss-tag>
      </div>
      <transition-group class="boss-select-table__multiple-tags" @after-leave="resetInputHeight" v-else ref="tags">
        <template>
          <boss-tag type="info" v-for="(val,idx) in value" :key="idx" closable  @close="onCloseTag(idx)">{{ getValue(val) }}</boss-tag>
        </template>
      </transition-group>
    </template>
    <table-popper 
      ref="table-popper"
      :value="value"
      :url="url"
      :jsonReader="jsonReader"
      :multiple="multiple"
      :tableColumns="columns"
      :tableData="data"
      :popperWidth="popperWidth"
      :maxPopperHeight="maxPopperHeight"
    />
  </div>
</template>
<script>
import Clickoutside from "boss-element-ui/src/utils/clickoutside";
import BossInput from "boss-element-ui/packages/input";
import Popper from "boss-element-ui/src/utils/vue-popper";
import TablePopper from "./table-popper";
import Emitter from 'boss-element-ui/src/mixins/emitter';
import BossTag from "boss-element-ui/packages/tag";
export default {
  name: "BossSelectTable",
  props: {
    value:String | Array,
    placeholder: String,
    clearable: Boolean,
    popperWidth: Number | String,
    maxPopperHeight: Number | String,
    multiple: Boolean,
    rowKey:String,
    collapseTags:Boolean,
    size:String,
    placement:{
      type:String,
      default:"bottom-start"
    },
    url:String,
    data:Array,
    jsonReader:Object,
    columns:{
      type:Array,
      default(){
        return []
      }
    },
    formatter:Function
  },
  data() {
    return {
      inputValue: "",
      popperVm: null,
      appendVisibleArrow: true,
      inputHeight:0
    };
  },
  computed:{
    visible(){
      return this.popperVm && this.popperVm.visible
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
    inputHeight:{
      immediate:true,
      handler(){
        this.$nextTick(()=>{
          if(this.visible){
            this.updatePopper()
          }
        })
      }
    }
  },
  mixins: [Popper, Emitter],
  directives: { Clickoutside },
  components: { BossInput, TablePopper, BossTag },
  methods: {
    getValue(data){
      let value = ""
      try {
        if(this.formatter && typeof this.formatter === 'function') {
          value = this.formatter(data)
        }else{
          value = data[this.rowKey]
        }
      } catch (error) {
      }
      return value;
    },
    focus() {
      this.$refs.reference.focus();
      this.showPoperVm();
    },
    blur() {
      this.$refs.reference.blur();
    },
    handleClose() {
      if(this.popperVm && this.popperVm.visible){
        this.popperVm.visible = false
        this.blur()
      }
    },
    togglePanel(){
      if(this.visible) {
        this.handleClose()
      }else{
        this.showPoperVm()
      }
    },
    onFocus(){
      this.$emit("focus")
    },
    setValue(value){
      if(!value){
        return this._setValue()
      }
      this._setValue(value)
    },
    _setValue(value){
      if(!value) value = this.multiple ? [] : null
      this.$emit("input", value)
    },
    showPoperVm(){
      if(!this.popperVm) {
        this.referenceElm = this.$refs.reference.$el;
        this.popperVm = this.$refs['table-popper'];
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
        this.$refs['table-popper'].update()
      });
    },
    onBlur() {
      this.$emit("blur")
    },
    onChange() {
      this.$emit("change")
    },
    onClear() {
      this.handleClose()
      this.$emit("clear")
      this.setValue(null)
    },
    resetInputHeight(){
      if(!this.multiple || !this.value || !this.value.length) return this.inputHeight = 0
      this.$nextTick(()=>{
        if(this.$refs.tags) {
          let height = this.$refs.tags.$el.offsetHeight + 6
          this.inputHeight = height
        }
      })
    }
  }
};
</script>