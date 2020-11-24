---
permalink: /fr/cgus/experimentations
breadcrumb_items:
 - url: /fr/cgus
   label: Suivi des CGU's
title: Experimentation CGUs
navbar_items:
  - <a href="/" class="header_mainnav_link">Accueil</a>
  - <a href="!SITE_URL!/fr/#nos-actions" class="header_mainnav_link">Nos actions</a>
  - <a href="/encyclopedia" class="header_mainnav_link">Désencyclopédie</a>
  - <a href="/fr/cgus" class="header_mainnav_link">CGUs</a>
js_files:
  - assets/js/vendor/d3/d3.5.16.0.min.js
  - assets/js/vendor/c3/c3.0.7.20.min.js
  - assets/js/cgus/chart.js
  - assets/js/vendor/simple-datatables/simple-datatables.2.1.14.min.js
  - assets/js/cgus/datatables.js
css_files:
  - assets/js/vendor/c3/c3.0.7.20.min.css
---

# Experimentation CGUs

{% include breadcrumb.html %}

Des expérimentations sont en cours afin de produire des premiers cas d'usage à partir des données générées par l'outil CGUs. Dans ce cadre, deux outils annexes sont en cours de développement : un script permettant l'extraction d'un jeu de données à partir d'un dépot de versions CGUs, et un utilitaire facilitant l'exploration de ces données.
{: .text-lg }

## Jeu de données

Un premier jeu de données a d'ores et déjà été publié [ici](https://github.com/ambanum/CGUs-versions/releases) et permet d'explorer l'intégralité des versions collectées par l'outil. L'utilitaire [`CGUs-stats`](https://github.com/ambanum/CGUs-stats/) peut aider à l'exploration programmatique des données.

## Évolution de la lisibilité dans le temps

Le premier cas d'usage exploré est le suivi d'une mesure de lisibilité dite de _Flesch-Kincaid_ à travers l'historique d'un CGU.

{% include cgus/chart.html %}

## Statistiques 

Des statistiques decriptives ont été générées pour chaque service ainsi que pour chaque type de CGUs.

{% include cgus/tablestats.html %}

{% include cgus/tablestatsbytype.html %}

### Légende

Mesure de lisibilité de _Flesch-Kincaid_

{% include cgus/tablelegend.html %}