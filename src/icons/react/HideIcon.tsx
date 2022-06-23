/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Jun 23 2022 10:17:41 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const HideIcon = ({
  size = 's',
  color,
  customSize,
}: IconProps): JSX.Element => (
  <div
    className={`fds-icon fds-icon--${size}`}
    style={{
      fill: color,
      width: customSize && `${customSize}px`,
      height: customSize && `${customSize}px`,
    }}
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fillRule="evenodd">
		<g>
			<path d="M9.41568164,10.362493 C7.47422146,10.9235962 5.66899425,12.1360985 4,14 C4.28721994,14.3207618 4.57847449,14.6222322 4.87376365,14.9044109 L3.73245531,16.0457193 C3.14608518,15.4346386 2.57205874,14.7527321 2.01037598,14 C4.93153412,10.0852464 8.18655863,8.08615477 11.7754495,8.00272511 L9.41568164,10.362493 L9.41568164,10.362493 Z M10.3993979,17.864058 C10.923455,17.954686 11.4569891,18 12,18 C14.9455187,18 17.6121853,16.6666667 20,14 C19.0112392,12.8957704 17.9746643,12.0201639 16.8902755,11.3731805 L18.170023,10.093433 C19.5085396,11.0605399 20.7886573,12.3627289 22.010376,14 C19.0256076,18 15.6922743,20 12.010376,20 C10.9091369,20 9.83907974,19.8210838 8.80020456,19.4632514 L10.3993979,17.864058 L10.3993979,17.864058 Z M15.7199713,12.5434846 C15.8957266,12.9937136 15.9921875,13.4836388 15.9921875,13.9960938 C15.9921875,16.2030754 14.2030754,17.9921875 11.9960937,17.9921875 C11.4836388,17.9921875 10.9937136,17.8957266 10.5434846,17.7199713 L12.283377,15.980079 C13.1611726,15.8555783 13.8555783,15.1611726 13.980079,14.283377 L15.7199713,12.5434846 L15.7199713,12.5434846 Z M15.4561242,4.32205044 L13.7021078,6.07606684 C13.141809,6.02535561 12.5744397,6 12,6 C8.39249112,6 5.06383424,7 2.01402936,9 L2,9 L2,7.00920851 C5.0536254,5.0030695 8.38695873,4 12,4 C13.1819762,4 14.3340176,4.10735015 15.4561242,4.32205044 L15.4561242,4.32205044 Z M21.5446691,6.71878686 C21.6971309,6.81313833 21.8489078,6.90994555 22,7.00920851 L22,9 L21.9859706,9 C21.4230496,8.63084784 20.8506285,8.295764 20.2687075,7.9947485 L21.5446691,6.71878686 L21.5446691,6.71878686 Z M19.7781746,2.80761184 L21.1923882,4.22182541 L4.22182541,21.1923882 L2.80761184,19.7781746 L19.7781746,2.80761184 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default HideIcon;

