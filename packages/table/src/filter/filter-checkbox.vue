<template>
  <div class="boss-table-filter__checkbox-group boss-checkbox-group">
    <label 
      class="boss-checkbox"
      v-for="(filter,idx) in filters"
      :key="filter.value"
      @click="oncheck(idx,filter.value)"
    >
      <span class="boss-checkbox__input" ref="input">
        <span class="boss-checkbox__inner"></span> 
      </span> 
      <span class="boss-checkbox__label">{{ filter.text }}</span>
    </label>
  </div>
</template>
<script>
import BossScrollbar from 'bosssoft-ui/packages/scrollbar';
export default {
  components:{
    BossScrollbar
  },
  props:{
    filters:Array
  },
  data(){
    return {
      filteredValue:[],
      checkedValues:[]
    }
  },
  methods:{
    onchange(checked, value){
      let idx = this.filteredValue.indexOf(value)
      if(checked && idx < 0) {
        this.filteredValue.push(value) 
      }
      if(!checked && idx > -1){
        this.filteredValue.splice(idx,1)
      }
      this.$emit('change', this.filteredValue)
    },
    reset(){
      this.$refs.input.forEach(el=>{
        el.classList.remove('is-checked')
      })
      this.filteredValue = []
    },
    oncheck(idx,value){
      let inputClass = this.$refs.input[idx].classList
      inputClass.toggle('is-checked')
      let ischeck = inputClass.contains('is-checked')
      this.onchange(ischeck, value)
    }
  }
};
</script>
