import { createStitches } from "@stitches/react";
import * as utils from "stitches-mix";

import { gray, blackA, grass, grayDark } from "@radix-ui/colors";

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	theme: {
		fontSizes: {
			xs: "0.75rem",
			sm: "0.87rem",
			md: "1rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "2rem",
			"3xl": "3rem",
			"4xl": "4rem",
		},

		fontWeights: {
			normal: "400",
			medium: "500",
			bold: "700",
			bolder: "900",
		},

		lineHeights: {
			xs: "0.5rem",
			sm: "0.75rem",
			md: "1rem",
			lg: "1.5",
			xl: "2rem",
			"2xl": "2.5rem",
			"3xl": "3rem",
		},
		letterSpacings: {
			sm: "0.25rem",
			md: "0.5rem",
			lg: "0.75rem",
		},

		sizes: {
			xs: "1.25rem",
			sm: "1.5rem",
			md: "3.1rem",
		},

		space: {
			xs: "0.25rem",
			sm: "0.5rem",
			md: "1rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "3rem",
		},

		radii: {
			sm: "5px",
			md: "8px",
		},

		colors: {
			// background: "#000000",
			// backgroundHighlight: "#121212",
			// backgroundAccent: "#1A1A1A",
			// backgroundGrey: "#2A2A2A",
			// text: "#fff",
			// textSecundary: "#a7a7a7",
			// textAccent: "#2ec770",

			...grayDark,
			...blackA,
			...grass,

			black: "#000",
		},
	},
	media: {
		xs: "(max-width: 350px)",
		sm: "(max-width: 510px)",
		md: "(max-width: 720px)",
		lg: "(max-width: 1080px)",
		xl: "(max-width: 1120px)",
	},
	utils,
});
