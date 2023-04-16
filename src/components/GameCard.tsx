// import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
// import { Game } from "../hooks/useGames";
// import PlatformIconList from "./PlatformIconList";
// import CriticScore from "./CriticScore";
// import getCroppedImageUrl from "../services/image-url";

// interface Props {
//   game: Game;
// }

// const GameCard = ({ game }: Props) => {
//   return (
//     <>
//       <Card>
//         <Image
//           src={getCroppedImageUrl(game.background_image)}
//           alt={game.name}
//         />
//         <CardBody>
//           <Heading fontSize="2xl">{game.name}</Heading>
//           <HStack justifyContent="space-between">
//             <PlatformIconList
//               platforms={game.parent_platforms.map((p) => p.platform)}
//             />
//             <CriticScore score={game.metacritic} />
//           </HStack>
//         </CardBody>
//       </Card>
//     </>
//   );
// };

// export default GameCard;

import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const hover = {
    backgroundColor: "#4c4c4c",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  };

  return (
    <>
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          _hover={{
            "+ div": hover,
          }}
        />
        <CardBody _hover={hover}>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
