import * as React from "react";

export const NextIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
			<g fill="none" stroke="currentColor" strokeWidth={1.5}>
				<path d="M16.66 9.353c1.787 1.154 1.787 4.14 0 5.294L5.87 21.614C4.135 22.737 2 21.277 2 18.968V5.033c0-2.31 2.134-3.769 3.87-2.648z" />
				<path strokeLinecap="round" d="M22 5v14" />
			</g>
		</svg>
	);
};
