import { useState, useEffect } from "react";

export default function Typewriter({ texts, className }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    const speed = reverse ? 50 : 100; // typing vs deleting speed
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);

    // fully typed out → pause before deleting
    if (!reverse && subIndex === texts[index].length) {
      setTimeout(() => setReverse(true), 1000);
    }
    // fully deleted → move to next phrase
    else if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length); // loop through
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <p className={className}>
      {texts[index].substring(0, subIndex)}
      <span className="animate-blink">|</span>
    </p>
  );
}