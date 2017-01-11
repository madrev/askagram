class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :poster, class_name: "User", foreign_key: :user_id
end
