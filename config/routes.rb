Rails.application.routes.draw do
  resources :log_events, only: 'index'
  root to: 'log_events#index'
end
