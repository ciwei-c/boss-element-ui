<template>
  <div class="boss-tree__search" v-if="url">
    <boss-input placeholder="请输入关键字查询" size="mini" @keydown.enter.native="onSearch" v-model="searchValue">
      <template slot="append" v-if="!!searchValue"><boss-button type="primary" @click="onSearch" :icon="loading ? 'boss-icon-loading' : 'boss-icon-search'" size="mini">查询</boss-button></template>
    </boss-input>
    <div class="boss-tree__search-list" v-if="visible">
      <div v-for="(tree, idx) in treeList" :key="idx" @click="onClickTreeList(tree, idx)" :class="{
        'is-current':currentIdx === idx
      }">
        <i class="boss-tree__search-list-icon"></i>
        <div>{{ tree[props.label] }}</div>
      </div>
      <div v-if="!treeList.length">
        <i class="boss-tree__search-list-icon"></i>
        <div>没有找到数据</div>
      </div>
    </div>
  </div>
</template>
<script>
import BossInput from "boss-element-ui/packages/tree"
import BossButton from "boss-element-ui/packages/button"
import request from "boss-element-ui/src/utils/request"
import {findDataByJsonReader} from "boss-element-ui/src/utils/util"
export default {
  name:"BossTreeSearch",
  props:{
    url:String,
    method:String,
    requestReader:Function,
    jsonReader:Object,
    props:Object,
    visibleChange:Function
  },
  data(){
    return {
      searchValue:"",
      treeList:[],
      defaultJsonReader: {
        list: ''
      },
      loading:false,
      doingSearch:false,
      currentIdx:-1
    }
  },
  computed:{
    visible(){
      return !!this.searchValue && this.doingSearch
    }
  },
  watch:{
    searchValue(){
      if(!this.searchValue){
        this.treeList = []
        this.doingSearch = false
        this.currentIdx = -1
      }
    },
    visible(val){
      this.visibleChange(val)
    }
  },
  created(){
  },
  methods:{
    onClickTreeList(list, idx){
      this.currentIdx = idx
      this.$parent.$emit("on-search-tree-click", list)
      try {
        this.$parent.setCurrentNode(list)
      } catch (error) {
        
      }
    },
    onSearch(){
      if(!this.searchValue) return

      let data = {
        search:this.searchValue
      }

      let requestData = {
        url: this.url,
        method: this.method || "post",
      }

      let _data = (this.requestReader && this.requestReader(data)) || data

      if(requestData.method === "get") {
        request.params = _data
      }else{
        requestData.data = _data
      }
      this.loading = true
      request(requestData).then(res=>{
        this.loading = false
        this.doingSearch = true
        if(this.jsonReader.list) {
          this.treeList = findDataByJsonReader(this.jsonReader.list, res) 
        }else{
          this.treeList = res
        }
      })
    }
  }
}
</script>