import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.directive("focus",{
  inserted(el){
      el.focus();
  }
})
Vue.directive("img",{
  inserted(el,obj){
    console.log(el,obj.value)
    el.style.background="red";
    let img = new Image();
    img.src=obj.value;
    img.onload=()=>{
        el.style.background="url("+obj.value+")"
        el.style.backgroundSize="100% 100%";
    }
    
}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

