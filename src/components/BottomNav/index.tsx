import React from "react";
import "./style.scss";

interface BottomNavProps {
  children: unknown;
}

const BottomNav: React.FC<BottomNavProps> = ({ children }) => <div className="BottomNav">{children}</div>;

export default BottomNav;
