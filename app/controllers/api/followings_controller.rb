class Api::FollowingsController < ApplicationController

  def create
    # follower_id = current_user.id
    @following = Following.new(follow_params)

    if @following.save
      render json: @follow
    else
      render json: @following.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @following = Following.find_by(follower_id: follow_params[:follower_id],
                                   following_id: follow_params[:following_id])
    render json: @following
  end

  def destroy
    # follower_id = current_user.id
    @following = Following.find_by(follower_id: follow_params[:follower_id],
                                   following_id: follow_params[:following_id])
    if @following
      @following.destroy
      render json: @follow
    else
      render json: @following.errors.full_messages, status: 422
    end
  end

  private

  def follow_params
    params.require(:following).permit(:follower_id, :following_id)
  end

end
