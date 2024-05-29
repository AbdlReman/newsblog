import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const CtaSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k2axmpr", "template_v4lh9f1", form.current, {
        publicKey: "Ym18e7kAOJhnhpSBY",
      })
      .then(
        () => {
          //   console.log("SUCCESS!");
          form.current.reset();
          toast.success("sent successfully!");
        },
        (error) => {
          toast.error("Failed to send email.");
          // console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="call-action">
      <div className="container">
        <div className="call-action-inner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title text-white rmb-35">
                <h6>get quote</h6>
                <h2>call for action</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <form onSubmit={sendEmail} ref={form} className="subscribe">
                <input
                  ttype="email"
                  name="from_email"
                  placeholder="enter your mail"
                  required
                />
                <button
                  type="submit"
                  value="Send"
                  className="theme-btn style-two"
                >
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
