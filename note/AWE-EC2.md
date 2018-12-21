`man sudo_root`
`ifconfig`
`info`
`sudo apt-get update`


- 更新： `sudo apt update && sudo apt upgrade && sudo apt dist-upgrade`
- 安裝 lamp-server 套件： `sudo tasksel install lamp-server`
- 安裝 mysql: `sudo apt install phpmyadmin`


sudo mysql -u root mysql

- 設定 mysql> `UPDATE user SET plugin='mysql_native_password' WHERE User='root';`
- 設定 mysql> FLUSH PRIVILEGES;
ubuntu@ip-172-31-43-98:~$ sudo mysql_secure_installation


- cd 到這： `cd /var/www/html`
- 設定權限：`sudo chown ubuntu /var/www/html`
- clone 檔案過去 EC2 ：`git clone https://github.com/enter3017sky/message_borad.git`
