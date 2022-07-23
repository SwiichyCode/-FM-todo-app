import React from "react";
import { TaskInformationWrapper } from "./TaskInformation.style";

export default function TaskInformation() {
  return (
    <TaskInformationWrapper>
      <li className="information-message">Drag and drop to reorder list</li>
      <li className="information-message">Double-click the item to edit it</li>
    </TaskInformationWrapper>
  );
}
