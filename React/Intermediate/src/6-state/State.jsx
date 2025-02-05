import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        1+
      </button>
    </div>
  );
}

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button onClick={toggleLike}>{liked ? "좋아요 취소" : "좋아요"}</button>
    </div>
  );
}
