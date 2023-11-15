import React from "react";

const contact = async () => {
  return (
    <div className="h-full w-full flex justify-center">
      <form className="flex flex-col h-full w-2/3 border-2 rounded-md py-4 px-3">
        <label htmlFor="email" className="text-primary-color mb-2">
          Your Email
        </label>
        <input
          name="email"
          placeholder="Enter your email"
          className="bg-transparent border-b-2 pb-1 focus:outline-none placeholder:text-secondary-color placeholder:text-sm"
        />
        <label className="flex flex-col gap-2 mt-12">
          <span className="font-medium text-gray-500 text-sm">Message</span>
          <textarea
            name="message"
            className="w-full bg-transparent focus:outline-none text-2xl  custom-textarea"
            rows={6}
            spellCheck={false}
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export default contact;
