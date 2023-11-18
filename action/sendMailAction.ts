import { toast } from "react-toastify";

type mailDataType = {
  userName: string;
  userEmail: string;
  userSubject: string;
  userMessage: string;
};

export const sendMailAction = async (mailData: { [key: string]: string }) => {
  //   "use server";

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://harshsikriwal.vercel.app"
      : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mailData),
  });

  const { error } = await response.json();
  return error;
};
