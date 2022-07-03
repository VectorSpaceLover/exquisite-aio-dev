// import SectionWrapStyles from './SectionWrapStyles'
import { Container, Flex, Box } from "@chakra-ui/layout"
import ViewButton from '../ViewButton/ViewButton'
// import Image from 'next/image'
import { Image } from '@chakra-ui/react'
import React from 'react'
import './sectionwrap.scss'

const SectionWrap: React.FC<{
  sectionID: string,
  reverse: boolean,
  heading: string,
  paragraphText: string,
  imageSrc: string,
  imageAlt: string,
  buttonPath: string,
}> = ({
  sectionID,
  reverse,
  heading,
  paragraphText,
  imageSrc,
  imageAlt,
  buttonPath,
}) => {
  return (
    <>
      <div className="section" id={sectionID}>
        <Container maxW="container.xl" centerContent>
          <Flex w="100%" flexDirection={{ base: "column-reverse", lg: reverse ? 'row-reverse' : 'row' }}>
            <Box
              w={{ base: "100%", lg: "50%"}}
              display="flex" justifyContent="center"
              flexDirection="column"
              paddingRight={{ base: "none", lg: !reverse ? 30 : 0}}
              paddingLeft={{ base: "none", lg: reverse ? 30 : 0}}
              >
              <h2 className="section__heading">{heading}</h2>
              <p className="section__paragraph">{paragraphText}</p>
              <ViewButton
                projectPath={buttonPath}
              />
            </Box>
            <Box w={{ base: "100%", lg: "50%"}} textAlign={{ base: 'center', lg: reverse ? 'left' : 'right'}}>
              <Image
                src={imageSrc}
                alt={imageAlt}
              />
            </Box>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default SectionWrap;
