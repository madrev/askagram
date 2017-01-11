# TODO: change up the details available here
@questions.each do |question|
  json.partial! "api/questions/question", question: question
end
