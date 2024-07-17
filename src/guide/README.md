---
title: 使用教程
icon: lightbulb
---

## 项目配置

### 1.直接下载release包到本地解压
```:no-line-numbers
选择版本，如果电脑cpu是64或者32位就选择 MWA-win-x86_64-version.zip
如果是其他的试试 MWA-win-aarch64-version.zip
解压到任意命名文件夹，
```
### 2.运行文件夹内MAAPiCli.exe(具体操作如下)
```:no-line-numbers
右键MAAPiCli.exe，以管理员身份运行
```
### 3.选择adb路径
```:no-line-numbers
1.自动选择（auto detect）
需要用户开启模拟器且模拟器支持adb连接
2.手动输入(manual input)
手动输入adb_path和adb_address
mumu12模拟器在模拟器安装目录/shell文件夹内有adb.exe,adb.exe的文件地址就是adb_path
mumu12模拟器adb_address默认为127.0.0.1:16384
```
### 4.如何检测adb连接

[win模拟器支持](https://maa.plus/docs/zh-cn/manual/device/windows.html)

[mac模拟器支持](https://maa.plus/docs/zh-cn/manual/device/macos.html)

[linux模拟器支持](https://maa.plus/docs/zh-cn/manual/device/linux.html)

[mumu12模拟器如何连接adb](http://mumu.163.com/help/20230214/35047_1073151.html)

雷电模拟器端口：
> emulator-5554

> 127.0.0.1:5555

推荐使用雷电、mumu模拟器
    
### 5.命令行窗口页面介绍
```:no-line-numbers
controller:模拟器，如若不显示请连接adb
resource:资源文件
tasks:任务列表
连接完adb之后，MAAPiCli窗口会出现六个选项，简单来说就是：
    1.切换模拟器adb（默认连接完以后就不用管了）
    2.切换资源路径（默认，正常情况不允许切换）
    3.添加任务
    4.移动任务
    5.删除任务
    6.运行任务
    7.退出MAAPiCli
操作流程
添加任务（会在tasks里面显示）
删除不需要的任务
移动任务的先后顺序
运行任务
```
**MAAPiCli拥有保存记录，下次使用可以直接重复上一次的运行任务以达到解放双手的目的。**
## 视频教程
[MWA视频教程](https://www.bilibili.com/video/BV1vQbWe4EsK/?spm_id_from=333.337.search-card.all.click)
