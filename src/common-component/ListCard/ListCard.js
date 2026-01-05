import React from "react";
import { FiHelpCircle, FiStar, FiClock, FiGlobe, FiUsers } from "react-icons/fi";

const ListCard = ({ test }) => {
  return (
    <div className="border rounded-xl p-5 shadow-sm bg-white">
      <div className="flex items-center gap-2 text-xs font-semibold mb-2">
        {test.labels.map((label, i) => (
          <span key={i}
            className={`px-2 py-1 rounded text-white ${label === "LIVE TEST"
              ? "bg-red-500"
              : label === "FREE"
                ? "bg-green-500"
                : "bg-purple-500"
              }`} >
            {label}
          </span>
        ))}
      </div>
      <h2 className="font-semibold dm_sans responsiveheading2 mb-2">{test.title}</h2>
      <div className="flex items-center flex-wrap gap-4 text-sm text-gray-600">
        <p className="dm_sans responsive-text flex items-center gap-1"> <FiHelpCircle /> {test.questions} {` Questions`} </p>
        <p className="dm_sans responsive-text flex items-center gap-1"> <FiStar /> {test.marks} {` Marks`} </p>
        <p className="dm_sans responsive-text flex items-center gap-1"> <FiClock /> {test.time} {` Mins`}</p>
      </div>
      <p className="dm_sans responsive-text text-blue-600 mt-2 flex items-center gap-1"><FiGlobe /> {test.languages}</p>
      <p className="dm_sans responsive-text text-gray-500 mt-1 flex items-center gap-1"> <FiUsers /> {test.users} {` Users`} </p>
      <div className="mt-4 text-right">
        <button className="px-5 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600">
          {test.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ListCard;
