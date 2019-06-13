---
permalink: /encyclopedia/facebook-ads-library
nav_exclude: true
---

# Facebook Ads Library

## Introduction

Facebook lauched the ["Ads Library"](https://www.facebook.com/ads/library/) in May 2018 in order to bring more transparency about the ads concerning political issues that are published through the platform.

The Facebook Ads Library can be queried by an [API](https://www.facebook.com/ads/library/api/). For each country, aggregated data are published in the form of ["reports"](https://www.facebook.com/ads/library/report/): a web page containing dynamic tables and a downloadable CSV file.

The Ads Library initially covered the USA, was extended to the UK, Brazil, India, Ukraine and Israel in June 2018 and to the European Union members in May 2019. All of these coutries have a report, except Brazil.

## Limitations

### Reports are sketchy

The data of the reports is aggregated by Facebook page or by geographic area, and it contains only the following fields:
* Page ID
* Page Name
* Disclaimer
* Amount Spent
* Number of Ads in Library

In particular, the reports provides no information about the content of the ads.

### Incomplete documentation of the API

In our effort to use the Ads Library API, we experienced difficulties with the documentation, either because the needed information was hard to locate or simply missing. In particular, we ran through the following issues :
* The query parameter `ad_active_status` has an undocumented default value equal to `ACTIVE`, while the value `ALL` is needed to fetch all the ads.
* The query parameter `search_terms` is required in some cases and optional in other cases, depending on the other query parameters in a manner that is not documented. Its value can be set to the empty string, but the semantics of such a value is not explained.
* As of May 15th, 2019, the documentation stated that the query parameter `limit` could be used to specify the number of ads to return and that its value could be as high as 5000. We observed that depending on countries, setting a value higher than 250 resulted in frequent errors. As of June 13rd, 2019, this parameter is no longer documented in the Ads Library API documentation, while still in use.

### Poor availability of the API and the reports

Requests to the API lead frequently and unpredictably to undocumented errors. We encountered the following kind of errors:
* An HTTP error with unsuited code 400 (Bad Request) whose error body is `{"error":{"message":"(#2) Service temporarily unavailable","type":"OAuthException","is_transient":true,"code":2,"fbtrace_id":"..."}}`
* An HTTP error with code 500 (Internal Server Error) whose error body is `{"error":{"code":1,"message":"An unknown error occurred","error_subcode":99}}`
* An HTTP error with code 500 (Internal Server Error) whose error body is `{"error":{"code":1,"message":"Please reduce the amount of data you're asking for, then retry your request"}}`
* An HTTP error with unsuited code 400 (Bad Request) whose [error body](https://github.com/ambanum/disinfo.quaidorsay.fr/pull/48#discussion_r289450102) is an HTTP page displaying the text "Sorry, something went wrong. We're working on it and we'll get it fixed as soon as we can."

We also observed that the CSV files of the all the reports were unavailable on May 27th for several hours.

### Pagination

Results to a query to the API are paginated, requiring several requests to fetch all the results. The response to each query contains a cursor to the next query. As the documentation states, this cursor is a random string that points to a specific element in the list of the results. This cursor cannot be guessed by the API client. Consequently, each request for a given query must be sent after the results of the previous query have been received, preventing parallelization.

This pagination system is brittle when the number of results is high compared to the page size, and when the list of results is mutable. The [documentation explicitely states](https://developers.facebook.com/docs/graph-api/using-graph-api/#paging) that a cursor becomes invalid when its associated element is removed from the list. We observed that progression though the pages frequently breaks unrecoverably as if the cursor became invalid, at which point going back to the first result page is the only option.

The poor availability of the API, combined with the pagination system that requires numerous requests, makes it hard to download the entirety of the Ads Library for every country and impossible for some. The USA counts 3.8 mission ads and we observed that requests cannot ask for more that 2000 ads each. To reach the last page, one has to successfully execute about 1900 requests in order, which we found impossible to achieve in the two weeks we tried. Furthermore, we observed that such a request takes 11 seconds in average to complete. The download is expected to take about 6 hours, independently of the equipement used by the API client since parallelization is impossible.

Despite the aforementioned challenges, the Ads Library can be downloaded exhaustively for countries that were recently added (like the members of the European Union as of June 2019) with enough time and retries. However, this becomes increasingly difficult as the stock of ads grows.

### Authentication

The Facebook authentication mechanism used to provide access to the Ads Library is complex, subject to strict requirements, and designed to prevent full automation.

Access to the Ads Library API requires a "User Access Token", which is one of the 4 types of tokens provided by the Facebook Graph API (User Access Token, App Access Token, Page Access Token, Client Token). A User Access Token is associated with a Facebook user account and a Facebook app. In order to get a User Access Token for a given app, a Facebook User has to manually log into its Facebook account (usually through a web form, using a web browser), then query the Facebook Graph API endpoint `dialog/oauth`. This endpoint is missing in the Facebook Graph API reference, and we found no other official documentation of this authentication workflow than a [tutorial](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/).

Both the creator of the app and the user querying the Ads Library API on behalf of the app (they can be the same user) must both go though the same certification process needed to publish ads. This certification process confirms the identity and the location of the user to Facebook by providing a copy of an identity document with a photograph. This certification is not automated as it invoves a manual review of the document by a Facebook agent. We observed that our certification requests were processed within hours.

A User Access Token requires frequent renewals, as it is valid for only one or two hours. Additionnaly, Facebook implements several technical measures that prevent automation of this renewal process. Particularly, the Facebook login form depends upon complex management of cookies and form parameters. Certified account must also comply to multi-factor authentication during the login process.

### Media are hard to fetch

The Facebook Ads Library does give access to the url of a snapshot of a given ad. The URL of this snapshot contains the same User Access Token that was used to query the API. However, the user that made the query must use a web browser and connect to Facebook prior to accessing the snapshot. Again, the technical solutions chosen by Facebook hinder the automatic download of these resources. The diplay of the snapshot involved a React application and API calls made using Javascript.

### Poor data integrity

We [download regularly](https://desinfo.quaidorsay.fr/ads/dumps/) the content of the Ads Library [using its API](https://github.com/ambanum/political-ads-scraper). We observed that some ads get regularly removed from the library, in contradiction with Facebook's pledge to keep the data during seven years:

> "The Library contains data on every active and inactive ad about social issues, elections or politics that's run since March 2019. We'll keep each of these ads in the Library for seven years."

Date    | Number of ads | New ads | Removed ads
--------|---------------|---------|------------
2019-05-16 11-55-05 | 12838 | NA | NA
2019-05-16 15-30-09 | 12946 | 110 | 2
2019-05-16 20-37-43 | 12934 | 56 | 68
2019-05-20 14-03-03 | 13550 | 666 | 50
2019-05-27 14-53-52 | 9288 | 695 | 4957
2019-05-27 16-23-19 | 9277 | 2 | 13
2019-05-27 16-30-54 | 9277 | 0 | 0

For example, we can count 13 ads on May 16th and 14 ads on May 20th promoting or criticizing a French MEP candidate for the EU elections. On May 27th, only 2 of these ads are still visible through both the search engine and the API.

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

### Incomplete information 

The queried fields are not filled in for all the results returned by the Ads Library API. For example, as of May 16th, the financer of the ad was provided for 791 ads on a total of 12928 ads displayed in France.
