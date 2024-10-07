import React from 'react'
import { Box, Container, Flex, Link } from "@radix-ui/themes"

function Layout({children}) {
  return (
    <Container>
      <Flex>
        <Box>
        <Link className='text-orange-600'>MoonKids</Link>
        </Box>
        <Box>{children}</Box>
      </Flex>
    </Container>
  )
}

export default Layout
