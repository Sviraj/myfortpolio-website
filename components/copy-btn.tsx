"use client";

import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";

interface CopyButtonProps {
  textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button
      className="ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 transition-all"
      onClick={handleCopy}
      disabled={isCopied}
    >
      {isCopied ? "Copied!" : <FaCopy />}
    </button>
  );
}
