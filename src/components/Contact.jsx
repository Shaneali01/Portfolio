import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  // State to manage loading
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: 'c923b3eb-e737-490e-885b-1cdea6923ff6',
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      setLoading(true); // Set loading to true when starting the submission
      console.log(data);
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false); // Set loading to false after the submission is complete
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 "
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 dark:text-slate-200 dark:bg-slate-800 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block dark:text-slate-200 text-gray-700">FullName</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block dark:text-slate-200 text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block dark:text-slate-200 text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className={`bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading} // Disable the button when loading
            >
              {loading ? "Sending..." : "Send"} {/* Show loading text */}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
