class Like < ApplicationRecord
  validates :likeable_id, :likeable_type, :user_id, presence: true
  belongs_to :liker, class_name: :User, foreign_key: :user_id
  belongs_to :likeable, polymorphic: true
end
