class LogEvent
  include Mongoid::Document
  field :time_start, type: Integer
  field :time_end, type: Integer
  field :result_type, type: String
  field :result_message, type: String
  field :task_type, type: String
  field :host, type: String
end
