"use client";

import { useToast } from "@/components/ui/use-toast";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function MailError() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();
  useEffect(() => {
    if (searchParams.has("success")) {
      toast({
        title: "success",
        description: "Your Mail sent successfully",
        duration: 3000,
      });
      (document.getElementById("formdata") as HTMLFormElement).reset();
      setTimeout(() => {
        router.back();
      }, 0);
    }
    if (searchParams.has("error")) {
      toast({
        title: "error",
        description: "Error! Please check the details and try again",
        duration: 2000,
        variant: "destructive",
      });
      setTimeout(() => {
        router.back();
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return null;
}

export default MailError;
