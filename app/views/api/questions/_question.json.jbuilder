json.extract! question, :title, :description
json.set! :answers do
  json.array! question.answers
end
json.set! :author do
  json.extract! question.author, :id, :username
end
