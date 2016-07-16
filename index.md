---
layout: default
---
# Auto-WCAG Rules

To learn about Auto-WCAG itself visit the auto-wcag Community Group website at [w3.org/community/auto-wcag/](https://www.w3.org/community/auto-wcag/).

<ul>
  {% for rule in site.rules %}
	<li><a href="{{ rule.url }}">
	    {{ rule.title }}
	</a></li>
  {% endfor %}
</ul>