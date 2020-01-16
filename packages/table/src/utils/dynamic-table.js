import request from 'boss-element-ui/src/utils/request'
import {findDataByJsonReader} from "boss-element-ui/src/utils/util"
export default {
  props: {
    jsonReader: Object,
    requestReader: Function,
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
      if( this.autoLoad ){
        this.getDataByUrl()
      }
    }
  },
  methods: {
    getDataByUrl() {
      if (this.enableLoadUrl) {
        
        let pagination = this.pagination
        let { size, index } = this.queryParams || {}
        
        if(pagination && index && index !== pagination.currentPage) pagination.currentPage = index
        if(pagination && size && size !== pagination.pageSize) pagination.pageSize = size
        
        let data = Object.assign({},this.queryParams || {})
        if( this.hasPagination ) {
          let { currentPage, pageSize } = this.pagination
          if(pageSize !== undefined) Object.assign(data,{size:pageSize})
          if(currentPage !== undefined) Object.assign(data,{index:currentPage})
        }
        if(this.beforeLoad && typeof this.beforeLoad === 'function' && this.beforeLoad() === false) return

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

        request(requestData).then(data => {
          this.$emit("on-load-success")
          let jsonReader = Object.assign(this.defaultJsonReader, this.jsonReader)
          if(this.hasPagination) this.pagination.total = findDataByJsonReader(jsonReader.total, data)
          this.data = findDataByJsonReader(jsonReader.data, data)
          this.$nextTick(()=>{
            setTimeout(() => {
              this.$emit("after-data-render")
            });
          })
        }).catch(e=>{
          console.log(e)
        })
      }
    }
  }
}