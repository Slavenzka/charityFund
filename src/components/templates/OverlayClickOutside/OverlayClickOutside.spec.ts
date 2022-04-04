import { MouseEventHandler } from 'react'

export interface OverlayClickOutsideProps {
  isActive?: boolean;
  handleClickOutside: MouseEventHandler<HTMLDivElement>;
  zIndex?: number;
  children: ({className}: {className: string}) => JSX.Element;
}