import React from 'react';

function CommentItem(props) {
  const {
    content,
    created_at,
    id,
    is_anonymous,
    is_participant,
    like: { likes, dislikes, user_link, user_dislike },
    rating,
    user: {
      profile: { first_name, last_name, image },
    },
  } = props;

  return (
    <div>
      <h1>aklsjdl</h1>
    </div>
  );
}

export default CommentItem;
