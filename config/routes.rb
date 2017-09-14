Rails.application.routes.draw do
  devise_for :users, path: 'users', controllers: { sessions: "users/sessions", registrations: 'users/registrations'}
  	devise_for :admins, path: 'admins', controllers: { sessions: "admins/sessions", registrations: 'admins/registrations'}
  root 'home#index'
  resources :home
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
