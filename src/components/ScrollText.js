import { useState } from "react";

export default function ScrollText({ playChaching, position }) {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("5LJMJyR8MtAkbtpf8kFUV7S9oFG3xaGDdcnFxYt9pump");
    playChaching();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className={`scroll-container ${position}`} onClick={handleCopy}>
      <div className="scroll-text">
        {Array(16)
          .fill("5LJMJyR8MtAkbtpf8kFUV7S9oFG3xaGDdcnFxYt9pump")
          .map((text, i) => (
            <span key={i}>{text}</span>
          ))}
      </div>
      <div className={`copy-notification ${showNotification ? "show" : ""}`}>
        Copied!
      </div>
    </div>
  );
}