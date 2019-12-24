export default {
  state: {
    anchors:[],
    title:"",
    desc:"",
    fileSource:"",
    files:require.context("@/views", true, /.\/\w+\/\index.vue$/)
  },
  mutations:{
    'SET_ANCHORS'(state, payload){
      state.anchors = payload
    },
    'SET_TITLE'(state, payload){
      state.title = payload
    },
    'SET_DESC'(state, payload){
      state.desc = payload
    },
    'SET_FILE_SOURCE'(state, payload){
      state.fileSource = payload
    },
  }
}