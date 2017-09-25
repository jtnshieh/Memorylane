# json.partial! "api/users/user", user: @user

json.extract! @user, :id, :username, :profile_pic_url, :user_blurb, :full_name, :posts
