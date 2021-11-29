// MEMO: {{該当ページ}}で使用するTSファイルです

import Info from './modules/Info'
import Stage from './modules/Stage'

// MEMO: グローバルオブジェクトを定義
declare global { interface Window { APP: any; } }
export const APP = window.APP || {}

// MEMO: オブジェクトを初期化
const initApp = () => {
  window.APP = APP
  APP.Info = new Info()
  APP.Stage = new Stage()
}

// MEMO: DOMが読み込めたら初期化を開始
window.addEventListener('load', initApp)