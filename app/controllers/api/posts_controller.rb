class Api::PostsController < ApplicationController
  def index
    @posts = Post.all.includes(:likes)
    render :index
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def update
    @post = Post.find(params[:id])
    @post.update_attributes(post_params)
    if @post.save!
      render :show
    else
      render json: @post.errors.full_messages, status: 401
    end
  end

  private

  def post_params
    params.require(:post).permit(:image_url, :caption, :location, :user_id)
  end
end
