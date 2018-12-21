## [程式導師實驗計畫：綜合能力測驗（PHP, JavaScript, HTML, CSS](http://mentor-program.co/huli/game/index.php)


- 發現只有標題，網頁沒有內容，所以查看原始碼。
- 發現裡面的 PHP 程式碼裡面 有一些提示，用 GET 的方式傳遞變數， 
  - 所以原本的網址後面加上 `?MODE=start` -> 看到提示一
  - 再加上 `&norestriction` -> 看到提示二
- 這時候用開發人員工具檢查，就會發現 html 多了幾個 `class="hidden"` 的標籤以及按鈕。

- 然後查看一下 Sources 查看 JavaScript 的程式碼。

- 在 __Console__ 賦值給 myMissingNumberToSetToMakeTheRequest
- 按下按鈕之後，在 __Console__ 就會查看到按下按鈕之後的訊息了。
  - 提示 `{hint: "54ceb91256e8190e474aa752a6e0650a2df5ba37", error: "數字錯誤"} `
  - Google 搜尋 `54ceb91256e8190e474aa752a6e0650a2df5ba37` 之後，發現這段解碼之後是 56
- 在 __Console__ 輸入 `myMissingNumberToSetToMakeTheRequest = 56`
- 按下按鈕 __`Result: 恭喜破關！flag: m3nT0rPr0GRAm666`__
