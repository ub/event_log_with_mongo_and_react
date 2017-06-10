class LogEventsController < ApplicationController
  def index
    @log_event_list = LogEvent.all
  end
end
