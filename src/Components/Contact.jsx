import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const notify = () => toast("Message Send Succecfuly ✔");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2zchq47", "template_kwtr0rc", form.current, {
        publicKey: "fP6i_3DjeG4BGIgr8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="w-full my-32 md:flex">
        <div className="md:w-[40%] h-[150px] w-full md:h-full flex justify-center md:pt-32 p-5 items-center">
          <h1 className="md:text-7xl text-5xl">Get In Touch</h1>
        </div>
        <div className=" w-full md:h-full md:w-[60%]">
          <div className="md:w-[90%] w-full flex flex-col items-center justify-center h-[80%] rounded-xl bg-zinc-700">
            <form ref={form} onSubmit={sendEmail}>
              <div className="w-full flex-col flex justify-center items-center h-[100px]">
                <div className="pr-52 py-2">
                  <h3 className="">Your Name</h3>
                </div>
                <input
                  type="text"
                  name="to_name"
                  required
                  placeholder="Enter Your Name"
                  className=" rounded-md w-[300px] h-[30px] text-black p-2 bg-zinc-300 focus:border-blue-400 outline-none"
                />
              </div>
              <div className="w-full flex-col flex justify-center items-center h-[100px]">
                <div className="pr-52 py-2">
                  <h3 className="">Your Email</h3>
                </div>
                <input
                  type="email"
                  name="from_name"
                  required
                  placeholder="Enter Your Email"
                  className=" rounded-md w-[300px] h-[30px] text-black p-2 bg-zinc-300 focus:border-blue-400 outline-none"
                />
              </div>
              <div className="w-full flex-col flex justify-center items-center">
                <div className="pr-52 py-2">
                  <h3 className="">Your Message</h3>
                </div>
                <textarea
                  type="text"
                  name="message"
                  required
                  placeholder="Enter Your message"
                  className=" rounded-md w-[300px] overflow-y-auto h-[150px] text-black p-2 bg-zinc-300 focus:border-blue-400 outline-none"
                />
              </div>
              <div className="w-full h-[50px] my-3">
                <button
                  onClick={notify}
                  type="submit"
                  className="bg-zinc-800  px-8 py-2 hover:scale-105 transition-all duration-300 hover:bg-zinc-500 rounded-full"
                >
                  Submit
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="w-full border-0 mb-12 bg-gradient-to-r from-transparent via-white/10 to-transparent h-[2px]" />
    </>
  );
};

export default Contact;
