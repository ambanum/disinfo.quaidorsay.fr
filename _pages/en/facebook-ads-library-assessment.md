---
permalink: /en/facebook-ads-library-assessment
title: Facebook Ads Library Assessment
numbered_headers: true
navbar_items:
  - <a href="/en" class="header_mainnav_link">Home</a>
  - <a href="!SITE_URL!/en#our-actions" class="header_mainnav_link">Our actions</a>
  - <a href="/en/our-tools" class="header_mainnav_link">Our tools</a>
breadcrumb_items:
 - url: /en/social-media-ads
   label: Major social media political ads policies
---

# Facebook Ads Library Assessment
{: .no_toc}

{% include breadcrumb.html %}

Facebook pledges to provide public API access for seven years to political and issue-based ads. This document presents the difficulties and limitations in using this otherwise powerful tool.

{% include table-of-contents.md %}

## Introduction
{:toc}

Facebook launched the “[Ads Library](https://www.facebook.com/ads/library/)” in May 2018 in order to bring more transparency about the ads concerning political issues that are published on its platform.

The Facebook Ads Library can be explored online through a web interface, and queried by an [API](https://www.facebook.com/ads/library/api/). For each country, aggregated data is published in the form of “[reports](https://www.facebook.com/ads/library/report/)”: a web page containing dynamic tables and a downloadable CSV file.

The Ads Library initially covered the USA, was extended to the UK and Brazil in June 2018, in India on [February 21](https://newsroom.fb.com/news/2018/12/ad-transparency-in-india/), Israel on [March 17](https://www.timesofisrael.com/facebook-rolls-out-political-ad-transparency-less-than-a-month-before-polls/) and [leading up to the presidential elections](https://newsroom.fb.com/news/2019/03/a-better-way-to-learn-about-ads/) of March 31 in Ukraine, as well as to the European Union members in May 2019. All of these countries have a report, except Brazil.

## Limitations

### Public reports do not contain ad content

The data of the reports is aggregated by Facebook page or by geographic area, and it contains only the following fields:

- Page ID
- Page Name
- Disclaimer
- Amount Spent
- Number of Ads in Library

In particular, the reports provides no information about the content of the ads.

### Lack of information on ad funders

The queried fields are not filled in for all the results returned by the Ads Library API. For example, on May 16th, the funder of the ad was provided for only 791 ads on a total of 12928 ads displayed in France, just above 6%.

**Update (December 2020)**: The funding entity is now provided for 120.939 ads out of 193.752 displayed in France (62%) on December 2nd 2020.

### Incomplete API documentation

In our effort to use the [Ads Library API](https://www.facebook.com/ads/library/api/), we experienced difficulties with the documentation, either because the needed information was hard to locate or missing altogether. In particular, we ran through the following issues:

- The query parameter `search_terms` is required in some cases and optional in other cases, depending on the other query parameters in a manner that is not documented. Its value can be set to the empty string, but the semantics of such a value is not explained.
- On May 15th, 2019, the documentation stated that the query parameter `limit` could be used to specify the number of ads to return and that its value could be as high as 5000. We observed that depending on countries, setting a value higher than 250 resulted in frequent errors. On June 13rd, 2019, this parameter is no longer documented in the Ads Library API documentation, while still in use.

### Poor availability of both API and reports

Requests to the API lead frequently and unpredictably to undocumented errors. We encountered the following kind of errors:

- An HTTP error with unsuited code 400 (Bad Request) whose error body is `{"error":{"message":"(#2) Service temporarily unavailable", "type":"OAuthException", "is_transient":true, "code":2, "fbtrace_id":"..."}}`.
- An HTTP error with code 500 (Internal Server Error) whose error body is `{"error":{"code":1, "message":"An unknown error occurred", "error_subcode":99}}`.
- An HTTP error with code 500 (Internal Server Error) whose error body is `{"error":{"code":1, "message":"Please reduce the amount of data you're asking for, then retry your request"}}`. While this one has a clear message, it is triggered randomly.
- An HTTP error with code 500 (Internal Server Error) whose error body is: `500, '{"error":{"message":"An unknown error has occurred.","type":"OAuthException","code":1,"fbtrace_id":"...')`.
- An HTTP error with unsuited code 400 (Bad Request) whose [error body](https://github.com/ambanum/disinfo.quaidorsay.fr/pull/48#discussion_r289450102) is an HTTP page displaying the text “_Sorry, something went wrong. We're working on it and we’ll get it fixed as soon as we can._”.

We also observed that the CSV files of all the reports were [unavailable](https://twitter.com/michel_blancard/status/1133002243702239232) on May 27th for several hours, with no notification.

### Brittle pagination prevents batch downloads

Results to a query to the API are paginated, requiring several requests to fetch all the results. The response to each query contains a cursor to the next query. As the documentation states, this cursor is a random string that points to a specific element in the list of the results. This cursor cannot be guessed by the API client. Consequently, each request for a given query must be sent after the results of the previous query have been received, preventing parallelization and slowing down downloads.

This pagination system is brittle when the number of results is high compared to the page size, and when the list of results is mutable. The [documentation explicitly states](https://developers.facebook.com/docs/graph-api/using-graph-api/#paging) that a cursor becomes invalid when its associated element is removed from the list. We observed that progression though the pages frequently breaks irrecoverably as if the cursor became invalid, at which point going back to the first result page is the only option.

The poor availability of the API, combined with the pagination system that requires numerous requests, makes it hard to download the entirety of the Ads Library for every country and impossible for some. The USA, for instance, counts 3.8 million ads and we observed that requests cannot ask for more that 2000 ads each. To reach the last page, one has to successfully execute about 1900 requests in order, which we found **impossible to achieve in the two weeks we tried**. Furthermore, we observed that such a request takes 11 seconds on average to complete. The download is expected to take about 6 hours, independently of the equipment used by the API client since parallelization is impossible.

Despite the aforementioned challenges, the Ads Library can be downloaded exhaustively for countries that were recently added (like the member states of the European Union on June 2019) given enough time and retries. However, **this will become increasingly difficult as the stock of ads grows**, preventing thorough analysis of the impact of political ads on society in a matter of months.

**Update (December 2020)**: Downloading all the ads for the European Union and the United Kingdom takes approximately 76 hours on December 2020. We noticed that the pagination limit has to be further reduced for about half of the coutries.

### Undocumented rate limiting

The use of the API is subject to a rate limiting policy that is poorly documented of not documented at all. On such occasions, the API returns the following error with error code 400:

`{"error":{"message":"(#613) Calls to this api have exceeded the rate limit.","type":"OAuthException","code":613,"fbtrace_id":"..."}}`

We empirically determined that calling the API once every 18 seconds prevents such errors on most situations.

### Traceability of all political studies

The Facebook authentication mechanism used to provide access to the Ads Library is complex, subject to strict requirements, and designed to prevent full automation.

Access to the Ads Library API requires a “User Access Token”, which is one of the 4 types of tokens provided by the Facebook Graph API (User Access Token, App Access Token, Page Access Token, Client Token). A User Access Token is associated with a Facebook user account and a Facebook app. In order to get a User Access Token for a given app, a Facebook User has to manually log into their Facebook account (usually through a web form, using a web browser), then query the Facebook Graph API endpoint `dialog/oauth`. This endpoint is missing in the Facebook Graph API reference, and we found no other official documentation of this authentication workflow than a [tutorial](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/).

Both the creator of the app and the user querying the Ads Library API on behalf of the app (they can be the same user) must both go though the certification process needed to _publish_ ads. This certification process confirms the identity and the location of the user to Facebook by providing a copy of an official identity document with a photograph. This certification is not automated as it involves a manual review of the document by a Facebook agent. We observed that our certification requests were processed within hours, which is satisfactory.

However, a User Access Token requires frequent renewals, as it is valid for only one to two hours. Additionally, Facebook implements several technical measures that prevent automation of this renewal process. Particularly, the Facebook login form depends upon complex management of cookies and form parameters. Certified accounts must also comply to multi-factor authentication during the login process, making it even harder to automate the process.

**Update (December 2020)**: A change in the authentication process that happened between December 2019 and November 2020 now requires 2 additional steps, increasing even more the complexity to automate such process.

This means that any research done on the Ads Library is expected by Facebook to be made in chunks of two hours, after which a new token is to be obtained.

This also means that Facebook can trace any access to a political ad through their API, be it by a researcher or a citizen, to a physical person.

### No automated access to ad media

The Facebook Ads Library gives access to the URL of a snapshot of any given ad. The URL of this snapshot contains the same User Access Token that was used to query the API. However, the user that made the query must use a web browser and connect to Facebook prior to accessing the snapshot.

Here again, the technical solutions chosen by Facebook hinder the automatic download of these resources. The display of the snapshot involves a React application and API calls made using JavaScript, rather than a downloadable bundle.

This means that ad media, such as images and videos, which make most of the time the most important part of the content, is made very hard to access to researchers.

This also means that Facebook can trace any access to a political ad, be it by a researcher or a citizen, both to the physical person providing access, and to the person consulting the ad, even if they do not use the API to do so.

### Poor data integrity

In order to conduct research despite the aforementioned limitations, we [download regularly](https://desinfo.quaidorsay.fr/ads/dumps/) the content of the Ads Library using its API through [open-source code](https://github.com/ambanum/political-ads-scraper). We observed that some ads get removed from the library, in contradiction with Facebook's pledge:

> The Library contains data on every active and inactive ad about social issues, elections or politics that's run since March 2019. We'll keep each of these ads in the Library for seven years.

Date    | Total ads | New ads | Removed ads
--------|---------------|---------|------------
2019-05-16 11-55-05 | 12838 | N/A | N/A
2019-05-16 15-30-09 | 12946 | 110 | 2
2019-05-16 20-37-43 | 12934 | 56 | 68
2019-05-20 14-03-03 | 13550 | 666 | 50
2019-05-27 14-53-52 | 9288 | 695 | 4957
2019-05-27 16-23-19 | 9277 | 2 | 13
2019-05-27 16-30-54 | 9277 | 0 | 0

To put it otherwise, **Facebook removed 31% of ads in the French library over the week of the European parliamentary elections, including at least 12 ads that were illegal under French law**. This fundamentally questions the usefulness of such a tool to investigate foreign interference and study the impact of political advertisement.

For example, we can count 13 ads on May 16th and 14 ads on May 20th promoting or criticizing a French MEP candidate for the EU elections. Such advertisements are [illegal in France](https://disinfo.quaidorsay.fr/encyclopedia/qualification/tools#publicité-politique-en-période-électorale). On May 27th, however, only 2 of these ads are still visible through both the search engine and the API.

Here are some examples of ads that were removed between May 20th and May 27th:

> Facebook ID 355486088508672: "Site officiel du mouvement Servir, initié par François-Xavier Bellamy."

> Facebook ID 781008475607000: "Ne vous trompez pas le 26 mai...
En Marche et les Républicains, tous identiques, tous pareils..."

> Facebook ID 619950025119849: "Retour en images sur notre Conseil National du 16 mars à Lyon:
Notre Fédération des Républicains du Doubs était représentée par 90 militants, sympathisants, cadres et élus.
Nous sommes fiers et heureux de soutenir et de faire campagne pour notre liste d’Union et de Rassemblement de la Droite et du Centre.
Autour de François Xavier Bellamy, d’Agnès Evren et d’Arnaud Danjean, notre famille politique présentent une liste de conviction composée de candidats dévoués, compétents et utiles pour défendre nos intérêts et porter haut et fort nos convictions.
Je vous invite dès maintenant à faire campagne et à appeler à voter pour l’avenir de notre pays et de notre continent."

> Facebook ID 2316760961894602: "J'ai ouvert cette page de soutien à Francois Xavier Bellamy parce que je connais ce brillant jeune homme depuis longtemps, et en particulier pour l'avoir croisé et entendu au cours de manifestations ou réunions Alliance Vita (Universités de la Vie) Paray le Monial, soirées philo etc. etc. Son engagement public est un signe d'espérance et un témoignage exemplaire au service du bien commun pour toutes les classes politiques en France. L'engagement civique d'un chrétien, catholique, tel que Francois Xavier Bellamy, apportera au débat public une vision du monde, de la France et de l'Europe mais aussi une pratique et un langage exemplaires dans leur lucidité et leur exigence de vérité et de loyauté."

**Update (December 2020)**: In the period of 17 days going between 13rd and 30th November 2020, we observed that 1016 ads displayed in Austria have been removed (3970 ads were added in the meantime). Similarly in the same period, 855 ads displayed in Belgium have been removed (4304 ads were added in the meantime)


## Additional information

You can follow the number of ads claimed to be in the public report, as well as the number of ads actually available through the API, for all European Union member states ads libraries, updated on a daily basis, on [disinfo.quaidorsay.fr/political-ads/consistency](https://disinfo.quaidorsay.fr/political-ads/consistency).
