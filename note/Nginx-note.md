# Nginx 學習心得

[How To Set Up Nginx Server Blocks (Virtual Hosts) on Ubuntu 16.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04)

- 看著這篇做，終於搞定了XD

**設定網路監聽**

- 第一種設定監聽的 IP 位址： `listen address[:port] [default_server]`
- 第二種設定監聽通訊埠： `listen port [default_server]`

**以名稱為基礎的虛擬主機設定： `server_name name`**

- 這裡的主機，就是指此 server 區塊對外提供的虛擬主機。設定了主機的名稱並設定好 DNS，使用者就可以使用這個名稱向此虛擬主機發送請求了。

**以 IP 為基礎的虛擬主機設定**

設定以 IP 為基礎的虛擬主機，即為 nginx 伺服器提通的每台虛擬主機設定一個不同的 IP，因此需要將網路卡設定為同時能夠監聽多個 IP 位址。

**設定 location 區塊**

`location [ = | ~ | ~* | ^~ ] uri { ... }`

uri 變數是待符合的請求字串，可以是不包含正規表達的字串，如 _/myserver.php_ ; 也可以是包含有正規表達的字串，如 _\.php$_。標準 uri 或 正規 uri。




# 2019-02-28

## AWS-EC2 Nginx 環境配置

- 主機是 AWS EC2

[How To Install Nginx on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04)
[How To Install Linux, Nginx, MySQL, PHP (LEMP stack) on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-ubuntu-18-04)



### Ubuntu 指令相關

- `netstat -ntpl`: 查詢已使用端口
- `dpkg --get-selections`: 查詢已安裝套件
- `dpkg --get-selections | grep php-fpm`: 查詢 _php-fpm_ 是否已安裝

`sudo service php7.2-fpm restart`
`sudo service php7.2-fpm status`

#### 查看 Ubuntu 預設開啟自動啟動的程序，如果沒有的話使用 enable 增加排程

`ls -lt /etc/systemd/system/multi-user.target.wants/`
`systemctl enable nginx`
`systemctl enable php71-php-fpm`
`systemctl enable mysqld`



## AWS EC2 之 Nginx 配置

```js
# Node express Blog 的配置

server {
        listen 80;
        root /var/www/html/blog;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name enter3017sky.tw;

        location / {
               try_files $uri $uri/ =404;
               # proxy_pass http://enter3017sky.tw:3000;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}


# 虛擬主機
server {
        # 監聽的 IP 和通訊埠
        listen 80;
        root /var/www/html/express-blog;
        index index.php index.html index.htm;
        # 主機名稱
        server_name blog.enter3017sky.tw;

        location / {
                proxy_pass http://enter3017sky.tw:3000;
        }
}

server {
        listen 80;
        root /var/www/html/message_board;
        index index.php index.html index.htm;
        server_name forum.enter3017sky.tw/;

        location /message_board {
               try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }
}



// /etc/nginx/snippets/fastcgi-php.conf

# regex to split $uri to $fastcgi_script_name and $fastcgi_path
fastcgi_split_path_info ^(.+\.php)(/.+)$;

# Check that the PHP script exists before passing it
try_files $fastcgi_script_name =404;

# Bypass the fact that try_files resets $fastcgi_path_info
# see: http://trac.nginx.org/nginx/ticket/321
set $path_info $fastcgi_path_info;
fastcgi_param PATH_INFO $path_info;

fastcgi_index index.php;
include fastcgi.conf;

```




```js

server {
        listen 80;
        server_name forum.enter3017sky.tw;
        root /var/www/html/message_board;
        index index.php index.html index.htm;

        # 移除 nginx 版本資訊
        server_tokens off;

        # error page
        error_page 404 /404.html;
        location = 404.html {
            root /var/www/html;
        }

        # 首頁(錯誤的網址也倒回首頁)
        location / {
                try_files $uri $uri/ /index.php;
        }

        location /login {
                rewrite ^/login?$ /login.php;
        }

        location /register {
                rewrite ^/register?$ /register.php;
        }

        location /pages {
            set $args '';
            rewrite ^index.php\?pages=(.*)$  /pages/?;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

}



```





### Mac 配置 nginx

> 從 apache 改成 nginx

- 查看狀態

Mac 的 Apache 目前是設定是自動開啟，但是最近開始接觸 nginx，然後要整理一下留言板，想說先在本機端弄弄，所以 `sudo apachectl status` 先查看 apache 的狀態。然後它叫我自己開瀏覽器看。

```
Go to http://localhost:80/server-status in the web browser of your choice.
Note that mod_status must be enabled for this to work.
```

- `apachectl configtest`: 檢查設定，跟 `nginx -t` 一樣意思。

透過 `nginx -t`，可以得知是檢查哪個路徑底下的設定檔



- `sudo apachectl stop`: 停止 apache，讓我們換成 nginx。

我已經為 nginx 建立了簡單的配置，資料夾也指向我要的目錄(/cores/forum)了，但是不知道為什麼不能開啟 index.php，後來在這篇 [參考資料](https://coderwall.com/p/dgwwuq/installing-nginx-in-mac-os-x-maverick-with-homebrew)看到，文中提到如果是 brew 安裝的 nginx，預設的目錄在 `/usr/local/Cellar/nginx/{nginx 的版本號(nginx -v 查看)}/html`，後來驗證了，沒錯ＱＱ

不過這邊的方式，是直接更改預設的配置 「_sudo vim /usr/local/etc/nginx/nginx.conf_」，或許也是解決問題的方法，但跟我在弄 ubuntu 時 [參考這篇](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04) 的方式不一樣，

/usr/local/Cellar/nginx/1.2.3/html




---


參考資料 [Nginx + MySQL + PHP 7 + phpMyAdmin on Mac / wordpress](https://www.spreered.com/nginx-mysql-php-7-phpmyadmin-on-mac-wordpress/)
https://www.sylvaindurand.org/setting-up-a-nginx-web-server-on-macos/
https://dev.to/chiefoleka/how-to-setup-nginx-and-php71-with-fpm-on-mac-os-x-without-crying-4m8


### 安裝 php

- `brew install php` 跑了一堆東西之後的系統提示

```
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php7_module /usr/local/opt/php/lib/httpd/modules/libphp7.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

<!-- 設定檔可以在以下的目錄找到 -->
The php.ini and php-fpm.ini file can be found in:
    /usr/local/etc/php/7.3/

To have launchd start php now and restart at login:
  brew services start php
Or, if you don't want/need a background service you can just run:
  php-fpm
```

### 安裝 phpmyadmin

brew install phpmyadmin

```
To enable phpMyAdmin in Apache, add the following to httpd.conf and
restart Apache:
    Alias /phpmyadmin /usr/local/share/phpmyadmin
    <Directory /usr/local/share/phpmyadmin/>
        Options Indexes FollowSymLinks MultiViews
        AllowOverride All
        <IfModule mod_authz_core.c>
            Require all granted
        </IfModule>
        <IfModule !mod_authz_core.c>
            Order allow,deny
            Allow from all
        </IfModule>
    </Directory>
Then open http://localhost/phpmyadmin
The configuration file is /usr/local/etc/phpmyadmin.config.inc.php
```

---

nginx

要手動建立目錄

mkdir -p, --parents： 如果建立新目錄的上層目錄不存在，會自動建立。另外如果加上這個參數，如果建立目錄已經存在，不會報錯。

```
mkdir -p /usr/local/etc/nginx/logs
mkdir -p /usr/local/etc/nginx/sites-available
mkdir -p /usr/local/etc/nginx/sites-enabled
mkdir -p /usr/local/etc/nginx/conf.d
mkdir -p /usr/local/etc/nginx/ssl

sudo mkdir -p /data/www
<!-- 設定 使用者:群組 -->
sudo chown :staff /data/www
<!-- 設定權限 -->
sudo chmod 775 /data/www
```

server {
        listen 80;
        server_name localhost;
        root /data/www/;

        access_log  /usr/local/etc/nginx/logs/default.access.log  main;

        location / {
                include   /usr/local/etc/nginx/conf.d/php-fpm;
        }

        location = /info {
                allow   127.0.0.1;
                deny    all;
                rewrite (.*) /.info.php;
        }

        error_page  404     /404.html;
        error_page  403     /403.html;
}
/usr/local/etc/nginx/sites-enabled/default -> /usr/local/etc/nginx/sites-available/default


###

```
談談 launchctl 這個東西

如果你稍微了解系統，應該會知道 init(sysvinit)、systemctl(systemd) 這兩個管理服務工具，而 MacOS 的管理工具就是 launchctl 來管理整個作業系統的 services 及 processes，而 Launch 分為兩種：

Launch Daemon：在開機時載入 (load) 。
Launch Agent：在使用者登入時載入。
```

https://shazi.info/macos-%E4%B8%8A%E7%9A%84-launchctl-daemon-agent-%E7%AE%A1%E7%90%86/

###

staff

chown -R enter3017sky:staff /var/lib/php/

**Warning: session_start(): open(/var/tmp/..., O_RDWR) failed: Permission denied (13) in /data/www/php/forum/check_login.php on line 4
**

參考資料[nginx+php-fpm環境でのCakePHPで&quot;Warning (2): session_start()&quot;エラーが出る - Qiita](https://qiita.com/ymt93/items/b8299575bb39bfd6fa9a)


### nginx 啟動、重新啟動、停止

啟動 nginx 非常的簡單，就是輸入 `nginx`，如果沒有權限，加上 `sudo nginx`，假如 _nginx_ 已經在運行了，可能會出現以下訊息。

Mac 或 ubuntu 在設定的時候，透過輸入 `nginx`，它會跳以下訊息，來得知吃到哪個設定檔(設定不同的 port 情況下)，蠻方便的。

```
nginx: [emerg] bind() to 0.0.0.0:5566 failed (48: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:9000 failed (48: Address already in use)
nginx: [emerg] still could not bind()
```

當然你可能會想說，到底是什麼情況呢，輸入以下指令，查看一下吧。

- 查看使用中的 port： `lsof -n -i | grep LISTEN`
- 查看使用中的 port 9090：`lsof -n -i:9090 | grep LISTEN`
- 查看使用中的 port 9000：`lsof -n -i:9000 | grep LISTEN`

重新啟動 nginx： 當設定完某個設定的時候，會馬上想要看到設定的結果如何，但首先要輸入指令，讓 nginx 重起已重新讀取設定。

- `nginx -s reload`
- `sudo nginx -s reload`

重啟後出現以下訊息的話

```
nginx: [error] invalid PID number "" in "/usr/local/var/run/nginx/nginx.pid"
```

1. 透過檢視處理程序的工具 ps ，取得 nginx 服務的主處理程序 PID： `ps -ef | grep nginx`
2. 平緩停止 nginx 服務：`sudo kill -QUIT PID_number`

參考: [MAC下Nginx丢失pid的问题解决方案 - 风一样的程序猿](https://www.wangxiuze.cn/mac/mac%E4%B8%8Bnginx%E4%B8%A2%E5%A4%B1pid%E7%9A%84%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html)

以下沒試過

```
$ sudo nginx -c /usr/local/etc/nginx/nginx.conf
$ sudo nginx -s reload
```

停止 nginx： 可能要換 apache 或種種原因而要停止時，輸入以下指令。

- `nginx -s stop`
- `sudo nginx -s stop`

```
Options:
  -?,-h         : this help
  -v            : show version and exit
  -V            : show version and configure options then exit
  -t            : test configuration and exit
  -T            : test configuration, dump it and exit
  -q            : suppress non-error messages during configuration testing
  -s signal     : send signal to a master process: stop, quit, reopen, reload
  -p prefix     : set prefix path (default: /usr/local/Cellar/nginx/1.15.9/)
  -c filename   : set configuratio2n file (default: /usr/local/etc/nginx/nginx.conf)
  -g directives : set global directives out of configuration file
```








locate nginx.conf

/Applications/Xcode.app/Contents/Developer/usr/share/xcs/Nginx/conf/nginx.conf
/Applications/Xcode.app/Contents/Developer/usr/share/xcs/Nginx/conf/nginx.conf.default
/Applications/Xcode.app/Contents/Developer/usr/share/xcs/xcsnginx/xcsnginx.conf
/usr/local/Cellar/nginx/1.15.9/.bottle/etc/nginx/nginx.conf
/usr/local/Cellar/nginx/1.15.9/.bottle/etc/nginx/nginx.conf.default
/usr/local/etc/nginx/nginx.conf
/usr/local/etc/nginx/nginx.conf.default



---

### Nginx 404 Not Found

Mac 配置 Nginx 到一半，突然想到我要怎麼看 phpmyadmin 呢？搞了許多，nginx 配置上的搞不定，再回 apache 搞搞。目前不是最完美的狀態，apache 與 nginx 不能同時打開，port 號會衝突。目前的狀態是，/usr/local/etc/nginx/sites-enabled/default






---



```php
server {
        listen 80;
        server_name forum.enter3017sky.tw;
        root /var/www/html/message_board;
        index index.php index.html index.htm;

        # 移除 nginx 版本資訊
        server_tokens off;


	location ~* \.(jpg|jpeg|gif|css|png|js|ico|html)$ {
		access_log off;
		expires max;
	}

#	location ~.*\.(js | css)?$ {
#		expires 1h;
#	}

#	location ~.*\.(gif | jpg | jpeg | png | bmp | swf)$ {
#		expires 30d;
#	}

        # error page
        error_page 404 /404.html;
        location = /404.html {
            	root /var/www/html/message_board;
        }

        location = /500.php {
            root /var/www/html;
        }

        # 首頁(錯誤的網址也倒回首頁)
        location / {
               	root /var/www/html/message_board;
		# try_files $uri $uri/ /index.php;
        }
       location /login {
                rewrite ^/login?$ /login.php;
        }

        location /pages {
            set $args '';
            rewrite ^/pages/(.*)$  /index.php?page=$1?;
        }

        location /register {
                rewrite ^/register?$ /register.php;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

}


```





### Ubuntu - Internal Server Error 500

- 由於在配置 Ubuntu 的 Nginx， `vim /var/log/nginx/error.log`，查看了一下 php 的錯誤訊息，原來出現錯誤的原因是因為，utils 裡面的函式無法重新宣告，因為我把原本的 _include_ 改成 _include\_once_。

```php
2019/03/14 14:15:22 [error] 5131#5131: *5184 
FastCGI sent in stderr: "PHP message: PHP Fatal error:  Cannot redeclare renderDelAndEditBtn()
 (previously declared in /var/www/html/message_board/utils.php:50) in /var/www/html/message_board/utils.php on line 50" while reading response header from upstream,
client: 163.13.19.80,
server: forum.enter3017sky.tw,
request: "POST /add_comment.php HTTP/1.1",
upstream: "fastcgi://unix:/var/run/php/php7.2-fpm.sock:",
host: "forum.enter3017sky.tw",
referrer: "http://forum.enter3017sky.tw/index.php?page=1"
```


###

nginx
├── -s选项，向主进程发送信号
|   ├── reload 参数，重新加载配置文件
|   ├── stop 参数，快速停止nginx
|   ├── reopen 参数，重新打开日志文件
|   ├── quit 参数，Nginx在退出前完成已经接受的连接请求
├── -t 选项，检查配置文件是否正确
├── -c 选项，用于指定特定的配置文件并启动nginx
├── -V 选项（大写），显示nginx编译选项与版本信息

php-fpm
├── -t选项，检查配置文件是否正确
├── -m选项，显示所有已安装模块
├── -i选项，显示PHP详细信息
├── -v选项，显示版本信息



### nignx location 優先級
參考文章 https://www.centos.bz/2018/12/%E6%8E%8C%E6%8F%A1nginx%E7%9A%84location%E4%BC%98%E5%85%88%E7%BA%A7/

詳細筆記 https://www.centos.bz/2018/12/nginx-%E8%AF%A6%E8%A7%A3-%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E/



configure arguments: 
--with-cc-opt='-g -O2 -fdebug-prefix-map=/build/nginx-FIJPpj/nginx-1.14.0=. -fstack-protector-strong -Wformat -Werror=format-security -fPIC -Wdate-time -D_FORTIFY_SOURCE=2'
 --with-ld-opt='-Wl,-Bsymbolic-functions -Wl,-z,relro -Wl,-z,now -fPIC' 
--prefix=/usr/share/nginx 
--conf-path=/etc/nginx/nginx.conf 
--http-log-path=/var/log/nginx/access.log 
--error-log-path=/var/log/nginx/error.log 
--lock-path=/var/lock/nginx.lock 
--pid-path=/run/nginx.pid 
--modules-path=/usr/lib/nginx/modules 
--http-client-body-temp-path=/var/lib/nginx/body 
--http-fastcgi-temp-path=/var/lib/nginx/fastcgi 
--http-proxy-temp-path=/var/lib/nginx/proxy
 --http-scgi-temp-path=/var/lib/nginx/scgi 
--http-uwsgi-temp-path=/var/lib/nginx/uwsgi 
--with-debug 
--with-pcre-jit
 --with-http_ssl_module 
--with-http_stub_status_module 
--with-http_realip_module 
--with-http_auth_request_module
 --with-http_v2_module 
--with-http_dav_module 
--with-http_slice_module 
--with-threads 
--with-http_addition_module
 --with-http_geoip_module=dynamic 
--with-http_gunzip_module 
--with-http_gzip_static_module
 --with-http_image_filter_module=dynamic 
--with-http_sub_module 
--with-http_xslt_module=dynamic
 --with-stream=dynamic 
--with-stream_ssl_module 
--with-mail=dynamic 
--with-mail_ssl_module
ubuntu@ip-172-31-43-98:/etc/nginx/sites-available$






### nginx php 一直下載

查看 sudo vim /var/log/php7.2-fpm.log

```php
[11-Mar-2019 06:25:02] NOTICE: error log file re-opened
[14-Mar-2019 16:56:45] NOTICE: Terminating ...
[14-Mar-2019 16:56:45] NOTICE: exiting, bye-bye!
[14-Mar-2019 16:56:45] NOTICE: fpm is running, pid 6364
[14-Mar-2019 16:56:45] NOTICE: ready to handle connections
[14-Mar-2019 16:56:45] NOTICE: systemd monitor interval set to 10000ms
```




server {
    listen       80;
        root /var/www/html/blog;
        server_name enter3017sky.tw;
 
    access_log /var/log/nginx/laravel_access.log;
    error_log /var/log/nginx/laravel_error.log;
 
    location / {
        index  index.php index.html index.htm;
    }
 
    if ($request_uri ~* index/?$) {
        rewrite ^/(.*)/index/?$ /$1 permanent;
    }
 
    # removes trailing slashes (prevents SEO duplicate content issues)
    if (!-d $request_filename) {
        rewrite ^/(.+)/$ /$1 permanent;
    }
 
    # removes access to "system" folder, also allows a "System.php" controller
    if ($request_uri ~* ^/system) {
        rewrite ^/(.*)$ /index.php?/$1 last;
        break;
    }
 
    # unless the request is for a valid file (image, js, css, etc.), send to bootstrap
    if (!-e $request_filename) {
        rewrite ^/(.*)$ /index.php?/$1 last;
        break;
    }
 
    # catch all
    error_page 404 /index.php;
 
    # use fastcgi for all php files
    location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
       # fastcgi_pass unix:/tmp/php-fpm.sock;
       # fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include /etc/nginx/fastcgi_params;
        fastcgi_param HTTPS off;
    }
 
    # deny access to apache .htaccess files
    location ~ /\.ht {
        deny all;
    }
}






server {
        listen 80;
        server_name forum.enter3017sky.tw;
        root /var/www/html/message_board;
        index index.php index.html index.htm;

        autoindex_exact_size on;

        # 移除 nginx 版本資訊
        server_tokens off;


         error_page 500 502 503 504 /500.html;

        location ~* \.(jpg|jpeg|gif|css|png|js|ico|html)$ {
                access_log off;
                expires max;
        }

#       }

#       location ~.*\.(gif | jpg | jpeg | png | bmp | swf)$ {
#               expires 30d;
#       }

        # error page
        error_page 404 /404.html;
        location = /404.html {
                root /var/www/html/message_board;
        }

        error_page 500 502 503 504 /500.html;

        # 首頁(錯誤的網址也倒回首頁)
        location / {
                root /var/www/html/message_board;
                # try_files $uri $uri/ /index.php;
        }

        location /login {
                rewrite ^/login?$ /login.php;
        }

        location /pages {
            set $args '';
            rewrite ^/pages/(.*)$  /index.php?page=$1?;
        }

        location /register {
                rewrite ^/register?$ /register.php;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

}




### hostname 會導去 127.0.0.1

apache 設定檔
locate httpd.conf
`sudo vim /private/etc/apache2/httpd.conf`
`sudo vim /private/etc/apache2/extra/httpd-vhosts.conf`

nginx 設定檔


老師想請問，我的 dns 都會連到 127.0.0.1，我查過 `/etc/hosts` 還有 nginx 的配置檔，還有什麼可能性嗎