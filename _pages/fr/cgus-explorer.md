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

 - assets/dist/explorer.js
css_files:	
---

{% capture hero_title %}{{ site.data.translations.cgus-explorer.hero.title[page.lang] }}{% endcapture %}
{% capture hero_subtitle %}{{ site.data.translations.cgus-explorer.hero.subtitle[page.lang] }}{% endcapture %}
{% capture hero_chapo %}{{ site.data.translations.cgus-explorer.hero.chapo[page.lang] }}{% endcapture %}
{% include hero.html title=hero_title subtitle=hero_subtitle chapo=hero_chapo %}

{% include breadcrumb.html %}

<form class="form explorerform" id="form_explorer">
	<div class="form_field form_field-big">
		<label class="form_field_label" for="form_services">Service</label>
		<select class="form_field_select" name="form_services" id="form_services" tabindex="1">			
		</select>
	</div>
	<div class="form_field form_field-big">
		<label class="form_field_label" for="form_typeofdocuments">Type of documents</label>
		<select class="form_field_select" name="form_typeofdocuments" id="form_typeofdocuments" tabindex="2">
		</select>
	</div>
	<div class="form_field">
		<label class="form_field_label" for="form_firstdocumentdate">First date</label>
		<input type="date" id="form_firstdocumentdate" name="form_firstdocumentdate" tabindex="3">
	</div>
	<div class="form_field form_field-submit">
		<input type="submit" class="button" value="Compare" tabindex="5" /> 
	</div>
	<div class="form_field">
		<label class="form_field_label" for="form_seconddocumentdate">Second date</label>
		<input type="date" id="form_seconddocumentdate" name="form_seconddocumentdate" tabindex="4">
	</div>
</form>

<div class="explorerdocs">
	<pre class="precode" id="doc1"></pre>
	<div class="precode" id="doc2"></div>
</div>

<div class="notification">
	<div class="notification_content"></div>
</div>