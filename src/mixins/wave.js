let styleForPesudo = null;
export default {
  methods:{
    wave(el){
      el.removeAttribute("animating-node")
      let waveColor = document.defaultView.getComputedStyle(el).borderColor;
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
        setTimeout(() => {
          el.removeAttribute("animating-node")
        }, 500);
      } else {
        styleForPesudo.innerHTML = `
        [animating-node='true']::after{
          --wave-shadow-color: transparent;
        }`;
      }
    }
  }
}