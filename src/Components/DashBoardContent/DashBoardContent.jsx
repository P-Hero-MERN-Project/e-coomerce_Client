import React from "react";
import { Section1 } from "./Section/Section1";
import { Section2 } from "./Section/Section2";
import { Section3 } from "./Section/Section3";

export const DashBoardContent = () => {
  return (
    <div className="p-2 py-4  overflow-y-scroll" style={{height:"31rem"}}>
      <div className="grid grid-cols-2 p-3 gap-5">
        {/* first section */}
        <Section1/>
      </div>
      <div className="grid grid-cols-3 p-3 gap-5">
        {/* first section */}
        <Section2/>
      </div>
      <div className="grid grid-cols-3 p-3 gap-5">
        {/* first section */}
        <Section3/>
      </div>
     </div>
  );
};
