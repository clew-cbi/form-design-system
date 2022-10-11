/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Oct 11 2022 15:17:41 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ThumbsUpIcon = ({
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
		<g fillRule="nonzero">
			<g transform="translate(3.000000, 4.000000)">
				<path d="M18,7.2 C18,6.312 17.2636364,5.6 16.3636364,5.6 L11.1927273,5.6 L11.9781818,1.944 C11.9945455,1.864 12.0027273,1.776 12.0027273,1.688 C12.0027273,1.36 11.8636364,1.056 11.6427273,0.84 L10.7754545,0 L5.39181818,5.264 C5.08909091,5.56 4.90909091,5.96 4.90909091,6.4 L4.90909091,14.4 C4.90909091,15.2836556 5.64171586,16 6.54545455,16 L13.9090909,16 C14.5881818,16 15.1690909,15.6 15.4145455,15.024 L17.8854545,9.384 C17.9590909,9.2 18,9.008 18,8.8 L18,7.2 M0,16 L3.27272727,16 L3.27272727,6.4 L0,6.4 L0,16 Z"/>
			</g>
		</g>
	</g>
</svg>
  </div>
);

export default ThumbsUpIcon;

