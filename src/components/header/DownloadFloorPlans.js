import React from "react";
import MainImg from "../../images/floorplans.pdf";

const DownloadFloorPlans = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = MainImg;
    link.download = "victoryVillasBooklet.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button
        onClick={handleDownload}
        className="btn floor-plans-btn  text-white"
        title="Download Victory Villas Booklet"
      >
        <i className="fa fa-download"></i>
      </button>
    </>
  );
};

export default DownloadFloorPlans;
