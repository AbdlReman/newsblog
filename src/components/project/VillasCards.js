import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import Bg from "../../images/wp/wp-bg.png";
import { Link } from "react-router-dom";
const client = createClient({
  space: "qyzgwyj54129",
  accessToken: "Ds5IGXCqFaJgJURr-OiVw60qGdjd2hcvXlF1aG4rsy8",
});

function VillasCards() {
  const [villas, setVillas] = useState([]);

  useEffect(() => {
    async function fetchVillas() {
      try {
        const entries = await client.getEntries({
          content_type: "villas",
        });
        setVillas(entries.items);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    }

    fetchVillas();
  }, []);

  return (
    // <div>
    //   {villas.map((villa) => {
    //     const { title, slug, discription } = villa.fields;
    //     return (
    //       <div key={slug}>
    //         <h2>{title}</h2>
    //         <h3>{discription}</h3>
    //       </div>
    //     );
    //   })}
    // </div>
    <>
      <section
        className={`services-section rpt-100 pb-70 `}
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="container">
          <div className="row">
            {villas.map((villa) => {
              const { title, slug, discription, thumbnail } = villa.fields;
              return (
                <div className="col-lg-4 col-md-6" key={slug}>
                  <div className="team-item">
                    <img
                      src={"https:" + thumbnail?.fields?.file?.url}
                      alt="iconImage"
                    />
                    <div className="team-des">
                      <h3>{title}</h3>
                      <p>{discription}</p>
                      <Link to={"/projects/" + slug} className="text-black">
                        <p>Read More</p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default VillasCards;
