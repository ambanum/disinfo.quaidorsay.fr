---
parent: Qualification
title: Tools
nav_order: 3
permalink: /encyclopedia/qualification/tools
---

# Qualification tools
{: .no_toc}

1. Table of contents
{:toc}

- - -

## Criterion: Massive

Almost every available and open detection tool to be found relies on Twitter's API or uses Twitter data. In the rather recent field of bot detection, it seems that social media platforms other than Twitter have been left aside.

### Media Scale

Reports often use simplistic ways to assess impact, simply summing the number of followers of known "bad" accounts on social media, or the view count when available, such as on video media. Raw numbers then generate anxiety (“30k views! 13k shares!”), but do not help prioritizing efforts.

The team of the French Ambassador for Digital Affairs offers a way to compensate that tendency: [Media Scale](https://github.com/ambanum/media-scale). Rather than focusing on the quantitative aspect, it offers a scale of relevance by putting the number of shares in perspective with reference articles shares for a given cultural context.

![Media Scale chatbot works by typing in a region code and a share count](/assets/img/3-qualification/3-tools/media-scale-chatbot-help.png)
![For example, share fr 1004](/assets/img/3-qualification/3-tools/media-scale-chatbot-request.png)
![1004 shares for an article in France is equivalent to “Le bassin de la Villette temporairement fermé à la baignade” by Le Monde in June 2017](/assets/img/3-qualification/3-tools/media-scale-chatbot-result.png)

This more qualitative approach helps give perspective to readers of threat notices that might be further away from the topics, and prioritise their own qualification work.

This resource is open-source and can be used as:

1. A [dataset](https://github.com/ambanum/media-scale/tree/master/data).
2. A live hosted API: [`https://disinfo.quaidorsay.fr/api/media-scale/1.0/around?region=fr&shares=150000`](https://disinfo.quaidorsay.fr/api/media-scale/1.0/around?region=fr&shares=150000).
3. A chatbot that is already available in our [collaboration chat](/collaborate).

Data is currently available for a limited number of countries, but contributions and requests are welcome.


## Criterion: Artificial

Almost every available and open detection tool to be found relies on Twitter's API or uses Twitter data. In the rather recent field of bot detection, it seems that social media platforms other than Twitter have been left aside.

### Twitter

#### Botometer

##### By whom?
{: .no_toc}

[Botometer](https://botometer.iuni.iu.edu/#!/) (formerly known as BotOrNot)  was created by the Observatory on Social Media [(OSoMe)](https://osome.iuni.iu.edu/), a joint project of the Network Science Institute (IUNI) and the Center for Complex Networks and Systems Research (CNetS) at Indiana University. The goal of the observatory is to study and analyze how information is spread on online social media. Botometer is but one of the tools of the OSoMe. The contributors to Botometer are Clayton A Davis, Onur Varol, Kaicheng Yang, Emilio Ferrara, Alessandro Flammini and Filippo Menczer.

##### What?
{: .no_toc}

Botometer is a **machine learning algorithm**, which means that it has been trained to determine the probability of an account being genuinely human or bot-like and classify said account on the basis of "tens of thousands of labeled examples".

Botometer has its own an application programming interface (API) to allow users to directly check the account of their choice. It uses Twitter's API to find information related to the account and its activity (public profile, public tweets and mentions) and then "_extracts about 1,200 features to characterize the account's profile, friends, social network structure, temporal activity patterns, language, and sentiment_" before computing them.

The tool then offers a score "_based on how likely the account is to be a bot_". This score goes from 0 to 5 ; the higher the score, the more likely it is for the user of the account to be a bot. A score at 2.5 or around indicates uncertainty as to the nature of the account.  The score can be expanded into several more detailed sets of scores, some of them using only language-independent features.

One can also find what is called the "**Complete Automation Probability (CAP)**", that is to say the "probability, according to [Botometer's] models, that [an] account is completely automated, i.e., a bot". The CAP is calculated based on  the estimated overall prevalence of bots, taking into account the fact that humans are much more numerous than bots. It is therefore possible to find an account with a high score but a low CAP.

For more technical information as to its functioning please [click here](https://botometer.iuni.iu.edu/#!/publications).

##### What for?
{: .no_toc}

The main goal of the tool is to allow for the determination of the authenticity of the nature of Twitter accounts as accurately as possible.

##### For whom?
{: .no_toc}

In order to use Botometer, one needs to authentify oneself. Indeed, it heavily relies on Twitter's API, which requires a logged-in Twitter account. Moreover, one needs to grant the tool permissions to "_fetch user profiles and activity_" and allow users to block or unfollow users among their own followers and followees through Botometer.

##### Additional information
{: .no_toc}

The only data stored by Botometer is "_the account's ID, scores, and any feedback optionally provided by the user_".
It is not possible for Botometer to make requests on behalf of a user after this user has left the site. However, granting permission to Botometer to block or unfollow users enables posting and profile updates.

##### Reliability assessment
{: .no_toc}

Botometer being closed source and having been built in 2016 from a US-based dataset, the French Office of the Ambassador for Digital Affairs independently audited the reliability of Botometer for non-American accounts in March 2019.

###### Methodology
{: .no_toc}

Between the 26th and 28th February 2019, manual annotations were made by 12 French students of [Sciences-Po Saint-Germain-en-Laye](https://www.sciencespo-saintgermainenlaye.fr) (M1 level). They were presented with an initial sample of 20 Twitter accounts representing authentic and inauthentic accounts, asked to classify them as pairs of certainty adverbs and authentic / inauthentic types (e.g. “certainly a bot”, “probably a human”…).  Each annotation was made by pairs of students and then reviewed by another, independent pair.  Feedback was given by experts for the initial 20, and then on demand.

Students were then asked to select and classify another hundred account, with no specific criteria for selection. An exploratory algorithm was then designed and implemented, selecting accounts that were likely to be bots according to the most successful criteria as spotted by the human classifiers. A subset (312) of these accounts were then manually classified, once again by two independent pairs of students. A random subset (~ 80) of these annotations was then reviewed another time by disinformation experts. More information on methodology and results can be found on [sismo.quaidorsay.fr](http://sismo.quaidorsay.fr).

Annotations were then transformed into numbers for easier comparison with Botometer scores, according to the following table:

Manual classification        | Estimated Botometer score range
-----------------------------|--------------------------------
undoubtedly inauthentic      | 4.2–5.0 score
apparently inauthentic        | 3.8–4.2 score
probably inauthentic         | 3.2–3.8 score
perhaps *                    | 2.0–3.2 score
probably authentic           | 1.4–2.0 score
apparently authentic          | 1.0–1.4 score
undoubtedly authentic        | 0.0–1.0 score

 Botometer scores of the classified accounts were then calculated on the 19th and 24th Apr 2019.

###### Limitations
{: .no_toc}

This time difference in computation is a human error and problematic, as some accounts were not available anymore and differences in assessment can also be explained by the time gap (a seemingly inauthentic account in February might become more human-like two months later, and the other way around).

The difference is thus necessarily overestimated.


###### Results
{: .no_toc}

![Botometer assessment](/assets/img/botometer-validation.png)

Botometer seems to have more certainty than our human classifiers, however it also had [seven more weeks](#limitations) worth of data to assess the accounts. Due to this time difference in assessment, we cannot conclude on the global reliability of Botometer. We can however see that the classification of “undoubtedly inauthentic” accounts seems to be quite as accurately made by Botometer as it is by humans.

##### Chatbot wrapper
{: .no_toc}

This tool gives users the probability that Twitter accounts that have tweeted a specific content are authentic.

All that a user has to do is send a link to one piece of content to the bot via the "Analysis" channel of our [collaboration chat](/collaborate).

The bot assesses the probability that the accounts that have tweeted said content (up to 100 accounts) during the last seven days are robots.

It displays respectively the percentage of **shares** by these accounts:
- that have a high probability to have been made by bots
- that have a high probability have been by humans
- for which it is unclear

As well as the percentage of these **accounts** themselves that are:
- very likely to be bots
- very likely to be humans
- unclear in nature

<!-- add a screenshot -->

#### TruthNest

##### By whom?
{: .no_toc}

[TruthNest ](https://www.truthnest.com/) is an initiative of the [Athens Technology Center](https://www.atc.gr/) (ATC) and its [innovation lab](http://ilab.atc.gr/). ATC is the project coordinator of the [Social Observatory for Disinformation and Social Media Analysis (SOMA)](http://www.disinfobservatory.org/).

ATC works on fighting disinformation and TruthNest is one of its two main tools - alongside [Truly Media](http://www.truly.media/) - destined to content verification.  Its research is financed by the European Commission and it benefits from funding from Google's Digital News Initiative.

##### What?
{: .no_toc}

TruthNest is a tool for "_deep Twitter analytics_". Through an app, it allows users to identify suspicious accounts by giving the profile a score reflecting its probability of being automated.
It relies on key performance indicators (KPIs), metrics regarding the **activity** (tweeting density, hashtags, preferred users...) , the **network** (growth pattern, activity of the main followers...) and the degree of **influence** (likes and replies received, mentions, context, referrers...) of the account.

##### What for?
{: .no_toc}

Like Botometer, TruthNest allow its users to determine as accurately as possible whether a Twitter account is automated or human.
Its possible use for journalists in the verification process of shared content, sources and accounts on Twitter is highlighted in its official description, as well as its benchmarking and influence indentification potentials.
Mainly, its goal is to inform users of suspicious activity of accounts they’re interested in. More than a detection tool, it also allows its users to monitor accounts in almost-real time and to produce then export analyses reports.

##### For whom?
{: .no_toc}

To use TruthNest, one needs to sign in with a Twitter account.
The tool is described as open to a variety of actors, from independant "curious individual[s]" to journalists, investigators and marketing professionals.

##### Additional information
{: .no_toc}

TruthNest costs from 9€ (gives 20 credits, which translates into 20 analyses) to 149€ (500 credits).


#### @probabot_

##### By whom?
{: .no_toc}

This [tool](https://twitter.com/probabot_) was created by web developer and journalist [Keith Collins](https://twitter.com/collinskeith), currently working for The New York Times regarding finances, tech and media matters, among others.

##### What?
{: .no_toc}

As its Twitter description explains, @probabot_ is a "_bot that hunts bots_". It focuses on accounts tweeting about politics that have a Botometer score above 69%. The @probabot account has almost 2 000 followers.

The bot regularly published its results following this format:
name of the account + "has a Botometer score of 94.2%, suggesting the account is probably a bot (or bot-assisted)" + status of the account (activated or suspended).

Although the bot account signed in on Twitter in January 2017, it stopped its activity mid-May 2018.

##### What for?
{: .no_toc}

This tool automatically assessed the probability of automation of specific accounts (see above).

##### For whom?
{: .no_toc}

Being a public Twitter account, this tool is open to any Twitter user.

##### Additional information
{: .no_toc}

Creator Keith Collins has a similar project, also using Botometer, called "node-botometer". More information available [here](https://github.com/keithcollins/node-botometer).

#### @StattoBot

##### By whom?
{: .no_toc}

The @StattoBot [account](https://twitter.com/StattoBot) is anonymous. However, it quotes in its pinned tweet (here used as a longer description) Caroline Orr (@RVAwonk), Ben Nimmo (@benimmo), Andrew Weisburd (@webradius), James Patrick (@J_amesp) and the OSoMe (@truthyatindiana) as references. It is located in the United Kingdom.

##### What?
{: .no_toc}

This tool is itself a bot and was likely created in October 2017 (date of its first logging on Twitter).
It works as an interface system. To obtain the probability of an account being a bot, the user only has to adress a tweet to @StattoBot mentioning the name of the account she or he wishes to investigate but without taggin it. The format used should thus be "@StattoBot AccountName".

The bot will then reply in two tweets, one with basic statistics on the account (date of creation, total number of tweets, number of daily tweets, number of followers and followees),  and another giving the Botometer score of the account.

However, @StattoBot is only partially automated, as it regularly shares and publishes written content, mostly updating the situation of the tool.

##### What for?
{: .no_toc}

As explained in its description, this tool is meant to be used "_to provide some statistics which might help you in forming a judgement_" as to whether an account is fake or automated, or not.

##### For whom?
{: .no_toc}

This tool is open to any Twitter user. Since it uses Botometer, an activated Twitter account is required.


#### Spottingbot by PegaBot

##### By whom?
{: .no_toc}

Spottingbot is a project based in Rio, Brazil, relying on and inspired by Botometer. Along with a media literacy campaign, it is the second main part of the [PegaBot](https://pegabot.com.br/)(Portuguese for Bot Buster) initiative, launched by the [Institute of Technology and Society of Rio de Janeiro](https://itsrio.org/pt/home/) (ITS Rio), the [Instituto Equidade & Tecnologia](https://tecnologiaequidade.org.br/) and [AppCívico](https://appcivico.com/pt/), a tech company focused on human rights and the use of technology to impulse social change that works with civil society organizations, private actors, politicians and governmental agents on solving social issues.

##### What?
{: .no_toc}

Created at the end of 2018, the online platform PegaBot allowed its users to analyze the "_probability of whether a social profile is a bot or not_". Using Botometer, its experimental and open-source online tool spottingbot welcomes collaboration and indexes information on Twitter accounts ("user", "friend", "network", "temporal", "total") to help determine their authenticity.

##### What for?
{: .no_toc}

The Twitter description of PegaBot soberly explains that the goal of the program is to help users verify if a Twitter account is a bot or not.
However, both the online tool and the media literacy campaign aim at educating and raising awareness "_on how bots and social media manipulation are related_".

##### For whom?
{: .no_toc}

Given the early stage of the project, it is difficult to assess exactly the crowd it aims, however it is supposed to be open to everyone.

##### Additional information
{: .no_toc}

According to official communication, "_in two days, the project has gone viral in Brazil and it has been accessed by more than 200 thousand people, demonstrating there is a large demand for awareness regarding how manipulation in social media occurs_".

More technical information can be found [here](https://github.com/AppCivico/spottingbot/tree/master/documentation).
Wider information on the PegaBot initiative can be found [here](https://www.youtube.com/watch?v=wRfFalcGEoo) and [here](https://pegabot.com.br/).

#### Botson

##### By whom?
{: .no_toc}

[Botson](http://botson.net) was created in San Francisco by engineer and data enthusiast Will Johnson and writer Andy Jiang.

##### What?
{: .no_toc}

Botson is a navigator (Chrome) extension based on Botometer. Once installed, it thus requires authentification through a Twitter account.
From then on, the user will see that on its Twitter newsfeed, "_tweets from accounts that have received a “botˮ high score will be blurred and covered with information about that account_", namely this sentence: "We are XX% confident that this tweet is from a bot." (the percentage being the account's Botometer score).

Botson also offers a basic overview of metrics of the accounts scored (number of accounts checked and number of bots detected).

The code of Botson is accessible in open source.

##### What for?
{: .no_toc}

The main goal of Botson is to detect Twitter bots in users' newsfeeds and then inform said users about the content they are exposed to through their Twitter newsfeeds. It can be considered as a form of media literacy action.
Speaking more broadly, the website of Botson explains its engagementin the fight against disinformation and the threat information manipulation can represent : "_Now, more than ever in our history, we must be ruthless in discerning the legitimacy of our information. This chrome extension is one step towards a future where bipartisan beliefs and values can co-exist supported by constructive dialogue based on a single reality._"

##### For whom?
{: .no_toc}

Botson is open to everyone. As the extension relies on Botometer, it can be used on the condition of having an activated Twitter account. Moreover, as a specific Chrome extension, one must have Chrome installed as an Internet navigator.

#### tweetbotornot

##### By whom?
{: .no_toc}

[Tweetbotornot](https://tweetbotornot.mikewk.com/) was developed by assistant Professor at the University of Missouri and Journalism and Data science student Michael W. Kearney.

##### What?
{: .no_toc}

Tweetbotornot is not exactly a tool but an R package (including reproducible R code, documentation and explanations on its reusable R functions, tests and data sets). It uses machine learning to classify Twitter accounts as bots or authentic.

The **function tweetbotornot()** works on the basis of Twitter screen names or user IDs that the tweetbotornot user wishes to investigate.
It also accepts data returned by [rtweet](https://rtweet.info/) (a tool able to search users and tweets using specific hashtags, measure frequency of said tweets, find trends, get timelines, get a list of all the accounts a user follows or of the accounts following a user, etc.) functions.

It computes **users-level data** (bio, location, number of followers and friends, etc.) as well as **data concerning tweets** (number of hashtags, mentions, capital letters, etc. in a user’s most recent 100 tweets).

It then displays the screen name, the user ID and the **probability of the account being a bot** (from 0 to 1).

Because it uses Twitter's API, the maximum number of estimates per 1/4 hour is only 180. However, it is possible to use tweetbotornot's **fast model**, which only uses users-level data in order to  estimate up to 90 000 accounts per 15 minutes. Yet, it is unfortunately less accurate. As explained by the developer:

_The **default** model is **93.53% accurate when classifying bots** and 95.32% accurate when classifying non-bots. The **fast** model is **91.78% accurate when classifying bots** and 92.61% accurate when classifying non-bots.
Overall, the default model is correct **93.8%** of the time.
Overall, the fast model is correct **91.9%** of the time._

##### What for?
{: .no_toc}

The main goal of the tweetbotornot() function is to determine the probability that a Twitter account is a bot or not as accurately as possible.

##### For whom?
{: .no_toc}

The package can easily be downloaded and used by dilettantes as well as professionals.
However, the tool relies on Twitter’s API - meaning that users must be authorized to interact with it, which can be done by signing into Twitter  while working in an interactive session of R.

#### DeBot

##### By whom?
{: .no_toc}

[DeBot](https://www.cs.unm.edu/~chavoshi/debot/) was created in February 2015 by a [group](https://www.cs.unm.edu/~chavoshi/debot/team.html) of computer scientists led by Nikan Chavoshi.

##### What?
{: .no_toc}

DeBot is a real-time bot detection system using an [API](https://github.com/nchavoshi/debot_api). Although its code is not available in open source as the method has been patented, it is explained that DeBot relies on activity indicators of Twitter accounts and presumably bots networks.

The system "_reports and archives thousands of bot accounts_" daily and offers on-demand bot detection. DeBot users can send a maximum of fifty daily requests based on a Twitter screen name (@xxxx) and either a topic, a location or a set of users.

##### What for?
{: .no_toc}

DeBot is used for both small- and large-scale bot detection, but it also reports bot accounts and produces archives.

##### For whom?
{: .no_toc}

Any Twitter user with an API key can use DeBot. See more [here](https://github.com/nchavoshi/debot_api).

##### Additional information
{: .no_toc}

"_DeBot is an unsupervised method capable of detecting bots in a parameter-free fashion. In March 2017, DeBot has collected over 730K unique bots._"

#### Student projects and others

##### Unnamed machine-learning-based bot-detecting algorithm
{: .no_toc}

This algorithm was written in 2017 based on the Twitter Bot program, which produces automated posts, spams and follows Twitter users. It uses machine learning to determine whether an account on Twitter is a bot or not, on the basis of selected features. It has an AUC over 95%.

More information can be found in this [repository](https://github.com/jubins/MachineLearning-Detecting-Twitter-Bots).

##### Twitter Bot Detector
{: .no_toc}

This [project](https://github.com/alexander-hamme/Twitter_Bot_Detector) uses the Twitter API to collect tweets within the United States and analyze them "_using algorithms based on posting times and other factors to determine probability of each user being a bot_".

##### TwitterBotDetection
{: .no_toc}

After manually collecting Twitter profiles (real users and bots) and listing checked bots on a wiki (botwiki.org) and a Twitter bot repository (Twitter.com/botally/lists/omnibots/members), students wrote a script "_to harvest each users’ profile and posts via the Twitter API_". They then extracted data (followers count, friends count, favorites count, name, created date, screen name, tweets, tweet frequency, lexical diversity, sentiment etc) to try and classify the accounts as bots or authentic.

More information can be found in this [repository](https://github.com/eldinsahbaz/TwitterBotDetection).


#### Twitter API

The Twitter API allows users to block, mute or even report accounts. It also can be used to get trends in a specific geographic area.
On a corporate level, one interesting aspect of the API can be its ability to show - and thus allow users to monitor - data regarding favorites, retweets of, and comments on public tweets.

However, if data is made available to governmental entities, the situation has to be reported and manually reviewed.

### Reddit

#### BotDetection

##### What?
{: .no_toc}

BotDetection (repository available [here](https://github.com/Sam-DevZ/BotDetection-Algorithm) ) is a "_Reddit bot that detects other bots_".

It works thanks to a basic feed-forward Artifical Neural Network (ANN) "_that can be used to detect comment spambots on Reddit_". Using machine-learning, BotDetection can classify "_most users with high confidence_".
Users can open the _detector.py_ interface and run the _isABot_ function with any username. They will then be provided with a number ranking from 0 to 1 representing "_how much the Neural Network thinks the user is a bot_".

##### What for?
{: .no_toc}

The first mission of the tool is basic bot detection upon user request.

##### For whom?
{: .no_toc}

BotDetection is free and its code is open source.

However, to use this tool, one needs to have previously installed softwares like PRAW (Python Reddit API Wrapper), NLTK (Natural Language Toolkit) and [SciPy](https://www.scipy.org/), and also needs to know a little bit about code (especially Python).

## Criterion: Intent to harm

- [**Hatemining**](https://www.hatemining.de) is a troll detection and hate speech detection in German that works with an API. It is a research project of the European Research Center for Information Systems (ERCIS).
- [**Perspective**](https://www.perspectiveapi.com/) is an experimental API initiated by Google Jigsaw.


## Criterion: False or misleading

### Image

#### [Forensically](https://29a.ch/photo-forensics/#forensic-magnifier)

Forensically is a web app providing digital image forensics (analysis). It includes clone detection, error level analysis, meta data extraction and more.

### Video

#### [InVID](https://www.invid-project.eu/)

##### By whom?
{: .no_toc}

InVID is a project co-funded by the European Commission started in January 2016 and achieved in December 2018.

##### What?
{: .no_toc}

It focused on video verification of "eyewitness media", with the goal to develop an innovative verification platform "_to detect emerging stories and assess the reliability of newsworthy video files and content spread via social media_". Indeed, editing softwares and content management tools increasingly allow for the spread of fabricated, manipulated, deceiving videos. Content verification is costly and time-consuming for news outlets.

The InVID platform was built to help "_detect, authenticate and check the reliability and accuracy of newsworthy video files and video content spread via social media_".

It works through a verification application, a mobile application, a visual analytics dashboard as well as a verification plug-in (among others) which offer online services for video fragmentation, reverse image search and annotation, a logo detection tool, a context aggregation and analysis tool as well as a rights management service.

##### What for?
{: .no_toc}

InVID allows its users to quickly verify video content and make sure that it is rights-cleared and readily available. It helps avoiding the spread (by mistake) of false information or fakes by media outlets.

##### For whom?
{: .no_toc}

Mainly, InVID is useful for "_broadcasters, news agencies, web pure-players, newspapers and publishers_" because it allows them "_to integrate social media content into their news output without struggling to know if they can trust the material or how they can reach the user to ask permission for re-use_".

##### Additional information
{: .no_toc}

InVID is a follow-up project of RevealEU. WeVerify is a follow-up project of both InVID and RevealEU.

### Social media content

#### [Truly Media](http://www.truly.media/)

##### By whom?
{: .no_toc}

Truly Media was co-developed by the [innovation lab](http://ilab.atc.gr/) of the [Athens Technology Center](https://www.atc.gr/) (ATC) as well as [Deutsche Welle Innovation](http://blogs.dw.com/innovation/). With [TruthNest](#truthnest), it is one of the two main tools of ATC's iLab in fighting disinformation. Truly Media can be considered as a follow-up project of several other research projects linked to the European Commission. It is funded by the Google Digital News Initiative.

##### What?
{: .no_toc}

Truly Media is an online collaboration platform working on the verification of digital content on social networks.
Users can monitor social networks, gather information from various sources, collaborate, use effective verification tools, extract and visualize information, etc. Information and content can be organized in collections and shared quickly among users.

##### What for?
{: .no_toc}

Truly Media was created to help with the verification of _"digital (user-generated) content residing in social networks and elsewhere_".

##### For whom?
{: .no_toc}

The main targets of the project are journalists and human rights workers and investigators, _ie_ actors who helped in its design and development.

##### Additional information
{: .no_toc}

On 8 April 2019, Truly Media officially announced its collaboration with the European Science Media Hub (ESMH).

#### [CheckMedia](https://checkmedia.org)

<!-- describe -->

### Claims

#### [Fact-Check Explorer](https://toolbox.google.com/factcheck/explorer)

Fact-Check Explorer is a Google search engine specifically designed to **browse and search for fact-checks**.  It allows users to search topics or statements by keywords and displays "_a list of matching claims and the corresponding fact checks_" sortable by languages.
It also offers an overview of recent fact-checks, accessible through a button on the main search page.

### Datasets

Data sources that can be used as a base for fact-checking

#### [data.gouv.fr](https://www.data.gouv.fr/fr/)

data.gouv.fr is a public platform developed by Etalab and created in 2011. It allows the publication and download of public datasets. Topics covered are Agriculture & Alimentation ; Culture & Communication ; Accounts, Economy & Employment ; Education, Research & Formation ; International & Europe ; Environment, Energy & Housing ; Health & Social ; Society, Law & Institutions ; Territories, Transport & Tourism. It also publishes how and by whom datasets were used.

#### [European Data News Hub](https://www.ednh.news/fr/)

Through a datajournalism website, the Agence France Presse (AFP), the ANSA (Italian press agency) and the Deutsche Presse-Agentur (DPA) share articles (in five languages), graphs, pictures and explanatory videos on topics related to the European Union. Data is free and open, but also reliable.

In the future, EDNH will open to other media outlets and will allow users (citizens) to answer surveys on salient European issues, which will then be translated into readable data.

EDNH is independent and funded by the European Commission.

## Criterion: Illegal

### In France

Each of these characteristics can qualify a political ad or an issue-based ad as illegal. Since they are only valid within French jurisdiction, they are described in French.

#### Publicité politique en période électorale

La publicité commerciale à des fins de propagande électorale est interdite en période électorale, c'est-à-dire jusqu'au jour de l’élection et dans les six mois pleins qui la précèdent, par tout moyen de communication audiovisuelle ou électronique.

Par exemple, si le premier tour a lieu le 28 août et le second tour le 2 septembre, il est interdit de payer pour mettre en avant un parti, une candidate ou en critiquer d'autres du 1<sup>er</sup> février au 2 septembre, inclus.

- [Article L52-1 du Code électoral](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006070239&idArticle=LEGIARTI000006353102&dateTexte=&categorieLien=cid).
- [Article L48-1.-V- 2 du Code électoral](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006070239&idArticle=LEGIARTI000023878437).

##### Peines encourues
{: .no_toc}

Un an de prison et 15 000 € d'amende pour un‧e candidat‧e ayant demandé ou autorisé de la publicité commerciale. Si une liste électorale a été constituée, seule la tête de liste est concernée.

- [Article L. 113-1.-II du Code électoral](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006070239&idArticle=LEGIARTI000027477771).

#### Violation de la période de silence

Toute communication politique est interdite en période de silence, c'est-à-dire à partir de la veille du scrutin à minuit, par tout moyen de communication. Cela inclut notamment les commentaires et sondages.

Par exemple, si le scrutin a lieu le samedi en outre-mer et le dimanche en métropole, il est interdit de communiquer des sondages à destination de la Guyane à partir du vendredi à minuit heure locale, et d'émettre un commentaire sur les opposants en métropole à partir du samedi à minuit heure d'Europe centrale.

- [Article L49-4 du Code électoral](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=79E5ACC204BC0F2F68D4ABFE97D36A49.tplgfr41s_1?idSectionTA=LEGISCTA000006148458&cidTexte=LEGITEXT000006070239&dateTexte=20190514).

##### Peines encourues
{: .no_toc}

3 750 € d'amende pour toute infraction.

- [Article L89](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=E9453AC1030D9ACC4E1AC088A6B5526A.tplgfr41s_1?idSectionTA=LEGISCTA000006148461&cidTexte=LEGITEXT000006070239&dateTexte=20190514) du Code électoral.

#### Introduction d'un élément polémique nouveau

Il est interdit aux candidats de révéler « un élément nouveau de polémique électorale » à un moment trop proche de la fin de la campagne électorale si cela implique que les candidat‧e‧s touché‧e‧s ne pourront pas « y répondre utilement ».

- [Article L48-2 - art. 3 du Code électoral](https://www.legifrance.gouv.fr/affichCode.do;jsessionid=79E5ACC204BC0F2F68D4ABFE97D36A49.tplgfr41s_1?idSectionTA=LEGISCTA000006148458&cidTexte=LEGITEXT000006070239&dateTexte=20190514).

##### Peines encourues
{: .no_toc}

Aucune peine spécifique n’est prévue pour ce cas.

#### Sondages [non conformes](http://www.commission-des-sondages.fr/oblig/obligations.htm)

Il est interdit de publier des sondages d'opinion si leur objectivité, leur qualité et leur authenticité n'a pas été garantie par la [Commission des Sondages](http://www.commission-des-sondages.fr/). L’entité publiant ou diffusant les résultats d'un sondage doit avoir soumis une déclaration à la Commission, et que celle-ci y ait souscrit. Ces déclarations sont [accessibles en ligne](http://www.commission-des-sondages.fr/notices/).

- [Article 2 de la loi n°77-808](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000522846) relative à la publication et à la diffusion de certains sondages d'opinion.
- [Article 7 de la loi n°77-808](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000522846) relative à la publication et à la diffusion de certains sondages d'opinion.

##### Peines encourues
{: .no_toc}

75 000 € d'amende pour la réalisation, la publication ou la diffusion d'un sondage non-conforme.

- [Article 12 de la loi n° 77-808](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000522846) relative à la publication et à la diffusion de certains sondages d'opinion.


#### Financement étranger

Seules les personnes physiques françaises ou résidant en France peuvent faire des dons à un parti politique ou à une campagne.

- [Article 11-4 de la loi n°88-227](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000321646#LEGIARTI000035588686) relative à la transparence financière de la vie politique.

##### Peines encourues
{: .no_toc}

Trois 3 ans de prison et 45 000 € d'amende pour bénéficiaires et donateurs.

- [Article 11-5 de la loi n°88-227](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000321646#LEGIARTI000035588686) relative à la transparence financière de la vie politique.

#### Financement par une personne morale

Les seules personnes morales pouvant financer ou donner à des partis ou groupements politiques sous quelque forme que ce soit (donc y compris une publicité) sont des partis ou groupements politiques français.

Par exemple, le paiement de publicités sur les réseaux sociaux mettant en avant une candidate française par un parti britannique est illégal.

- [Article 11-4 de la loi n°88-227](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000321646#LEGIARTI000035588686) relative à la transparence financière de la vie politique.

##### Peines encourues
{: .no_toc}

Les bénéficiaires et les donateurs risquent trois ans de prison et 45 000 € d'amende.

- [Article 11-5 de la loi n°88-227](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000321646#LEGIARTI000035588686) relative à la transparence financière de la vie politique.
