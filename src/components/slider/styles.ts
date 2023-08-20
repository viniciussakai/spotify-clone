import { styled } from "@/styles/stitches.config";
import * as Slider from "@radix-ui/react-slider";

import { theme } from "@/styles/stitches.config";

const { colors } = theme;

export const SliderRoot = styled(Slider.Root, {
	position: "relative",
	display: "flex",
	alignItems: "center",
	userSelect: "none",
	touchAction: "none",
	width: "100%",
	height: 20,
	cursor: "pointer",

	"&:hover": {
		".slider-thumb": { display: "block" },
		".slider-range": { backgroundColor: colors.grass9 },
	},
});

export const SliderTrack = styled(Slider.Track, {
	backgroundColor: colors.gray3,
	position: "relative",
	flexGrow: 1,
	borderRadius: "9999px",
	height: 4,
	transition: "height 0.2s ease",
});

export const SliderRange = styled(Slider.Range, {
	position: "absolute",
	backgroundColor: colors.gray12,
	borderRadius: "9999px",
	height: "100%",

	transition: "background 0.1s ease-in",
});

export const SliderThumb = styled(Slider.Thumb, {
	display: "none",
	width: 12,
	height: 12,
	backgroundColor: colors.gray12,
	borderRadius: 10,
});
