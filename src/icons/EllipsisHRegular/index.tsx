import React from "react";
import classnames from "classnames";
import { SVGProps } from "../../models/svg";
import SVGWrapper from "../SVGWrapper";
import "./style.scss";

interface EllipsisHRegularProps extends SVGProps {
  loading?: boolean;
}

const EllipsisHRegular: React.FC<EllipsisHRegularProps> = ({ className, loading, ...props }) => {
  const ellipsisHRegularClassNames = classnames(
    `EllipsisHRegular fa-ellipsis-h fa-w-16${className ? ` ${className}` : ""}`,
    { loading: loading }
  );
  return (
    <SVGWrapper
      dataPrefix="far"
      dataIcon="ellipsis-h"
      viewBox="0 0 512 512"
      className={ellipsisHRegularClassNames}
      {...props}
    >
      <path
        fill="currentColor"
        d="M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"
      />
    </SVGWrapper>
  );
};

export default EllipsisHRegular;
