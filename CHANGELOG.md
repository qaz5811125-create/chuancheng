# CHANGELOG

## Beta 0.9.22 Hotfix 5【下獄門資料接回】

- 修正下獄入口建立 run 後，門資料未被面板讀取導致 `verify-no-doors` 的問題。
- 新增最終入口 `cc0922Hotfix5StartHell`。
- 覆蓋 `window.cc0922StartHell` 與 `window.cc0922HellGate`，避免舊入口與舊 fallback 重新接管。
- 新增門資料同步：`p.hell.run.doors` / `p.hell.doors` / `p.hell.currentDoors`。
- 新增進門前修復：若門資料斷線，重新隨機補門並重畫面板。
- 地圖仍維持隨機，入口每次生成 2～3 扇門。
- 保留攻速上限 100/秒與高攻速降溫保護。

---

# 《傳承 Beta 0.9.22 Hotfix 4【下獄入口殘留清除】》

## 修正內容

1. 修正下獄誓約按鈕觸發後仍顯示「迷宮沒有建立」的問題。
2. 進入下獄誓約前，主動清除無效的 `dungeon.running` 與死亡 fight 殘留。
3. 若 `dungeon.running === true` 但不是有效副本戰鬥、不是有效下獄戰鬥，會視為 stale flag 並清除。
4. 下獄入口不再因 stale dungeon flag 直接 return。
5. Hotfix 4 直接覆蓋 `window.cc0922StartHell`，並同步覆蓋舊 Hotfix fallback 入口，避免按鈕仍打到舊保全。
6. 誓約成立後會直接建立 `p.hell.run`，寫入鎖定職業、誓約、層數、魂燈、追獄值、鑰匙、詛咒、臨時獎勵與隨機門資料。
7. 下獄地圖仍維持隨機：每次進入會生成 2～3 扇門，房間依誓約、魂燈、追獄值、詛咒與層數動態抽選。
8. 保留 Hotfix 1 的攻速上限與手機降溫保護。
9. 更新版本顯示，方便確認手機沒有吃到舊快取。

## 測試重點

- 點擊四種下獄誓約是否能進入下獄門選擇畫面。
- 是否仍出現 `cc0922StartHell fallback`、`Hotfix2 no-run` 或 `Hotfix3 no-run`。
- 若仍出現錯誤，請回報 Hotfix4 的錯誤碼。
- 測試中途退出後再進入，職業相同是否能繼續。
- 測試切換職業後再進入，是否觸發誓約斷裂。
