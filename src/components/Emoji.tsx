import { Image, ImageProps } from "@chakra-ui/react";
import fire from "../assets/fire.png";
import nice from "../assets/nice.png";
import thumbsUp from "../assets/thumbsUp.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: thumbsUp, alt: "thumbs up" },
    4: { src: nice, alt: "reccomended" },
    5: { src: fire, alt: "exceptional" },
  };

  return (
    <>
      <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />
    </>
  );
};

export default Emoji;
