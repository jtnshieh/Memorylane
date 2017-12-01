# This file should contain all the record creation needed to seed the database with its default values.

# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy.all

betty = User.create!({full_name: "Betty Lam", username: "bettylam", password:"123abc", user_blurb:"LA -> SF", profile_pic_url:"http://res.cloudinary.com/dq60klc41/image/upload/v1506398802/e970671faa03af41e716cd7e63385034--unique-faces-face-reference_wwg6ei.jpg"})
nixon = User.create!({full_name: "Nixon Yiu", username: "nixonyiu", password:"123456", user_blurb:"coffee addict | world traveler", profile_pic_url:"http://res.cloudinary.com/dq60klc41/image/upload/v1506399142/Varun_2BDhawan_2Bprofile_2Bfamily_252C_2Bbiodata_252C_2Bwiki_2BAge_252C_2BAffairs_252C_2BWife_252C_2BHeight_252C_2BWeight_252C_2BBiography_252C_2BMovies_2Bgo_2Bprofile_2B1_dcutf2.jpg"})
michael = User.create!({full_name: "Michael Quint", username: "michael123", password:"1234567", user_blurb:"made in 1994", profile_pic_url:"http://res.cloudinary.com/dq60klc41/image/upload/v1506399309/profile-view-of-confident-sportsman-picture-id488758510_ytsgb3.jpg"})
rebekah = User.create!({full_name: "Rebekah Liu", username: "rebekaaaaa", password:"123abcd", user_blurb:"I may have the world's most unique laugh", profile_pic_url:"http://res.cloudinary.com/dq60klc41/image/upload/v1506399259/68f7d9ba482190ce2374e3514ea582ec--girl-profile-profile-face_qf1fvc.jpg"})
david = User.create!({full_name: "David Jang", username: "davidj", password:"123abcde", user_blurb:"I'm a Triton and coder", profile_pic_url:"http://res.cloudinary.com/dq60klc41/image/upload/v1506399351/Hy1QFuU_johwt0.jpg"})
demo = User.create!({full_name: "Demo User", username: "demo", password:"123456", user_blurb:"I'm demo :)", profile_pic_url:"https://res.cloudinary.com/dq60klc41/image/upload/v1512109723/justin_kpdjxs.jpg"})


post1 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506131907/images_wbyfnh.jpg", caption: "Popcorn and rain - two of my favorite things", location:"San Francisco", user_id: betty.id})
post2 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506131866/Cool-Status-For-Instagram-10_spfpm2.jpg", caption: "A daily dose of inspiration", location:"Los Angeles", user_id: nixon.id})
post3 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506398531/Cool-Status-For-Instagram-11_nbyi10.jpg", caption: "Resonating with this particularly at the moment", location:"New York City", user_id: michael.id})
post4 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506398604/1cf776f1695c642b5ec55bcf54f1d77e_kzt7i3.jpg", caption: "Trying out different perspectives", location:"Santa Monica", user_id: rebekah.id})
post5 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506398689/boulangerie_instagram_photo_g9hasy.jpg", caption: "#retrovibes", location:"SF fifth street", user_id: david.id})

# Demo's posts
post6 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506470214/31254be07d136ae9a6401ec93d117d27_dx9bu7.jpg", caption: "Dabbing in photography", location:"Boston", user_id: demo.id})
post7 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506470421/344d045fdca50440aabf368bc1688fee-1786_nf33hk.jpg", caption: "Caffeine is the greatest", location:"Philz", user_id: demo.id})
post8 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506470499/hNQXkc4OaK-x_wxjngi.jpg", caption: "Summer livin\'", location:"Honolulu", user_id: demo.id})
post9 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506470619/dc9676f4167f3cafc7af4cdcff3b0770--cool-quotes-awesome-quotes_pj3t09.jpg", caption: "Don't let anyone hold you down", location:"San Francisco", user_id: demo.id})
post10 = Post.create!({image_url: "http://res.cloudinary.com/dq60klc41/image/upload/v1506470688/aaa867d33b38156ff607a072e9633017_gyegwx.jpg", caption: "Love my friend melody's work", location:"melody's house", user_id: demo.id})

like1 = Like.create!({user_id: betty.id, post_id: post6.id})
like2 = Like.create!({user_id: nixon.id, post_id: post6.id})
like3 = Like.create!({user_id: michael.id, post_id: post6.id})
like4 = Like.create!({user_id: rebekah.id, post_id: post6.id})
like5 = Like.create!({user_id: david.id, post_id: post6.id})

like6 = Like.create!({user_id: betty.id, post_id: post7.id})
like7 = Like.create!({user_id: rebekah.id, post_id: post7.id})
like8 = Like.create!({user_id: michael.id, post_id: post8.id})
like9 = Like.create!({user_id: nixon.id, post_id: post9.id})
like10 = Like.create!({user_id: nixon.id, post_id: post10.id})
like11 = Like.create!({user_id: rebekah.id, post_id: post10.id})
like12 = Like.create!({user_id: betty.id, post_id: post10.id})

like13 = Like.create!({user_id: betty.id, post_id: post3.id})
like14 = Like.create!({user_id: rebekah.id, post_id: post5.id})
like15 = Like.create!({user_id: michael.id, post_id: post5.id})
like16 = Like.create!({user_id: nixon.id, post_id: post1.id})
like17 = Like.create!({user_id: nixon.id, post_id: post4.id})
like18 = Like.create!({user_id: rebekah.id, post_id: post2.id})
like19 = Like.create!({user_id: betty.id, post_id: post4.id})

comment1 = Comment.create!({body: "Also my favorite things!", user_id: david.id, post_id: post1.id})
comment2 = Comment.create!({body: "Agreed 100%", user_id: michael.id, post_id: post2.id})
comment3 = Comment.create!({body: "I'm feeling that especially right now", user_id: rebekah.id, post_id: post3.id})
comment4 = Comment.create!({body: "Dang your photography is awesome!", user_id: nixon.id, post_id: post4.id})
comment5 = Comment.create!({body: "Wow, so beautiful", user_id: betty.id, post_id: post5.id})
comment6 = Comment.create!({body: "Such a clever combination!", user_id: michael.id, post_id: post1.id})

#Demo follows
following1 = Following.create!({follower_id: demo.id, following_id: betty.id})
following2 = Following.create!({follower_id: demo.id, following_id: nixon.id})
following3 = Following.create!({follower_id: demo.id, following_id: michael.id})
following4 = Following.create!({follower_id: demo.id, following_id: rebekah.id})
following5 = Following.create!({follower_id: demo.id, following_id: david.id})

following6 = Following.create!({follower_id: betty.id, following_id: nixon.id})
following7 = Following.create!({follower_id: betty.id, following_id: michael.id})

following8 = Following.create!({follower_id: nixon.id, following_id: rebekah.id})
following9 = Following.create!({follower_id: nixon.id, following_id: betty.id})

following10 = Following.create!({follower_id: michael.id, following_id: david.id})
following11 = Following.create!({follower_id: michael.id, following_id: rebekah.id})

following12 = Following.create!({follower_id: rebekah.id, following_id: michael.id})
following13 = Following.create!({follower_id: rebekah.id, following_id: nixon.id})

following12 = Following.create!({follower_id: david.id, following_id: betty.id})
following13 = Following.create!({follower_id: david.id, following_id: rebekah.id})
