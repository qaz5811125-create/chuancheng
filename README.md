# 傳承 Beta 0.5.5 Weapon Renderer Fix

本版重寫武器顯示模組，修正 Beta 0.5.4 武器模型位置與圖片對應問題。

## 更新內容
- 重寫武器顯示 CSS 與 renderWeapon 流程
- 修正木劍、鐵劍、巨劍、鐮刀、破雲槍、戰天斧圖片對應
- 修正武器飛出畫面問題
- 修正武器名稱「武器－」重複顯示
- 更新 Service Worker 快取，確保新武器 PNG 正確載入
- 不變更 Save Version，相容舊存檔
