class CreateFollowings < ActiveRecord::Migration[5.1]
  def change
    create_table :followings do |t|
      t.integer :follower_id, null: false
      t.integer :followed_id, null: false
      t.timestamps
    end
    add_index :followings, [:follower_id, :followed_id], unique: true
    add_index :followings, :followed_id
  end
end
