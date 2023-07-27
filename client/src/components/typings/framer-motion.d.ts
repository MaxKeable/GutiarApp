import { CSSObject } from '@mui/system';

declare module 'framer-motion' {
  export interface HTMLMotionProps<T> extends React.HTMLAttributes<T> {
    initial?: CSSObject | any;
    animate?: CSSObject | any;
    exit?: CSSObject | any;
    whileHover?: CSSObject | any;
    whileTap?: CSSObject | any;
    variants?: CSSObject | any;
    transition?: CSSObject | any;
  }
}
