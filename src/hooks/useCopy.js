import { useState } from "react";

export const useCopy = () => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = (value) => {
    let textToCopy = '';
    
    if (value && typeof value === 'object' && value.target) {
      textToCopy = value.target.innerText || value.target.value || '';
    } else if (typeof value === 'number') {
      textToCopy = value.toString();
    } else if (typeof value === 'string') {
      textToCopy = value;
    } else {
      textToCopy = String(value || '');
    }
    
    const cleanNumber = textToCopy.replace(/[^\d]/g, '');
    if (cleanNumber) {
      navigator.clipboard.writeText(cleanNumber);
    } else {
      navigator.clipboard.writeText(textToCopy);
    }
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