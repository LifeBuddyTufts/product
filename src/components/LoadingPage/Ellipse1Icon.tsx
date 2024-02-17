import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1204 430' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={602} cy={215} rx={602} ry={215} fill='#FF5678' />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
