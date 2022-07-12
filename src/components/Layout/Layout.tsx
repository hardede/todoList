import { FC, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

interface LayoutProps {
  children: any;
  theme: any;
}

const Layout: FC<LayoutProps> = ({ children, theme }) => {
  return (
    <div className={theme === "light" ? "theme-light" : "theme-dark"}>
      <div className="p-10 h-screen xs:p-5 bg-skin-base transition_forAll md:h-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
