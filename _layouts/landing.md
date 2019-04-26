<!doctype html>
<html>
  <head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		{% if page.description %}
			<meta name="Description" content="{{ page.description }}">
		{% endif %}

		<title>{{ page.title }} - {{ site.title }}</title>
		<link rel="stylesheet" href="{{ "/assets/css/landing.css" | absolute_url }}">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
		

		{% if site.ga_tracking != nil %}
			<script>
			window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
			ga('create', '{{ site.ga_tracking }}', '{{ site.url }}');
			ga('send', 'pageview');
			</script>
			<script async src="https://www.google-analytics.com/analytics.js"></script>
		{% endif %}

		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>

  <body class="landing">
    {{ content }}
  </body>
</html>