import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  const cardProperty = {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "Black",
  }
  
  return (
    <HStack style={cardProperty}>
      <VStack  >
        <Image objectFit="cover" src={imageSrc} alt={title} borderRadius="10px" />

        <VStack style={{
          padding: '10px',
        }} alignItems="flex-start">

          <Heading size="md">{title}</Heading>

          <Text>{description}</Text>

          <Heading size="xs">
            <a href="#">See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
          </Heading>

        </VStack>

      </VStack>

    </HStack>
  );
};

export default Card;
