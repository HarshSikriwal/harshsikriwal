import { Toaster } from "@/components/ui/toaster";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full max-lg:px-2">
      {children}
      <Toaster />
    </div>
  );
};

export default layout;
