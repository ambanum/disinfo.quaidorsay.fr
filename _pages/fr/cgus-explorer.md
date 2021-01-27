---
permalink: /fr/cgus/explorer
permalink_translated: /en/cgus/explorer
breadcrumb_items:
 - url: /fr/nos-outils
   label: Nos outils
 - url: /fr/cgus
   label: CGUs
title: CGUs Explorer
navbar_items:
  - <a href="/" class="header_mainnav_link">Accueil</a>
  - <a href="!SITE_URL!/fr#nos-actions" class="header_mainnav_link">Nos actions</a>
  - <a href="/fr/nos-outils" class="header_mainnav_link">Nos outils</a>
js_files:
  - assets/js/vendor/d3/d3.5.16.0.min.js	
  - assets/js/vendor/c3/c3.0.7.20.min.js	
  - assets/js/cgus/chart.js
  - assets/js/vendor/simple-datatables/simple-datatables.2.1.14.min.js
  - assets/js/cgus/datatables.js
css_files:	
  - assets/js/vendor/c3/c3.0.7.20.min.css
---

{% capture hero_title %}{{ site.data.translations.cgus-explorer.hero.title[page.lang] }}{% endcapture %}
{% capture hero_subtitle %}{{ site.data.translations.cgus-explorer.hero.subtitle[page.lang] }}{% endcapture %}
{% capture hero_chapo %}{{ site.data.translations.cgus-explorer.hero.chapo[page.lang] }}{% endcapture %}
{% include hero.html title=hero_title subtitle=hero_subtitle chapo=hero_chapo %}

{% include breadcrumb.html %}
