"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"c07a7d534ff34cfb2b139a33af45c709",url:"./2020/12/24/第一篇Hexo blog文章——Hexo + Gitee 部署个人博客/index.html"},{revision:"78488d09c2e11eaed0266f18b46c378a",url:"./2020/12/25/Gitkarken Pro版本的破解使用/index.html"},{revision:"9709c5e02a95baecae00068bce41728e",url:"./2020/12/27/同济校友世纪互联白票/index.html"},{revision:"cf312d524e98ce58eeb13309af6ae922",url:"./2020/12/28/给hexo Butterfly扩展图标/index.html"},{revision:"26400ecf829abc1d86f76fac94a7b3b2",url:"./2021/01/02/20210102寒假第一交流会——黑屏见翻车？不！我在检测认真质量/index.html"},{revision:"f5e05ab7f3f7f3d904ac19b465644a1f",url:"./2021/01/10/Python入门首选，Requests 库的基本使用/index.html"},{revision:"853793f4552dde8285742c0f592af047",url:"./2021/01/15/Python爬取股吧评论+情感分析/index.html"},{revision:"1943c6e289c1972ad7ac99c9369bf3b9",url:"./2021/01/17/Pandas网页Table表格型数据爬虫+快代理实战/index.html"},{revision:"3a83fbfc15755cdbe40e9953adc74c82",url:"./2021/01/24/20210124CITPython交流+WebScraper可视化爬虫/index.html"},{revision:"61c272e750e7cff3ed14d4a7aeee8f4c",url:"./2021/01/31/Python3网络爬虫开发实战教程线上整理/index.html"},{revision:"88568d265d203b01fa8882c88121e0d6",url:"./2021/02/01/Cloud Sharing/index.html"},{revision:"280db6e300f1804e257628a39dd4c897",url:"./2021/02/02/Mac下Aria2c安装配置（附Win版Aria2懒人包）/index.html"},{revision:"9e9868ed37bf4801f794bc3ed057f928",url:"./2021/02/03/记MagicBook （Pro）黑苹果安装系统安装教程/index.html"},{revision:"39a154af96e10e5fe7edf3207ce5ca24",url:"./2021/02/11/您没有权限打开应用程序——更新到Big Sur？/index.html"},{revision:"3e126bc7b2d97f7ef071d0c9cc9e0c24",url:"./2021/02/13/第一讲 市场调研的涵义及内容/index.html"},{revision:"2f6b368641be93b002437b90d844aa63",url:"./2021/02/14/第二讲 市场调研流程/index.html"},{revision:"a486d3f349a0aa5a0ce9dc83a3743523",url:"./404.html"},{revision:"5fa49b83787977679aeff9d13cb8bf3b",url:"./archives/2020/12/index.html"},{revision:"260a56457eff063843a92bb177433b2b",url:"./archives/2020/index.html"},{revision:"d529d53358f069533caca4833876ffd9",url:"./archives/2021/01/index.html"},{revision:"3d0a8cd092d5fd34b739c15f4471c9c3",url:"./archives/2021/02/index.html"},{revision:"401157122ffd3f96eb02aa43d44cd5cc",url:"./archives/2021/index.html"},{revision:"be07296046b8c796730cb2998ea6b820",url:"./archives/2021/page/2/index.html"},{revision:"d1b9c320c73829e0c8cc8da6a3d3b4b7",url:"./archives/index.html"},{revision:"e02b23c891e22ce474a3c29c6e6eb09b",url:"./archives/page/2/index.html"},{revision:"446cde9eebed730bdac549233421ea8d",url:"./categories/白票/index.html"},{revision:"79f2f606d956ca393eaeea62299d3061",url:"./categories/黑苹果/index.html"},{revision:"8e4260156158f9ac2065703a52b9c6bd",url:"./categories/爬虫/index.html"},{revision:"513970bab8da8dce4e485e525026569e",url:"./categories/破解/index.html"},{revision:"9faef8dc4aa4cba1f6d640fd2a55127d",url:"./categories/市场调研/index.html"},{revision:"caca982b0c312f5246487a2b22d61aee",url:"./categories/Aria2/index.html"},{revision:"a57ae974a6ca95924749fa6c64868109",url:"./categories/CIT/index.html"},{revision:"f45bc515fc00c462569b6c1127590a75",url:"./categories/Cloud/index.html"},{revision:"e694ffcb9c96ef3d4817acc8695da48d",url:"./categories/Hexo/index.html"},{revision:"694854f5a4ef7ebcf77f97ce44b9622d",url:"./categories/index.html"},{revision:"3b9f4bdbd44734a6c553a07d1ac8f31c",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"419e578dbc27d1e13e894814741f3c71",url:"./Gallery/desktop.html"},{revision:"3cf6be26b5024bbb89df00e75cc7d137",url:"./Gallery/index.html"},{revision:"d74ce21c3aabdadd057be0a946a600b9",url:"./image/pwaicons/manifest.json"},{revision:"85c51bd2fb0d1ec9ec3d1a8c0938e6b7",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"ef9a589a36960810a2b5a8d8b4c53608",url:"./link/index.html"},{revision:"45285824f058a46442a70daf8b336060",url:"./music/index.html"},{revision:"aa9cc2d95535f87b85b48081fe0b3c31",url:"./page/2/index.html"},{revision:"4db631488dc5b3319566fa554a4279a7",url:"./tags/白票/index.html"},{revision:"070015e09d3d93e397bfe2267d4611c5",url:"./tags/多系统/index.html"},{revision:"72ec2ed407d197b23cd2af904831efaa",url:"./tags/分享/index.html"},{revision:"e841ef276d3f057b21561e8a02a888f4",url:"./tags/共享/index.html"},{revision:"6374e1d6993e8088b4a33594ea51b5c3",url:"./tags/黑科技/index.html"},{revision:"2334347f39ee1e46eec2c7313d3cdedd",url:"./tags/黑苹果/index.html"},{revision:"e2db58ab037f2d29c79fcb848f931093",url:"./tags/爬虫/index.html"},{revision:"bd8d4bd52015d88ff6d642006a177a3d",url:"./tags/破解/index.html"},{revision:"b652d319b53627108b489608af082ef2",url:"./tags/情感分析/index.html"},{revision:"b15d3bf523190727ceb20208b8de824d",url:"./tags/市场调研/index.html"},{revision:"b09eabc97af5ab0ea770a368e3d81aaf",url:"./tags/图标/index.html"},{revision:"48809ac3edd7e5fd818fe87e7ee528cd",url:"./tags/选课/index.html"},{revision:"99693174e50dce251f6439a55dc5da13",url:"./tags/自动化/index.html"},{revision:"12031cdeb85a5c412b4dd1df9ce3993f",url:"./tags/Aria2/index.html"},{revision:"9c29879c24d8bac253e2342d07556dc7",url:"./tags/CIT/index.html"},{revision:"dc3aa40149cea22e4daae4a81a61705b",url:"./tags/Cloud/index.html"},{revision:"985c930bab9ce7600e3c9b5f2e93e300",url:"./tags/Hexo/index.html"},{revision:"f513189633d1ba2d5c4576f430106f42",url:"./tags/index.html"},{revision:"578f9482ade5678698ba4e541153c2aa",url:"./tags/MOOC/index.html"},{revision:"73249380c495876cf83bb3ef4aa2fe8f",url:"./tags/Pandas/index.html"},{revision:"084f9e0259b1ffa492395ba88e26b68f",url:"./tags/Python/index.html"},{revision:"8186f01b8850d368bc4bc1c0e2284559",url:"./tags/WebScraper/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();