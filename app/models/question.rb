class Question < ApplicationRecord
  validates :title, presence: true
  belongs_to :author, class_name: "User", foreign_key: :user_id
  has_many :answers, dependent: :destroy

  include PgSearch
  pg_search_scope :search_for,
    against: %i(title),
    using: {tsearch: { highlight: { start_sel: '<strong>', stop_sel: '</strong>'}, prefix: true } }
end
