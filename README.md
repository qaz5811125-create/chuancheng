# 傳承 Beta 0.9.22 Hotfix 4【下獄入口殘留清除】

本版修正下獄入口仍被舊副本旗標攔住的問題。

核心修法：

- 下獄入口啟動前先檢查 `dungeon.running` 是否為有效副本。
- 若只是無效殘留旗標，直接清除 `dungeon` 與死亡 `fight`。
- 不允許 stale dungeon flag 阻擋下獄誓約建立。
- 直接建立 `p.hell.run` 與隨機門資料。
- 四個誓約按鈕統一接到 Hotfix4 最終入口。

地圖仍維持隨機，不是固定路線。
