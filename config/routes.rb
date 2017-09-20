Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, path: 'users', controllers: { sessions: "users/sessions", registrations: 'users/registrations', omniauth_callbacks: 'users/omniauth_callbacks'}
  devise_for :admins, path: 'admins', controllers: { sessions: "admins/sessions", registrations: 'admins/registrations'}
  root 'home#index'
  resources :profile, :only => [:index, :show]
  resources :home, :only => [:index]
  resources :myquizzes, :only => [:index]
  resources :genres do
    resources :subgenres do
      resources :questions
      resources :quizzes
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
