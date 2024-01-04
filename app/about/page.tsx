import { Flex } from '@radix-ui/themes'
import About from './About'
import Author from './Author'

export default function AboutPage() {
  return (
    <Flex direction='column' gap='5'>
      <About />
      <Author />
    </Flex>
  )
}
