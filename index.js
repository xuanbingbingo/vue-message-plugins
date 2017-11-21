
 import BingoMessage from './packages/message/index.js'
 import BingoToolTip from './packages/tips/index.js'
 import BingoConfirm from './packages/confirm/index.js'
 import BingoLoading from './packages/loading/index.js'

 const install = function(Vue) {
   Vue.component(BingoMessage.name, BingoMessage)
   Vue.component(BingoToolTip.name, BingoToolTip)
   Vue.component(BingoConfirm.name, BingoConfirm)
   Vue.component(BingoLoading.name, BingoLoading)

   Vue.prototype.$bingo_confirm = BingoConfirm.showConfirm
   Vue.prototype.$bingo_tooltip = BingoToolTip.installToolTip
   Vue.prototype.$bingo_message = BingoMessage.installMessage
 }
 export default install