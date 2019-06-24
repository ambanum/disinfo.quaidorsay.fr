---
permalink: /en/google-transparency-report-assessment
numbered_headers: true
---

# Google Transparency Report Assessment
{: .no-toc}


In August 2018, Google [added a new section](https://www.blog.google/technology/ads/introducing-new-transparency-report-political-ads/) about political advertising to its Transparency Report. Initially covering the USA, this section was expanded to the European Union [May, 2nd 2019](https://www.blog.google/around-the-globe/google-europe/eu-political-advertising-transparency-report-2019/).

This document presents the difficulties and limitations of Google’s transparency effort concerning political ads.

{% include table-of-contents.md %}

## Introduction

The section about political ads of Google’s Transparency Report comprises a [dynamic web page](https://transparencyreport.google.com/political-ads/home) to navigate and search through the ads.

The underlying data can also be downloaded as a ZIP file containing CSV files and a documentation. Providing this bundle simplifies greatly reuses of this data. In our case, assessing the quality and the consistency of the data provided by Google was much easier than if the data had been available only by an API or a web page.

Additionally, Google claims that the data can be accessed by Google Cloud BigQuery.

## Limitations

### The scope is limited to the European Parliament election

As stated in the [Political advertising on Google FAQs](https://support.google.com/transparencyreport/answer/9310667), the Transparency Report “covers any ad that mentions a political party, candidate or current officeholder for the European Parliament”. Consequently, ads paid by political parties that did not campaign for the European Parliament elections do not appear in the report.

### The Google Cloud Big Query resource is unavailable

Google [claims](https://support.google.com/transparencyreport/answer/9310667) that “The ads are published as a public data set on [Google Cloud BigQuery](https://console.cloud.google.com/marketplace/details/bigquery-public-data/google-political-ads). You can export a subset of the ads or access them programmatically.” However, we could not access the resource as of June 24th, 2019.

### Data is updated irregularly

Google claims that the data is updated weekly, which is not very frequent but acceptable.

We noticed that between June 14th 2019 and June 24th, the downloadable bundle has been updated twice: between June 14th noon and June 15th noon, and between June 18th noon and June 19th noon.

### The data model is unclear

The [documentation](https://support.google.com/transparencyreport/answer/9310667) explains that “Multiple advertisers may appear if there is more than one funding source for an ad.” However, we also observed that for 65 ads, the advertiser identity changed between June 14th and June 15th, and again between June 18th and June 19th. The old advertisers are no longer visible neither in the bundle nor the web page.

For instance, the ad [`CR517478000787193856`](https://transparencyreport.google.com/political-ads/advertiser/AR464795176020213760/creative/CR517478000787193856) was initially linked to the advertiser `AR188817757448437760` (no longer accessible), then to the advertiser `AR322201712037199872` (no longer accessible), and at least to the advertiser [`AR464795176020213760`](https://transparencyreport.google.com/political-ads/advertiser/AR464795176020213760). These 3 advertisers share the same name so we can assume that these 3 accounts are controlled by the same entity. However, the documentation does no explain why the identifier is not constant.

### Ads content is not available programmatically

Even though publishing the data as a bundle is a major requirement to enable external reuse, unfortunately this bundle only contains the metadata about the ads and not the content.

Ads can be of three types: text, image or video. We believe the textual content can be fetched using an undocumented Google API, which is cumbersome but feasible. We observed that the images are displayed in the web page using, depending on the ad, at least two different technical means involving dynamic scripts, neither of which being easy to reverse engineer. As for the videos, they are displayed by streaming and we did not assess whether the streaming is performed using standard streaming protocols.

### Poor data integrity

#### Content of removed ads are not accessible

The [documentation](https://support.google.com/transparencyreport/answer/9310667) states that:

> The content of an ad may be removed if it was not in compliance with Google Ads policies. The ad’s existing data remains in the report, but the content is replaced with a message stating that it is unavailable.

In case of policy violation, the data is indeed [replaced by a message](https://transparencyreport.google.com/political-ads/advertiser/AR210958348219056128/creative/CR439284856988368896) so it is impossible to retrieve the original content of the ad. Moreover, the clause that was violated if not mentioned.

Incidentally, the bundle does not reveals which ads were removed and the web page does not allow to search for removed ads, so it is very hard to list the advertisers that breached the Google policies on political ads.

#### Unexplained ads removal

We are regularly downloading the bundle since June 14th. The version of the bundle published June 19th was missing 212 ads. Eleven European advertisers paid for at least one such ad: [KKW Lewica Razem – Razem, Unia Pracy, RSS](https://transparencyreport.google.com/political-ads/advertiser/AR374597289391423488), [Asociația Platforma Inițiativa România](https://transparencyreport.google.com/political-ads/advertiser/AR166715924462698496), [Kansallinen Kokoomus r.p.](https://transparencyreport.google.com/political-ads/advertiser/AR210958348219056128), [Bündnis 90/Die Grünen Landesverband RLP](https://transparencyreport.google.com/political-ads/advertiser/AR50338116220747776), [Konfederacja KORWiN Braun Liroy Narodowcy](https://transparencyreport.google.com/political-ads/advertiser/AR316331969212317696), [Fratelli d'Italia Centrodestra Nazionale](https://transparencyreport.google.com/political-ads/advertiser/AR400032566754672640), [Bündnis 90/Die Grünen Baden-Württemberg](https://transparencyreport.google.com/political-ads/advertiser/AR17917091730423808), [EVOLVEDREAMSOFT SRL](https://transparencyreport.google.com/political-ads/advertiser/AR495298652231696384), [Sloboda a Solidarita ( SaS )](https://transparencyreport.google.com/political-ads/advertiser/AR185084640594231296), [Partido Popular Regional De Canarias](https://transparencyreport.google.com/political-ads/advertiser/AR288284801977286656), [Sloboda a Solidarita](https://transparencyreport.google.com/political-ads/advertiser/AR242125929453715456).

#### Altered weekly spendings

Weekly spendings about 72 advertisers were removed in the bundle dated June 19th.

In the same bundle version, 293 figures were changed. For instance, it is reported that the advertiser [`AR474748779908562944`](https://transparencyreport.google.com/political-ads/advertiser/AR474748779908562944) spent 25350€ in political ads during the week beginning May 12th 2019, while this figure was 21100€ in the previous bundle version.

### Inconsistent amounts

In order to assess the consistency of the reported amount, we verified that newer reports record higher total spendings than past reports.

The non-decreasing property of the total spending was violated for some areas in the USA and for Poland. From June 14th to June 18th, the amount of 201,300€ was reported in Poland. From June 19th, this amount decreased to 199,200€.
