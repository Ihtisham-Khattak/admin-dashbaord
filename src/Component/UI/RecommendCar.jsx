import React from "react";

const RecommendCar = (props) => {

    const {carNmae, retweet, imgUrl, percentage, rentPrice} = props.items


    return (
    <div className="recommend__cars-card">
      <div className="recommend__cars-top">
        <h4>
          <span>
            <i class="ri-refresh-line"></i>
          </span>
          {percentage}% Recommended Car
        </h4>
      </div>

      <div className="recommend__car-image">
        <img src={imgUrl} alt="recommended car" />
      </div>

      <div className="recommend__car-bottom">
        <h4>{carNmae}</h4>

        <div className="recommend__car-other">
          <div className="recommend__icons">
            <p>
              <span>
                <i class="ri-repeat-line"></i>{retweet}k
              </span>{" "}
            </p>
            <p>
              {" "}
              <span>
                <i class="ri-timer-flash-line"></i>
              </span>{" "}
            </p>
            <p>
              {" "}
              <span>
                <i class="ri-settings-2-line"></i>{" "}
              </span>{" "}
            </p>
          </div>
          <span>${rentPrice}/h</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCar;
