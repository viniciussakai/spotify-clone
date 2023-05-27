import { styled, theme } from "@/styles/stitches.config";

const { colors, fontSizes, fontWeights, space } = theme;

export const Title = styled("h1", {
	fontSize: fontSizes["2xl"],
	fontWeight: fontWeights.bold,

	"@tablet": {
		fontSize: fontSizes.xl,
	},

	variants: {
		accent: {
			true: {
				color: colors.textAccent,
			},
		},
	},
});

export const Text = styled("p", {
	fontSize: fontSizes.md,
	color: colors.textSecundary,

	"&:hover": {
		color: colors.textAccent,
	},
});

export const Button = styled("button", {
	padding: "0.5rem 1rem",
	borderRadius: "0.5rem",

	fontSize: fontSizes.md,
	fontWeight: fontWeights.bold,

	backgroundColor: colors.backgroundGrey,
	color: colors.text,

	"&:hover": {
		backgroundColor: `rgb(${colors.backgroundGrey} / 1.1)`,
	},

	variants: {
		rounded: {
			true: {
				borderRadius: "9999px",
				aspectRatio: "1/1",
			},
		},

		size: {
			large: {
				true: {
					padding: "1rem",
				},
			},

			small: {
				true: {
					padding: "0.25rem 0.5rem",
				},
			},
		},

		transparent: {
			true: {
				backgroundColor: "transparent",
				color: colors.textSecundary,

				"&:hover": {
					color: colors.text,
					scale: 1.05,
				},
			},
		},

		white: {
			true: {
				backgroundColor: "white",
				color: colors.background,

				"&:hover": {
					scale: 1.1,
					backgroundColor: "white",
				},
			},
		},
	},
});
