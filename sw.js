"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Serok's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"208a5abb8eb5888947dee7b6685fc9ec",url:"./2020/12/24/第一篇Hexo-blog文章/index.html"},{revision:"b21d49b71cab4b1519d3d014e1db580a",url:"./2020/12/25/Gitkarken在6.50之后的破解使用Pro版本/index.html"},{revision:"344a2a05c69347be303d21b7e4f51219",url:"./2020/12/27/同济校友世纪互联白女票/index.html"},{revision:"22a0ca2ccdec50a4ce3aa27b106c6759",url:"./2020/12/28/给hexo Butterfly扩展图标/index.html"},{revision:"445a4e4ecb7a509c524737188d643daa",url:"./2021/01/01/hello-world/index.html"},{revision:"c10d5d02fe9eed427b814c873c275b2b",url:"./404.html"},{revision:"4ae0eb22757ed11b92504927d0481dbf",url:"./archives/2020/12/index.html"},{revision:"9eb3d52ec97afa720bcfcb972e7f7686",url:"./archives/2020/index.html"},{revision:"449d29af821455c82c8d85f8759fcff3",url:"./archives/2021/01/index.html"},{revision:"d2bd62f559125a105215e93db7a4c9b0",url:"./archives/2021/index.html"},{revision:"4b1c168e25c7a5986b887a6fa8c2acff",url:"./archives/index.html"},{revision:"d21a10a2dc44e1663301e6e8681d8278",url:"./categories/Hexo/index.html"},{revision:"b02f0d7fe26286f096d4174515dbd1ea",url:"./categories/index.html"},{revision:"8b4d719325cda4b76876b9f0f0f88412",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"399a930061f1507675f7507c161946ed",url:"./Gallery/desktop.html"},{revision:"c3fe2f59750a8a0a4175505e4c8d2c66",url:"./Gallery/index.html"},{revision:"b0651c768ddcdc30d780ae317e06221e",url:"./image/pwaicons/manifest.json"},{revision:"6e9d8b2fee2300f0240731ae2ef60ba3",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"ab92b2927b44603d0ecb3d900adcc8ef",url:"./link/index.html"},{revision:"7982c23cb5be3d842bfbf67259f44781",url:"./music/index.html"},{revision:"fe5422a2962db6344dc13eb783b3c6dd",url:"./tags/Hexo/index.html"},{revision:"ef43316ffb347b101f68f4ee904e4f67",url:"./tags/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();