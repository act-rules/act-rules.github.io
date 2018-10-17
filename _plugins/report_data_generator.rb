require 'json'

def create_implementors_csv
  # map of rule id to implementations count
  implementations = {}
  # map of list of implementors/ report
  implementors = []

  # iterate directory of reports and construct data
  Dir.glob('report/*.json') do |report_file|
    # read the file
    file = File.read(report_file)

    # parse the data
    data_hash = JSON.parse(file)

    # create rule implementations count
    data_rule_status = data_hash['ruleStatus']
    data_rule_status.each_with_index { |val, index| 
      rule_id = val['ruleId']
      implementations[rule_id.to_s] = 0

      rule_status = val['ruleStatus']
      if(rule_status === 'automated' || rule_status === 'semi-automated')
        implementations[rule_id.to_s] = implementations[rule_id.to_s] + 1 
      end
    }

    # save implementations data
    File.open("_data/implementations.json","w") do |f|
      f.write(implementations.to_json)
    end

    # create implementors data
    implementors.push({
      name: data_hash['testSystem']['name'],
      version:  data_hash['testSystem']['version'],
      created: data_hash['creator']['name'],
      report: report_file
    })

    # save implementors data
    File.open("_data/implementors.json","w") do |f|
      f.write(implementors.to_json)
    end
  end
end

# Hook for all the documents
Jekyll::Hooks.register :site, :pre_render do
	create_implementors_csv
end