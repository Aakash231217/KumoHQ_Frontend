import React, { useState } from "react";
import { Flex, Box, VStack, Heading, Text, Button, Image } from '@chakra-ui/react';
import "./HomeMid.css";
import Pricing from "../components/Pricing";

function HomeMid() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(null);

  const togglePopover = (index) => {
    setIsPopoverOpen(isPopoverOpen === index ? null : index);
  };

  return (
    <>
      <Pricing />
      <Heading fontSize={'5xl'} m={"auto"} mt={155} w={"65%"}>
        Generate up to 4x more orders* with Customer Journey Builder automations
      </Heading>
      <Flex mt={55}>
        <Image
          src="https://eep.io/images/yzco4xsimv0y/6M0RT8j3jGOfMogAYiaEXg/503ae20dd6d6df92c9c56533b2ab1185/Desktop_Automations_2.png"
          w="50%"
          alt="Automation visual"
        />
        <Box w="50%" bg="#efeeea" h="880px">
          <VStack>
            <Box>
              <Heading mt={50} fontSize={"4xl"}>
                Convert more customers at scale
              </Heading>
              <Text w="90%" fontSize={"2xl"}>
                Drive more traffic and sales by setting up automations that
                trigger emails based on customer behavior with our Customer
                Journey Builder.
              </Text>
              <Button
                borderRadius={"full"}
                size="lg"
                bg="#ffe01b"
                mt={8}
                variant="outline"
                colorScheme="teal"
              >
                Learn More
              </Button>
            </Box>
            <Box>
              <Heading mt={50} fontSize={"4xl"}>
                Discover new ways to automate
              </Heading>
              <Text w="90%" fontSize={"2xl"}>
                Get a head start with pre-built journeys that help you
                cross-sell your products, recover abandoned carts, re-engage
                existing customers, and win new ones.
              </Text>
              <Button
                borderRadius={"full"}
                size="lg"
                bg="#ffe01b"
                mt={8}
                variant="outline"
                colorScheme="teal"
              >
                Learn More
              </Button>
            </Box>

            <Box>
              <Heading mt={50} fontSize={"4xl"}>
                Keep your emails relevant and your brand growing
              </Heading>
              <Text w="90%" fontSize={"2xl"}>
                Deliver personalized emails based on their buying behavior,
                survey responses, chat interactions, and support tickets to
                promote loyalty and growth.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Image
        w={"100%"}
        src="https://iili.io/L26B6B.jpg"
        alt="img1"
      />
      <Flex>
        <Image
          w={"50%"}
          src="https://eep.io/images/yzco4xsimv0y/6j5S0aFFsjYonyvH3bvo9l/92d7c1c73ec3b1f4115d20f6a415549b/Desktop_Segmentation_2.png"
          alt="p2"
        />

        <Box w="50%" bg="#efeeea" h="880px">
          <VStack>
            <Box mt={150} w={"80%"}>
              <Text w="90%" fontSize={"4xl"}>
              Mailchimp will help you focus on your most loyal and valuable customers.
              </Text>
            </Box>
            <Box>
              <Heading mt={50} fontSize={"4xl"}>
              Predict who’s likely to buy again
              </Heading>
              <Text w="90%" fontSize={"2xl"}>
              Create segments of customers based on their lifetime value and likelihood to purchase.
              </Text>
              <Button
                borderRadius={"full"}
                size="lg"
                bg="#ffe01b"
                mt={8}
                variant="outline"
                colorScheme="teal"
              >
                Learn More
              </Button>
            </Box>

            <Box>
              <Heading mt={50} fontSize={"4xl"}>
              Build customers for life
              </Heading>
              <Text w="90%" fontSize={"2xl"}>
              Use our intelligent predictions to tighten your targeting strategy, strengthen customer relationships, and drive repeat sales.
              </Text>
              <Button
                borderRadius={"full"}
                size="lg"
                bg="#ffe01b"
                mt={8}
                variant="outline"
                colorScheme="teal"
              >
                Learn More
              </Button>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

export default HomeMid;
