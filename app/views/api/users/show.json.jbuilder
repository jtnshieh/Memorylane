# json.partial! "api/users/user", user: @user

json.extract! @user, :id, :username, :profile_pic_url, :user_blurb, :full_name, :posts

json.followers do
  json.array! @user.followers.pluck(:id)
end

json.followees do
  json.array! @user.followees.pluck(:id)
end
