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
 - assets/dist/explorer.js
---

{% capture hero_title %}{{ site.data.translations.cgus-explorer.hero.title[page.lang] }}{% endcapture %}
{% capture hero_subtitle %}{{ site.data.translations.cgus-explorer.hero.subtitle[page.lang] }}{% endcapture %}
{% capture hero_chapo %}{{ site.data.translations.cgus-explorer.hero.chapo[page.lang] }}{% endcapture %}
{% include hero.html title=hero_title subtitle=hero_subtitle chapo=hero_chapo %}

{% include breadcrumb.html %}

<script type="text/javascript">
	const notificationsMsgs = {
		'browserSupport': "{{ site.data.translations.cgus-explorer.notifications.browser-support[page.lang] }}",
		'dateClosest': "{{ site.data.translations.cgus-explorer.notifications.date-closest[page.lang] }}",
		'nothingToCompare': "{{ site.data.translations.cgus-explorer.notifications.nothing-to-compare[page.lang] }}",
	};
</script>

<form class="form explorerform" id="form_explorer">
	<div class="form_field form_field-big">
		<label class="form_field_label" for="form_services">{{ site.data.translations.cgus-explorer.form.service[page.lang] }}</label>
		<select class="form_field_select" name="form_services" id="form_services" tabindex="1" required>
		</select>
	</div>
	<div class="form_field form_field-big">
		<label class="form_field_label" for="form_typeofdocuments">{{ site.data.translations.cgus-explorer.form.type[page.lang] }}</label>
		<select class="form_field_select" name="form_typeofdocuments" id="form_typeofdocuments" tabindex="2" required>
		</select>
	</div>
	<div class="form_field">
		<label class="form_field_label" for="form_firstdocumentdate">{{ site.data.translations.cgus-explorer.form.first-date[page.lang] }}</label>
		<input type="date" id="form_firstdocumentdate" min="2000-01-01" name="form_firstdocumentdate" tabindex="3" required>
	</div>
	<div class="form_field form_field-submit">
		<input type="submit" class="button" value="{{ site.data.translations.cgus-explorer.form.submit[page.lang] }}" tabindex="5" /> 
	</div>
	<div class="form_field">
		<label class="form_field_label" for="form_seconddocumentdate">{{ site.data.translations.cgus-explorer.form.second-date[page.lang] }}</label>
		<input type="date" id="form_seconddocumentdate" min="2000-01-01" name="form_seconddocumentdate" tabindex="4" required>
	</div>
</form>