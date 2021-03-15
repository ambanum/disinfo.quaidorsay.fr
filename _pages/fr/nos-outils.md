---
permalink: /fr/nos-outils
permalink_en: /en/our-tools
permalink_zh-Hant: /zh-Hant/our-tools
title: Nos outils
navbar_items:
  - <a href="/" class="header_mainnav_link">Accueil</a>
  - <a href="!SITE_URL!/fr#nos-actions" class="header_mainnav_link">Nos actions</a>
  - <a href="/fr/nos-outils" class="header_mainnav_link">Nos outils</a>
---

# Nos outils

{% include breadcrumb.html %}

{% include our-tools/tool.html
icon="tool"
title="Open Terms Archive"
subtitle="Suivre les engagements contractuels des principaux fournisseurs de services en ligne."
desc="Open Terms Archive est un outil libre et ouvert de suivi et d’archivage des évolutions des conditions générales d’utilisation des principaux fournisseurs de services en ligne. Il permet aux défenseurs des droits des utilisateurs, aux régulateurs et à toute personne intéressée de suivre les évolutions de ces conditions."
button-label="Découvrir"
button-href="/fr/open-terms-archive" %}

{% include our-tools/tool.html
icon="tool"
title="Encyclopédie"
subtitle="Améliorez vos pratiques et outils"
desc="Une ressource ouverte et collaborative qui documente les meilleures pratiques, outils et acteurs, permettant à toutes les personnes qui luttent contre la manipulation de l'information d'améliorer la compétence de l'écosystème tout entier."
button-label="Explorer"
button-href="/encyclopedia" %}

{% include our-tools/tool.html
icon="tool"
title="Publicités illégales"
subtitle="Déterminez la légalité des publicités politiques"
desc="<p>Une interface de crowdsourcing qui permet aux citoyens de voir des publicités sponsorisées sur Facebook et de faire ressortir les acteurs qui ne respectent pas la loi.</p><p>Actuellement uniquement disponible pour la France, notre code est libre et aimerions collaborer avec vous pour l'étendre à d'autres pays.</p>"
sublink-label="Envoyez-nous un email !"
sublink-href="mailto:bureau.ambnum@diplomatie.gouv.fr?subject=AdsLegality"
button-label="Classifier"
button-href="/political-ads" %}

{% include our-tools/tool.html
icon="tool"
title="Chat collaboratif"
subtitle="Détectez, qualifiez et réagissez collaborativement aux campagnes de désinformation"
desc="Un chat qui réunit les acteurs, soutient les bonnes pratiques identifiées dans notre encyclopédie et propose les meilleurs outils via des chatbots. Si vous lisez ceci, vous devriez probablement y être 😉"
sublink-label="Envoyez-nous un email !"
sublink-href="mailto:bureau.ambnum@diplomatie.gouv.fr?subject=CollaborationChat"
button-label="Rejoindre"
button-href="/collaborate" %}

{% include our-tools/tool.html
icon="tool"
title="Détection de robots"
subtitle="Trouvez des clusters de robots sur Twitter "
desc="<p>Un crawler qui navigue dans les relations d’abonnement de Twitter pour identifier des groupes de comptes suspects à partir d’un compte donné. Il utilise l'API gratuite Twitter et peut donc être facilement déployé. </p><p>Basé sur une annotation manuelle de plus de 400&nbsp;comptes, nous avons également utilisé cet ensemble de données pour <a href=\"/encyclopedia/qualification/tools#reliability-assessment\">évaluer la fiabilité</a> d’outils courants de détection de bots tels que Botometer.</p>"
button-label="Lire la méthodologie"
button-href="/twitter-bot-clusters" %}

{% include our-tools/tool.html
icon="tool"
title="Media-scale"
subtitle="Comparez la visibilité d'un article sur les médias sociaux à la visibilité d'un événement connu dans les médias de référence de sa région pour mettre en perspective le nombre de réactions."
desc="<p>Dans le cadre de la lutte contre la désinformation, les analyses et vérifications menées reprennent régulièrement - voire se basent sur - <strong>des données chiffrées pour mesurer l'impact d'un contenu</strong> sur une société. Il peut s'agir par exemple du nombre de réactions à ce contenu, du nombre de commentaires, ou encore du nombre de fois qu'un contenu a été partagé.</p><p>Or, ces données sont rarement <strong>mises en perspective</strong>. Plutôt que de se focaliser sur leur aspect quantitatif, nous proposons de les organiser en fonction d'une échelle de pertinence. Ainsi, en considérant le sujet du contenu plutôt que son nombre de partages, on aboutit à une <strong>échelle de référence qualitative</strong>.</p>"
button-label="Utiliser l'API"
button-href="https://github.com/ambanum/media-scale#api" %}
