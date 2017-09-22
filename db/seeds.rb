# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy.all

user1 = User.create!({full_name: "Betty Lam", username: "betty", password:"123abc"})
user2 = User.create!({full_name: "Nixon Yiu", username: "nixon", password:"123456"})
user3 = User.create!({full_name: "Michael Quint", username: "michael", password:"1234567"})
user4 = User.create!({full_name: "Rebekah Liu", username: "Rebekah", password:"123abcd"})
user5 = User.create!({full_name: "David Jang", username: "david", password:"123abcde"})
