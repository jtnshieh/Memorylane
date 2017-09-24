class Post < ApplicationRecord
  validates :image_url, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
