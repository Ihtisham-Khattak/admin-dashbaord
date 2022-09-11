import React from "react";

const SingleCard = (props) => {
  const { title, totalNumber, icon } = props.items;

  return (
    <div className="single__card">
      <div className="card__content">
        <h3>{title}</h3>
        <span>{totalNumber}</span>
      </div>

      <span className="card__icon">
        <i class={icon}></i>
      </span>
    </div>
  );
};

export default SingleCard;
