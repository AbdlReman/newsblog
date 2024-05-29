import Bg from "../../images/contact/contact-section.png";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactSection = () => {
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
    <section
      className="contact-section "
      // style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <form
              className="contact-form bg-white mt-100 rmt-0"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="section-title text-center mb-40">
                <h2>Request a Visit</h2>
              </div>
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

export default ContactSection;

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const ContactSection = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_1t5hkid", "template_bkfh1sh", form.current, {
//         publicKey: "lg9uPFhyIA07lWgR4",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };
//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="from_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default ContactSection;
