"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"7a4bafdbe1983ea2e6a60aacfabf5bf5",url:"./10308d12.html"},{revision:"4d67099ac45aa39d88f946a04fd6e38c",url:"./1640c2dd.html"},{revision:"cb1d13abe17a3d0de59f6deaefd635cb",url:"./20e4c06c.html"},{revision:"677765473703f2059d0b5c22910a1153",url:"./28580df5.html"},{revision:"6c0e1f5e5e33b56cd4c474ecdbc7a45a",url:"./347090d0.html"},{revision:"9ff5b8c4c238afa308f5d503bae0bbc9",url:"./404.html"},{revision:"8d2e05ee5ffef6e90dbb11207bb39f46",url:"./47109d5a.html"},{revision:"6f4fe71c938535567f7999c88fb0c4b0",url:"./5496aeb4.html"},{revision:"7d20b985a1e3ba59cd189a7621d813fd",url:"./5633b72d.html"},{revision:"ce7b7236ce4bf8d2766aaa95d42bc1aa",url:"./56782db4.html"},{revision:"3b1e0ab1c4562b094ce04298a7b6a794",url:"./6e150933.html"},{revision:"84958a39877762777c370e3cc4bffae6",url:"./729dca89.html"},{revision:"2463646cfd00dc139970e3b85ab4bc16",url:"./783f1e5f.html"},{revision:"1d1389aa4653c2c00a4f04e9e6c0c4e2",url:"./857e383e.html"},{revision:"6de36613217cf0db730ed290272a2d78",url:"./91005645.html"},{revision:"7eacbed466edf648e7df773d7028d1e8",url:"./af10e3f2.html"},{revision:"20a801d0df7f84e37da03ab02512d857",url:"./archives/2020/12/index.html"},{revision:"0c23cb16192a16aa2ab9025ff8b2015e",url:"./archives/2020/index.html"},{revision:"266a27c40c39262dae61d2db534e3503",url:"./archives/2021/01/index.html"},{revision:"798f6e78f741261a3ad5aa7cf2127c5b",url:"./archives/2021/02/index.html"},{revision:"f0b20de86d0e3560e399312069695fa5",url:"./archives/2021/02/page/2/index.html"},{revision:"22701b8294e402fde2b223380338f4ac",url:"./archives/2021/index.html"},{revision:"547a859cf7e95ca0a7ae633f503f08a0",url:"./archives/2021/page/2/index.html"},{revision:"df2c576cc510c37d0641d5d3696a5b64",url:"./archives/index.html"},{revision:"978f819d8df085382c6082f202d15922",url:"./archives/page/2/index.html"},{revision:"5637ce89020e57ae952b3224e5dcd700",url:"./archives/page/3/index.html"},{revision:"9ac0f08b6e77cd2a8ae5a678cd679ffd",url:"./b7c079be.html"},{revision:"685e3b485a8ec5fb7629affbd70e0913",url:"./c271dbbf.html"},{revision:"97c7966ba896484479a3e8a4f9ce7762",url:"./categories/白票/index.html"},{revision:"9281f5f734b2adf1bb8ee7748be52601",url:"./categories/黑苹果/index.html"},{revision:"c7c9e4f2b72390d41e938182ee6760ee",url:"./categories/爬虫/index.html"},{revision:"7651a5aaf4a862bac51e769fba790a4f",url:"./categories/破解/index.html"},{revision:"8918a3dd06a60bf7458d9246abeef14a",url:"./categories/市场调研/index.html"},{revision:"bcfe5a71cc72f0b07733c2c70e0d437b",url:"./categories/Aria2/index.html"},{revision:"8eaad2fd49f6f87d3b80ccbf99f17151",url:"./categories/CIT/index.html"},{revision:"b8640f1840171ef4510779db396a9eee",url:"./categories/Cloud/index.html"},{revision:"d62a97c6079bdd78a414c5e652339319",url:"./categories/Hexo/index.html"},{revision:"5d09290bb38b552845b59f0e2c9fb67c",url:"./categories/index.html"},{revision:"3b9f4bdbd44734a6c553a07d1ac8f31c",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"78a4b8079f21821743d2526189a3b200",url:"./d8816516.html"},{revision:"bf1c836d67fcb64c0a5ab6a9badb2bc4",url:"./daaed497.html"},{revision:"37863d8508f251c26f37c95c5242d262",url:"./ee2697c6.html"},{revision:"e7488505874c8a010b8f0227982656bd",url:"./f58e0e38.html"},{revision:"1fa3b194125563de4f4a40c183d66ab2",url:"./f71317ac.html"},{revision:"e2b36123a49af0032c444484c1cbe325",url:"./fcb7524a.html"},{revision:"653db6b99d6e7e05b3af542eb3e0ca6e",url:"./Gallery/desktop.html"},{revision:"65ed653b22ef9ef7ae27e5cf7803d493",url:"./Gallery/index.html"},{revision:"75ed8dbe2fc8c4946a3a67c4a36d4032",url:"./image/pwaicons/manifest.json"},{revision:"e7f020d2f6159266df18bb9686404134",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"11e0a1bab41b66a3a43af6b696eca536",url:"./link/index.html"},{revision:"906db4f5a085c16d391a468f3e45fc33",url:"./music/index.html"},{revision:"338fda6d33d088e591bbaeb2a294dc88",url:"./page/2/index.html"},{revision:"817416e5c7ffa3b61280839b29036155",url:"./page/3/index.html"},{revision:"830c1797772973e5a6977bf8b416e5e4",url:"./tags/白票/index.html"},{revision:"45bf565608a09eef700edaadaa68227f",url:"./tags/多系统/index.html"},{revision:"bd4afd15feafbfa323ad3e8655f44b02",url:"./tags/分享/index.html"},{revision:"4e13abcdf8e1122392d8ac34e3733269",url:"./tags/共享/index.html"},{revision:"f6e6c7f0deb1b0e13363e20a154fe18d",url:"./tags/黑科技/index.html"},{revision:"6f9afdb67769c384fd72b53354844dd6",url:"./tags/黑苹果/index.html"},{revision:"404f0a8df178b856a8ce22fdc0be4417",url:"./tags/爬虫/index.html"},{revision:"aa045cb591d964551bd7fc505172433b",url:"./tags/破解/index.html"},{revision:"439a863cce6b46b61f5222502d6b17cd",url:"./tags/情感分析/index.html"},{revision:"898ca1569a595c754adb770d2b66bf79",url:"./tags/市场调研/index.html"},{revision:"59787f90a7098aa9d17a58ac663c7ef6",url:"./tags/图标/index.html"},{revision:"2d39b691803fa03a8866265dd0f069b0",url:"./tags/选课/index.html"},{revision:"e4a4c3aeb1ff8be2b132850e5ebacba4",url:"./tags/自动化/index.html"},{revision:"2d7057e04bb05623c73b25b59022dd10",url:"./tags/Aria2/index.html"},{revision:"34b7fc8dc88068ae2bfa8f69041d7c83",url:"./tags/CIT/index.html"},{revision:"7dd25bd031349c6b06ab6876c4175b9a",url:"./tags/Cloud/index.html"},{revision:"8ccdd3c2c275dc947d9f70ce6d32f44b",url:"./tags/Hexo/index.html"},{revision:"a73456b5e89d2727bea3b7c48f90b3a3",url:"./tags/index.html"},{revision:"4745dad5524d54c6f34a6ca62220d447",url:"./tags/MOOC/index.html"},{revision:"02491222994ac14072d905edf7276bc9",url:"./tags/Pandas/index.html"},{revision:"b5cad47be9aebdf70ba5721eeeaa5f48",url:"./tags/pyecharts/index.html"},{revision:"c5e934906294cfa3c309beae43a664e3",url:"./tags/Python/index.html"},{revision:"ae9fecfaa4e2bf12fe85f9916b346ebc",url:"./tags/WebScraper/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();