import React, { useEffect } from "react";

function MobileRegisterButton() {
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
          right: "10%",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#007bff",
          padding: "5px 10px",
          fontSize: "6px",
          borderRadius: "5px",
          zIndex: 1000,
        }}
      >
        Register Now
      </button>
    </>
  );
}

export default MobileRegisterButton;
