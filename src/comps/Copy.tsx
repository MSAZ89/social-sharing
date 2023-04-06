import React, { RefObject } from "react";

interface CopyProps {
  copy: string;
  handleCopy: () => void;
}

const Copy: React.FC<CopyProps> = ({ copy, handleCopy }) => {
  const handleClick = async () => {
    await navigator.clipboard.writeText(copy || "");
    handleCopy();
  };

  return <button onClick={handleClick}>Copy</button>;
};

export default Copy;
