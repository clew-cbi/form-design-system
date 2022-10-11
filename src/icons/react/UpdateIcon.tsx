/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Oct 11 2022 15:17:41 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const UpdateIcon = ({
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
			<path d="M12,3 C7.037,3 3,7.038 3,12 L5,12 C5,8.14 8.141,5 12,5 C14.185097,5 16.125208,6.0167955 17.408203,7.5917969 L15,10 L21,10 L21,4 L18.833984,6.1660156 C17.184843,4.2316704 14.736456,3 12,3 Z M19,12 C19,15.859 15.859,19 12,19 C9.8149031,19 7.8747922,17.983204 6.5917969,16.408203 L9,14 L3,14 L3,20 L5.1660156,17.833984 C6.8151574,19.76833 9.263544,21 12,21 C16.963,21 21,16.963 21,12 L19,12 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default UpdateIcon;

