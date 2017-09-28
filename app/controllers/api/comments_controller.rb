class Api::CommentsController < ApplicationController
  # def show
  #   @comment = Comment.find_by_id(params[:id])
  #   render 'api/comments/show'
  # end
  
  def index
    @comments = Comment.all
    render "api/comments/index"
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def destroy
    @comment = Comment.find_by(user_id: comment_params[:user_id], post_id: comment_params[:post_id])

    if @comment
      @comment.destroy
      render "api/comments/show"
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id)
  end
end
