---
permalink: /en/cgus/experiments
breadcrumb_items:
 - url: /en/our-tools
   label: Our tools
 - url: /en/cgus
   label: CGUs
title: CGUs Experiments
navbar_items:
  - <a href="/" class="header_mainnav_link">Home</a>
  - <a href="!SITE_URL!/en/#our-actions" class="header_mainnav_link">Our actions</a>
  - <a href="/en/our-tools" class="header_mainnav_link">Our tools</a>
js_files:
  - assets/js/vendor/d3/d3.5.16.0.min.js
  - assets/js/vendor/c3/c3.0.7.20.min.js
  - assets/js/cgus/chart.js
  - assets/js/vendor/simple-datatables/simple-datatables.2.1.14.min.js
  - assets/js/cgus/datatables.js
css_files:
  - assets/js/vendor/c3/c3.0.7.20.min.css
---

# CGUs Experiments

{% include breadcrumb.html %}

Experiments are ongoing so as to produce use cases using CGUs data. To this end, two tools are currently under development : a script allowing to generate a dataset from a CGUs versions repository, and a python library easing the exploration process for these data. 
{: .text-lg }

## Dataset

A first dataset has been published [here](https://github.com/ambanum/CGUs-versions/releases) and contains the version history of all tracked CGUs. The [`CGUs-stats`](https://github.com/ambanum/CGUs-stats/) tool can help programatically explore these data.


## Readability Across Time

A first use case is the tracking of the _Flesch-Kincaid_ readability measure throughout a document's version history.

{% include cgus/chart.html %}

## Stats

Descriptive statistics have also been generated for each tracked service as well as document type.

{% include cgus/tablestats.html %}

{% include cgus/tablestatsbytype.html %}

### Caption

_Flesch-Kincaid_ readability measure:

{% include cgus/tablelegend.html %}