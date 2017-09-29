class User < ApplicationRecord
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :password_digest, presence: true
  validates :full_name, presence: true

  attr_reader :password

  has_many :posts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Post

  has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

  has_many :comments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Comment

  has_many :followers,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Following

  has_many :followees,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :Following

  has_many :liked_posts,
    through: :likes,
    source: :post

  has_many :followed_users,
    through: :followees,
    source: :followee


  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def likes?(post)
    self.liked_posts.include?(post)
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
