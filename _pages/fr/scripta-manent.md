---
permalink: /fr/open-terms-archive/scripta-manent
permalink_en: /en/open-terms-archive/scripta-manent
permalink_zh-Hant: /zh-Hant/open-terms-archive/scripta-manent
breadcrumb_items:
 - url: /fr/nos-outils
   label: Nos outils
 - url: /fr/open-terms-archive
   label: Open Terms Archive
title: Scripta Manent
navbar_items:
  - <a href="/" class="header_mainnav_link">Accueil</a>
  - <a href="!SITE_URL!/fr#nos-actions" class="header_mainnav_link">Nos actions</a>
  - <a href="/fr/nos-travaux" class="header_mainnav_link">Nos travaux</a>
js_files:
 - assets/dist/scripta-manent.js
 - assets/vendor/@gouvfr/dsfr/dist/js/dsfr.module.min.js
 - assets/vendor/@gouvfr/dsfr/dist/js/accordions.module.js
---

{% capture hero_title %}{{ site.data.translations.scripta-manent.hero.title[page.lang] }}{% endcapture %}
{% capture hero_subtitle %}{{ site.data.translations.scripta-manent.hero.subtitle[page.lang] }}{% endcapture %}
{% capture hero_chapo %}{{ site.data.translations.scripta-manent.hero.chapo[page.lang] }}{% endcapture %}
{% include hero.html title=hero_title subtitle=hero_subtitle chapo=hero_chapo %}

{% include breadcrumb.html %}

<script type="text/javascript">
	const notificationsMsgs = {
		'browserSupport': "{{ site.data.translations.scripta-manent.notifications.browser-support[page.lang] }}",
		'dateClosest': "{{ site.data.translations.scripta-manent.notifications.date-closest[page.lang] }}",
		'nothingToCompare': "{{ site.data.translations.scripta-manent.notifications.nothing-to-compare[page.lang] }}",
	};
	const legendMsg = {
		'add': '{{ site.data.translations.scripta-manent.legend.add[page.lang] }}',
		'remove': '{{ site.data.translations.scripta-manent.legend.remove[page.lang] }}'
	};
  const releaseMsgs = {
    'text': '{{ site.data.translations.scripta-manent.datasetRelease[page.lang] }}',
    'lang': '{{ page.lang }}'
  };
</script>

Scripta Manent est un outil en ligne qui permet de mesurer les changements entre deux dates d'un document contractuel de son choix. Précieux pour les consommateurs, pour les juristes, pour le régulateur (qui peut mesurer la sincérité des engagements des plateformes), pour le législateur (qui peut analyser la logique par laquelle les entreprises essayent de contourner ses textes), pour les journalistes, les chercheurs en droit et les entreprises de la Legal Tech.
{: .text-lg }

<form class="form explorerform" id="form_explorer">
	<div class="form_field form_field-big">
		<label class="form_field_label" for="form_services">{{ site.data.translations.scripta-manent.form.service[page.lang] }}</label>
		<select class="form_field_select" name="form_services" id="form_services" tabindex="1" required>
		</select>
	</div>
	<div class="form_field form_field-big">
		<label class="form_field_label" for="form_typeofdocuments">{{ site.data.translations.scripta-manent.form.type[page.lang] }}</label>
		<select class="form_field_select" name="form_typeofdocuments" id="form_typeofdocuments" tabindex="2" required>
		</select>
	</div>
	<div class="form_field">
		<label class="form_field_label" for="form_firstdocumentdate">{{ site.data.translations.scripta-manent.form.first-date[page.lang] }}</label>
		<input type="date" id="form_firstdocumentdate" min="2000-01-01" name="form_firstdocumentdate" tabindex="3" required>
	</div>
	<div class="form_field form_field-submit">
		<input type="submit" class="button" value="{{ site.data.translations.scripta-manent.form.submit[page.lang] }}" tabindex="5" />
	</div>
	<div class="form_field">
		<label class="form_field_label" for="form_seconddocumentdate">{{ site.data.translations.scripta-manent.form.second-date[page.lang] }}</label>
		<input type="date" id="form_seconddocumentdate" min="2000-01-01" name="form_seconddocumentdate" tabindex="4" required>
	</div>
</form>

<div class="datasetRelease">
	...
</div>

<div class="faq">
	<h3 class="faq_title">Foire aux questions</h3>
	<ul class="fr-accordions-group">
		<li>
			<section class="fr-accordion">
				<h3 class="fr-accordion__title">
					<button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-89">Comment ça marche ?</button>
				</h3>
				<div class="fr-collapse" id="accordion-89">
					<div class="videoContainer">
						<video controls>
							<source src="../../assets/videos/scripta-manent.mp4" type="video/mp4">
						</video>
					</div>
					<ul>
						<li>1. Choissisez le service et le type de document qui vous intéresse</li>
						<li>2. Choississez une première et une deuxième date pour lesquelles vous souhaitez effectuer une comparaison</li>
						<li>3. Cliquez sur le bouton "Comparer" et patientez brièvement</li>
					</ul>
				</div>
			</section>
		</li>
	</ul>
</div>
