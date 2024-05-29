import React from "react";
import MainImg from "../../images/PaymentPlan.jpg";

const DownloadPlan = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = MainImg;
    link.download = "PaymentPlan.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row mt-5"></div>
        <div className="row mt-5">
          <div className="col text-center">
            <button
              onClick={handleDownload}
              className="btn  text-white"
              style={{
                backgroundColor: "#285854",
                borderRadius: "0px",
                margin: "10px",
                padding: "10px 16px",
              }}
            >
              Download Payment Plans
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadPlan;
