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
- `cp`: __“Copy”__ ，複製檔案。 `cp <Source_file> <Target_file>`。[更多說明及用法範例](https://ss64.com/osx/cp.html)
- `mv`: __“Move”__ ，移動 __文件(files)/目錄(folders)__ 或更改其名稱。 
- `rm`: __“Remove”__ ，刪除 __文件(files)__ 或 __目錄(folders)__ 。
- `srm`: 如果希望安全地刪除 __文件(files)__ 或 __目錄(folders)__ 。
- `man`: __“Manual”__ ，Help 手冊。 `man ls`、`man rm`...

- `code <檔案名稱>`: 在 VS Code 創建檔案並編輯，或打開該檔案。
- `node <檔案名稱>`: 在終端機下用 node.js 執行該檔案。
   - `node` : 可以直接在終端機上面執行 __console.log__ 或做邏輯運算。 按 __control + C__ 離開。


- `clear`: 清理畫面。 __( 組合鍵：⌘ + r )__
- `sudo`: 取得 root 權限。
- `open .`: 可以用Finder打開當前的位置。
   - `open <檔案名稱>`:  打開檔案。
- `history`: 命令查看歷史記錄。
- 可以使用 __組合鍵 control + C__ 中止一個錯誤的或者發瘋的命令。

