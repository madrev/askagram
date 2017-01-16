json.extract! @question, :title, :description
json.set! :time_ago, time_ago_in_words(@question.created_at)
json.set! :author do
  json.extract! @question.author, :id, :username
end
json.set! :answers do
  json.array! @question.answers.reverse do |answer|
    json.partial! "api/answers/answer", answer: answer
  end
end
