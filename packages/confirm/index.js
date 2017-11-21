import Vue from 'vue'
import Confirm from './src/main.vue'

Confirm.showConfirm = function(opt){
    var options = opt;
    var confirm = Vue.extend(Confirm)
    var component = new confirm({
        data: options
    }).$mount()
    document.querySelector('body').appendChild(component.$el)
}

export default Confirm