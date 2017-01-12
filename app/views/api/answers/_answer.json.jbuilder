json.extract! answer, :id, :image_url, :question_id
json.set! :poster do
  json.extract! answer.poster, :id, :username
end
json.set! :time_ago, time_ago_in_words(answer.created_at)
