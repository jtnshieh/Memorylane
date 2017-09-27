@likes.each do |like|
  json.set! like.id do
    json.user_id like.user_id
    json.post_id like.post_id
  end
end
