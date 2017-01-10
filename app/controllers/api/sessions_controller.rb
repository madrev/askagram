class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username],
                                     user_params[:password])
    if @user.nil?
      render json: ["Invalid credentials"], status: 422
    else
      login(@user)
      render "api/users/show"
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody logged in"], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end



end
