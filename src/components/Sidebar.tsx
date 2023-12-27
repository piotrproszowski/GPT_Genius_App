import React from "react";
import SidebarHeader from "./SidebarHeader";
import Navlinks from "./Navlinks";
import MemberProfile from "./MemberProfile";

const SideBar = () => {
  return (
    <div className='px-4 w-80 min-h-full bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]'>
      {/* 1 row */}
      <SidebarHeader />
      {/* 2 row */}
      <Navlinks />
      {/* 3 row */}
      <MemberProfile />
    </div>
  );
};

export default SideBar;
