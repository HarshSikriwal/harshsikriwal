import { Toaster } from "@/components/ui/toaster";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {children}
      <Toaster />
    </div>
  );
};

export default layout;
