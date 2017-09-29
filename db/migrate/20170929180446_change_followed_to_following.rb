class ChangeFollowedToFollowing < ActiveRecord::Migration[5.1]
  def change
    remove_column :followings, :followed_id, null: false
    add_column :followings, :following_id, :integer, null: false
    # remove_index :followings, column: [:follower_id, :followed_id]
    add_index :followings, [:follower_id, :following_id], unique: true
    # remove_index :followings, column: :followed_id
    add_index :followings, :following_id
  end
end
