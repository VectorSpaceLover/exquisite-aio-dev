// import Head from 'next/head';
import React, { useEffect } from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";

import theme from '../themes/theme';
import '../styles/global.scss';
// @use 'styles/global.scss';


const CoderArt: React.FC<{children: React.ReactNode, props: {}}> = ({ children, props }) => {
  useEffect(() => {

  }, [])
  return (
    <>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </>
  )
}

export default CoderArt;
