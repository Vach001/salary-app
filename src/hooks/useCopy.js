import { useState } from "react";

export const useCopy = () => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text.toString());
    setCopied(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCopied(false);
  };

  return {
    copied,
    isHovered,
    setIsHovered,
    handleCopy,
    handleMouseLeave,
  };
};