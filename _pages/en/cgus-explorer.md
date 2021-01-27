---
permalink: /en/cgus/explorer
permalink_translated: /fr/cgus/explorer
breadcrumb_items:
 - url: /en/our-tools
   label: Our tools
 - url: /en/cgus
   label: CGUs
title: CGUs Explorer
navbar_items:
  - <a href="/" class="header_mainnav_link">Home</a>
  - <a href="!SITE_URL!/en/#our-actions" class="header_mainnav_link">Our actions</a>
  - <a href="/en/our-tools" class="header_mainnav_link">Our tools</a>
js_files:
css_files:	
---

{% capture hero_title %}{{ site.data.translations.cgus-explorer.hero.title[page.lang] }}{% endcapture %}
{% capture hero_subtitle %}{{ site.data.translations.cgus-explorer.hero.subtitle[page.lang] }}{% endcapture %}
{% capture hero_chapo %}{{ site.data.translations.cgus-explorer.hero.chapo[page.lang] }}{% endcapture %}
{% include hero.html title=hero_title subtitle=hero_subtitle chapo=hero_chapo %}

{% include breadcrumb.html %}
