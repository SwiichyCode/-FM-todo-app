import React from "react";
import styled from "styled-components";
export default function TaskDeleted() {
  return <TaskDeletedWrapper>TaskDeleted</TaskDeletedWrapper>;
}

const TaskDeletedWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: -130px;
  transform: translateY(-50%);
  color: red;
`;
