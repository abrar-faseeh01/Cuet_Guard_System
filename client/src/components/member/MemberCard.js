import React from "react";
import { Link } from "react-router-dom";

const MemberCard = ({ id, name, place, time }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className=" mb-3">
      <div className=" p-3  row testimonial-one__single  justify-content-between align-item-center text-center ">
        <div className="row">
          <div className="testimonial-one__img col-xl-2 member-frofile-card">
            <img
              src={publicUrl + "assets/images/images (4).jpeg"}
              alt=""
            />
          </div>

          <div className=" col-xl-3 p-1 m-2 ">
            <h5 className="">{name}</h5>
          </div>

          <div className=" col-xl-3 py-3 profile-button-div">
            <h5 className="">{place}</h5>
          </div>
          <div className=" col-xl-3 py-3 profile-button-div">
            <h5 className="">{time}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
