《傳承 Beta 0.4.3 Hotfix 1》Netlify 部署版

修正內容：
1. 修正 manifest.json JSON 語法錯誤：移除 categories 後方多餘逗號。
2. 修正 PWA 安裝強化腳本內的跳脫換行字元，避免 JavaScript 初始化失敗。
3. 增加 Splash Screen 防呆關閉流程，避免初始化失敗時停在啟動畫面。
4. 保留 Beta 0.4.3 PWA 安裝提示、icon、manifest、sw.js 與既有遊戲資料。

部署方式：
把本 ZIP 解壓縮後，將整個資料夾拖到 Netlify Deploys 即可。
若瀏覽器快取舊版本，請重新整理或清除網站快取後再測試。
