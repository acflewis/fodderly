FodderApp::Application.routes.draw do

  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  resources :recipes, :only => [:index, :show]


  root :to => "static_pages#index"
end