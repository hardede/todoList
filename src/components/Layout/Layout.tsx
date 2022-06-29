import React, { FC } from "react";

interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="p-10 xs:p-5">{children}</div>;
};

export default Layout;
