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
    beforeLoad:Function,
    queryParams:Object,
    method:{
      type:String,
      default:"post"
    },
    pageConfig:{
      type:Object,
      default(){
        return {
          indexField:"index",
          sizeField:"size",
          queryPlacement:"url"
        }
      }
    },
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

        let requestData = {
          url: this.url,
          method: this.method || "post",
        }

        let data = {}
        let pageConfig = Object.assign({
          indexField:"index",
          sizeField:"size",
          queryPlacement:"url"
        }, this.pageConfig)

        if(this.hasPagination) {
          if(requestData.method === "get"){
            data[pageConfig.sizeField] = this.pagination.pageSize
            data[pageConfig.indexField] = this.pagination.currentPage
          } else {
            if(pageConfig.queryPlacement === "url"){
              requestData.url = `${requestData.url}?${pageConfig.sizeField}=${this.pagination.pageSize}&${pageConfig.indexField}=${this.pagination.currentPage}`
            } else {
              data[pageConfig.sizeField] = this.pagination.pageSize
              data[pageConfig.indexField] = this.pagination.currentPage
            }
          }
        }

        data = Object(data, this.queryParams)

        if(this.beforeLoad && typeof this.beforeLoad === 'function' && this.beforeLoad() === false) return

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