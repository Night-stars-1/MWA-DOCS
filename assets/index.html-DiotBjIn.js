import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,a as n}from"./app-BuV44qCI.js";const i={},l=n(`<h2 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置"><span>项目配置</span></a></h2><h3 id="_1-直接下载release包到本地解压" tabindex="-1"><a class="header-anchor" href="#_1-直接下载release包到本地解压"><span>1.直接下载release包到本地解压</span></a></h3><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>选择版本，如果电脑cpu是64或者32位就选择 MWA-win-x86_64-version.zip</span></span>
<span class="line"><span>如果是其他的试试 MWA-win-aarch64-version.zip</span></span>
<span class="line"><span>解压到任意命名文件夹，</span></span></code></pre></div><h3 id="_2-运行文件夹内maapicli-exe-具体操作如下" tabindex="-1"><a class="header-anchor" href="#_2-运行文件夹内maapicli-exe-具体操作如下"><span>2.运行文件夹内MAAPiCli.exe(具体操作如下)</span></a></h3><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>右键MAAPiCli.exe，以管理员身份运行</span></span></code></pre></div><h3 id="_3-选择adb路径" tabindex="-1"><a class="header-anchor" href="#_3-选择adb路径"><span>3.选择adb路径</span></a></h3><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1.自动选择（auto detect）</span></span>
<span class="line"><span>需要用户开启模拟器且模拟器支持adb连接</span></span>
<span class="line"><span>2.手动输入(manual input)</span></span>
<span class="line"><span>手动输入adb_path和adb_address</span></span>
<span class="line"><span>mumu12模拟器在模拟器安装目录/shell文件夹内有adb.exe,adb.exe的文件地址就是adb_path</span></span>
<span class="line"><span>mumu12模拟器adb_address默认为127.0.0.1:16384</span></span></code></pre></div><h3 id="_4-如何检测adb连接" tabindex="-1"><a class="header-anchor" href="#_4-如何检测adb连接"><span>4.如何检测adb连接</span></a></h3><p><a href="https://maa.plus/docs/zh-cn/manual/device/windows.html" target="_blank" rel="noopener noreferrer">win模拟器支持</a></p><p><a href="https://maa.plus/docs/zh-cn/manual/device/macos.html" target="_blank" rel="noopener noreferrer">mac模拟器支持</a></p><p><a href="https://maa.plus/docs/zh-cn/manual/device/linux.html" target="_blank" rel="noopener noreferrer">linux模拟器支持</a></p><p><a href="http://mumu.163.com/help/20230214/35047_1073151.html" target="_blank" rel="noopener noreferrer">mumu12模拟器如何连接adb</a></p><p>雷电模拟器端口：</p><blockquote><p>emulator-5554</p></blockquote><blockquote><p>127.0.0.1:5555</p></blockquote><p>推荐使用雷电、mumu模拟器</p><h3 id="_5-命令行窗口页面介绍" tabindex="-1"><a class="header-anchor" href="#_5-命令行窗口页面介绍"><span>5.命令行窗口页面介绍</span></a></h3><div class="language-" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>controller:模拟器，如若不显示请连接adb</span></span>
<span class="line"><span>resource:资源文件</span></span>
<span class="line"><span>tasks:任务列表</span></span>
<span class="line"><span>连接完adb之后，MAAPiCli窗口会出现六个选项，简单来说就是：</span></span>
<span class="line"><span>    1.切换模拟器adb（默认连接完以后就不用管了）</span></span>
<span class="line"><span>    2.切换资源路径（默认，正常情况不允许切换）</span></span>
<span class="line"><span>    3.添加任务</span></span>
<span class="line"><span>    4.移动任务</span></span>
<span class="line"><span>    5.删除任务</span></span>
<span class="line"><span>    6.运行任务</span></span>
<span class="line"><span>    7.退出MAAPiCli</span></span>
<span class="line"><span>操作流程</span></span>
<span class="line"><span>添加任务（会在tasks里面显示）</span></span>
<span class="line"><span>删除不需要的任务</span></span>
<span class="line"><span>移动任务的先后顺序</span></span>
<span class="line"><span>运行任务</span></span></code></pre></div><p><strong>MAAPiCli拥有保存记录，下次使用可以直接重复上一次的运行任务以达到解放双手的目的。</strong></p><h2 id="视频教程" tabindex="-1"><a class="header-anchor" href="#视频教程"><span>视频教程</span></a></h2><p><a href="https://www.bilibili.com/video/BV1vQbWe4EsK/?spm_id_from=333.337.search-card.all.click" target="_blank" rel="noopener noreferrer">MWA视频教程</a></p>`,21),p=[l];function t(r,h){return e(),s("div",null,p)}const o=a(i,[["render",t],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/guide/","title":"使用教程","lang":"zh-CN","frontmatter":{"title":"使用教程","icon":"lightbulb"},"headers":[{"level":2,"title":"项目配置","slug":"项目配置","link":"#项目配置","children":[{"level":3,"title":"1.直接下载release包到本地解压","slug":"_1-直接下载release包到本地解压","link":"#_1-直接下载release包到本地解压","children":[]},{"level":3,"title":"2.运行文件夹内MAAPiCli.exe(具体操作如下)","slug":"_2-运行文件夹内maapicli-exe-具体操作如下","link":"#_2-运行文件夹内maapicli-exe-具体操作如下","children":[]},{"level":3,"title":"3.选择adb路径","slug":"_3-选择adb路径","link":"#_3-选择adb路径","children":[]},{"level":3,"title":"4.如何检测adb连接","slug":"_4-如何检测adb连接","link":"#_4-如何检测adb连接","children":[]},{"level":3,"title":"5.命令行窗口页面介绍","slug":"_5-命令行窗口页面介绍","link":"#_5-命令行窗口页面介绍","children":[]}]},{"level":2,"title":"视频教程","slug":"视频教程","link":"#视频教程","children":[]}],"git":{"createdTime":1721222314000,"updatedTime":1721222314000,"contributors":[{"name":"Night-stars-1","email":"nujj1042633805@gmail.com","commits":1}]},"readingTime":{"minutes":1.52,"words":455},"filePathRelative":"guide/README.md","localizedDate":"2024年7月17日"}');export{o as comp,b as data};