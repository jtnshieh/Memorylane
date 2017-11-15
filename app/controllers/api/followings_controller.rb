class Api::FollowingsController < ApplicationController

  def create
    follower_id = current_user.id
    @following = Following.new(follower_id, follow_params)

    if @following.save
      render :show
    else
      render json: @following.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @following = Following.find_by_id(params[:id])

    if @following
      render :show
    end
  end

  def destroy
    follower_id = current_user.id
    @following = Following.find(follower_id, follow_params)
    if @following
      @following.destroy
    end
  end

  private

  def follow_params
    params.require(:following).permit(:followee_id)
  end

end
