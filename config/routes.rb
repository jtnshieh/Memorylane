Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show] do
      resources :followings, only:[:create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only:[:index, :create, :show, :update]
    resources :likes, only:[:create, :destroy]
    resources :comments, only:[:show, :index, :create, :destroy]
  end
  root "static_pages#root"
end
