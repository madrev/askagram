class Api::AnswersController < ApplicationController
  def create
    @answer = Answer.new(answer_params)
    @answer.question_id = params[:question_id]
    @answer.user_id = current_user.id
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def show
    @answer = Answer.find_by_id(params[:id])
    render :show
  end

  def destroy
    @answer = Answer.find_by_id(params[:id])
    if @answer
      @answer.destroy
      render :show
    else
      render json: ["That answer does not exist"], status: 422
    end

  end

  private

  def answer_params
    params.require(:answer).permit(:image_url)
  end
end
