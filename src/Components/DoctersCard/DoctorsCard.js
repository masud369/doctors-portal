import React from "react";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorsCard = ({ doctorInfo }) => {
  return (
    <div className="col-md-4">
      <div className="card border-0" style={{ width: "18rem" }}>
        <div className="card-body">
          <img className="img-fluid" src={doctorInfo.image} alt="" />
          <div className="text-center py-2">
            <h6 className="">{doctorInfo.name}</h6 >
            <small className=""><FontAwesomeIcon style={{color: "#1cc7c1"}} icon={faPhone} />{doctorInfo.phone}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
