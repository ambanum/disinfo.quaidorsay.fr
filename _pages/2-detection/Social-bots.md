---
title: Social-bots
permalink: /detection/social-bots/
parent: Detection
---


# Detection tools

Almost every available and open detection tool to be found relies on Twitter's API or uses Twitter data. In the rather recent field of bot detection, it seems that social media platforms other than Twitter have been left aside.

## Twitter

* [1. Botometer](/detection/social-bots#1-botometer)
* [2. TruthNest](/detection/social-bots#2-truthnest)
* [3.@probabot_](/detection/social-bots#3-probabot_)
* [4. @StattoBot](/detection/social-bots#4-stattobot)
* [5. Spottingbot (by PegaBot)](/detection/social-bots#5-spottingbot-by-pegabot)
* [6. Botson](/detection/social-bots#6-botson)
* [7. tweetbotornot](/detection/social-bots#7-tweetbotornot)
* [8. DeBot](/detection/social-bots#8-debot)
* [Student projects and others](/detection/social-bots#student-projects-and-others)

### 1. Botometer

* **By whom ?**

[Botometer](https://botometer.iuni.iu.edu/#!/) (formerly known as BotOrNot)  was created by the Observatory on Social Media [(OSoMe)](https://osome.iuni.iu.edu/), a joint project of the Network Science Institute (IUNI) and the Center for Complex Networks and Systems Research (CNetS) at Indiana University. The goal of the observatory is to study and analyze how information is spread on online social media. Botometer is but one of the tools of the OSoMe. The contributors to Botometer are Clayton A Davis, Onur Varol, Kaicheng Yang, Emilio Ferrara, Alessandro Flammini and Filippo Menczer.

* **What ?**

Botometer is a **machine learning algorithm**, which means that it has been trained to determine the probability of an account being genuinely human or bot-like and classify said account on the basis of "tens of thousands of labeled examples".

Botometer has its own an application programming interface (API) to allow users to directly check the account of their choice. It uses Twitter's API to find information related to the account and its activity (public profile, public tweets and mentions) and then "_extracts about 1,200 features to characterize the account's profile, friends, social network structure, temporal activity patterns, language, and sentiment_" before computing them.

The tool then offers a score "_based on how likely the account is to be a bot_". This score goes from 0 to 5 ; the higher the score, the more likely it is for the user of the account to be a bot. A score at 2.5 or around indicates uncertainty as to the nature of the account.  The score can be expanded into several more detailed sets of scores, some of them using only language-independent features.

One can also find what is called the "**Complete Automation Probability (CAP)**", that is to say the "probability, according to [Botometer's] models, that [an] account is completely automated, i.e., a bot". The CAP is calculated based on  the estimated overall prevalence of bots, taking into account the fact that humans are much more numerous than bots. It is therefore possible to find an account with a high score but a low CAP.

For more technical information as to its functioning please [click here](https://botometer.iuni.iu.edu/#!/publications).

* **What for ?**

The main goal of the tool is to allow for the determination of the authenticity of the nature of Twitter accounts as accurately as possible.

* **For whom ?**

In order to use Botometer, one needs to authentify oneself. Indeed, it heavily relies on Twitter's API, which requires a logged-in Twitter account. Moreover, one needs to grant the tool permissions to "_fetch user profiles and activity_" and allow users to block or unfollow users among their own followers and followees through Botometer.

* **Additional information**

The only data stored by Botometer is "_the account's ID, scores, and any feedback optionally provided by the user_".
It is not possible for Botometer to make requests on behalf of a user after this user has left the site. However, granting permission to Botometer to block or unfollow users enables posting and profile updates.


### 2. TruthNest

* **By whom ?**

[TruthNest ](https://www.truthnest.com/) is an initiative of the [Athens Technology Center](https://www.atc.gr/) (ATC) and its [innovation lab](http://ilab.atc.gr/). ATC is the project coordinator of the [Social Observatory for Disinformation and Social Media Analysis (SOMA)](http://www.disinfobservatory.org/).

ATC works on fighting disinformation and TruthNest is one of its two main tools - alongside [Truly Media](http://www.truly.media/) - destined to content verification.  Its research is financed by the European Commission and it benefits from funding from Google's Digital News Initiative.

* **What ?**

TruthNest is a tool for "_deep Twitter analytics_". Through an app, it allows users to identify suspicious accounts by giving the profile a score reflecting its probability of being automated.
It relies on key performance indicators (KPIs), metrics regarding the **activity** (tweeting density, hashtags, preferred users...) , the **network** (growth pattern, activity of the main followers...) and the degree of **influence** (likes and replies received, mentions, context, referrers...) of the account.

* **What for ?**

Like Botometer, TruthNest allow its users to determine as accurately as possible whether a Twitter account is automated or human.
Its possible use for journalists in the verification process of shared content, sources and accounts on Twitter is highlighted in its official description, as well as its benchmarking and influence indentification potentials.
Mainly, its goal is to inform users of suspicious activity of accounts they’re interested in. More than a detection tool, it also allows its users to monitor accounts in almost-real time and to produce then export analyses reports.

* **For whom ?**

To use TruthNest, one needs to sign in with a Twitter account.
The tool is described as open to a variety of actors, from independant "curious individual[s]" to journalists, investigators and marketing professionals.

* **Additional information**

TruthNest costs from 9€ (gives 20 credits, which translates into 20 analyses) to 149€ (500 credits).

### 3. @probabot_

* **By whom ?**

This [tool](https://twitter.com/probabot_) was created by web developer and journalist [Keith Collins](https://twitter.com/collinskeith), currently working for The New York Times regarding finances, tech and media matters, among others.

* **What ?**

As its Twitter description explains, @probabot_ is a "_bot that hunts bots_". It focuses on accounts tweeting about politics that have a Botometer score above 69%. The @probabot account has almost 2 000 followers.

The bot regularly published its results following this format:
name of the account + "has a Botometer score of 94.2%, suggesting the account is probably a bot (or bot-assisted)" + status of the account (activated or suspended).

Although the bot account signed in on Twitter in January 2017, it stopped its activity mid-May 2018.

* **What for ?**

This tool automatically assessed the probability of automation of specific accounts (see above).

* **For whom ?**

Being a public Twitter account, this tool is open to any Twitter user.

* **Additional information**

Creator Keith Collins has a similar project, also using Botometer, called "node-botometer". More information available [here](https://github.com/keithcollins/node-botometer).

### 4. @StattoBot

* **By whom ?**

The @StattoBot [account](https://twitter.com/StattoBot) is anonymous. However, it quotes in its pinned tweet (here used as a longer description) Caroline Orr (@RVAwonk), Ben Nimmo (@benimmo), Andrew Weisburd (@webradius), James Patrick (@J_amesp) and the OSoMe (@truthyatindiana) as references. It is located in the United Kingdom.

* **What ?**

This tool is itself a bot and was likely created in October 2017 (date of its first logging on Twitter).
It works as an interface system. To obtain the probability of an account being a bot, the user only has to adress a tweet to @StattoBot mentioning the name of the account she or he wishes to investigate but without taggin it. The format used should thus be "@StattoBot AccountName".

The bot will then reply in two tweets, one with basic statistics on the account (date of creation, total number of tweets, number of daily tweets, number of followers and followees),  and another giving the Botometer score of the account.

However, @StattoBot is only partially automated, as it regularly shares and publishes written content, mostly updating the situation of the tool.

* **What for ?**

As explained in its description, this tool is meant to be used "_to provide some statistics which might help you in forming a judgement_" as to whether an account is fake or automated, or not.

* **For whom ?**

This tool is open to any Twitter user. Since it uses Botometer, an activated Twitter account is required.

### 5. Spottingbot (by PegaBot)


* **By whom ?**

Spottingbot is a project based in Rio, Brazil, relying on and inspired by Botometer. Along with a media literacy campaign, it is the second main part of the [PegaBot](https://pegabot.com.br/)(Portuguese for Bot Buster) initiative, launched by the [Institute of Technology and Society of Rio de Janeiro](https://itsrio.org/pt/home/) (ITS Rio), the [Instituto Equidade & Tecnologia](https://tecnologiaequidade.org.br/) and [AppCívico](https://appcivico.com/pt/), a tech company focused on human rights and the use of technology to impulse social change that works with civil society organizations, private actors, politicians and governmental agents on solving social issues.

* **What ?**

Created at the end of 2018, the online platform PegaBot allowed its users to analyze the "_probability of whether a social profile is a bot or not_". Using Botometer, its experimental and open-source online tool spottingbot welcomes collaboration and indexes information on Twitter accounts ("user", "friend", "network", "temporal", "total") to help determine their authenticity.

* **What for ?**

The Twitter description of PegaBot soberly explains that the goal of the program is to help users verify if a Twitter account is a bot or not.
However, both the online tool and the media literacy campaign aim at educating and raising awareness "_on how bots and social media manipulation are related_".

* **For whom ?**

Given the early stage of the project, it is difficult to assess exactly the crowd it aims, however it is supposed to be open to everyone.

* **Additional information**

According to official communication, "_in two days, the project has gone viral in Brazil and it has been accessed by more than 200 thousand people, demonstrating there is a large demand for awareness regarding how manipulation in social media occurs_".

More technical information can be found [here](https://github.com/AppCivico/spottingbot/tree/master/documentation).
Wider information on the PegaBot initiative can be found [here](https://www.youtube.com/watch?v=wRfFalcGEoo) and [here](https://pegabot.com.br/).

### 6. Botson

* **By whom ?**

[Botson](http://botson.net) was created in San Francisco by engineer and data enthusiast Will Johnson and writer Andy Jiang.

* **What ?**

Botson is a navigator (Chrome) extension based on Botometer. Once installed, it thus requires authentification through a Twitter account.
From then on, the user will see that on its Twitter newsfeed, "_tweets from accounts that have received a “botˮ high score will be blurred and covered with information about that account_", namely this sentence: "We are XX% confident that this tweet is from a bot." (the percentage being the account's Botometer score).

Botson also offers a basic overview of metrics of the accounts scored (number of accounts checked and number of bots detected).

The code of Botson is accessible in open source.

* **What for ?**

The main goal of Botson is to detect Twitter bots in users' newsfeeds and then inform said users about the content they are exposed to through their Twitter newsfeeds. It can be considered as a form of media literacy action.
Speaking more broadly, the website of Botson explains its engagementin the fight against disinformation and the threat information manipulation can represent : "_Now, more than ever in our history, we must be ruthless in discerning the legitimacy of our information. This chrome extension is one step towards a future where bipartisan beliefs and values can co-exist supported by constructive dialogue based on a single reality._"

* **For whom ?**

Botson is open to everyone. As the extension relies on Botometer, it can be used on the condition of having an activated Twitter account. Moreover, as a specific Chrome extension, one must have Chrome installed as an Internet navigator.

### 7. tweetbotornot

* **By whom ?**

[Tweetbotornot](https://tweetbotornot.mikewk.com/) was developed by assistant Professor at the University of Missouri and Journalism and Data science student Michael W. Kearney.

* **What ?**

Tweetbotornot is not exactly a tool but an R package (including reproducible R code, documentation and explanations on its reusable R functions, tests and data sets). It uses machine learning to classify Twitter accounts as bots or authentic.

The **function tweetbotornot()** works on the basis of Twitter screen names or user IDs that the tweetbotornot user wishes to investigate.
It also accepts data returned by [rtweet](https://rtweet.info/) (a tool able to search users and tweets using specific hashtags, measure frequency of said tweets, find trends, get timelines, get a list of all the accounts a user follows or of the accounts following a user, etc.) functions.

It computes **users-level data** (bio, location, number of followers and friends, etc.) as well as **data concerning tweets** (number of hashtags, mentions, capital letters, etc. in a user’s most recent 100 tweets).

It then displays the screen name, the user ID and the **probability of the account being a bot** (from 0 to 1).

Because it uses Twitter's API, the maximum number of estimates per 1/4 hour is only 180. However, it is possible to use tweetbotornot's **fast model**, which only uses users-level data in order to  estimate up to 90 000 accounts per 15 minutes. Yet, it is unfortunately less accurate. As explained by the developer:

_The **default** model is **93.53% accurate when classifying bots** and 95.32% accurate when classifying non-bots. The **fast** model is **91.78% accurate when classifying bots** and 92.61% accurate when classifying non-bots.
Overall, the default model is correct **93.8%** of the time.
Overall, the fast model is correct **91.9%** of the time._

* **What for ?**

The main goal of the tweetbotornot() function is to determine the probability that a Twitter account is a bot or not as accurately as possible.

**For whom ?**

The package can easily be downloaded and used by dilettantes as well as professionals.
However, the tool relies on Twitter’s API - meaning that users must be authorized to interact with it, which can be done by signing into Twitter  while working in an interactive session of R.

### 8. DeBot

* **By whom ?**

[DeBot](https://www.cs.unm.edu/~chavoshi/debot/) was created in February 2015 by a [group](https://www.cs.unm.edu/~chavoshi/debot/team.html) of computer scientists led by Nikan Chavoshi.

* **What ?**

DeBot is a real-time bot detection system using an [API](https://github.com/nchavoshi/debot_api). Although its code is not available in open source as the method has been patented, it is explained that DeBot relies on activity indicators of Twitter accounts and presumably bots networks.

The system "_reports and archives thousands of bot accounts_" daily and offers on-demand bot detection. DeBot users can send a maximum of fifty daily requests based on a Twitter screen name (@xxxx) and either a topic, a location or a set of users.

* **What for ?**

DeBot is used for both small- and large-scale bot detection, but it also reports bot accounts and produces archives.

* **For whom ?**

Any Twitter user with an API key can use DeBot. See more [here](https://github.com/nchavoshi/debot_api).

* **Additional information**

"_DeBot is an unsupervised method capable of detecting bots in a parameter-free fashion. In March 2017, DeBot has collected over 730K unique bots._"

### Student projects and others

* **Unnamed machine-learning-based bot-detecting algorithm**

This algorithm was written in 2017 based on the Twitter Bot program, which produces automated posts, spams and follows Twitter users. It uses machine learning to determine whether an account on Twitter is a bot or not, on the basis of selected features. It has an AUC over 95%.

More information can be found in this [repository](https://github.com/jubins/MachineLearning-Detecting-Twitter-Bots).

* **Twitter Bot Detector**

This [project](https://github.com/alexander-hamme/Twitter_Bot_Detector) uses the Twitter API to collect tweets within the United States and analyze them "_using algorithms based on posting times and other factors to determine probability of each user being a bot_".

* **TwitterBotDetection**

After manually collecting Twitter profiles (real users and bots) and listing checked bots on a wiki (botwiki.org) and a Twitter bot repository (Twitter.com/botally/lists/omnibots/members), students wrote a script "_to harvest each users’ profile and posts via the Twitter API_". They then extracted data (followers count, friends count, favorites count, name, created date, screen name, tweets, tweet frequency, lexical diversity, sentiment etc) to try and classify the accounts as bots or authentic.

More information can be found in this [repository](https://github.com/eldinsahbaz/TwitterBotDetection).


### API Twitter

The Twitter API allows users to block, mute or even report accounts. It also can be used to get trends in a specific geographic area.
On a corporate level, one interesting aspect of the API can be its ability to show - and thus allow users to monitor - data regarding favorites, retweets of, and comments on public tweets.

However, if data is made available to governmental entities, the situation has to be reported and manually reviewed.

## Reddit

### 1. BotDetection

* **What ?**

BotDetection (repository available [here](https://github.com/Sam-DevZ/BotDetection-Algorithm) ) is a "_Reddit bot that detects other bots_".

It works thanks to a basic feed-forward Artifical Neural Network (ANN) "_that can be used to detect comment spambots on Reddit_". Using machine-learning, BotDetection can classify "_most users with high confidence_".
Users can open the _detector.py_ interface and run the _isABot_ function with any username. They will then be provided with a number ranking from 0 to 1 representing "_how much the Neural Network thinks the user is a bot_".

* **What for ?**

The first mission of the tool is basic bot detection upon user request.

* **For whom ?**

BotDetection is free and its code is open source.

However, to use this tool, one needs to have previously installed softwares like PRAW (Python Reddit API Wrapper), NLTK (Natural Language Toolkit) and [SciPy](https://www.scipy.org/), and also needs to know a little bit about code (especially Python).

