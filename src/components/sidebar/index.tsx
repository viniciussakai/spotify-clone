import React from "react";

import {
	Container,
	PlaylistList,
	NavContainer,
	NavList,
	PlaylistItem,
	Cover,
	PlayListInfo,
	LibraryHeader,
	LibraryContainer,
	LibrarySearch,
	LibraryCategories,
} from "./styles";
import { renderNavItems } from "./navigation";
import {
	FiBook,
	FiChevronDown,
	FiHeart,
	FiPlus,
	FiSearch,
	FiThumbsDown,
	FiX,
} from "react-icons/fi";
import { Button } from "../UI";

const Sidebar: React.FC = () => {
	return (
		<Container>
			<NavContainer>
				<NavList>{renderNavItems()}</NavList>
			</NavContainer>

			<LibraryContainer>
				<LibraryHeader>
					<h4>
						<FiBook /> Library
					</h4>

					<Button color="transparent" rounded>
						<FiPlus />
					</Button>
				</LibraryHeader>

				<LibraryCategories>
					<Button color="grey" rounded>
						<FiX />
					</Button>
					<Button color="white">Rock</Button>
					<Button color="grey">Rock</Button>
					<Button color="grey">Rock</Button>
				</LibraryCategories>

				<LibrarySearch>
					<Button color="transparent" size={"small"}>
						<FiSearch />
					</Button>

					<span>
						Recentes
						<FiChevronDown />
					</span>
				</LibrarySearch>

				<PlaylistList>
					{[...Array(25)].map((_, index) => (
						<PlaylistItem key={index.toString()}>
							<Cover src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" />

							<PlayListInfo>
								<h5>Playlist {index.toString()}</h5>
								<span>10 músicas</span>
							</PlayListInfo>
						</PlaylistItem>
					))}
				</PlaylistList>
			</LibraryContainer>
		</Container>
	);
};

export default Sidebar;
