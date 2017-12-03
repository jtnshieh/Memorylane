json.extract! post, :id, :image_url, :caption, :location, :author

json.numLikes post.likes.count

# check to see if you can access current_user
json.like current_user.likes?(post)

json.commentIds do
  json.array! post.comments.pluck(:id)
end
