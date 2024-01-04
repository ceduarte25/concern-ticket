import { Flex } from '@radix-ui/themes'
import About from './About'
import Author from './Author'
import TechnologyUsed from './TechnologyUsed'

export default function AboutPage() {
  return (
    <Flex direction='column' gap='5'>
      <About />
      <Author />
      <TechnologyUsed />
    </Flex>
  )
}
