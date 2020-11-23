---
permalink: /en/cgus
title: CGUs
navbar_items:
  - <a href="/" class="header_mainnav_link">Home</a>
  - <a href="!SITE_URL!/en#our-actions" class="header_mainnav_link">Our actions</a>
  - <a href="/encyclopedia" class="header_mainnav_link">Disencyclopedia</a>
---

# CGUs

{% include breadcrumb.html %}

## Suivre les engagements contractuels des principaux fournisseurs de services en ligne

CGUs est un outil libre et ouvert de **suivi et d’archivage des évolutions des conditions générales d’utilisation des principaux fournisseurs de services en ligne**.
CGUs enables users rights advocates, regulatory bodies and any interested citizen to follow the changes to these terms by being notified whenever a new version is published, and exploring their entire history. 
{: .text-lg }

### Why follow the Terms of Service?

Services are declared within CGUs with a declaration file listing all the documents that, together, constitute **the terms under which this service can be used**. These documents all have a type, such as “terms and conditions”, “privacy policy”, “developer agreement”.

En matière de manipulation de l'information, les pratiques décrites permettent de mieux **appréhender les vulnérabilités** de ces acteurs et la transcription des contraintes législatives, des recommandations des pouvoir publics ou encore des mesures volontaires mises en oeuvre permet d’**apprécier leur loyauté**.

### Case studies

- Google a modifié les conditions de validation des applications mobiles afin d’interdire les apps qui laissent supposer à tort être une application officielle et ne mentionnent pas l’existence d’une relation avec une autre entité. Cette nouvelle version des conditions interdit également les apps de développeurs qui témoignent à tort d’un lien avec une autre société ou un autre développeur. Ces mesures ferment ainsi certaines vulnérabilités exploitées pour la manipulation de l’information.

![](../../assets/img/cgus/google-case-studie.png)

- TikTok se réfère aux standards de sa communauté pour offrir à ses utilisateurs l'opportunité de signaler un contenu qui serait estimé inapproprié et irait à leur rencontre.  
[https://github.com/ambanum/CGUs-versions/commit/0d2f0386](https://github.com/ambanum/CGUs-versions/commit/0d2f0386)

- Google AdSense a modifié sa politique d’utilisation afin d’y inclure une mention relative aux pratiques trompeuses coordonnées. Celle-ci prohibe les pratiques visant à se coordonner avec d’autres sites ou comptes en dissimulant ou déformant des informations relatives à son identité lorsque le contenu est lié à des enjeux politiques, sociaux ou d’intérêt public et le fait de cibler un contenu lié à des enjeux politiques, sociaux ou d’intérêt public auprès d’utilisateurs émanant d’un pays qui n’est pas le sien, tout en altérant ou en dissimulant des informations relatives à son pays d’origine.

![](../../assets/img/cgus/google-case-studie.png)

[Découvrir d'autres études de cas](https://github.com/ambanum/CGUs/wiki/%C3%89tudes-de-cas){: .button .button-secondary}
{: .text-center }

## How it works

_Words in bold are [business domain names](https://en.wikipedia.org/wiki/Domain-driven_design)._

**Services** are **declared** within _CGUs_ with a **declaration file** listing all the **documents** that, together, constitute the **terms** under which this **service** can be used. These **documents** all have a **type**, such as “terms and conditions”, “privacy policy”, “developer agreement”…


In order to track their **changes**, **documents** are periodically obtained by fetching a web location and selecting content within the web page to remove the noise (ads, navigation menu, login fields…).

Anyone can run their own private instance and track changes on their own. However, we also publish each version on a [**public** instance](https://github.com/ambanum/CGUs-versions) that makes it easy to explore the entire history and enables notifying over email whenever a new version is recorded.
Users can [**subscribe** to **notifications**](#be-notified).

_For now, when multiple versions coexist, **terms** are only **tracked** in their English version and for the European jurisdiction._

### Exploring the versions history

From the **repository homepage** [CGUs-versions](https://github.com/ambanum/CGUs-versions), open the folder of the service of your choice. You will see the set of documents tracked for that service, now click on the document of your choice. The latest version (updated hourly) will be displayed.

_Pour plus de détails consultez notre [wiki](https://github.com/ambanum/CGUs#exploring-the-versions-history)_

### Be notified

You can [subscribe](https://59692a77.sibforms.com/serve/MUIEAKuTv3y67e27PkjAiw7UkHCn0qVrcD188cQb-ofHVBGpvdUWQ6EraZ5AIb6vJqz3L8LDvYhEzPb2SE6eGWP35zXrpwEFVJCpGuER9DKPBUrifKScpF_ENMqwE_OiOZ3FdCV2ra-TXQNxB2sTEL13Zj8HU7U0vbbeF7TnbFiW8gGbcOa5liqmMvw_rghnEB2htMQRCk6A3eyj) to receive an email whenever a document is updated in the database.

**Beware, this service is in beta and you are likely to receive a large amount of notifications!** You can unsubscribe by replying to any email you will receive.

_Pour plus de détails consultez notre [wiki](https://github.com/ambanum/CGUs#be-notified)_

## Contributing

L’outil est construit sous la forme d’un **logiciel libre et collaboratif**, ce qui signifie que chacun peut contribuer à son amélioration et à l’ajout de documents et de fournisseurs de services à suivre.

- Terms of Service Didn’t Read (ToSDR)
L’association Terms of Service Didn’t Read (ToSDR) avait développé un outil similaire, [TOSBack](https://tosback.org/) et a ainsi transféré ses moyens et documents suivis depuis plusieurs années vers notre outil. 

- Direction Générale des Entreprises  
La Direction générale des entreprises (DGE), à travers le pôle d’expertise de la régulation du numérique (PEReN), contribue à l'outil en développant de nouvelles fonctionnalités, comme le suivi des images et des documents au format PDF.

{% include ctabloc.html %}
