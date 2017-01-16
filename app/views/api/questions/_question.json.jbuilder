json.extract! question, :title, :id
json.set! :answers do
  question.answers.each do |answer|
    json.set! answer.id do
      json.extract! answer, :id, :user_id, :image_url
    end
  end
end
