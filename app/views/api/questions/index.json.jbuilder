# TODO: change up the details available here
@questions.each do |question|
  json.set! question.id do
    json.partial! "api/questions/question", question: question
  end
end
