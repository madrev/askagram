# TODO: change up the details available here
@questions.each do |question|
  json.set! question.id do
    json.array! question.answers, :id, :user_id, :image_url
  end
end
