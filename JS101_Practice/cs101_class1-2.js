/* CS101_class1-2
假設 n = 1 ，length 是字串的長度，A 設成 -1，代表找到的位置，p是要找到的字
看第 n 個字是不是 p ，是的話讓 A = n(把位置記下來)
把 n + 1 ，如果 n + 1 大於字串長度的話，就跳到第五步
跳回第二步
如果 A < 0，代表沒出現過;否則 A 就是答案
*/

// computerscience

function findStr(str, find){
  let str = ''
  for (let i = 1; i <= str.length; i++) {
    if (i > str.length){
      console.log(str.index)
    }
  }
}






/* CS101 class 2-1
介紹
圖形使用者介面 Graphical User interface
命令列介面 Command Line Interface

Command Line 指令
*/

/* CS101 class 2-2 2-3
基本指令介紹及練習
ls cd pwd touch mkdir rm cp 
 */


/* CS101 class 2-4
指令組合技

- `|`:__“Pipe”__ ，串接指令。把前面的輸出變成後面的輸入。
    - example: `cat <file> | grep <keyword>`，印出文件並搜尋某個關鍵字。
- `>`:__“Redirect”__ ，重新導向。
    - example: `echo [hello world] > 0123.txt`，變成印出 hello world 到 0123.txt（而原本沒有這個文件，也順便建立了這個文件）
*/


/* CS101 class 3-1：二進位是什麼
這世界上只有 10 種人，一種是懂二進制的，另外一種是不懂二進制的。
RGB 十六進制表示法
00~FF (0~255)
#FFFFFF
*/

/* CS101 class  3-2：1TB 有多大－－儲存空間單位
資料儲存的最小的單位 位元 Bit

8 Bit = 1 Byte ；所以 Byte 又稱位元組

Kilobyte
1 KB = 1024 bytes

Megabyte
1 MB = 1024 KB

Gigabyte
1 GB = 1024 MB

1 TB = 1024 GB
*/

/* CS101 class 3-3：我的錢怎麼變成負的－－數字的儲存

通常數字會用 32 個 bit 來存，也就是 4 bytes。
每個 bit 可以表示 0 或 1 ，也就是說 32 個bit 就會有 2^32 種情形。 2^32 = 4294967296 大約是40億左右。

二進制負數表示法，所有位元顛倒，然後在 +1。
第一個數字是 1 ，代表是負數。

0000 1010 = 10
1111 0110 =-10

  0000 1010 = 10
 +1111 0110 =-10
1 0000 0000 = 0

假如現在數字用 8 個 bit 存，可以表示的範圍就是 -2^7~2^7-1，也就是 -128 ~ 127
如果超過可以表示的範圍，這種情形叫做 Overflow 溢位

*/

/* CS101 class 4-1：為什麼我連不上這個網頁－－網路基礎概論
這個單元介紹到幾個跟網路有關的基本概念：IP位置、DNS、server、request、response、前端與後端 希望看完這個章節，大家都能知道上面這個名詞所代表的意思是什麼


IP 位置 0~255

域名(Domain)：就是我們常用的網址
Domain Name System：負責把域名(Domain)轉換成IP

CS101 class  4-2
VPN = Virtual Private Network

*/







