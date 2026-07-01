# 傳承

《傳承》Beta 0.4.3 Hotfix 1。

這份資料夾是 GitHub + Netlify 自動部署用版本。

## Netlify 設定

- Build command：留空
- Publish directory：`.` 或 `/`
- Branch：`main`

之後只要 push 到 GitHub，Netlify 會自動部署到同一個網站網址。

## 檔案

- `index.html`：遊戲主程式
- `manifest.json`：PWA 設定
- `sw.js`：Service Worker
- `assets/`：封面與啟動畫面素材
- `netlify.toml`：Netlify 部署設定
