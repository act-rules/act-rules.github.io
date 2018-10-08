require 'json'
require 'csv'

def create_implementors_csv
  # map of rule id to implementors count
  implementations = {}

  # create file with heading
  CSV.open('_data/implementors.csv', 'wb') do |csv|
    csv << ['name', 'version', 'created', 'report']
  end

  # iterate directory of reports and construct data
  Dir.glob('report/*.json') do |report_file|
    # read the file
    file = File.read(report_file)

    # parse the data
    data_hash = JSON.parse(file)

    # iterate and create rule implementation count
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

    # save implementors data
    CSV.open('_data/implementors.csv', 'a+') do |csv|
      csv << [
        data_hash['testSystem']['name'],
        data_hash['testSystem']['version'],
        data_hash['creator']['name'],
        report_file
      ]
    end
  end
end

# Hook for all the documents
Jekyll::Hooks.register :site, :pre_render do
	create_implementors_csv
end