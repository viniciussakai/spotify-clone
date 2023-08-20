import { styled, theme } from "@/styles/stitches.config";

const { colors, space, radii, fontSizes } = theme;

export const Container = styled("div", {
	display: "flex",
	position: "relative",
	flexDirection: "column",
	background: `linear-gradient(0deg, ${colors.gray2} 35%, ${colors.gray2} 35%, rgba(140, 10, 50,0.8) 80%, rgba(150, 10, 5,0.8)100%)`,

	maxHeight: "100vh",

	my: space.sm,

	borderRadius: radii.md,

	overflowClipMargin: 80,

	overflow: "auto",

	flex: 1,
	minHeight: "100%",

	"& > div": {
		height: "100%",
		width: "100%",

		display: "flex",
		flexDirection: "column",

		background: `linear-gradient(0deg, ${colors.gray2} 0%, rgba(0,0,0,0.2) 100%)`,
		boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
		"backdrop-filter": "blur(10px)",
		"-webkit-backdrop-filter": "blur(13.5px)",

		pb: 120,
	},

	"@md": {
		m: 0,
		borderRadius: 0,
	},
});

export const PlaylistHeader = styled("section", {
	display: "flex",
	flexDirection: "column",
	px: space.lg,
	py: space.md,

	pb: space["2xl"],

	header: {
		display: "flex",
		gap: space.sm,
	},

	"@md": {
		p: space.md,
	},
});

export const PlaylistInfo = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
	gap: space.md,
	mt: space["2xl"],

	span: {
		fontSize: fontSizes.lg,
		fontWeight: "$bold",
	},
});
export const PlaylistCover = styled("img", {
	width: "min(200px, 20vw)",
	m: 0,
});

export const PlaylistName = styled("h1", {
	fontSize: `clamp(1.5rem, 4vw, ${fontSizes["4xl"]})`,
	color: colors.gray12,
	fontWeight: "$bolder",
});

export const PlaylistDescription = styled("p", {
	fontSize: fontSizes.sm,
	maxWidth: "60ch",
	lineHeight: 1.6,

	color: colors.gray11,
});

export const PlaylistContent = styled("div", {
	display: "flex",
	flexDirection: "column",

	padding: space["xl"],
	gap: space.lg,

	header: {
		display: "flex",
		alignItems: "center",

		gap: space.md,

		button: {
			minWidth: 56,
			fontSize: fontSizes.md,

			"& > svg": {
				transform: "translateX(2px)",
			},
		},
	},
});

export const Table = styled("table", {
	width: "100%",
	borderCollapse: "collapse",
	borderSpacing: 0,

	th: {
		borderBottom: `1px solid ${colors.gray5}`,
	},

	"th, td": {
		textAlign: "left",
		verticalAlign: "middle",
		padding: space.sm,
		color: colors.gray11,
		fontSize: fontSizes.sm,

		div: {
			display: "flex",
			alignItems: "center",
			gap: space.lg,
			color: colors.gray12,
			fontWeight: "$bold",
		},
	},

	"tbody tr": {
		cursor: "pointer",

		"&:hover": {
			backgroundColor: "rgba(0,0,0,0.2)",
		},
	},

	img: {
		width: 40,
	},
});
