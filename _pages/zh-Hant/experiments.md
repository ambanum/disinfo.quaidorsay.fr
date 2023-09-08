---
permalink: /zh-Hant/open-terms-archive/experiments
permalink_en: /en/open-terms-archive/experiments
permalink_fr: /fr/open-terms-archive/experimentations
breadcrumb_items:
 - url: /zh-Hant/our-work
   label: 我们的工作
 - url: /zh-Hant/open-terms-archive
   label: 服務條款開放資料庫
title: Experiments
navbar_items:
  - <a href="/" class="header_mainnav_link">首頁</a>
  - <a href="!SITE_URL!/zh-Hant/#our-actions" class="header_mainnav_link">我們的行動</a>
  - <a href="/zh-Hant/our-work" class="header_mainnav_link">我们的工作</a>
js_files:
  - assets/js/vendor/d3/d3.5.16.0.min.js
  - assets/js/vendor/c3/c3.0.7.20.min.js
  - assets/js/open-terms-archive/chart.js
  - assets/js/vendor/simple-datatables/simple-datatables.2.1.14.min.js
  - assets/js/open-terms-archive/datatables.js
css_files:
  - assets/js/vendor/c3/c3.0.7.20.min.css
---

# 「服務條款開放資料庫」的實驗

{% include breadcrumb.html %}

本系統不時進行實驗，以生成使用資料。因此，我們目前正在開發兩項工具：用於在版本資料庫裡自動生成資料集的程式腳本，以及簡化資料擷取程序的 python 資料庫。
{: .text-lg }

## 資料集

我們在[這裡](https://github.com/ambanum/OpenTermsArchive-versions/releases)發布了第一份資料集，收錄系統內每一個服務條款的版本歷程。 [「服務條款開放資料庫統計值」](https://github.com/ambanum/OpenTermsArchive-stats/)工具，可以讓您有系統地檢驗這些資料。

## 每月活躍服務比率

{% include open-terms-archive/chart.html %}

「活躍服務」指的是在一個月之中，系統有偵測到至少一次服務條款更新的數位服務。「服務總數」則是自從本系統啟用至今，至少收錄過一個服務條款版本的數位服務。

## 統計值

系統所追蹤的每一個服務，都有產生描述統計值，並標註文件類別。

{% include open-terms-archive/tablestats.html %}

{% include open-terms-archive/tablestatsbytype.html %}

### 附註

Flesch-Kincaid 易讀性量表：

{% include open-terms-archive/tablelegend.html %}
