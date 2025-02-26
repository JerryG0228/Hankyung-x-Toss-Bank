import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListitem";

// 댓글 타입 정의
interface Comment {
  _id: string;
  content: string;
}

interface CommentListProps {
  comments: Comment[];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <Wrapper>
      {comments.map((comment) => (
        <CommentListItem key={comment._id} comment={comment} />
      ))}
    </Wrapper>
  );
};

export default CommentList;
