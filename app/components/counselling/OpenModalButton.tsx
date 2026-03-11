"use client";

import type { ReactNode } from "react";

type OpenModalButtonProps = {
  className?: string;
  children: ReactNode;
  triggerEventName?: string;
};

export default function OpenModalButton({
  className,
  children,
  triggerEventName = "open-counselling-modal",
}: OpenModalButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new Event(triggerEventName));
  };

  return (
    <button className={className} onClick={handleClick} type="button">
      {children}
    </button>
  );
}
