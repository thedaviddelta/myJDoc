# <img src="icon.png" width="26"> **myJDoc**

![Version](https://img.shields.io/badge/version-1.2-blue.svg?cacheSeconds=2592000)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> Extension for automatically changing to a selected JavaDocs version

#### 🌐 [Chrome](https://chrome.google.com/webstore/detail/myjdoc/jmojmfbhfbpnpgkkbfbhmaghgclenlfb)
#### 🦊 [Firefox](https://addons.mozilla.org/firefox/addon/myjdoc/)
#### ⭕ [Opera](https://addons.opera.com/extensions/details/myjdoc/)
#### 🌊 [Edge](https://microsoftedge.microsoft.com/addons/detail/lbckjgnglclmejkildjjkpphkmlgkdfl)


## ✨ How does it work?

This extension automatically changes JavaDocs to a selected version from every other one.
+ For JavaSE, version defaults to 8, and conversion to 11+ only works from 11+.
+ For JavaEE, selecting versions over current max (7) automatically redirect to 7.
+ For JavaFX, 11+ versions (out of Oracle docs) aren't supported.

The addon makes use of a small window for selecting the prefered version and for turning the extension on/off. It perfoms the update using some simple JS `replace` functions.


## 📝 License

Copyright © 2019 [TheDavidDelta](https://github.com/TheDavidDelta).  
This project is [MIT](./LICENSE) licensed.

<img src="banner.png" width="75%">