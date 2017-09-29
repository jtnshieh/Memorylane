class Api::FollowingsController < ApplicationController

  def create
    follower_id = current_user.id
    following_id = params[:user_id]
    @following = Following.find_by(follower_id: follower_id, following_id: following_id)

    if @following
      @following.destroy
    else
      Following.new(follower_id, following_id)
    end

    render :show
  end

end
