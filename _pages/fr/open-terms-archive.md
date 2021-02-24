---
permalink: /fr/open-terms-archive
permalink_translated: /en/open-terms-archive
title: Open Terms Archive
breadcrumb_items:
 - url: /fr/nos-outils
   label: Nos outils
navbar_items:
  - <a href="/" class="header_mainnav_link">Accueil</a>
  - <a href="!SITE_URL!/fr#nos-actions" class="header_mainnav_link">Nos actions</a>
  - <a href="/fr/nos-outils" class="header_mainnav_link">Nos outils</a>
---

# Open Terms Archive 

{% include breadcrumb.html %}

![](../../assets/img/open-terms-archive/thumb.jpg)

## Suivre les engagements contractuels des principaux fournisseurs de services en ligne

Open Terms Archive est un outil libre et ouvert de **suivi et d’archivage des évolutions des conditions générales d’utilisation des principaux fournisseurs de services en ligne**.
Il permet aux défenseurs des droits des utilisateurs, aux régulateurs et à toute personne intéressée de suivre les évolutions de ces conditions.
{: .text-lg }

### Pourquoi suivre les conditions générales d'utilisation ?

Tout fournisseur de services en ligne dispose de conditions d’utilisation définies dans un ensemble de documents contractuels qui régissent **les modalités d’interaction avec ses utilisateurs**, comme les politiques de modération des contenus, la responsabilité de l'éditeur ou encore la juridiction compétente en cas de litige.

En matière de manipulation de l'information, les pratiques décrites permettent de mieux **appréhender les vulnérabilités** de ces acteurs et la transcription des contraintes législatives, des recommandations des pouvoir publics ou encore des mesures volontaires mises en oeuvre et permettre d’**apprécier leur loyauté**.

### Études de cas

- Google a modifié les conditions de validation des applications mobiles afin d’interdire les apps qui laissent supposer à tort être une application officielle et ne mentionnent pas l’existence d’une relation avec une autre entité. Cette nouvelle version des conditions interdit également les apps de développeurs qui témoignent à tort d’un lien avec une autre société ou un autre développeur. Ces mesures ferment ainsi certaines vulnérabilités exploitées pour la manipulation de l’information. [Voir le changement](https://github.com/ambanum/OpenTermsArchive-versions/commit/98f6c).

![](../../assets/img/open-terms-archive/google-case-studie.png)

- TikTok se réfère aux standards de sa communauté pour offrir à ses utilisateurs l'opportunité de signaler un contenu qui serait estimé inapproprié et irait à leur rencontre. [Voir le changement](https://github.com/ambanum/OpenTermsArchive-versions/commit/0d2f0386).

![](../../assets/img/open-terms-archive/tiktok-case-studie.png)

- Google AdSense a modifié sa politique d’utilisation afin d’y inclure une mention relative aux pratiques trompeuses coordonnées. Celle-ci prohibe les pratiques visant à se coordonner avec d’autres sites ou comptes en dissimulant ou déformant des informations relatives à son identité lorsque le contenu est lié à des enjeux politiques, sociaux ou d’intérêt public et le fait de cibler un contenu lié à des enjeux politiques, sociaux ou d’intérêt public auprès d’utilisateurs émanant d’un pays qui n’est pas le sien, tout en altérant ou en dissimulant des informations relatives à son pays d’origine. [Voir le changement](https://github.com/ambanum/OpenTermsArchive-versions/commit/c62b7).

![](../../assets/img/open-terms-archive/google-case-studie.png)

[Découvrir d'autres études de cas](https://github.com/ambanum/OpenTermsArchive/wiki/%C3%89tudes-de-cas){: .button .button-secondary}
{: .text-center }

## Comment utiliser l'outil Open Terms Archive ?

_Les mots en gras sont les [termes du domaine](https://fr.wikipedia.org/wiki/Conception_pilot%C3%A9e_par_le_domaine)._

Les **services** sont **déclarés** dans l'outil _Open Terms Archive_ grâce à un **fichier de déclaration** listant les **documents** qui forment l'ensemble des **conditions** régissant l'usage du **service**. Ces **documents** peuvent être de plusieurs **types** : « conditions d'utilisation », « politique de confidentialité », « contrat de développeur »…

Afin de suivre leurs évolutions, les documents sont régulièrement mis à jour, en les téléchargeant depuis une adresse web et en sélectionnant leur contenu dans la page web pour supprimer le bruit (publicités, menus de navigation, champs de connexion…).

Vous pouvez disposer de votre propre instance privée de l'outil _Open Terms Archive_ et suivre vous-même les évolutions. Néanmoins, nous publions chaque version sur une [instance publique](https://github.com/ambanum/OpenTermsArchive-versions) facilitant l'exploration de l'historique et notifiant par courriels l'enregistrement de nouvelles versions.

_Actuellement, nous ne suivons que les **conditions** rédigées en anglais et concernant la juridiction européenne._

### Naviguer dans l'historique des versions

À partir de la **page d'accueil du dépôt** [OpenTermsArchive-versions](https://github.com/ambanum/OpenTermsArchive-versions), ouvrez le dossier du service de votre choix. L'ensemble des documents suivis pour ce service s'affichent, cliquez ensuite sur celui dont vous souhaitez suivre l'historique. 

_Pour plus de détails consultez notre [wiki](https://github.com/ambanum/OpenTermsArchive/blob/master/README.fr.md#naviguer-dans-lhistorique-des-versions)_.

### Recevoir des notifications 

Vous pouvez [vous abonner](https://59692a77.sibforms.com/serve/MUIEAKuTv3y67e27PkjAiw7UkHCn0qVrcD188cQb-ofHVBGpvdUWQ6EraZ5AIb6vJqz3L8LDvYhEzPb2SE6eGWP35zXrpwEFVJCpGuER9DKPBUrifKScpF_ENMqwE_OiOZ3FdCV2ra-TXQNxB2sTEL13Zj8HU7U0vbbeF7TnbFiW8gGbcOa5liqmMvw_rghnEB2htMQRCk6A3eyj) pour recevoir un courriel à chaque modification d'un document dans l'ensemble de la base.

_Pour plus de détails consultez notre [wiki](https://github.com/ambanum/OpenTermsArchive/blob/master/README.fr.md#recevoir-des-notifications)._

**Attention, ce service est en version bêta et vous risquez de recevoir de nombreuses notifications !** Vous pourrez vous désabonner en répondant à n'importe quel courriel reçu.

## Scripta Manent

Scripta Manent recense 637 conditions générales d’utilisation (CGU) ou documents légaux issus de 174  fournisseurs de services numériques et donne des outils simples pour mesurer les changements entre deux dates de son choix.

[Comparer](/fr/open-terms-archive/scripta-manent){: .button .button-secondary }

## Experimentations

Des expérimentations sont en cours afin de produire des premiers cas d'usage à partir des données générées par l'outil Open Terms Archive.

[Voir nos experimentations](/fr/open-terms-archive/experimentations){: .button .button-secondary }

## API
{: #api }

Une API permettant de trouver des termes spécifiques dans le dataset Open Terms Archive est disponible.

[Accéder à l'API](https://disinfo.quaidorsay.fr/api/open-terms-archive/){: .button .button-secondary }

## Contribuer

L’outil est construit sous la forme d’un **logiciel libre et collaboratif**, ce qui signifie que chacun peut contribuer à son amélioration et à l’ajout de documents et de fournisseurs de services à suivre.

- Terms of Service Didn’t Read (ToSDR)
L’association Terms of Service Didn’t Read (ToSDR) avait développé un outil similaire, [TOSBack](https://tosback.org/) et a ainsi transféré ses moyens et documents suivis depuis plusieurs années vers notre outil. 

- Direction Générale des Entreprises  
La Direction générale des entreprises (DGE), à travers le pôle d’expertise de la régulation du numérique (PEReN), contribue à l'outil en développant de nouvelles fonctionnalités, comme le suivi des images et des documents au format PDF.

{% include ctabloc.html %}