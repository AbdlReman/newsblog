import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from "../../images/partner/maidaan.png";
import pimg2 from "../../images/partner/al-sadad.png";
import pimg3 from "../../images/partner/vc.png";
import pimg4 from "../../images/partner/mtj.png";

import { Link } from "react-router-dom";

const partners = [
  {
    pImg: pimg1,
    // text: "Marketed By",
    link: "https://www.themaidaan.com/",
  },

  {
    pImg: pimg3,
    // text: "Constructed By",
    link: "https://thevictoryconstruction.com/",
  },
  {
    pImg: pimg4,
    link: "https://jhelummidtown.com/",
  },

  {
    pImg: pimg1,
    // text: "Marketed By",
    link: "https://www.themaidaan.com/",
  },

  {
    pImg: pimg3,
    // text: "Constructed By",
    link: "https://thevictoryconstruction.com/",
  },
  {
    pImg: pimg4,
    link: "https://jhelummidtown.com/",
  },

  // {
  //   pImg: pimg2,
  //   text: "here is text2",
  // },
  // {
  //   pImg: pimg3,
  //   text: "here is text 3",
  // },
];

// const PartnerSection = () => {
//   var settings = {
//     dots: false,
//     arrows: false,
//     speed: 1000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 1500,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="client-section pb-30 pt-85">
//       <div className="container">
//         <div className="client-inner">
//           <Slider {...settings}>
//             {partners.map((partner, pitem) => (
//               <>
//                 <div className="client-item" key={pitem}>
//                   <Link to="/">
//                     <img src={partner.pImg} alt="Client" />
//                   </Link>
//                 </div>
//                 <div className="text-center p-0 m-0" key={pitem}>
//                   <p>{partner.text}</p>
//                 </div>
//               </>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartnerSection;
const PartnerSection = () => {
  var settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 4, // Display three images at a time
    slidesToScroll: 1,
    autoplay: true,
    infinite: true, // Continuous loop
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="client-section pb-30 pt-85">
      <div className="container">
        <div className="client-inner ">
          <Slider {...settings}>
            {partners.map((partner, pitem) => (
              <div key={pitem}>
                <div className="client-item">
                  <a href={partner.link} target="_blank" rel="noreferrer">
                    <img src={partner.pImg} alt="Client" />
                  </a>
                </div>
                <div className="text-center p-0 ml-70 me-5 fw-bolder ">
                  <p>{partner.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
