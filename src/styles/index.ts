import { globalCss } from "@/styles/stitches.config";

export const useGlobalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		outline: "none",
		border: "none",
		fontFamily: "Roboto, sans-serif",
	},

	body: {
		width: "100vw",
		maxHeight: "100vh",

		backgroundColor: "$background",
		color: "$text",
		overflowX: "hidden",
	},

	"#__next": {
		width: "100%",
		minHeight: "100%",
	},
});
