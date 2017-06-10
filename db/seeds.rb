require 'as-duration'
require 'faker'

200.times do
start = Faker::Time.between(2.days.ago, Date.today, :day)
duration = Faker::Number.between(1,30)
LogEvent.create(
    time_start: start,
  time_end: start + duration,
  result_type: %w[success error].sample,
  result_message: Faker::StarWars.quote,
  task_type: "task_#{Faker::Number.between(1,5)}",
  host: Faker::Internet.domain_name
                )
end