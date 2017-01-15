class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if params[:answer_id]
      @like.likeable = Answer.find(params[:answer_id])
    end

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end

  end

  def destroy

    @like = Like.find(params[:id])
    
    if @like
      @like.destroy
      render :show
    else
      render json: ["That answer does not exist"], status: 422
    end

  end

  private

  def like_params
    params.require(:like).permit(:user_id)
  end
end
