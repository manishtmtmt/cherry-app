import React from "react";

const Offers = ({ OffersData }) => {
  return (
    <section className="offers">
      <div className="container">
        {OffersData.map((data, index) => (
          <img key={index} className="offer" src={data} />
        ))}
      </div>
    </section>
  );
};

export default Offers;
