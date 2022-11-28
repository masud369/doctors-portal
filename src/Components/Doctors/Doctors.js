import React from "react";
import doctor from "../../images/doctor-small.png";
import DoctorsCard from "../DoctersCard/DoctorsCard";

const Doctors = () => {
  const doctorsInfo = [
    {
      name: "Dr.Caudi",
      phone: "+61452200126",
      image: doctor,
    },
    {
      name: "Dr.Caudi",
      phone: "+61452200126",
      image: doctor,
    },
    {
      name: "Dr.Caudi",
      phone: "+61452200126",
      image: doctor,
    },
  ];

  return (
    <div className="container my-5">
        <h5 className="text-center py-5" style={{color: "#1cc7c1"}}>Our Doctors</h5>
      <div className="row">
        {doctorsInfo.map((doctorInfo) => (
          <DoctorsCard doctorInfo={doctorInfo} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
