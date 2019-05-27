---
permalink: /encyclopedia/fb-ad-library
nav_order: 10
---

# Facebook Ad Library

## Limitations

### Reports are sketchy

Facebook provides reports for some countries including France. The [report covering France](https://www.facebook.com/ads/library/report/?source=archive-landing-page&country=FR) counts 15.681 ads.

The data is aggregated by sponsor, and provides no information about the content of the ads.

The CSV file was unavailable on May 27th.

### API and search engine

We [download regularly](https://desinfo.quaidorsay.fr/ads/dumps/) the content of the Ad Library [using its API](https://github.com/ambanum/political-ads-scraper). We observed that some ads get regularly removed from the library, in contradiction with Facebook's pledge to keep the data during seven years.

Date    | Number of ads | New ads | Removed ads
--------|---------------|---------|------------
2019-05-16 11-55-05 | 12838 | NA | NA
2019-05-16 15-30-09 | 12946 | 110 | 2
2019-05-16 20-37-43 | 12934 | 56 | 68
2019-05-20 14-03-03 | 13550 | 666 | 50
2019-05-27 14-53-52 | 9288 | 695 | 4957
2019-05-27 16-23-19 | 9277 | 2 | 13
2019-05-27 16-30-54 | 9277 | 0 | 0

For example, we can count 13 ads on May 16th and 14 ads on May 20th promoting or criticising François-Xavier Bellamy's campain for the EU elections. On May 27th, only 2 of those ads are still visible through both the search engine and the API.

Here are some examples of ads that were removed between May 20th and May 27th:

```
Facebook ID: 355486088508672
Text: "Site officiel du mouvement Servir, initié par François-Xavier Bellamy."

Facebook ID: 781008475607000
Text: "Ne vous trompez pas le 26 mai...
En Marche et les Républicains, tous identiques, tous pareils..."

Facebook ID: 619950025119849
Text: "Retour en images sur notre Conseil National du 16 mars à Lyon:
Notre Fédération des Républicains du Doubs était représentée par 90 militants, sympathisants, cadres et élus.
Nous sommes fiers et heureux de soutenir et de faire campagne pour notre liste d’Union et de Rassemblement de la Droite et du Centre.
Autour de François Xavier Bellamy, d’Agnès Evren et d’Arnaud Danjean, notre famille politique présentent une liste de conviction composée de candidats dévoués, compétents et utiles pour défendre nos intérêts et porter haut et fort nos convictions.
Je vous invite dès maintenant à faire campagne et à appeler à voter pour l’avenir de notre pays et de notre continent."

Facebook ID: 2316760961894602
Text: "J'ai ouvert cette page de soutien à Francois Xavier Bellamy parce que je connais ce brillant jeune homme depuis longtemps, et en particulier pour l'avoir croisé et entendu au cours de manifestations ou réunions Alliance Vita (Universités de la Vie) Paray le Monial, soirées philo etc. etc. Son engagement public est un signe d'espérance et un témoignage exemplaire au service du bien commun pour toutes les classes politiques en France. L'engagement civique d'un chrétien, catholique, tel que Francois Xavier Bellamy, apportera au débat public une vision du monde, de la France et de l'Europe mais aussi une pratique et un langage exemplaires dans leur lucidité et leur exigence de vérité et de loyauté."
```

The API suffers from frequent server-side errors. For example, since May 16th, 2019 we have not been able to downloads ads shown in Germany.
