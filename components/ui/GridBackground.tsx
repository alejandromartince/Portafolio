import { cn } from "../../lib/utils";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center">
      {/* Rejilla sutil */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:90px_90px]",
          "[background-image:linear-gradient(to_right,rgba(59,130,246,0.03)_5px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_5px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(59,130,246,0.008)_3px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.008)_3px,transparent_1px)]",
        )}
      />
    </div>
  );
}
