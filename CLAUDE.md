# Claude 自動載入指令

每次對話開始，自動執行以下所有指令。

---

## 一、讀取所有專案資料

每次對話開始，掃描並讀取 `/Users/vespertsa1/Documents/Claude/` 目錄下所有 `.md` 檔案。

```bash
find /Users/vespertsa1/Documents/Claude -name "*.md" | sort
```

讀取後作為所有任務的背景知識，包含但不限於：
- 個人品牌內容創作（文案、設計、腳本）→ 對照品牌語氣、視覺規範、目標客群
- 投資分析與進出場建議 → 對照道氏理論框架與交易紀律手冊
- 任何新增的專案資料夾 → 自動納入context

---

## 三、已安裝 MCP 工具

### Firecrawl（一般網站爬取）
- **用途**：將任意網址轉成乾淨文字，速度快，適合摘要文章、比較產品、整理資料
- **免費額度**：500次/月
- **API Key**：已設定為環境變數 `FIRECRAWL_API_KEY`
- **使用方式**：「幫我摘要這篇文章 [URL]」

### Playwright（瀏覽器控制）
- **用途**：操作真實瀏覽器，處理需要登入的平台（IG、Facebook、Threads）、需要滾動/點擊的動態頁面、網頁截圖
- **瀏覽器**：Chromium 已安裝
- **使用方式**：「幫我用瀏覽器打開 [URL] 並截圖」

---

## 更新紀錄

| 日期 | 更新內容 |
|------|---------|
| 2026-06-13 | 建立 CLAUDE.md；安裝 Firecrawl + Playwright MCP |
| 2026-06-13 | 改為掃描整個 /Documents/Claude/ 目錄，自動讀取所有 .md |
