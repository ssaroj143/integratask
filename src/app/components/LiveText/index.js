import React, { useEffect } from "react";

const LiveText = (props) => {
  const { ariaLive, role, message, updateLiveMessage, clearTextDelay } = props;

  useEffect(() => {
    setTimeout(() => {
      updateLiveMessage(" ");
    }, clearTextDelay);
  }, [message]);

  return (
    <div className="sr-only" aria-live={ariaLive}>
      {message}
    </div>
  );
};

LiveText.defaultProps = {
  clearTextDelay: 300,
};

export default LiveText;
