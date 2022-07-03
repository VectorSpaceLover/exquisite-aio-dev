import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Img,
  Spacer,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <HStack w='full' className="home">
        <Box className="home_side_bar">
          <VStack spacing='35px' mt='35px' w='full'>
            <Box>
              <Img src='/icons/logo-icon.svg' alt=''/>
            </Box>
            <Box className="active">
              <Img src='/icons/home-icon.svg' alt=''/>
            </Box>
            <Box>
              <Img src='/icons/tasks-icon.svg' alt=''/>
            </Box>
            <Box>
              <Img src='/icons/earth-icon.svg' alt=''/>
            </Box>
            <Box>
              <Img src='/icons/setting-icon.svg' alt=''/>
            </Box>
            <Spacer />
            <Box p='0px'>
              <Img src='/icons/user-round-icon.svg' alt=''/>
            </Box>
          </VStack>
        </Box>
        <Box className="home_main_content" flex="1" h='full'>
          <VStack h='full'>
            <Box className="header" w='full'>
              <Text>Home</Text>
            </Box>
            <Box className="home_content" h='full' w='full'>
              <Flex direction={{ sm: 'column', md: 'row' }} h='full' w='full'>
                <Box w='50%'>
                  <VStack direction='column' spacing='20px'>
                    <Box className='panel home_statistics'>
                      statistics
                    </Box>
                    <Box className='panel home_calendar'>
                      calendar
                    </Box>
                  </VStack>
                </Box>
                <Box w='50%'>
                  <Flex direction='column'>
                    <Flex direction={{md: 'row'}} justifyContent="stretch">
                      <Box className="card">Card A</Box>
                      <Box className="card">Card B</Box>
                      <Box className="card">Card C</Box>
                      <Box className="card">Card D</Box>
                    </Flex>
                  </Flex>
                  <Box className='panel home_recent_orders'>
                    recent orders
                  </Box>
                </Box>                
              </Flex>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </>
  );  
};

export { Home }
