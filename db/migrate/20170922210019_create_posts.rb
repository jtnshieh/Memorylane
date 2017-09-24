class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :image_url, null: false
      t.text :caption
      t.string :location
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :posts, :user_id
  end
end
