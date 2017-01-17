@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id
    json.set! :result, question.pg_search_highlight
  end
end
