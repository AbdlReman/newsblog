// import React from "react";
// import Bg from "../../images/wp/wp-bg.png";
// import abimg1 from "../../images/apartment/left.png";
// import abimg2 from "../../images/wp/wp-2.png";
// const VictoryVillasDis = () => {
//   return (
//     <section
//       id="about"
//       className="wp-section pt-150 rmb-100"
//       style={{ backgroundImage: `url(${Bg})` }}
//     >
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div className="wp-images rmb-150">
//               <div className="experience-year">
//                 <span className="number">25</span>
//                 <h4>Years of Experience</h4>
//               </div>
//               <img src={abimg1} alt="Wordpress" />
//               <img src={abimg2} alt="Wordpress" />
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="wp-content ml-50 rml-0 rpt-30">
//               <div className="section-title mb-10">
//                 <h2>
//                   Victory
//                   <span className="thin">Villas</span>
//                 </h2>
//                 <p>Live the Victory Life in Unmatched Luxury</p>
//               </div>
// <p>
//   We've meticulously designed each Victory Villa with high-end
//   We've meticulously designed each Victory Villa with high-end
//   finishes, spa-like amenities, and spacious layouts. Smart home
//   technology puts control at your fingertips, while stunning
//   architecture and private outdoor spaces create an oasis of
//   tranquility. Indulge in a gourmet kitchen perfect for culinary
//   creations, and unwind in a home theater designed for
//   entertainment. Al Sadat Group, a trusted name in real estate for
//   over a decade, brings their commitment to transparency and
//   affordability to Victory Villas. Partnering with the
//   award-winning Victory Construction, renowned for their quality
//   and on-time project delivery, Victory Villas guarantees not just
//   a dream home, but a winning investment.
// </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VictoryVillasDis;

import React from "react";
import abimg from "../../images/wp/wp-3.png";

const VictoryVillasDis = () => {
  return (
    <section className="about-section mt-4">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-7">
            <div className="about-image mr-50 rmr-0">
              <div className="experience-year">
                <span className="number">Top</span>
                <h4> INTERIORS AND STYLE</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="wp-content about-content mb-10 ml-50 pt-100 rmb-50">
              <div className="section-title mb-10">
                <h6>BEST ARCHITECT</h6>
                <h2>
                  Victory
                  <span className="thin">Villas</span>
                </h2>
                <h6> Welcome to Luxurious Victory Villas!</h6>
                <p>
                  Victory Villas aims to revolutionize contemporary living with
                  a demand for time-residential construction. Understanding that
                  a home embodies individuality, our approach entails close
                  collaboration and ensures that each residence is a prime
                  solution, reflecting unique preferences.
                </p>
              </div>
              <img src={abimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VictoryVillasDis;
