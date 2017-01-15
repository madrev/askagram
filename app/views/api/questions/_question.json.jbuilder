json.extract! question, :title, :id
json.set! :answers do
  json.array! question.answers.reverse, :id, :user_id, :image_url
end
