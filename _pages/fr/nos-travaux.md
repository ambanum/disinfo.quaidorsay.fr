---
permalink: /fr/nos-travaux
permalink_en: /en/our-work
permalink_zh-Hant: /zh-Hant/our-work
title: Nos travaux
navbar_items:
  - <a href="/" class="header_mainnav_link">Accueil</a>
  - <a href="!SITE_URL!/fr#nos-actions" class="header_mainnav_link">Nos actions</a>
  - <a href="/fr/nos-travaux" class="header_mainnav_link">Nos travaux</a>
---

# Nos travaux

{% include breadcrumb.html %}

<h3>Nos travaux précédents</h3>

{% include our-tools/tool.html
size="small"
icon="tool"
title="Open Terms Archive"
subtitle="Suivre les engagements contractuels des principaux fournisseurs de services en ligne."
desc="Open Terms Archive est un outil libre et ouvert de suivi et d’archivage des évolutions des conditions générales d’utilisation des principaux fournisseurs de services en ligne. Il permet aux défenseurs des droits des utilisateurs, aux régulateurs et à toute personne intéressée de suivre les évolutions de ces conditions."
sublink-label="Découvrir"
sublink-href="https://opentermsarchive.org/fr" %}

{% include our-tools/tool.html
size="small"
icon="tool"
title="Scripta Manent"
subtitle="Explorez les documents contractuels des principaux fournisseurs de services en ligne et comparez leur évolution au fil du temps."
desc="Scripta Manent est un outil en ligne qui permet de mesurer les changements entre deux dates d'un document contractuel de son choix. Précieux pour les consommateurs, pour les juristes, pour le régulateur (qui peut mesurer la sincérité des engagements des plateformes), pour le législateur (qui peut analyser la logique par laquelle les entreprises essayent de contourner ses textes), pour les journalistes, les chercheurs en droit et les entreprises de la Legal Tech."
sublink-label="Essayer"
sublink-href="/fr/open-terms-archive/scripta-manent" %}

{% include our-tools/tool.html
size="small"
icon="tool"
title="Encyclopédie"
subtitle="Améliorez vos pratiques et outils"
desc="Une ressource ouverte et collaborative qui documente les meilleures pratiques, outils et acteurs, permettant à toutes les personnes qui luttent contre la manipulation de l'information d'améliorer la compétence de l'écosystème tout entier."
sublink-label="Explorer"
sublink-href="/encyclopedia" %}

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Information Manipulation Analyzer: chercher des campagnes de manipulation de l'information sur Twitter."
desc="Explorer un narratif à travers la volumétrie, les langues utilisées, les utilisateurs actifs, les mots clés associés, les médias, les comportements inauthentiques coordonnés et un graphique d'interactions."
sublink-label="Voir"
sublink-href="https://github.com/ambanum/information-manipulation-analyzer"
%}

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Social Networks Graph Generator"
desc="Recréer le réseau d'intéractions des comptes Twitter sur un hashtag ou un mot (ou groupe de mots) donné."
sublink-label="Voir"
sublink-href="https://github.com/ambanum/social-networks-graph-generator"
%}

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Bot Finder : calculer la probabilité qu'un compte Twitter soit un bot"
desc="Etiqueter un compte comme « bot » est plus complexe qu’il n’y paraît. Certains comptes sont tour à tour utilisés par des bots et par des humains; ces comptes, baptisés cyborgs, viennent complexifier encore davantage la détection d’un bot pur et simple. Pour aider à l'identification de comptes suspects, nous avons dévelopé un algorithme qui permet de calculer la probabilité qu'un compte donné soit un bot."
sublink-label="Voir"
sublink-href="https://github.com/ambanum/social-networks-bot-finder"
%}

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Expérimentations Open Terms Archive"
desc="Des expérimentations sont en cours afin de produire des premiers cas d’usage à partir des données générées par l’outil Open Terms Archive. Dans ce cadre, deux outils annexes sont en cours de développement : un script permettant l’extraction d’un jeu de données à partir d’un dépot de versions Open Terms Archive, et un utilitaire facilitant l’exploration de ces données."
sublink-label="Voir"
sublink-href="/fr/open-terms-archive/experimentations"
%}

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Publicités illégales : déterminez la légalité des publicités politiques"
desc="Une interface de crowdsourcing qui permet aux citoyens de voir des publicités sponsorisées sur Facebook et de faire ressortir les acteurs qui ne respectent pas la loi."
sublink-label="Voir"
sublink-href="/political-ads"
%}

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Chat collaboratif : détectez, qualifiez et réagissez collaborativement aux campagnes de désinformation"
desc="<p>Un chat qui réunit les acteurs, soutient les bonnes pratiques identifiées dans notre encyclopédie et propose les meilleurs outils via des chatbots.</p><p>Actuellement non disponible.</p>"
 %}

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Détection de robots : trouvez des clusters de robots sur Twitter "
desc="<p>Un crawler qui navigue dans les relations d’abonnement de Twitter pour identifier des groupes de comptes suspects à partir d’un compte donné. Il utilise l'API gratuite Twitter et peut donc être facilement déployé. </p><p>Basé sur une annotation manuelle de plus de 400&nbsp;comptes, nous avons également utilisé cet ensemble de données pour <a href=\"/encyclopedia/qualification/tools#reliability-assessment\">évaluer la fiabilité</a> d’outils courants de détection de bots tels que Botometer.</p>"
sublink-label="Voir"
sublink-href="/twitter-bot-clusters" %}

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Media-Scale : comparez la visibilité d'un article sur les médias sociaux à la visibilité d'un événement connu dans les médias de référence de sa région pour mettre en perspective le nombre de réactions."
desc="<p>Dans le cadre de la lutte contre la désinformation, les analyses et vérifications menées reprennent régulièrement - voire se basent sur - <strong>des données chiffrées pour mesurer l'impact d'un contenu</strong> sur une société. Il peut s'agir par exemple du nombre de réactions à ce contenu, du nombre de commentaires, ou encore du nombre de fois qu'un contenu a été partagé.</p><p>Or, ces données sont rarement <strong>mises en perspective</strong>. Plutôt que de se focaliser sur leur aspect quantitatif, nous proposons de les organiser en fonction d'une échelle de pertinence. Ainsi, en considérant le sujet du contenu plutôt que son nombre de partages, on aboutit à une <strong>échelle de référence qualitative</strong>.</p>"
sublink-label="Voir le code source"
sublink-href="https://github.com/ambanum/media-scale" %}
