import React from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface TabsContentProps {
  tab: any;
}

const TabsContent: FC<TabsContentProps> = ({ tab }) => {
  const setActive = ({ isActive }: any) =>
    isActive
      ? " px-20 py-2 text-xl font-bold text-skin-tabsActive bg-[#300089] border-[#B207F3] rounded-xl cursor-pointer lg:px-10 md:text-center md:mb-4 transition_forAll"
      : " px-20 py-2 text-xl font-bold text-skin-tabsBtn border-t border-l border-r border-[#B207F3] rounded-xl cursor-pointer lg:border-b lg:px-10 md:text-center md:mb-4 transition_forAll";

  return (
    <NavLink key={tab.id} className={setActive} to={tab.linkUrl}>
      {tab.nameLink}
    </NavLink>
  );
};

export default TabsContent;
