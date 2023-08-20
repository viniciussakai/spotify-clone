import { theme, styled } from "@/styles/stitches.config";

const { colors, fontSizes, fontWeights, space } = theme;

export const Container = styled("div", {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	width: "100%",
	height: 80,

	backgroundColor: colors.blackA12,
	color: colors.gray12,

	position: "fixed",
	left: 0,
	right: 0,
	bottom: 0,

	padding: space.md,
});

export const ActualSong = styled("div", {
	display: "flex",
	alignItems: "center",
	position: "absolute",

	left: 0,

	pl: space.md,

	"@md": {
		display: "none",
	},
});

export const AlbumCover = styled("img", {
	size: 50,
	marginRight: space.md,
});
export const SongInfo = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "center",
});
export const SongName = styled("h5", {
	fontSize: fontSizes.md,
	fontWeight: fontWeights.bold,
	mb: space.xs,
});
export const SongArtist = styled("span", {
	fontSize: fontSizes.xs,
	fontWeight: fontWeights.medium,
	color: colors.gray11,
});

export const PlayerControls = styled("div", {
	display: "flex",
	flexDirection: "column",

	alignItems: "center",
	justifyContent: "center",

	width: "100%",
	maxWidth: 500,

	fontSize: fontSizes.lg,
});

export const SongProgress = styled("div", {
	display: "flex",
	width: "100%",

	alignItems: "center",
	justifyContent: "center",

	color: colors.gray11,

	span: {
		fontSize: fontSizes.sm,
		fontWeight: fontWeights.bold,
	},

	form: {
		width: "100%",
		mx: space.sm,
	},
});

export const VolumeControls = styled("div", {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",

	position: "absolute",
	right: 0,

	"@md": {
		display: "none",
	},

	width: "100%",
	maxWidth: 130,
	marginRight: space.md,

	form: {
		width: "100%",
		mx: space.md,
	},

	"& >span": {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: fontSizes.lg,
	},
});
