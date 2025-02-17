import React, { useEffect, useState } from "react";
import ancer from '../../db/Ancer.json';
import place from '../../db/Place.json';
import MemberCard from "./MemberCard";

const Member = () => {
  const [currentAncerIndex, setCurrentAncerIndex] = useState(0);
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAncerIndex((prevIndex) => (prevIndex + 1) % ancer.length);
    }, 60*60*1000*8); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentAncerIndex !== undefined) {
      const newData = ancer.map((member, index) => ({
        id: member.id,
        name: member.name,
        place: place[index].place,
        time: place[index].time
      }));
      setMergedData(newData);
    }
  }, [currentAncerIndex]); // <- Corrected dependency array

  
  return (
    <section className="">
      <div className="container">
        <div className="text-center p-4">
          <h3 className="">
            Now we have <span className="text_basecolor">{mergedData.length }</span> members
            <hr />
          </h3>
        </div>

        <div className="row">
          <div className="col-xl-12 px-5 pb-5">
            <div>
              {mergedData.map((member, index) => (
                <MemberCard
                  key={index}
                  id={member.id}
                  name={member.name}
                  place={member.place}
                  time={member.time}
                  isActive={index === currentAncerIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
