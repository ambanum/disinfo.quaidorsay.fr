---
layout: our-actions
permalink: /fr/nos-actions
title: Nos actions
original: our-actions
navbar_items:
  - <a href="/" class="header_mainnav_link">Accueil</a>
  - <a href="/fr/nos-actions" class="header_mainnav_link">Nos actions</a>
  - <a href="/encyclopedia" class="header_mainnav_link">Désencyclopédie</a>
  - <a href="/fr/cgus" class="header_mainnav_link">CGUs</a>
---

{% if site.data.translations.[page.original].influence %}
## {{ site.data.translations.[page.original].influence.title[page.lang] }}
{: #{{ site.data.translations.[page.original].influence.title[page.lang] | slugify: "latin" }} }
{% for item in site.data.translations.[page.original].influence.items %}
  {% include our-actions/action.html item=item %}
{% endfor %}
{% endif  %}

{% if site.data.translations.[page.original].federate %}
## {{ site.data.translations.[page.original].federate.title[page.lang] }}
{: #{{ site.data.translations.[page.original].federate.title[page.lang] | slugify: "latin" }} }
{% for item in site.data.translations.[page.original].federate.items %}
  {% include our-actions/action.html item=item %}
{% endfor %}
{% endif  %}

{% if site.data.translations.[page.original].empower %}
## {{ site.data.translations.[page.original].empower.title[page.lang] }}
{: #{{ site.data.translations.[page.original].empower.title[page.lang] | slugify: "latin" }} }
{% for item in site.data.translations.[page.original].empower.items %}
  {% include our-actions/action.html item=item %}
{% endfor %}
{% endif  %}

