import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListitem";

// 게시글 타입 정의
interface Post {
  _id: string; // MongoDB 기반이라면 `_id`가 일반적
  title: string;
  content: string;
  createdAt: string;  // createdAt 필드 추가
}

interface PostListProps {
  posts: Post[];
  onClickItem: (post: Post) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const PostList: React.FC<PostListProps> = ({ posts, onClickItem }) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <PostListItem
          key={post._id} // 'id' -> '_id' 변경
          post={post}
          onClick={() => onClickItem(post)}
        />
      ))}
    </Wrapper>
  );
};

export default PostList;
