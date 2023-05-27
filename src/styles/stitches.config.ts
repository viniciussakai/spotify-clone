import { createStitches } from "@stitches/react";
import * as utils from "stitches-utils";

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
			sm: "12px",
			md: "16px",
			lg: "20px",
			xl: "24px",
			"2xl": "32px",
		},

		fontWeights: {
			normal: "400",
			bold: "700",
			bolder: "900",
		},

		space: {
			1: "0.5em",
			2: "1rem",
			3: "2rem",
			4: "3rem",
			5: "4rem",
		},

		colors: {
			background: "#000000",
			backgroundHighlight: "#121212",
			backgroundGrey: "#2A2A2A",

			text: "#fff",
			textSecundary: "#a7a7a7",
			textAccent: "#45e391",
		},
	},
	media: {
		phone: "(min-width: 640px)",
		tablet: "(min-width: 768px)",
		desktop: "(min-width: 1200px)",
		largeDesktop: "(min-width: 1980px)",
	},
	utils,
});
