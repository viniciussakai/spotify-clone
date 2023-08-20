import React from "react";

import {
	Container,
	PlaylistContent,
	PlaylistCover,
	PlaylistDescription,
	PlaylistHeader,
	PlaylistInfo,
	PlaylistName,
	Table,
} from "./styles";
import {
	FiChevronLeft,
	FiChevronRight,
	FiMoreHorizontal,
	FiPlay,
} from "react-icons/fi";
import { Button } from "../UI";
import { IoPlay } from "react-icons/io5";

const PlaylistHome: React.FC = () => {
	return (
		<Container>
			<PlaylistHeader>
				<header>
					<Button color="translucid" rounded>
						<FiChevronLeft />
					</Button>

					<Button color="translucid" rounded>
						<FiChevronRight />
					</Button>
				</header>

				<PlaylistInfo>
					<PlaylistCover
						src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
						alt=""
					/>

					<div>
						<PlaylistName>Tatakae</PlaylistName>
						<span>Albert</span>
						<PlaylistDescription>
							Curabitur mattis luctus dictum. Nulla viverra velit id nisl
							consectetur, ac luctus enim semper. Aenean enim dolor, imperdiet
							ut arcu at, facilisis bibendum elit. Integer vel rutrum augue, id
							ultrices ex.
						</PlaylistDescription>
					</div>
				</PlaylistInfo>
			</PlaylistHeader>

			<PlaylistContent>
				<header>
					<Button rounded color={"accent"}>
						<IoPlay />
					</Button>

					<Button color={"transparent"}>
						<FiMoreHorizontal />
					</Button>
				</header>

				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Título</th>
							<th>Álbum</th>
							<th>Adiconada em</th>
							<th>Duração</th>
						</tr>
					</thead>
					<tbody>
						{[...Array(10)].map((_, index) => (
							<tr>
								<td>{index + 1}</td>
								<td>
									<div>
										<img
											src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
											alt=""
										/>
										Albert
									</div>
								</td>
								<td>Pink Froyd</td>
								<td>28 de dezembro de 2022</td>
								<td>3:50</td>
							</tr>
						))}
					</tbody>
				</Table>
			</PlaylistContent>
		</Container>
	);
};

export default PlaylistHome;
