import { NavItem } from "./styles";
import { FiHome, FiSearch } from "react-icons/fi";

const navItems = [
	{
		icon: <FiHome />,
		label: "Home",
	},

	{
		icon: <FiSearch />,
		label: "Search",
	},
];

export function renderNavItems() {
	return navItems.map((item) => (
		<NavItem key={item.label}>
			{item.icon}
			{item.label}
		</NavItem>
	));
}
