json.extract! post, :id, :image_url, :caption, :location, :author

json.numlikes post.likes.count

# check to see if you can access current_user
json.like current_user.likes?(post)
