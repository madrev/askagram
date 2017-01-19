json.set! :questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! "api/questions/question", question: question
    end
  end
end
json.set! :sortOrder, @sort_array
