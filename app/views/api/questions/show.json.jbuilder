json.extract! @question, :title, :description
json.set! :time_ago, time_ago_in_words(@question.created_at)
json.set! :author do
  json.extract! @question.author, :id, :username
end
json.set! :answers do
  @question.answers.each do |answer|
    json.set! answer.id do
      json.partial! "api/answers/answer", answer: answer
    end
  end
end
