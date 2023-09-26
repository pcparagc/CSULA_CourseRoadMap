import Block from "./Block"; // Adjust the path if needed
import React from "react";
import { ArcherElement } from "react-archer";

const Arrow = ({ sourceId, targetId }) => {
  return (
    <ArcherElement
      id={`arrow-${sourceId}-${targetId}`}
      relations={[{
        targetId,
        targetAnchor: 'top',
        sourceAnchor: 'bottom',
      }]}
    >
      <div style={{ height: '20px', backgroundColor: 'lightgray' }}></div>
    </ArcherElement>
  );
};

export default Arrow;
