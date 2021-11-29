<!-- MEMO: https://gist.github.com/mignonstyle/083c9e1651d7734f84c99b8cf49d57fa を参考に作成しています -->

## 概要

{{案件}}のプロジェクトリポジトリです

## 各種コマンド

### クローンしたタイミングで実行
`yarn install` または `npm install`  

※エラーが出る場合は **yarn.lock** と **node_modules** を削除した上で再度試してみてください

### 開発をするタイミングで実行
`yarn start` または `npm run start`  

### .ts を変更してプッシュする前のタイミングで実行
`yarn build` または `npm run build`  

### ngrokを使用して実機確認する場合に実行
`ngrok http 3000 --hot-header=rewrite`  

## 補足

### 開発ディレクトリについて
- `/src/ts/`  
  TypeScriptファイルを格納しています

- `/src/scss/`  
  SCSSファイルを格納しています

### 出力ディレクトリについて
- `/build/static/js/`  
  JavaScriptファイルを格納しています  
  出力先は webpack.config.js で変更できます

- `/build/static/css/`  
  CSSファイルを格納しています  
  出力先は package.json で変更できます