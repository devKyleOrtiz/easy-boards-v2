Rails.application.routes.draw do
  resources :users do
    resources :boards do
      resources :lists
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/login', to: 'sessions#create'
  get "/user", to: "users#show"
end
