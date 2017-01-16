class Api::LikesController < ApplicationController
  def create
    @like = Like.new

    if params[:answer_id]
      @like.likeable = Answer.find(params[:answer_id])
    end

    @like.user_id = current_user.id

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end

  end

  def destroy
    if params[:answer_id]
      like_search = Like.where(likeable_id: params[:answer_id],
                               likeable_type: "Answer",
                               user_id: current_user.id)
    end

    if like_search.empty?
      render json: ["No such like exists"], status: 422
    else
      @like = like_search[0]
      @like.destroy
      render :show
    end
  end

end
