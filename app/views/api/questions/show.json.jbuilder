json.extract! @question, :title, :description
json.set! :answers do
  json.array! @question.answers.reverse do |answer|
    json.partial! "api/answers/answer", answer: answer
  end
end
json.set! :author do
  json.extract! @question.author, :id, :username
end
