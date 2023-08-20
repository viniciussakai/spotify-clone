import Player from "@/components/player";
import PlaylistHome from "@/components/playlistHome";
import Sidebar from "@/components/sidebar";

export default function Home() {
	return (
		<div style={{ display: "flex", height: "100%" }}>
			<Sidebar />
			<PlaylistHome />
			<Player />
		</div>
	);
}
