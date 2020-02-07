import navs from "./navs/index";
export default {
  state: {
    navs,
    show:false,
  },
  mutations:{
    'SET_NAVTOGGLE'(state, payload){
      state.show = !state.show
    }
  }
}