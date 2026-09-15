"use client";

import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";

interface CopyButtonProps {
  textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch {
      toast.error("Couldn't copy. Please copy it manually.");
      return;
    }

    setIsCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button
      type="button"
      aria-label="Copy email address"
      className="inline-flex h-7 min-w-[1.75rem] items-center justify-center gap-1 px-2 align-middle text-xs font-medium text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 disabled:cursor-default dark:text-white/80 dark:bg-white/10 dark:hover:bg-white/20 dark:focus-visible:outline-white transition-colors"
      onClick={handleCopy}
      disabled={isCopied}
    >
      {isCopied ? "Copied!" : <FaCopy />}
    </button>
  );
}
