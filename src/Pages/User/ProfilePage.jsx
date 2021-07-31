import React from "react";

import { ProfileBottom } from "../../Components/ProfileBottom/ProfileBottom";
import { ProfileTop } from "../../Components/ProfileTop/ProfileTop";

export const ProfilePage = () => {
  return (
    <div className="px-10 py-5 overflow-y-scroll" style={{ height: "33.5rem" }}>
      <ProfileTop
        profile={{ name: "Rahul", email: "saharahul039@gmail.com" }}
      />
      <div className="grid md:grid-cols-3">
        <ProfileBottom />
      </div>
    </div>
  );
};
