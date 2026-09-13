import React, { useState, useEffect } from "react";

const TypingLoop: React.FC<{ text: string; speed?: number }> = ({ text, speed = 200 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, index)); // Show characters up to `index`
      setIndex((prev) => (prev + 1) % (text.length + 1)); // Increment index
    }, speed);
  
    return () => clearTimeout(timeout); // Cleanup previous timeout
  }, [index, text, speed]);
  

  // The full text is always in the HTML for screen readers and search engines;
  // the animated copy is visual only.
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{displayedText}</span>
    </>
  );
};

export default TypingLoop;
