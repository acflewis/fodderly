FodderApp::Application.routes.draw do

  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  resources :recipes, :only => [:index, :show] do
    resources :images, only: [:index]
    resources :ingredients, only: [:index]
  end


  root :to => "static_pages#index"
end