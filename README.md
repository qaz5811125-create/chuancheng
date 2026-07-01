# 傳承 Beta 0.4.4 PWA 修正版

這是手機 GitHub + Netlify 自動部署用的根目錄平鋪版。

## 上傳方式

請解壓縮後，把裡面的檔案全部上傳到 GitHub Repository 根目錄。
不要直接上傳 ZIP。

## 主要檔案

- `index.html`：遊戲本體
- `manifest.json`：PWA 安裝設定
- `sw.js`：Service Worker 快取與離線支援
- `icon-192.png` / `icon-512.png`：桌面圖示
- `maskable-192.png` / `maskable-512.png`：Android maskable 圖示
- `cover.png` / `splash.png`：封面與啟動畫面

## Beta 0.4.4 修正

- 修正 manifest icon 路徑。
- 修正 index.html icon、splash、cover 路徑。
- 修正 Service Worker 註冊 scope。
- 使用根目錄平鋪結構，方便手機上傳 GitHub。
- 保留 Save Version 自動升級。
