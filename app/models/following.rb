class Following < ApplicationRecord
  validates :follower_id, :following_id, presence: true
  validates :follower_id, uniqueness: {scope: :following_id}

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :User

  belongs_to :followee,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

end
