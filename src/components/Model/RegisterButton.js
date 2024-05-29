import React, { useEffect } from "react";

function RegisterButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <button
        data-tf-popup="pnDQPsKA"
        data-tf-size="70px"
        className="btn btn-primary position-absolute"
        style={{
          right: "20%",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#007bff",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          zIndex: 1000,
        }}
      >
        Register Now
      </button>

      <style jsx>{`
        @media (max-width: 576px) {
          button[data-tf-popup="pnDQPsKA"] {
            font-size: 9px;
            padding: 2px 4px;
            right: 7%;
            background-color: white; /* corrected from backgroundcolor to background-color */
          }
        }
      `}</style>
    </>
  );
}

export default RegisterButton;
