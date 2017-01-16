class Like < ApplicationRecord
  validates :likeable_id, :likeable_type, :user_id, presence: true
  validates_uniqueness_of :user_id, scope: [:likeable_type, :likeable_id]
  belongs_to :liker, class_name: :User, foreign_key: :user_id
  belongs_to :likeable, polymorphic: true
end
