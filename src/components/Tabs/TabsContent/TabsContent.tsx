import React from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface TabsContentProps {
  tab: any
}

const TabsContent: FC<TabsContentProps> = ({ tab }) => {
  const setActive = ({ isActive }: any) =>
    isActive
      ? " px-20 py-2 text-xl font-bold text-[#EB4608] bg-[#300089] border-t border-l border-r border-[#B207F3] rounded-xl cursor-pointer"
      : " px-20 py-2 text-xl font-bold text-[#300089] border-t border-l border-r border-[#B207F3] rounded-xl cursor-pointer";

  return (
    <NavLink key={tab.id} className={setActive} to={tab.linkUrl}>
      {tab.nameLink}
    </NavLink>
  );
};

export default TabsContent;