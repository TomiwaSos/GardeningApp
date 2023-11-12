# config/routes.rb
Rails.application.routes.draw do
  devise_for :users
  #mount_devise_token_auth_for 'User', at: 'auth'
  #devise_for :users, controllers: { registrations: 'users/registrations', sessions: 'users/sessions'}

  as :user do
    get 'user/index', to: 'users/registrations#index', as: 'user_index'
  end

  #devise_scope :user do
  #  get 'users', to: 'users/registrations#index', as: 'users_index'
  #  post 'users/register_user', to: 'users/registrations#register_user'
  #  #get 'user/sign_in', to: 'users/sessions#new'
  #  post 'user/sign_in', to: 'users/sessions#create'
  #  #delete 'user/sign-out', to: 'users/sessions#destroy'
  #end

  get 'up' => 'rails/health#show', as: :rails_health_check
  resources :clients
end
