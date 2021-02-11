---
permalink: /fr/open-document-archive/experimentations
permalink_translated: /en/open-document-archive/experiments
breadcrumb_items:
 - url: /fr/nos-outils
   label: Nos outils
 - url: /fr/open-document-archive
   label: Open Document Archive
title: Expérimentations
navbar_items:
  - <a href="/" class="header_mainnav_link">Accueil</a>
  - <a href="!SITE_URL!/fr#nos-actions" class="header_mainnav_link">Nos actions</a>
  - <a href="/fr/nos-outils" class="header_mainnav_link">Nos outils</a>
js_files:
  - assets/js/vendor/d3/d3.5.16.0.min.js	
  - assets/js/vendor/c3/c3.0.7.20.min.js	
  - assets/js/open-document-archive/chart.js
  - assets/js/vendor/simple-datatables/simple-datatables.2.1.14.min.js
  - assets/js/open-document-archive/datatables.js
css_files:	
  - assets/js/vendor/c3/c3.0.7.20.min.css
---

# Expérimentations Open Document Archive

{% include breadcrumb.html %}

Des expérimentations sont en cours afin de produire des premiers cas d'usage à partir des données générées par l'outil Open Document Archive. Dans ce cadre, deux outils annexes sont en cours de développement : un script permettant l'extraction d'un jeu de données à partir d'un dépot de versions Open Document Archive, et un utilitaire facilitant l'exploration de ces données.
{: .text-lg }

## Jeu de données

Un premier jeu de données a d'ores et déjà été publié [ici](https://github.com/ambanum/CGUs-versions/releases) et permet d'explorer l'intégralité des versions collectées par l'outil. L'utilitaire [`CGUs-stats`](https://github.com/ambanum/CGUs-stats/) peut aider à l'exploration programmatique des données.

## Proportion mensuelle de services actifs suivis

{% include open-document-archive/chart.html %}

Pour un mois donné, un service actif est un service pour lequel au moins une nouvelle version a été détectée. Le nombre de services suivis est le nombre total de services pour lesquels une version a été récupérée depuis le début du projet.

## Statistiques

Des statistiques descriptives ont été générées pour chaque service ainsi que pour chaque type de documents.

{% include open-document-archive/tablestats.html %}

{% include open-document-archive/tablestatsbytype.html %}

### Légende
Mesure de lisibilité de _Flesch-Kincaid_:

{% include open-document-archive/tablelegend.html %}