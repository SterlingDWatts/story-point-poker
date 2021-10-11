export interface SVGProps {
  className?: string;
  color?: string;
  ariaHidden?: boolean;
  focusable?: boolean;
  height?: string;
  width?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  style?: React.CSSProperties;
  handleClick?: (e?: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}
