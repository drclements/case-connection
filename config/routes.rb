Rails.application.routes.draw do
  
  resources :images
  resources :program_announcements
  resources :sample_assessments
  resources :fundings
  resources :perception_of_cares
  resources :progress_notes
  resources :treatment_plans
  resources :clients
  resources :mentors
  resources :case_managers
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


  post '/signup', to: "case_managers#create"
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'sessions#show'
  
end
