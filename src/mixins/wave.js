let styleForPesudo = null;
let timeout = null;
let tortose = null;
export default {
  methods:{
    wave(el){
      if(tortose) return;
      tortose = setTimeout(()=>{
        if(timeout) clearTimeout(timeout);
        el.setAttribute("animating-node",false);
        let elStyle = document.defaultView.getComputedStyle(el)
        let borderColors = [elStyle.borderTopColor,elStyle.borderRightColor,elStyle.borderBottomColor,elStyle.borderLeftColor]
        let waveColor = "";
        let colorCountMap = {}
        borderColors.forEach(color => {
          if(!colorCountMap[color]) {
            colorCountMap[color] = 1
          }else {
            colorCountMap[color] ++
          }
        })
        waveColor = Object.keys(colorCountMap).map(color=>{
          return {
            color,
            count:colorCountMap[color]
          }
        }).sort((a,b)=>{
          return b.count - a.count
        })[0].color

        if(!styleForPesudo) styleForPesudo = document.createElement("style");

        if (
          waveColor &&
          waveColor !== '#ffffff' &&
          waveColor !== 'rgb(255, 255, 255)' &&
          !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) && // any transparent rgba color
          waveColor !== 'transparent'
        ) {
          el.setAttribute("animating-node",true);
          styleForPesudo.innerHTML = `
          [animating-node='true']::after{
            --wave-shadow-color: ${waveColor};
          }`;
          if (!document.body.contains(styleForPesudo)) {
            document.body.appendChild(styleForPesudo);
          }
          timeout = setTimeout(() => {
            timeout = null;
            el.setAttribute("animating-node",false);
          }, 500);
        } else {
          styleForPesudo.innerHTML = `
          [animating-node='true']::after{
            --wave-shadow-color: transparent;
          }`;
        }
        tortose = null;
      },30)
    }
  }
}