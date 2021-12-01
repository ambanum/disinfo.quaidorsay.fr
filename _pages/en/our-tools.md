---
permalink: /en/our-tools
permalink_fr: /fr/nos-outils
permalink_zh-Hant: /zh-Hant/our-tools
title: Our tools
navbar_items:
  - <a href="/en" class="header_mainnav_link">Home</a>
  - <a href="!SITE_URL!/en#our-actions" class="header_mainnav_link">Our actions</a>
  - <a href="/en/our-tools" class="header_mainnav_link">Our tools</a>
---

# Our tools

{% include breadcrumb.html %}

{% include our-tools/tool.html
icon="tool"
title="Open Terms Archive"
subtitle="Follow the changes to the Terms of Service"
desc="Services have terms that can change over time. Open Terms Archive enables users rights advocates, regulatory bodies and any interested citizen to follow the changes to these terms."
button-label="Discover"
button-href="/en/open-terms-archive" %}

{% include our-tools/tool.html
icon="tool"
title="Scripta Manent"
subtitle="Explore the contractual documents of the main online service providers and compare their evolution through time."
desc="Scripta Manent is a first very simple online tool which enables you to compare changes between two dates of your choice. It's a valuable tool to empower consumers, lawyers, regulators (they are able to assess the loyalty of the platforms' commitments), lawmakers (they are able to analyze the rationale used by companies to circumvent their texts), journalists, law researchers, and even Legal Tech companies."
button-label="Try now"
button-href="/en/open-terms-archive/scripta-manent" %}

{% include our-tools/tool.html
icon="tool"
title="Bot Finder"
subtitle="Calculate the probability that a Twitter account is a bot"
desc="Defining what counts as a bot account is not as direct as it seems. For instance, some accounts are sometimes used by bots and sometimes by humans; these accounts are called cyborg and further complicate the definition. To help identify suspicious accounts, we have developed an algorithm that calculates the probability that a given account is a bot."
button-label="Voir le code source"
button-href="https://github.com/ambanum/social-networks-bot-finder" %}

{% include our-tools/tool.html
icon="tool"
title="DisEncyclopedia"
subtitle="Improve your practices and toolset"
desc="An open and collaborative resource that documents best practices, tools and actors, allowing all of those who counter information manipulation to improve the competence of the entire ecosystem."
button-label="Explore"
button-href="/encyclopedia" %}

<h3>Our previous work</h3>
<hr />

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Illegal Ads : Assess the legality of political ads"
desc="A crowdsourcing interface that allows citizens to view paid issue-based ads on Facebook and surface actors that do not respect the law. Currently only available for France, our code is open-source and we would be happy to collaborate with you to expand to other countries."
sublink-label="See"
sublink-href="/political-ads" %}

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Collaboration chat : collaboratively detect, qualify and react to disinformation campaigns"
desc="<p>A real-time chat that gathers actors, supports all the best practices identified in our encyclopedia, and offers the best tools as chatbots. If you are reading this, then we would probably like to have you on board.</p><p>Currently not available.</p>"
 %}

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Bot Detection : identify clusters of bots on Twitter"
desc="<p>A crawler that navigates Twitter follower relationships to identify clusters of suspicious accounts from a given seed account. It uses the free Twitter API and can thus be easily deployed.</p><p>Based on a manual annotation of over 400&nbsp;accounts, we have also used that dataset to <a href= \"/encyclopedia/qualification/tools#reliability-assessment\">assess the reliability</a> of usual bot detection tools such as Botometer.</p>"
sublink-label="See"
sublink-href="/twitter-bot-clusters" %}

{% include our-tools/tool.html
size="small"
icon="tool"
subtitle="Media-scale : compare an article's visibility on social media to other known events visibility in its local reference media to give some perspective to the number of reactions."
desc="<p>When fighting disinformation, analyses and fact-checks produced often relay - when they are not based on - <strong>figures to measure the impact of a content</strong> on a given society.</p><p>Among such data can be the number of reactions to said content, the number of comments it yields, or the number of times it has been shared.</p><p>However, this data us usually not <strong>contrasted</strong> nor compared. Rather than focusing on their quantitative aspect, we offer an alternative: to organize data according to a scale of relevance. Thus, in considering the topic of the content instead of how many times it was shared, one reaches a <strong>qualitative scale of reference</strong>.</p>"
sublink-label="See the source code"
sublink-href="https://github.com/ambanum/media-scale" %}
