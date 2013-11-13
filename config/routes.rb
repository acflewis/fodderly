FodderApp::Application.routes.draw do

  resources :users, :only => [:create, :new, :show] do
    resources :collections, :only => [:create, :destroy, :new, :update, :edit, :show] do 
      resources :collection_recipes, :only => [:create]
      resources :recipes, :only => [:show, :create, :destroy] do
        resource :collection_recipe, :only => [:destroy, :create]
      end
    end
  end
  resources :collections, :only => [:show, :index]
  resource :session, :only => [:create, :destroy, :new]
  resources :recipes, :only => [:index, :show] do
    resources :ingredients, only: [:index]
  end

  get '/about', to: 'static_pages#about'
  

  root :to => "static_pages#index"
end