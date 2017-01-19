class Api::QuestionsController < ApplicationController
  def create
    @question = Question.new(question_params)
    @question.user_id = current_user.id
    if @question.save
      render :show_partial
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
    @question = Question.includes(answers: :likers).find_by_id(params[:id] )
    if @question
      render :show
    else
      render json: ["That question does not exist"], status: 422
    end
  end

  def index
    @sort_array = Answer.order(updated_at: :desc).map { |answer| answer.question_id }.uniq
    @questions = Question.includes(:answers).all

    render :index
  end

  def search
    @questions = Question.search_for(params[:query]).with_pg_search_highlight
    render :search_results
  end


  private

  def question_params
    params.require(:question).permit(:title, :description)
  end
end
