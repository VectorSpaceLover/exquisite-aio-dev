import { 
  Container,
  VStack,
  Box,
  Img,
  Input,
  Button,
  Heading,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Box className="login" backgroundColor="Gray.900">
      <Container backgroundColor="white" className="login_container">
        <Box className="login_background">
          <VStack spacing="34px" padding="77px">
            <Box>
              <Img src="/images/logo.svg" className="login_logo_image"alt="" />
            </Box>
            <Box>
              <Heading as="h2">Exquisite AIO</Heading>
            </Box>
            <Box w="full">
              <InputGroup>
                <Input placeholder='Enter Key'/>
                <InputRightElement children={<Img src="/images/key.svg" />} style={{height: "100%", padding: "8px"}} />
              </InputGroup>
            </Box>
            <Box>
              <Button w="110px">Enter</Button>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export { Login }