import React from "react";
import { Link } from "react-router-dom";
const CardTotal = ({ value }) => {
  const { cardSubTotal, cardTax, cardTotal, clearCard } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              onClick={() => clearCard()}
            >
              Clear Card
            </button>
          </Link>
          <h5>
            <span className="text-title">subtotal :</span>
            <strong>$ {cardSubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">tax :</span>
            <strong>$ {cardTax}</strong>
          </h5>
          <h5>
            <span className="text-title">total :</span>
            <strong>$ {cardTotal}</strong>
          </h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardTotal;
