import React from "react";
import classnames from "classnames";
import "./EllipsisHRegular.scss";

interface EllipsisHRegularProps {
  width?: string;
  height?: string;
  className?: string;
  handleClick?: (e?: React.MouseEvent<SVGElement>) => void;
  loading?: boolean;
}

const EllipsisHRegular: React.FC<EllipsisHRegularProps> = ({ width, height, className, handleClick, loading }) => {
  const ellipsisHRegularClassNames = classnames(
    `EllipsisHRegular svg-inline--fa fa-ellipsis-h fa-w-16 ${className ? className : ""}`,
    { loading: loading }
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="ellipsis-h"
      className={ellipsisHRegularClassNames}
      role="img"
      viewBox="0 0 512 512"
      height={height}
      width={width}
      onClick={handleClick}
    >
      <path
        fill="currentColor"
        d="M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"
      />
    </svg>
  );
};

export default EllipsisHRegular;
