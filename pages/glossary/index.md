---
title: Glossary
---

<table class="table table-striped">
  <thead>
    <tr>
			<th>Name</th>
      <th>Key</th>
    </tr>
	</thead>

  {% for item in site.pages %}
  {% if item.category == "glossary"%}
  <tr>
    <td>
      <a class='rule-list-title' href="{{ item.url | prepend: site.baseurl }}">{{item.title}}</a>
    </td>
    <td>
      {{ item.key }}
    </td>
  </tr>
  {% endif %}
  {% endfor %}
</table>