class Api::QuestionsController < ApplicationController
  def create
    @question = Question.new(question_params)
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find_by_id(params[:id])
    if @question
      @question.destroy
      render :show
    else
      render json: ["That question does not exist"], status: 422
    end
  end

  def show
    @question = Question.find_by_id(params[:id])
    if @question
      render :show
    else
      render json: ["That question does not exist"], status: 422
    end
  end

  def index
    # TODO: sort/limit by some criteria
    @questions = Question.includes(:answers).all
    render :index
  end

  private

  def question_params
    # TODO: grab user id from current user
    params.require(:question).permit(:title, :description, :user_id)
  end
end
