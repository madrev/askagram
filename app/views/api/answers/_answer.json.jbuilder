json.extract! answer, :id, :image_url, :question_id
json.set! :poster do
  json.extract! answer.poster, :id, :username
end
json.set! :likers do
  json.array! answer.likers do |liker|
    json.extract! liker, :id, :username
  end
  # json.array! answer.likes do |like|
  #   json.extract! like, :id
  #   json.set! :liker do
  #     json.extract! like.liker, :id, :username
  #   end
  # end
end
json.set! :time_ago, time_ago_in_words(answer.created_at)
