import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const BlogForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k2axmpr", "template_emlmlow", form.current, {
        publicKey: "Ym18e7kAOJhnhpSBY",
      })
      .then(
        () => {
          //   console.log("SUCCESS!");
          form.current.reset();
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed to send Message.");
          // console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact-page mb-30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11">
            <form
              className="contact-form  bg-light rmt-0"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="section-title text-center mb-40"></div>
              <div className="row clearfix">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="from_name"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="from_email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="number"
                      name="from_number"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    value="Send"
                    className="theme-btn mt-40"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogForm;
