class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, presence: true, uniqueness: true


  attr_reader :password
  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.new_session_token
    SecureRandom.base64(20)
  end

  def ensure_session_token
    self.session_token ||= User.new_session_token
  end

  def reset_session_token!
    self.session_token = User.new_session_token
    self.save!
  end

  def is_password?(password)
    digest = BCrypt::Password.new(self.password_digest)
    digest.is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

end
