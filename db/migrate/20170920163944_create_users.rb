class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :username, null: false, unique: true
      t.string :user_blurb
      t.string :email
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.string :profile_pic_url
      t.timestamps
    end
    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end
end
