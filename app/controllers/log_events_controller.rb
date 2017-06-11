class LogEventsController < ApplicationController
  def index
    @log_event_list = LogEvent.asc(:time_start)
  end
end
