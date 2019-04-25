---
title: Chatbots
permalink: /chatbots/
nav_order: 5
---

In order to support works against disinformation, we have wrapped the most used and useful tools as chatbots.

## 1. Analysis bot (using [Botometer](/detection/social-bots/#1-botometer))

This tool gives users the probability that Twitter accounts that have tweeted a specific content are authentic.

All that a user has to do is send a link to one piece of content to the bot via the "Analysis" channel of the [website](https://desinfo.quaidorsay.fr). It will then automatically be notified that the analysis has begun. It can last up to forty minutes and is based on Botometer results and data.

The bot assesses the probability that the accounts that have tweeted said content (up to 100 accounts) during the last seven days are robots.

It displays respectively the percentage of **shares** by these accounts:
- that have a high probability to have been made by bots
- that have a high probability have been by humans
- for which it is unclear

As well as the percentage of these **accounts** themselves that are:
- very likely to be bots
- very likely to be humans
- unclear in nature

The overall goal of the bot is to determine as accurately as possible the artificial quality of the spread of specific (for instance, detected) content.

## 2. Detection bot (using [Buzzsumo](/detection/Commercial-trends-tools#3-buzzsumo))

This detection bot uses results provided by Buzzsumo to notify users of suspicious content, _i.e._ possibly disinformation.

It is accessible via the "Detection" channel of the website. Results are based on chosen sources (media outlets previously picked directly on Buzzsumo by the user). The bot provides the name of the source relaying the content, its publication date, title and a short introduction, the total number of engagements with the content as well as the specific number of engagement per social platform. Here, these platforms are Facebook, Twitter, Pinterest and Reddit.
