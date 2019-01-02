# 常用的 command line 指令

- `whoami`: 顯示使用者名稱。
- `pwd`: __“Print working directory.”__ ，會顯示當前目錄的絕對路徑。
- `ls`:  __“List directory contents.”__ ，列出目錄內容。
    - `-ls`: 列出所在目錄下的檔案。
    - `-al` :
      - `a`: 小數點開頭的隱藏檔案也會顯示。
      - `l`: 完整檔案的權限、擁有者以及建立、修改時間都顯示。


- `cd`: __“Change directory.”__ 更改當前工作的目錄。
    - `cd ..`: 回上一個目錄。
    - `cd /`: 跳去根目錄。
    - `cd ~`: 跳去使用者之家。
    -  `cd ~/資料夾名稱/資料夾名稱/...`: 跳去某個資料夾。
	`~/`: 代表 __/User/帳號名稱/__

  
- `touch <file>`: 更改最後修改檔案時間，如果檔案不存在，會以默認的權限創建該檔案。
- `mkdir <folder>`:  __“Make directory.”__ ，建立目錄。
- `rmdir <folder>`:  __“Remove directory.”__ ，刪除目錄。
- `cp`: __“Copy”__ ，複製檔案。
    -  `cp <Source_file> <Target_file>`。[更多說明及用法範例](https://ss64.com/osx/cp.html)
- `mv`: __“Move”__ ，移動 __文件(files)/目錄(folders)__ 或更改其名稱。 
- `rm`: __“Remove”__ ，刪除 __文件(files)__ 或 __目錄(folders)__ 。
- `srm`: 如果希望安全地刪除 __文件(files)__ 或 __目錄(folders)__ 。
- `man`: __“Manual”__ ，Help 手冊。example: `man ls`、`man rm`...

- `cat`: __“Catenate”__  ，連接並印出（顯示）文件的內容。
- `less`: 分頁式印出文件。
- `echo`: 印出輸入的字串。`echo <string>`
- `grep`: 搜尋文件特定的關鍵字。
    - `grep [keyword] <file>`
- `code <檔案名稱>`: 在 VS Code 創建檔案並編輯，或打開該檔案。
- `node <檔案名稱>`: 在終端機下用 node.js 執行該檔案。
   - `node` : 可以直接在終端機上面執行 __console.log__ 或做邏輯運算。 按 __control + C__ 離開。


- `clear`: 清理畫面。 __( 組合鍵：⌘ + r )__
- `sudo`: 取得 root 權限。
- `open .`: 可以用Finder打開當前的位置。
   - `open <檔案名稱>`:  打開檔案。
- `history`: 命令查看歷史記錄。
- `date`: 印出現在時間。
- 可以使用 __組合鍵 control + C__ 中止一個錯誤的或者發瘋的命令。

---

## 指令組合技
> CS101_2-4 的內容。
- `|`:__“Pipe”__ ，串接指令。把前面的輸出變成後面的輸入。
    - example: `cat <file> | grep <keyword>`，印出文件並搜尋某個關鍵字。
- `>`:__“Redirect”__ ，重新導向。
    - example: `echo [hello world] > 0123.txt`，變成印出 hello world 到 0123.txt（而原本沒有這個文件，也順便建立了這個文件）
![image](https://ppt.cc/fedm5x@.png)


---

- `id`
  - 查詢自己是否為 root: `id -u` 是否為 0，如果是 0 就是 root。
  - `-u`: 顯示使用者 ID。
  - `-F`、`-un`: 顯示實際的帳號名稱。

- `sudo`
  -`sudo -i`: login 運行登錄 shell 作為目標用戶;也可以指定命令。用 `logout` 登出 root。
  -`sudo -s`: shell 運行 shell 作為目標用戶;也可以指定命令。用 `exit` 離開 root 權限。

- `locate [-ir] keyword`:

   - 選項與參數：
      -i  ：忽略大小寫的差異；
      -c  ：不輸出檔名，僅計算找到的檔案數量
      -l  ：僅輸出幾行的意思，例如輸出五行則是 -l 5
      -S  ：輸出 locate 所使用的資料庫檔案的相關資訊，包括該資料庫紀錄的檔案/目錄數量等
      -r  ：後面可接正規表示法的顯示方式

   - 可以先使用 `updatedb`，更新資料庫檔案。根據 /etc/updatedb.conf 的設定去搜尋系統硬碟內的檔名，並更新 /var/lib/mlocate 內的資料庫檔案；
   locate：依據 /var/lib/mlocate 內的資料庫記載，找出使用者輸入的關鍵字檔名。

