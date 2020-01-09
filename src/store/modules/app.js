export default {
  state: {
    anchors:[],
    title:"",
    desc:"",
    fileSource:"",
    files:require.context("@/views", true, /.\/\w+\/\index.vue$/),
    theme:window.localStorage.getItem("theme")||"element",
    globalLoading:false
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
    'SET_THEME'(state, payload){
      state.theme = payload
      window.localStorage.setItem("theme",payload)
      state.globalLoading = true
    },
  }
}