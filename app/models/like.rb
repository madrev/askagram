class Like < ApplicationRecord
  validates :likeable_id, :likeable_type, :user_id, presence: true
  belongs_to :user
  belongs_to :likeable, polymorphic: true
end
