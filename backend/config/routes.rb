Rails.application.routes.draw do
  # Rota de saúde (padrão do Rails 7)
  get "up" => "rails/health#show", as: :rails_health_check

  # Aqui começa a mágica da sua API
  namespace :api do
    resources :todos, only: [:index, :create, :destroy] do
      member do
        # Isso cria a rota /api/todos/:id/update_completed
        patch :update_completed
      end
    end
  end
end