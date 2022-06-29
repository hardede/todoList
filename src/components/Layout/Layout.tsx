import React, { FC } from "react";

interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="p-10">{children}</div>;
};

export default Layout;
