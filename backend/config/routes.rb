Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    resources :todos, only: [:index, :create, :destroy, :update] do
      member do
        # Isso cria a rota /api/todos/:id/update_completed
        patch :update_completed
      end
    end
  end
end