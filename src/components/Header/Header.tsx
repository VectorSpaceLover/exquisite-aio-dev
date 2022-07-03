// import HeaderStyles from './HeaderStyles';
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
// import Image from 'next/image';
import { Image } from '@chakra-ui/react'
import './HeaderStyles.scss'

// import logo from 'images/logo.png';
// import discord from '/images/discord.svg';
// import twitter from '/images/twitter.svg';
// import gitlab from '/images/gitlab.svg';
// import close from '/images/close.svg';
// import menu from '/images/menu.svg';
const logo = '/images/logo.png';
const discord = '/images/discord.svg';
const twitter = '/images/twitter.svg';
const gitlab = '/images/gitlab.svg';
const close = '/images/close.svg';
const menu = '/images/menu.svg';

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <>
      <header className="header">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          color="white"
          py={{ base: 5, md: 9}}
          px={{ base: 5, xl: 16}}
        >
          <a href="#" className="header__logo">
            <Image
              src={logo}
              alt="Logo"
            />
          </a>
          <Box display={{ base: "flex", md: "none" }} onClick={toggleMenu}>
            {show ?
              <Image
                src={close}
                alt="Close menu"
                width={8}
                height={8}
              />
              :
              <Image
                src={menu}
                alt="Open menu"
                width={8}
                height={8}
              />
            }
          </Box>

          <Box
            display={{ base: show ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
          >
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              align="center"
              gridColumnGap="1"
              gridRowGap="4"
            >
              <a className="header__link" href="#">
                Drops
              </a>
              <a className="header__link header__last-link" href="#">
                About
              </a>
              <a className="header__icon" target="_blank" href="https://discord.com/invite/BqSbHshmNK" rel="noopener noreferrer">
                <Image
                  src={discord}
                  alt="Discord"
                  width={8}
                  height={8}
                />
              </a>
              <a className="header__icon header__last-icon" target="_blank" href="https://twitter.com/look_labs" rel="noopener noreferrer">
                <Image
                  src={twitter}
                  alt="Twitter"
                  width={8}
                  height={8}
                />
              </a>

              <a className="header__gitlab-button" href="#">
                <Image
                  src={gitlab}
                  alt="Gitlab"
                  width={8}
                  height={8}
                />
                Connect
              </a>
            </Flex>
          </Box>
        </Flex>
      </header>

      <style>
          {/*HeaderStyles*/}
      </style>
    </>
  );
}

export default Header;
