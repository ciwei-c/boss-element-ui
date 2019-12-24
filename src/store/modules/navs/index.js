
const requireContext = (files) => {
  let navs = {};
  files.keys().forEach(key => Object.assign(navs, files(key).default))
  return navs
}

export default requireContext(require.context("./modules", false, /.\.js$/))
