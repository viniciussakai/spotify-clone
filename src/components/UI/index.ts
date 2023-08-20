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
				color: colors.grass9,
			},
		},
	},
});

export const Text = styled("p", {
	fontSize: fontSizes.md,
	color: colors.blackA12,

	"&:hover": {
		color: colors.grass9,
	},
});

export const Button = styled("button", {
	padding: "0.4rem 0.8rem",
	borderRadius: "1rem",
	fontWeight: fontWeights.bold,
	maxWidth: 200,

	backgroundColor: colors.gray2,
	color: colors.gray12,
	transition: "all 0.s ease-in",

	"&:hover": {
		backgroundColor: colors.gray2,
	},

	"& >svg": {
		fontSize: "1.5em",
	},

	variants: {
		rounded: {
			true: {
				borderRadius: "50%",
				aspectRatio: "1/1",

				padding: space.sm,

				maxWidth: 50,

				display: "inline-flex",
				justifyContent: "center",
				alignItems: "center",
			},
		},

		size: {
			large: {
				fontSize: fontSizes.lg,
			},

			small: {
				fontSize: fontSizes.sm,
				padding: "0.5rem",
			},
		},

		color: {
			accent: {
				backgroundColor: colors.grass9,
				color: colors.gray1,

				"&:hover": {
					color: colors.gray1,
					backgroundColor: colors.grass8,
				},
			},

			white: {
				backgroundColor: "white",
				color: colors.blackA12,

				"&:hover": {
					scale: 1.02,
					backgroundColor: "white",
				},
			},

			transparent: {
				backgroundColor: "transparent",
				color: colors.gray11,

				"&:hover": {
					color: colors.gray12,
					scale: 1.05,
					backgroundColor: "transparent",
				},
			},

			translucid: {
				backgroundColor: colors.blackA12,
				color: colors.gray12,
				opacity: 0.8,

				"&:hover": {
					color: colors.gray12,
					backgroundColor: colors.blackA12,
					filter: "brightness(1.1)",
					opacity: 1,
				},
			},

			grey: {
				backgroundColor: colors.gray3,
				color: colors.gray12,

				"&:hover": {
					color: colors.gray12,
					backgroundColor: colors.gray2,
					filter: "brightness(1.1)",
				},
			},
		},
	},
});
