/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Oct 11 2022 16:29:01 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CompanyCustomIcon = ({
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
			<path d="M13,20 L18,20 L18,4 L6,4 L6,8 C6,8 4,8 4,8 L4,2 L20,2 L20,22 L13,22 C13,20.6666667 13,20 13,20 Z M8,6 L10,6 L10,8 L8,8 L8,6 Z M11,6 L13,6 L13,8 L11,8 L11,6 Z M14,9 L16,9 L16,11 L14,11 L14,9 Z M11,9 L13,9 L13,11 L11,11 L11,9 Z M14,12 L16,12 L16,14 L14,14 L14,12 Z M11,12 L13,12 L13,14 L11,14 L11,12 Z M14,6 L16,6 L16,8 L14,8 L14,6 Z M6.5,15 C5.119,15 4,13.881 4,12.5 C4,11.119 5.119,10 6.5,10 C7.881,10 9,11.119 9,12.5 C9,13.881 7.881,15 6.5,15 Z M2,19.30021 C2,17.3474344 4.36013794,16 6.5,16 C8.63986206,16 11,17.3474344 11,19.30021 C11,22.9054159 2,22.8944399 2,19.30021 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CompanyCustomIcon;

