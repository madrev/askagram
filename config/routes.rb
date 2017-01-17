Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:create, :show, :destroy, :index] do
      get 'search', on: :collection
      resources :answers, only: [:create]
    end
    #  TODO: clean this up after testing
    resources :answers, only: [:show, :destroy] do
      post 'like', to: 'likes#create'
      delete 'like', to: 'likes#destroy'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
