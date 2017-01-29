@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id
    json.set! :resultText, question.pg_search_highlight
  end
end
