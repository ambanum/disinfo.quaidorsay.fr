---
permalink: /zh-Hant/our-work
permalink_fr: /fr/nos-travaux
permalink_en: /en/our-work
title:  我们的工作
navbar_items:
  - <a href="/zh-Hant" class="header_mainnav_link">首頁</a>
  - <a href="!SITE_URL!/zh-Hant#our-actions" class="header_mainnav_link">我們的行動</a>
  - <a href="/zh-Hant/our-work" class="header_mainnav_link">我们的工作</a>
---

# 我们的工作

{% include breadcrumb.html %}

<h3>我们以前的工作</h3>

{% include our-tools/tool.html
size="small"
icon="tool"
title="服務條款開放資料庫"
subtitle="追蹤服務條款的修訂內容"
desc="<p>任何服務，隨時都可能修訂自己的服務條款。服務條款開放資料庫讓使用者權益提倡者、主管機關，以及任何關心相關議題的民眾，都可以時時追蹤服務條款的任何修訂。</p><p>现在，该工具由一个独立的集体运营。</p>"
sublink-label="開始發現"
sublink-href="/zh-Hant/open-terms-archive" %}

{% include our-tools/tool.html
size="small"
icon="tool"
title="假資料大百科"
subtitle="增進對抗假資料的方法與工具"
desc="假資料大百科是一個開放式的協作平台，紀錄最佳措施、工具與參與者，讓所有對抗資訊操弄的人，都可以增進整個社群的對抗能力。"
sublink-label="開始探索"
sublink-href="/encyclopedia" %}

{% include our-tools/tool.html
size="small"
icon="tool"
title="非法廣告"
subtitle="審閱政治廣告是否觸法"
desc="這個群眾外包的界面，可以讓民眾審閱 Facebook 上關於特定議題的付費廣告，並藉此揭露觸法者。本功能目前僅限法國地區，不過我們的原始碼是開放的，所以歡迎大家一起合作，把這項功能推廣到其他國家。"
sublink-label="開始審閱"
sublink-href="/political-ads" %}

{% include our-tools/tool.html
size="small"
icon="tool"
title="合作聊天室"
subtitle="攜手合作偵測、削弱、反擊假消息宣傳攻勢"
desc="這個即時聊天室聚集了許多參與者，支援我們在大百科裡所紀錄的最佳措施，還把我們最好的工具打造成聊天機器人。如果你正在讀這段文字，那我們八成會很想要你來加入。目前尚未提供" %}

{% include our-tools/tool.html
size="small"
icon="tool"
title="機器人偵測機"
subtitle="抓出 Twitter 上的機器人大軍"
desc="<p>這個網路爬蟲程式可以探索 Twitter 追蹤者之間的相互關係，以根據某個種子帳號來辨別一整團的可疑帳號。這個程式使用免費的 Twitter API，使用方便。</p><p>此外，根據超過400個人工標記的帳號，我們也使用了這套資料集來判定常用的機器人偵測程式（例如 Botometer ）的<a href= \"/encyclopedia/qualification/tools#reliability-assessment\">可靠程度</a>。</p>"
sublink-label="閱讀運作原理"
sublink-href="/twitter-bot-clusters" %}

{% include our-tools/tool.html
size="small"
icon="tool"
title="媒體能見度標尺"
subtitle="將某篇文章在社群網站的能見度，跟其他已知事件在當地媒體的能見度加以比較，讓我們更能洞燭該文章的反應數量。"
desc="<p>對抗假消息時，分析報告與事實查核結果往往會<strong>引用數據來測量內容對社會的衝擊力</strong>，甚至以數據本身為判斷依據。</p><p>這些數據當中，可能包含該篇文章的迴響數、文章本身的回應數，或是它被分享的次數。</p><p>然而，這些資料往往未經任何<strong>對比</strong>或對照。與其關注這些數據的數量大小，我們另闢蹊徑： 以重要性為依據來整理資料。因此，藉由考量內容主旨，而不是只看它被分享的次數，我們就能<strong>以質的層面來加以分析</strong>。</p>"
sublink-label="查看源代码"
sublink-href="https://github.com/ambanum/media-scale" %}
