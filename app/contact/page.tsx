import { sendMailAction } from "@/action/sendMailAction";
import { Send } from "lucide-react";
import { redirect } from "next/navigation";
import MailError from "./components/MailError";

type mailDataType = {
  userName: string;
  userEmail: string;
  userSubject: string;
  userMessage: string;
};

const contact = () => {
  const sendMail = async (formData: FormData) => {
    "use server";

    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const message = String(formData.get("message"));
    const subject = String(formData.get("subject"));

    const mailData: mailDataType = {
      userName: name,
      userEmail: email,
      userSubject: subject,
      userMessage: message,
    };

    const error = await sendMailAction(mailData);
    if (!error) {
      redirect("/contact?success=true");
      return;
    }

    redirect(`/contact?error=${true}`);
  };

  return (
    <>
      <MailError />
      <div className="h-full w-full flex justify-between gap-6">
        <div className="h-full w-full flex flex-col text-2xl basis-5/12 text-secondary-color gap-4 pt-32">
          <h4 className="text-4xl text-primary-color font-semibold">{`Let's Connect`}</h4>
          <p>
            Hey there, Thanks for reaching out to me. I am all open to hearing
            about any new opportunities or anything you want to say.
          </p>
        </div>
        <form
          className="flex flex-col gap-8 h-full basis-7/12 border-2 
        rounded-md py-2 px-3 border-secondary-color"
          action={sendMail}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-secondary-color mb-1">
              Your Name
            </label>
            <input
              name="name"
              required
              className="w-2/3 bg-transparent border-b-2  focus:outline-none border-b-secondary-color"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-secondary-color mb-1">
              Your Email
            </label>
            <input
              name="email"
              required
              className="w-2/3 bg-transparent border-b-2  focus:outline-none border-b-secondary-color"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="subject" className="text-secondary-color mb-1">
              Subject
            </label>
            <input
              name="subject"
              required
              className="w-full bg-transparent border-b-2  focus:outline-none border-b-secondary-color"
            />
          </div>
          <label className="flex flex-col gap-2 mt-2">
            <span className="text-secondary-color mb-1">Message</span>
            <textarea
              name="message"
              className="w-full bg-transparent focus:outline-none text-xl  custom-textarea"
              rows={6}
              spellCheck={false}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="flex gap-2
          items-center
          self-start border-2 px-4 py-1
          text-xl 
          text-secondary-color 
          border-secondary-color 
          rounded-lg 
          active:scale-95 
          hover:scale-105 
          hover:border-primary-color 
          hover:text-primary-color"
          >
            <p>Send</p>
            <Send className="h-5" />
          </button>
        </form>
      </div>
    </>
  );
};

export default contact;