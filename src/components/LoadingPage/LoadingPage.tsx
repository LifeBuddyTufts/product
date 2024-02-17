import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import classes from './LoadingPage.module.css';

interface Props {
  className?: string;
}
/* @figmaId 13:6711 */
export const LoadingPage: FC<Props> = memo(function LoadingPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.landie}>LifePartner</div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
    </div>
  );
});
