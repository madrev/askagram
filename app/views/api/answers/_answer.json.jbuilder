json.extract! answer, :image_url, :question_id
json.set! :poster do
  json.extract! answer.poster, :id, :username
end
