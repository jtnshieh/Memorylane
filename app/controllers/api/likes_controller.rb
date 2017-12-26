class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @post = @like.post

    if @like.save
      render "api/posts/show"
    else
      render json: @like.errors.full_messages, status: 422
    end

  end

  def destroy
    @like = Like.find_by(user_id: like_params[:user_id], post_id: like_params[:post_id])
    @post = @like.post

    if @like
      @like.destroy
      render "api/posts/show"
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end
end
