import React from "react";

export default function AnimatedText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="block overflow-hidden h-6">
      <span className="flex flex-col transition-transform duration-150 ease-out group-hover:-translate-y-1/2">

        <span className="flex items-center justify-center gap-2 h-6">
          {children}
        </span>

        <span className="flex items-center justify-center gap-2 h-6">
          {children}
        </span>

      </span>
    </span>
  );
}
