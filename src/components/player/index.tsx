import React from "react";
import {
	ActualSong,
	AlbumCover,
	Container,
	PlayerControls,
	SongArtist,
	SongInfo,
	SongName,
	SongProgress,
	VolumeControls,
} from "./style";
import Slider from "../slider";
import {
	FiAirplay,
	FiRepeat,
	FiShuffle,
	FiVolume,
	FiVolume2,
} from "react-icons/fi";

import { HiBackward, HiForward } from "react-icons/hi2";
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { Button } from "../UI";

// import { Container } from './styles';

const Player: React.FC = () => {
	return (
		<Container>
			<ActualSong>
				<AlbumCover src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" />
				<SongInfo>
					<SongName>Albert </SongName>
					<SongArtist>Pink Froyd</SongArtist>
				</SongInfo>
			</ActualSong>

			<PlayerControls>
				<div
					style={{
						display: "inline-flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "1rem",
						marginBottom: "0.5rem",
					}}
				>
					<Button color={"transparent"} rounded>
						<FiShuffle />
					</Button>

					<Button color={"transparent"} rounded>
						<IoPlaySkipBack />
					</Button>

					<Button rounded color={"white"}>
						<IoPlay />
					</Button>

					<Button color={"transparent"} rounded>
						<IoPlaySkipForward />
					</Button>

					<Button color={"transparent"} rounded>
						<FiRepeat />
					</Button>
				</div>

				<SongProgress>
					<span>1:50</span>
					<Slider />
					<span>3:00</span>
				</SongProgress>
			</PlayerControls>

			<VolumeControls>
				<span>
					<FiVolume2 />
				</span>
				<Slider />
			</VolumeControls>
		</Container>
	);
};

export default Player;
