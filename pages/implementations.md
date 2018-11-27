---
layout: default
title: Implementations & Coverage Report
---

<!-- List of implementations -->
<table class="table table-striped">
  <thead>
    <tr>
			<th width='3%'>#</th>
			<th>Test System Name</th>
      <th>Version</th>
			<th>Created By</th>
			<th>Report</th>
    </tr>
	</thead>
  {% for imp in site.data.implementors %}
  <tr>
		<td>
			{{ forloop.index }}
		</td>
    <td>
     {{ imp.name }}
    </td>
    <td>
     {{ imp.version }}
    </td>
    <td>
     {{ imp.created }}
    </td>
    <td>
      <button 
        type="button" class="btn btn-link view-report-btn" 
        data-toggle="modal" 
        data-target=".view-report-modal-lg" 
        data-report-name="{{ imp.name }}"
        data-report-url="{{ site.baseurl }}/{{ imp.report }}">
        View Report
      </button>
    </td>
  </tr>
  {% endfor %}
</table>

<!-- Modal -->
<div class="modal fade view-report-modal-lg" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">
          New message
        </h4>
      </div>
      <div class="modal-body">
        <pre></pre>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- JS to get Modal data -->
<script type="text/javascript">
  $('.view-report-modal-lg')
    .on('show.bs.modal', function(event){
      var target = $(event.relatedTarget);
      var reportName =  target.data('report-name');
      var reportUrl = target.data('report-url');
      var modal = $(this);
      $.getJSON(reportUrl, function(data){
        modal.find('.modal-title').text('Report: ' + reportName);
        $( "<code/>", { "class": "hljs json", html: JSON.stringify(data, undefined, 2) }).appendTo(modal.find('.modal-body pre'));
      });
    })
</script>