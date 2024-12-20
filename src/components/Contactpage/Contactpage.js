import React from "react";
import ContactForm from "../ContactFrom";

import { metaData } from "../../api/metaData";
import { Helmet } from "react-helmet";
import { MdContacts, MdEmail, MdLocationPin } from "react-icons/md";

const Contactpage = () => {
  const page = "contact";
  const { title, description } = metaData(page);
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div>
        <div class="contact-map" id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217898.05622262493!2d73.08930095!3d31.423571499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab!5e0!3m2!1sen!2s!4v1716977601658!5m2!1sen!2s"></iframe>
        </div>
        <div className="contact-info text-center mb-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="info-item">
                  <MdLocationPin size={60} color="#c19666" />

                  <p className="mt-4">Faisalabad | Pakistan</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-item">
                  <MdContacts size={60} color="#c19666" />

                  <p className="mt-4">(+92) 332 495 2550</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-item">
                  <MdEmail size={60} color="#c19666" />

                  <p className="mt-4">abidwehnival2@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contactpage;
