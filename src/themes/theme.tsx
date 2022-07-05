import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    Gray: {
      900: '#050c10',
    },
  },
  fonts: {
    body: "IBM Plex Mono",
  },
  components: {
    Heading: {
      baseStyle: {
        // color: 'white',
        // textTransform: 'uppercase',
      }
    },
    Image: {
      baseStyle: {
        w: '30px'
      }
    },
    Box: {
      baseStyle: {
        h: '100%',
        w: '100%',
        border: '1px solid red',
        color: 'blue',
      }
    },
    Text: {
      baseStyle: {
        // colorScheme: "red",
        // color: 'red',
      },
    }
  },
})

export default theme
