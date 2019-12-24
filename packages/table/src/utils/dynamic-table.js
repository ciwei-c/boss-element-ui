import request from './request'
export default {
  props: {
    jsonReader: Object,
    autoLoad: {
      type:Boolean,
      default:true
    },
    queryParams:Object,
    beforeLoad:Function
  },
  data() {
    return {
      defaultJsonReader: {
        total: 'total', // 总数据条数
        data: 'data'    // 表格读取字段
      }
    }
  },
  computed: {
    enableLoadUrl() {
      return !this.sourceData && this.url
    },
    hasPagination(){
      return this.pagination && typeof this.pagination === "object"
    }
  },
  created() {
    if(this.enableLoadUrl){
      this.store.commit('setData', []);
      if( this.autoLoad && this.enableLoadUrl){
        let pagination = this.pagination
        let { size, index } = this.queryParams || {}
        
        if(pagination && index && index !== pagination.currentPage) pagination.currentPage = index
        if(pagination && size && size !== pagination.pageSize) pagination.pageSize = size
  
        this.getDataByUrl()
      }
    }
  },
  methods: {
    getDataByUrl() {
      if (this.enableLoadUrl) {
        let data = Object.assign({},this.queryParams || {})
        if( this.hasPagination ) {
          let { currentPage, pageSize } = this.pagination
          if(pageSize !== undefined) Object.assign(data,{size:pageSize})
          if(currentPage !== undefined) Object.assign(data,{index:currentPage})
        }
        if(this.beforeLoad && typeof this.beforeLoad === 'function' && this.beforeLoad() === false) return
        request({
          url: this.url,
          method:"post",
          data
        }).then(data => {
          this.$emit("on-load-success")
          let jsonReader = Object.assign(this.defaultJsonReader, this.jsonReader)
          if(this.hasPagination) this.pagination.total = this.findDataByJsonReader(jsonReader.total, data)
          this.data = this.findDataByJsonReader(jsonReader.data, data)
          this.$nextTick(()=>{
            setTimeout(() => {
              this.$emit("after-data-render")
            });
          })
        }).catch(e=>{
          console.log(e)
        })
      }
    },
    findDataByJsonReader(jsonReaderProp, sourceData) {
      let data
      try {
        let props = jsonReaderProp.split(".")
        props.forEach(k=>{
          if(data) {
            data = data[k]
          }else{
            data = sourceData[k]
          }
        })
      } catch (error) {

      }
      return data
    }
  }
}