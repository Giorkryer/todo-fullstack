module Api
  class TodosController < ApplicationController
    # GET /api/todos
    def index
      @todos = ::Todo.all
      render json: @todos
    end

    # POST /api/todos
    def create
      @todo = ::Todo.new(todo_params)
      if @todo.save
        render json: @todo, status: :created
      else
        render json: @todo.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/todos/:id
    def destroy
      @todo = ::Todo.find(params[:id])
      @todo.destroy
      head :no_content
    end

    # PATCH /api/todos/:id/update_completed
    def update_completed
      @todo = ::Todo.find(params[:id])
      if @todo.update(todo_params)
        render json: @todo
      else
        render json: @todo.errors, status: :unprocessable_entity
      end
    end

    def update
      @todo = Todo.find(params[:id])
      if @todo.update(todo_params)
        render json: @todo
      else
        render json: @todo.errors, status: :unprocessable_entity
      end
    end

    private

    def todo_params
      params.require(:todo).permit(:todo_name, :completed)
    end
  end
end