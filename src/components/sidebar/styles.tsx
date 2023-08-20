import { styled, theme } from "@/styles/stitches.config";

const { colors, space, fontSizes, lineHeights, sizes } = theme;

export const Container = styled("div", {
	display: "flex",
	flexDirection: "column",

	margin: space.sm,

	width: "280px",
	height: "100%",

	"@md": {
		display: "none",
	},
});

export const NavContainer = styled("nav", {
	backgroundColor: colors.gray1,
	px: space.sm,
	py: space.sm,
	borderRadius: space.sm,
});

export const NavList = styled("ul", {
	listStyle: "none",
	padding: 0,
	margin: 0,

	lineHeight: lineHeights["2xl"],
});

export const NavItem = styled("li", {
	display: "flex",
	alignItems: "center",

	px: space.md,
	my: space.sm,

	transition: "color 0.2s ease-in",

	color: colors.gray11,
	fontWeight: "$bold",

	"&:hover": {
		color: colors.gray12,
	},

	"& svg": {
		marginRight: space.md,
		fontSize: "1.5rem",
	},
});

export const LibraryContainer = styled("section", {
	flex: 1,
	display: "flex",
	flexDirection: "column",

	marginTop: space.sm,
	height: "100%",

	px: space.md,
	py: space.sm,

	backgroundColor: colors.gray1,
	padding: space.sm,
	borderRadius: space.sm,
});

export const LibraryHeader = styled("header", {
	display: "flex",
	justifyContent: "space-between",
	color: colors.gray11,
	transition: "color 0.2s ease-in",

	px: space.sm,

	h4: {
		display: "inline-flex",
		alignItems: "center",

		"& svg": {
			marginRight: space.sm,
			fontSize: "1.5rem",
		},

		"&:hover": {
			color: colors.gray12,
		},
	},
});

export const PlaylistList = styled("section", {
	pl: space.sm,
	overflowY: "hidden",
	scrollBehavior: "smooth",

	pb: 230,

	"&:hover": {
		overflowY: "auto",
	},
});

export const PlaylistItem = styled("div", {
	display: "flex",

	py: space.sm,
	borderRadius: space.sm,
	cursor: "pointer",

	"&:hover": {
		backgroundColor: colors.gray2,
	},
});

export const Cover = styled("img", {
	size: sizes.md,
	borderRadius: "2px",
	marginRight: space.md,
});

export const PlayListInfo = styled("div", {
	display: "flex",
	flexDirection: "column",

	justifyContent: "center",

	"& h5": {
		fontSize: fontSizes.md,
		color: colors.gray12,
		mb: space.sm,

		lineClamp: 1,
		overflow: "hidden",
		textOverflow: "ellipsis",
		display: "-webkit-box",
	},

	"& span": {
		fontSize: fontSizes.xs,
		fontWeight: "$bold",
		color: colors.gray11,
	},
});

export const LibraryCategories = styled("div", {
	display: "flex",
	alignItems: "center",

	gap: space.sm,
	m: space.sm,
});

export const LibrarySearch = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",

	my: space.xs,
	px: space.sm,

	span: {
		fontSize: fontSizes.sm,
		fontWeight: "$bold",
		mr: space.sm,

		"& svg": {
			marginLeft: space.sm,
		},
	},
});
