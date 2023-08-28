import React from "react";
import Link from "next/link";
import { NextResponsiveImage } from "components/core/next-responsive-image";
import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { PageSectionProps } from "lib/models/page-section-props";
import { GradientHighlight, Highlight } from "./highlight";

interface TryJuneBannerProps extends PageSectionProps {
  subheading?: string;
  heading?: string | React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonHrefType?: "external" | "internal";
  mode?: "light" | "dark";
}

function TryJuneBanner(props: TryJuneBannerProps) {
  const {
    heading = (
      <>
       
      </>
    ),
    description = (
      <>
       
      </>
    ),
    buttonText = "",
    buttonHref = "",
    buttonHrefType = "external",
    mode = "light",
  } = props;

  const LinkOrFragment =
    buttonHrefType === "external"
      ? React.Fragment
      : (linkProps: { children: React.ReactNode }) => (
          <Link href={buttonHref} passHref prefetch={false} {...linkProps} />
        );

  return (
    <Container maxW="landingMax" position="relative" px={[0, 0, 12, 12, 40]} {...props._wrapper}>
      {/* Glowing background */}
      {mode === "dark" && (
        <Box
          
        />
      )}
      <Box
       
      >
        {/* Background with opacity */}
        <Box
          
        />
        {/* Background grid */}
        <Box position="absolute" right={0} bottom={0} top={0}>
          <NextResponsiveImage
            src="/try-june-bg-grid.svg"
            alt="Background grid"
            sx={{ aspectRatio: "0.7788018433" }}
            height="full"
            visibility={["hidden", "hidden", "visible"]}
          />
        </Box>
        <VStack align="center" spacing={6}>
          <VStack align="center" spacing={4} pos="relative">
            <Heading
              as="h2"
              fontFamily="landingHeading"
              fontSize={[48, 48, 64]}
              lineHeight="1.2"
              color={mode === "light" ? "purple.900" : "white"}
              letterSpacing="-0.02em"
              textAlign={"center"}
            >
              {heading}
            </Heading>
            <Text
              
            >
              {description}
            </Text>
          </VStack>
          <LinkOrFragment>
           
          </LinkOrFragment>
        </VStack>
      </Box>
    </Container>
  );
}

export default TryJuneBanner;
