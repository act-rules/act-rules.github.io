---
title: Algorithms
---

{%
	for algorithms in site.pages
%}{% if algorithms.category == "algorithms"
%}- [{{ algorithms.title }}]({{ algorithms.url }})
{% endif %}{% endfor %}