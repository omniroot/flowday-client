// import { DiscoveryIcon, HomeIcon, ProfileIcon, SettingsIcon } from "@/shared/icons";
import { ReactNode } from "react";

export interface IPage {
	name: string;
	path: string;
	icon: ReactNode;
	inMobile: boolean;
}

export const PAGES = {
	sidebar_start: [
		{
			name: "Home",
			path: "/",
			// icon: <HomeIcon />,
			inMobile: true,
		},
		{
			name: "Discovery",
			path: "/discovery/ongoings",
			// icon: <DiscoveryIcon />,
			inMobile: true,
		},
		// {
		// 	name: "Search",
		// 	path: "/search",
		// 	icon: <SearchIcon />,
		// 	inMobile: false,
		// },
	],
	sidebar_end: [
		{
			name: "Profile",
			path: "/profile",
			// icon: <ProfileIcon />,
			inMobile: true,
		},
		{
			name: "Settings",
			path: "/settings",
			// icon: <SettingsIcon />,
			inMobile: true,
		},
	],
};
