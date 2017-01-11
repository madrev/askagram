class Question < ApplicationRecord
  validates :title, presence: true

  belongs_to :author, class_name: "User", foreign_key: :user_id
  has_many :answers
end
