"use client";

import React from "react";

import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from "./styles";

const Slider = () => (
	<form>
		<SliderRoot defaultValue={[50]} max={100} step={1}>
			<SliderTrack className="slider-track">
				<SliderRange className="slider-range" />
			</SliderTrack>
			<SliderThumb className="slider-thumb" aria-label="Volume" />
		</SliderRoot>
	</form>
);

export default Slider;
