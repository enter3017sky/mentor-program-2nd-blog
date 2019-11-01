# 部署 AWS EC2 虛擬主機 + Ubuntu LAMP 環境 + phpmyadmin

> 主要參考這兩個同學的筆記
- [一小時完成 VPS (Virtual Private Server) 部署](https://github.com/Lidemy/mentor-program-2nd-yuchun33/issues/15)
- [部署 AWS EC2 遠端主機 + Ubuntu LAMP 環境 + phpmyadmin](https://github.com/Lidemy/mentor-program-2nd-futianshen/issues/21)

AWS EC2 跟 ubuntu 環境都建立好了之後。

## 在 CLI 登入雲端虛擬主機

- 在 AWS EC2 的 Instance 的畫面，如圖所示上面的 Connect，可以直接複製指令。
  - `ssh -i ~/.ssh/awsKey.pem ubuntu@ec2-xx-xxx-xxx-xx.ap-northeast-1.compute.amazonaws.com`
- 也可以自己打簡短的 IP
  - `ssh -i ~/.ssh/awsKey.pem ubuntu@IP(public)`

![image](https://ppt.cc/fENfix@.png)

- 允許使用 PHP Short tag，輸入 `sudo vim /etc/php/7.2/apache2/php.ini`
  - 如果用`vim`，按`/`輸入關鍵字，按`n`查找下一個，`找到 short_open_tag = 改成 ON
- 離開 vim 編輯器(權限問題無法編輯文件)：輸入 `q!` 指令強制離開。

## MySQL 設定時區

- 登入 VPS 後
- 先找到檔案 `locate my.cnf`
- root 權限用 vim 開啟檔案 `sudo vim /etc/mysql/my.cnf`
- 找到`[mysqld]`，在下面增加設定值 `default-time-zone = '+8:00'`
- ESC->:wq 存檔離開。

參考資料：[修改 MySQL 時區](https://www.brilliantcode.net/473/mysql-set-change-timezone/)

## 在 CLI 操作 MySQL

- 登入資料庫 `mysql -u root -p`
- 如果已經用 `sudo -i`或`sudo -u`登入 root 的話，不需要指定使用者，直接`mysql -p`後輸入密碼登入。

- 不登入查詢資料庫
  - 顯示 MySQL 伺服器中資料庫資訊：`mysqlshow -h localhost -u root -p`
  - 顯示每個資料表中的資料的行數: `mysqlshow -h localhost -u root -p --count`
  - root 顯示 MySQL 伺服器中資料庫資訊：`mysqlshow -p`
  - root 顯示每個資料表中的資料的行數: `mysqlshow -p --count`

- 說明
  - `-h`: 指定資料庫伺服器的主機名稱或 IP
  - `-u`: 連接資料庫伺服器的使用者名稱
  - `-p`: 連接資料庫伺服器的使用者密碼

## 在 MySQL 的 CLI 上使用

1. 資料庫基本操作
    - 建立資料庫：`create database your_database_name;`
    - 顯示所有資料庫：`show databases;`
    - 刪除資料庫：`drop database your_database_name;`
    - 使用/選擇資料庫：`use your_database_name;`


2. 選擇資料庫 `USE your_database` 之後。
    - 顯示資料表：`show tables`
    - 列出資料表欄位資訊： `describe your_table_name`


3. 就可以操作 CRUD 相關指令

## 用 FileZilla 連接 EC2

1. 打開 FileZilla 的"編輯" -> "設置" 對話框，在左邊的“選擇頁面” 選擇“SFTP”， 右邊點擊“添加密鑰文件...” 按鈕，導入Amazon給的密鑰文件。
2. 打開“文件”-> “站點管理器” ， 點擊左邊的“新站點”按鈕， 在右邊“常規”標籤中填入主機信息（即AWS Console中 的 Public DNS）

  - "協議"中選"SFTP - SSH FileTransfer Protocol" ,
  - “登錄類型” 選“交互式”
  - “用戶” 中輸入用戶名(注意不能用默認的匿名用戶)
3. 點“連接”。完成。

參考資料：[用 FileZilla 連接 EC2](https://blog.csdn.net/michael1112/article/details/52537961)

## AWS EC2 設置固定IP地址

- 進入EC2控制面板，進入左側下方的“Elastic IPs”，
- 點擊“Allocate New Address”申請一個固定的IP地址。
- 選中IP地址，點擊“Associate Address”，然後選擇要使用的EC2主機即可。
- 注意：不要申請IP後閒置（不綁定到雲主機），可能被收取額外費用。

參考資料：
[(AWS EC2) Service for EC2 指定固定IP及釋放IP](http://jyeh-blog.logdown.com/posts/712216-aws-ec2-service-for-ec2-specifying-a-fixed-ip)
[Amazon EC2防止被扣费的方法](https://www.59php.com/blog/43.html)

## 使用 SSH 設定檔簡化指令與連線網址：

> 指令列都要打長長的一串，ip 還可能忘記，所以想到用別名的方式去改善
1. 首先，在 ~/.ssh 下新增 config 檔案
- 在 CLI 輸入 `vim ~/.ssh/config`
  - _info_: `~/` : 用戶根目錄。ex.`/Users/enter3017sky`

2. 設定 ssh config
![image](https://ppt.cc/fAnsSx@.png)

3. 開始使用 alias 連線

參考資料：
  - 如果對`ssh_config `配置上有問題，可以看這篇
[How to setup SSH config ：使用 SSH 設定檔簡化指令與連線網址](https://medium.com/@awonwon/how-to-setup-ssh-config-%E4%BD%BF%E7%94%A8-ssh-%E8%A8%AD%E5%AE%9A%E6%AA%94-74ad46f99818)

- 相關說明很詳細：[SSH Config 那些你所知道和不知道的事](https://deepzz.com/post/how-to-setup-ssh-config.html)

[ssh_config（5）：OpenSSH SSH客戶端配置文件 - Linux手冊頁](https://linux.die.net/man/5/ssh_config)
[增進 SSH 使用效率 - ssh_config](https://chusiang.gitbooks.io/working-on-gnu-linux/content/20.ssh_config.html)
[Using an SSH Config File - Media Temple](https://mediatemple.net/community/products/grid/204644730/using-an-ssh-config-file)
[使用 SSH config 文件](http://daemon369.github.io/ssh/2015/03/21/using-ssh-config-file)

---

## 故障排除

### Ubuntu 下 phpMyAdmin 的 404 Not Found 頁面

1. 方法1:(我用這個解決的)
  - [_The requested URL /phpmyadmin was not found on this server._](https://stackoverflow.com/questions/22893702/the-requested-url-phpmyadmin-was-not-found-on-this-server)
  - 在終端上運行此命令，`sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin`，並刷新您的phpmyadmin頁面
  
2. 方法2:
```
# link configure file to apache
$ sudo ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf.d/phpmyadmin.conf
# restart apache
$ sudo /etc/init.d/apache2 restart
```
3. 方法3: [關於phpmyadmin的問題](https://www.ubuntu-tw.org/modules/newbb/viewtopic.php?post_id=320994#forumpost320994) 
- 重新設定你的「phpmyadmin」: `sudo dpkg-reconfigure phpmyadmin`

參考資料：
[解決 Ubuntu 下 phpMyAdmin 的 404 Not Found 頁面 - kuoe0's dots](https://blog.kuoe0.tw/posts/2012/08/23/slove-phpmyadmin-404-not-found-in-ubuntu/)
[鏈結檔案 ln 指令](https://www.ibm.com/support/knowledgecenter/zh-tw/ssw_aix_71/com.ibm.aix.osdevice/cmd_linkfiles.htm)

---

### phpmyadmin 一直出現錯誤訊息

- 在 PHP 7.2 之後，count method 如果傳入 NULL 參數就會噴 `Warning：
count(): Parameter must be an array or an object that implements Countable`
目前 phpMyAdmin 尚未修正此問題，因此需要手動調整。
  - 參考資料： [Install phpMyAdmin on Ubuntu](https://blog.johnsonlu.org/install-phpmyadmin-on-ubuntu/)

- 其他參考資料：
  - [phpmyadmin - count(): Parameter must be an array or an object that implements Countable](https://stackoverflow.com/questions/48001569/phpmyadmin-count-parameter-must-be-an-array-or-an-object-that-implements-co)
  - [Problem with phpMyAdmin and PHP 7.2: “Warning in ./libraries/sql.lib.php#613 count(): Parameter must be an array or an object that implements Countable”](https://devanswers.co/problem-php-7-2-phpmyadmin-warning-in-librariessql-count/)


#### 參考資料：

[大家來學VIM（一個歷久彌新的編輯器）[六]](http://www.study-area.org/tips/vim/Vim-6.html)
[阿旺的 Linux 開竅手冊](http://wanggen.myweb.hinet.net/index.html)
[Linux常用指令整理](http://c8631506.blogspot.com/2015/04/linux_12.html)


設定留言參考資料：
[How To Install Linux, Apache, MySQL, PHP (LAMP) stack on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04)
[45 How To Install and Secure phpMyAdmin on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-18-04)
[How to Install a LAMP Stack on Ubuntu 18.04](https://www.linode.com/docs/web-servers/lamp/install-lamp-stack-on-ubuntu-18-04/#troubleshooting)
[How to setup Linux, Apache, MySQL, PHP (LAMP) Stack on Ubuntu 16.04](https://medium.com/techkylabs/how-to-install-linux-apache-mysql-php-lamp-on-ubuntu-16-04-f82a60b0d40d)
[ubuntu 默認防火牆安裝、啟用、查看狀態ufw](https://blog.csdn.net/m0_37864814/article/details/82961996)



















# 以下未整理 EC2           

## 設定 AWS EC2 
參考資料：[How To Install Linux, Apache, MySQL, PHP (LAMP) stack on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04)
- 設定 `sudo vim /etc/apache2/apache2.conf`
- `ServerName server_domain_or_IP`

不一樣的用法：[SSH 公開金鑰認證：不用打密碼登入 Linux 設定教學，安全又方便 - G. T. Wang](https://blog.gtwang.org/linux/linux-ssh-public-key-authentication/)
 ssh-copy-id -i ~/.ssh/id_rsa.pub ubuntu@52.194.8.58




### VPS 設定相關

[php.ini 中文翻譯](http://mic1491.pixnet.net/blog/post/30159855-php.ini%E8%A8%AD%E5%AE%9A%E6%AA%94%E4%B8%AD%E6%96%87%E8%AA%AA%E6%98%8E)

- 回到根目錄 `cd ~`
- 去網頁的目錄 `cd /var/www/html`
- 直接查看 PHP 錯誤訊息 `vim /var/log/apache2/error.log`。

- 直接查看 PHP 設定檔 `vim /etc/php/7.2/cli/php.ini` 
  - 在這裡改了 timezone 跟 include_path 沒有效果
  - 改了這個 `/etc/php/7.2/apache2/php.ini` 之後，查看 info.php 才有生效

- Loaded Configuration File	`/etc/php/7.2/apache2/php.ini`
- Scan this dir for additional .ini files	`/etc/php/7.2/apache2/conf.d`
- `sudo service apache2 restart`
- 


在normal模式下按下 
/ 即可进入查找模式
输入要查找的字符串并按下回车。 
Vim会跳转到第一个匹配。 
按下 n 查找下一个，
按下 N 查找上一个。 
Vim查找支持正则表达式，
例如 /vim$ 匹配行尾的 "vim" 。2016年8月8日

https://harttle.land/2016/08/08/vim-search-in-file.html


## 2018-12-14

- 回到上一個動作`u`
[vim 指令](http://www2.nsysu.edu.tw/csmlab/unix/vi_command.htm)




- [在Mac設定Apache、PHP、MySQL](https://medium.com/@hyWang/%E5%9C%A8mac%E8%A8%AD%E5%AE%9Aapache-php-mysql-694430084d3a)
[英文版 完全照著做了ＸＤ](https://websitebeaver.com/set-up-localhost-on-macos-high-sierra-apache-mysql-and-php-7-with-sslhttps)
  - 到 it work! 之後就不能用了。有空再研究。


[stmt 教學](https://websitebeaver.com/php-pdo-prepared-statements-to-prevent-sql-injection)



- 查看 mysql 的配置狀態：`php -r 'phpinfo();' | grep -i mysqli` 










  21、檢視網路狀態命令
# netstat -antp #檢視所有網路連線
# netstat -lntp #只檢視監聽的埠資訊
# lsof -p pid #檢視程序開啟的檔案控制代碼
# lsof -i:80 #檢視埠被哪個程序佔用


- 找出 IP 位址：`ifconfig |grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}'`
  - `-o` 只顯示匹配字元


- 檢視伺服器IP連線數: `netstat -tun | awk '{print $5}' | cut -d: -f1 |sort | uniq -c | sort -n`
  - `-tun`：-tu 是顯示 tcp 和 udp 連線，n 是以 IP 地址顯示
  - `cut -d：-f1`：cut 是一個選擇性顯示一行的內容命令，-d 指定：為分隔符，-f1 顯示分隔符後的第一個欄位。
  - `uniq -c`：報告或刪除文中的重複行，-c 在輸出行前面加上出現的次數
  - `sort -n`：根據不同型別進行排序，預設排序是升序，-r 引數改為降序，-n 是根據數值的大小進行排序


- 返回此前目錄:只需要輸入 `cd –` 即可返回此前目錄。



'strict' => false,
into config/database.php within mysql array

- 最後在 `add_comments.php` 裡面 `var_dump($variable)`所有的變數，發現 `if($stmt->execute())` 的結果是 false，然後最後 `$conn->error` 印出 `General error: 1364 Field 'user_ID' doesn't have a default value`，發現 user_id 是 0，但這個也蠻奇怪的，在自己的伺服器跟mentor的伺服器都沒遇到，或許有設定配置的問題。最後在 phpmyadmin 直接設定預測值為 null，就正常運作了。
[4個MySQL 資料庫基本除錯技巧](https://www.qa-knowhow.com/?p=4631)


# 2018-12-15

設定哪些IP可以或不可以登入這台電腦

在/etc資料夾下有兩個檔案：hosts.allow 和 hosts.deny，前者是用來設定哪些IP可以登入這台電腦，後者則是用來設定哪些IP不能登入這台電腦。
我們可以在終端機輸入以下的指令：
[Ubuntu - SSH 的安裝與設定 和 設定SSH遠端連線功能](https://sites.google.com/site/linuxcooltea/home/ubuntu-she-dingssh-yuan-duan-lian-xian-gong-neng)


2.錯誤原因：
（1）檢查數據表的各個字段拼寫是否正確；
（2）檢查插入的變量的值，使用語句var_dump($xxx)，查看此變量值格式、數值是否正確；
（3）檢查數據表的NULL字段，使用命令desc table_name，當某一個或多個字段屬性為not null時，而卻沒有數據插入，則會導致插入數據錯誤。（這是本案例出現錯誤的原因）











- PDO 很好的教學文：[Re-introducing PDO – the Right Way to Access Databases in PHP](https://www.sitepoint.com/re-introducing-pdo-the-right-way-to-access-databases-in-php/)
[PHP Data Objects (PDO) 簡易使用說明(1)-啟用PDO讀取資料庫資料](https://pjchender.blogspot.com/2015/08/php-data-objects-pdo.html)




DSN （數據源名稱） 編輯
Data Source Name (DSN)的PDO命名慣例為：PDO驅動程序的名稱，後面為一個冒號，再後面是可選的驅動程序連接數據庫變量信息，如主機名、端口和數據庫名。


# __Linux__ 指令：


## `locate`

- `locate 檔案名稱`：依據 /var/lib/mlocate 內的資料庫記載，找出使用者輸入的關鍵字檔名。
  - ex. `locate php.ini`，就會列出這個檔案的所有路徑
  - `-i` : 不分大小寫
- `updatedb`：根據 /etc/updatedb.conf 的設定去搜尋系統硬碟內的檔名，並更新 /var/lib/mlocate 內的資料庫檔案；
- `find`

參考資料:[Linux 檔案與目錄管理](http://linux.vbird.org/linux_basic/0220filemanager.php#find)

## `id`

- `id -u`: 查詢自己是否為 root，如果是 0 就是 root。
- `-u`: 顯示使用者 ID。
- `-F`、`-un`: 顯示實際的帳號名稱。

## `sudo`

- `sudo -i`: login 運行登錄 shell 作為目標用戶;也可以指定命令。用 `logout` 登出 root。
- `sudo -s`: shell 運行 shell 作為目標用戶;也可以指定命令。用 `exit` 離開 root 權限。

## `who`

- `who`: 列出所有使用者及簡單的資訊。

```js
enter3017sky console  Dec 12 13:18
enter3017sky ttys001  Dec 16 00:01
enter3017sky ttys002  Dec 17 12:05
  ```

- `who am i`: 列出使用者及簡單的資訊。
  - ex.`enter3017sky ttys001  Dec 16 00:01`

- `whoami`: 列出使用者名稱。
  - `enter3017sky`
- `w`: 列出所有使用者以及更詳細的資訊。

```
15:19  up 5 days,  2:01, 3 users, load averages: 2.85 3.25 3.81
USER     TTY      FROM              LOGIN@  IDLE WHAT
enter3017sky console  -                三13   5days -
enter3017sky s001     -                日00       - w
enter3017sky s002     -                12:05      12 ssh ec2
```

### `nslookup`

- 這是用來查詢或反查詢 DNS 的指令。
  - ex. `nslookup google.com`




### date

- 查看日期的指令。

### cal

- 這是用來叫出日曆的指令。





















- `alias`: 設定命令別名
- `ifconfig`: 查看、設定、開關網路介面狀態
  - UP: 這個標誌指出這個介面是開放的，可以發送和接收資料。
  - DOWN: 這個標誌指出這個介面是關閉的，也就是說，此時不能為主機發送和轉發包。
  - LOOPBACK
  - RUNNING: 這表示該介面已經被系統識別。
  - MULTICAST: 這表示介面支援多路傳送位址。
- `route`: 路由是此網跟彼網溝通的紐帶。用於查詢和設定路由表。
- `hostname`: 查看網路連線的主機名稱
- `host`: 查詢某個功能變數或主機名稱所對應的所有 IP 位址
- `nslookup`: 跟 host 基本上一樣。這個命令有兩種模式，互動式、非互動式，如果沒有傳遞任何參數給它、它就會進入互動式
- `tcpdump`: 是網路維運人員搜尋問題的好工具。透過不同的命令列選項來改變抓包狀態。
  - ex. 如果想捕獲 119.75.219.38 接收或發送的 http 的封包，將其結果產生詳細的報告。可以用下列的指令：`tccpdump tcp port 80 and host 119.75.219.38 > net_stat.txt`


-[查看系统 hostname 设置](http://yacca.github.io/2013/08/13/hostname-in-mac-osx.html)


- `apt-get update`
軟體資料庫同步：apt-get update 會根據 /etc/apt/sources.list 中設定到 APT Server 去更新軟體資料庫，在任何更新之前最好都先做這一個動作，讓軟體資料保持在最新的狀況之下。/etc/apt/sources.list 可以用 apt-setup 來設定。

