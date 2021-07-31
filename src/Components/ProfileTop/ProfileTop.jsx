import React from "react";

export const ProfileTop = (props) => {
  const { name, email } = props.profile;
  return (
    <div className="px-6 py-5 bg-yellow-300 flex justify-between items-center">
      <div className="flex">
        <img className="rounded-full w-20 h-20" src="https://picsum.photos/40/40" alt="" />
        <div className="ml-3 flex flex-col justify-center">
          <h5 className="text-2xl font-bold">{name}</h5>
          <h6>{email}</h6>
        </div>
      </div>
      <button className="px-4 py-3 bg-yellow-500 rounded-lg text-white">
          Edit Profile
      </button>
    </div>
  );
};
