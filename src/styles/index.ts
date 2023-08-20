import { globalCss, theme } from "@/styles/stitches.config";

const { colors } = theme;

export const useGlobalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		outline: "none",
		border: "none",
		fontFamily: "Nunito, sans-serif",
	},

	body: {
		width: "100vw",
		height: "100vh",

		backgroundColor: colors.black,
		color: colors.gray12,
		overflow: "hidden",

		scrollbarWidth: "thin",
		"-webkit-overflow-scrolling": "touch",
		"-webkit-font-smoothing": "antialiased",
		scrollBehavior: "smooth",
	},

	"#__next": {
		width: "100%",
		height: "100vh",
	},

	"::-webkit-scrollbar": {
		width: 8,
		backgroundColor: "rgb(0,0,0,0.0)",
	},

	"::-webkit-scrollbar-thumb": {
		backgroundColor: "rgba(255,255,255,0.2)",
		borderRadius: 4,
		height: 30,
	},
});
