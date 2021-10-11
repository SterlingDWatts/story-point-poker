import React from "react";
import EllipsisHRegular from "../../icons/EllipsisHRegular";
import "./style.scss";

interface LoadingEllipsisProps {
  width?: string;
  height?: string;
  className?: string;
  handleClick?: (e?: React.MouseEvent<SVGElement>) => void;
}

const LoadingEllipsis: React.FC<LoadingEllipsisProps> = ({ width, height, className, handleClick }) => {
  return (
    <div className="LoadingEllipsis" style={{ width: width, height: height }}>
      <div className="loading">
        <EllipsisHRegular width={width} height={height} className={className} handleClick={handleClick} loading />
      </div>
    </div>
  );
};

export default LoadingEllipsis;
