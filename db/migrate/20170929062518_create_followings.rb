class CreateFollowings < ActiveRecord::Migration[5.1]
  def change
    create_table :followings do |t|
      t.integer :follower_id, null: false
      t.integer :following_id, null: false
      t.timestamps
    end
    add_index :likes, [:follower, :following_id], unique: true
    add_index :likes, :following_id
  end
end
