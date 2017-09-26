# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy.all

user1 = User.create!({full_name: "Betty Lam", username: "betty", password:"123abc", user_blurb:"ayayayya", profile_pic_url:"http://res.cloudinary.com/dq60klc41/image/upload/v1506398802/e970671faa03af41e716cd7e63385034--unique-faces-face-reference_wwg6ei.jpg"})
user2 = User.create!({full_name: "Nixon Yiu", username: "nixon", password:"123456", user_blurb:"I am Nixon", profile_pic_url:"http://res.cloudinary.com/dq60klc41/image/upload/v1506399142/Varun_2BDhawan_2Bprofile_2Bfamily_252C_2Bbiodata_252C_2Bwiki_2BAge_252C_2BAffairs_252C_2BWife_252C_2BHeight_252C_2BWeight_252C_2BBiography_252C_2BMovies_2Bgo_2Bprofile_2B1_dcutf2.jpg"})
user3 = User.create!({full_name: "Michael Quint", username: "michael", password:"1234567", user_blurb:"Michael is me", profile_pic_url:"http://res.cloudinary.com/dq60klc41/image/upload/v1506399259/68f7d9ba482190ce2374e3514ea582ec--girl-profile-profile-face_qf1fvc.jpg"})
user4 = User.create!({full_name: "Rebekah Liu", username: "Rebekah", password:"123abcd", user_blurb:"hollalaa i'm rebekahhhh", profile_pic_url:"http://res.cloudinary.com/dq60klc41/image/upload/v1506399309/profile-view-of-confident-sportsman-picture-id488758510_ytsgb3.jpg"})
user5 = User.create!({full_name: "David Jang", username: "david", password:"123abcde", user_blurb:"i'm a queen", profile_pic_url:"http://res.cloudinary.com/dq60klc41/image/upload/v1506399351/Hy1QFuU_johwt0.jpg"})


post1 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506131907/images_wbyfnh.jpg", caption: "yay", location:"Taiwan", user_id: 1})
post2 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506131866/Cool-Status-For-Instagram-10_spfpm2.jpg", caption: "lol", location:"America", user_id: 2})
post2 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506398531/Cool-Status-For-Instagram-11_nbyi10.jpg", caption: "super cool", location:"Asia", user_id: 3})
post2 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506398604/1cf776f1695c642b5ec55bcf54f1d77e_kzt7i3.jpg", caption: "love ferris wheels", location:"Santa Monica", user_id: 4})
post2 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506398689/boulangerie_instagram_photo_g9hasy.jpg", caption: "artsyyyyy", location:"Somewhere", user_id: 5})
