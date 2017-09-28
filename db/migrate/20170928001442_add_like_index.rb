class AddLikeIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :likes, :user_id
    add_index :likes, [:user_id, :post_id], unique: true
  end
end
