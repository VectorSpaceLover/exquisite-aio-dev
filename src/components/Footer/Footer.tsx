import { Container, Box, Flex } from "@chakra-ui/react"
// import Image from "next/dist/client/image";
// import footerLogo from '/images/footer.png'
// import discord from '/images/discord.svg'
// import twitter from '/images/twitter.svg'

import { Image } from '@chakra-ui/react'
// import FooterStyles from './FooterStyles';
import './footer.scss'

const footerLogo = '/images/footer.png'
const discord = '/images/discord.svg'
const twitter = '/images/twitter.svg'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center" flexDirection={{ base: "column", lg: "row" }}>
            <Box textAlign="center" display="flex" alignItems="center" marginBottom={{ base: 30, lg: 0 }}>
              <p className="footer__by">BY</p>
              <Image
                src={footerLogo}
                alt="Footer Logo"
                width={120}
                height={4}
              />
            </Box>
            <Flex justifyContent="center" color="white" flexDirection="row" gridColumnGap={7}>
              <Flex gridColumnGap={1}>
                <a className="footer__link" href="#">
                  Drops
                </a>
                <a className="footer__link" href="#">
                  About
                </a>
              </Flex>
              <Flex gridColumnGap={1}>
                <a className="footer__icon" target="_blank" href="https://discord.com/invite/BqSbHshmNK" rel="noopener noreferrer">
                  <Image
                    src={discord}
                    alt="Discord"
                    width={8}
                    height={8}
                  />
                </a>
                <a className="footer__icon" target="_blank" href="https://twitter.com/look_labs" rel="noopener noreferrer">
                  <Image
                    src={twitter}
                    alt="Twitter"
                    width={8}
                    height={8}
                  />
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
