---
permalink: /en/open-terms-archive/experiments
permalink_fr: /fr/open-terms-archive/experimentations
permalink_zh-Hant: /zh-Hant/open-terms-archive/experiments
breadcrumb_items:
 - url: /en/our-work
   label: Our work
 - url: /en/open-terms-archive
   label: Open Terms Archive
title: Experiments
navbar_items:
  - <a href="/" class="header_mainnav_link">Home</a>
  - <a href="!SITE_URL!/en/#our-actions" class="header_mainnav_link">Our actions</a>
  - <a href="/en/our-work" class="header_mainnav_link">Our work</a>
js_files:
  - assets/js/vendor/d3/d3.5.16.0.min.js
  - assets/js/vendor/c3/c3.0.7.20.min.js
  - assets/js/open-terms-archive/chart.js
  - assets/js/vendor/simple-datatables/simple-datatables.2.1.14.min.js
  - assets/js/open-terms-archive/datatables.js
css_files:
  - assets/js/vendor/c3/c3.0.7.20.min.css
---

# Open Terms Archive Experiments

{% include breadcrumb.html %}

Experiments are ongoing so as to produce use cases using Open Terms Archive data. To this end, two tools are currently under development : a script allowing to generate a dataset from a Open Terms Archive versions repository, and a python library easing the exploration process for these data.
{: .text-lg }

## Dataset

A first dataset has been published [here](https://github.com/ambanum/OpenTermsArchive-versions/releases) and contains the version history of all tracked CGUs. The [`OpenTermsArchive-stats`](https://github.com/ambanum/OpenTermsArchive-stats/) tool can help programatically explore these data.

## Monthly propotion of active tracked service

{% include open-terms-archive/chart.html %}

For a given month, an active service is a service for which at least one new version has been detected. The number of tracked services is the total number of services for which a version has been retrieved since the beginning of the project.

## Stats

Descriptive statistics have also been generated for each tracked service as well as document type.

{% include open-terms-archive/tablestats.html %}

{% include open-terms-archive/tablestatsbytype.html %}

### Caption

_Flesch-Kincaid_ readability measure:

{% include open-terms-archive/tablelegend.html %}
