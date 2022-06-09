/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Jun 09 2022 11:47:54 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const LinkIcon = ({
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
			<path d="M12.5927532,9.9920567 L14.0343723,8.55043757 C14.2613853,8.66374269 14.5255146,8.87101797 14.82676,9.17226341 C15.2786282,9.62413157 18.034765,13.0353262 14.8259832,16.2441081 L11.2932114,19.7768798 C9.94520279,21.1248885 6.6824298,22.2383745 4.22153938,19.7774841 C1.76064896,17.3165936 2.87279707,14.0551586 4.2221436,12.705812 L6.34626923,10.5816864 C6.14051888,11.4539171 6.13958379,12.3976612 6.34346394,13.4129188 L5.63635716,14.1200256 C4.92687667,14.8295061 4.03004568,16.7563548 5.63635716,18.3626663 C7.24266864,19.9689778 9.14815396,19.0935102 9.87899785,18.3626663 L13.4117696,14.8298945 C15.0870482,13.1546159 14.0239711,11.1939311 13.4145318,10.5844917 C13.0082388,10.1781988 12.7343126,9.98072044 12.5927532,9.9920567 Z M11.4052937,14.0079433 L9.96367457,15.4495624 C9.73666153,15.3362573 9.47253229,15.128982 9.17128685,14.8277366 C8.71941868,14.3758684 5.96328183,10.9646738 9.1720637,7.75589193 C11.2961462,5.63180945 11.1441774,5.7837782 12.7048355,4.22312016 C14.0528441,2.87511154 17.3156171,1.76162552 19.7765075,4.22251594 C22.2373979,6.68340636 21.1252498,9.94484144 19.7759033,11.294188 C19.1361053,11.933986 18.4280634,12.6420278 17.6517776,13.4183136 C17.857528,12.5460829 17.8584631,11.6023388 17.6545829,10.5870812 C17.9324365,10.3092276 17.6522092,10.5894549 18.3616897,9.87997441 C19.0711702,9.17049392 19.9680012,7.2436452 18.3616897,5.63733372 C16.7553782,4.03102224 14.8498929,4.90648983 14.119049,5.63733372 C12.5612972,7.19508558 12.1442825,7.61210027 10.5862773,9.17010549 C8.9109987,10.8453841 9.97407574,12.8060689 10.5835151,13.4155083 C10.989808,13.8218012 11.2637342,14.0192796 11.4052937,14.0079433 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default LinkIcon;

