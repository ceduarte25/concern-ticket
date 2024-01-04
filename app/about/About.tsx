import { Flex, Heading, Text } from '@radix-ui/themes'

export default function About() {
  return (
    <Flex direction='column' gap='1'>
      <Heading>About Concern Ticket</Heading>
      <Text className='text-justify'>
        Welcome to Concern Ticket, a web application crafted to streamline the
        management of concerns in a seamless and user-friendly manner. The
        mission is to provide a robust platform where users can effortlessly
        create, assign, edit, and track concerns with utmost efficiency.
      </Text>
      <Text className='text-justify'>
        Explore Concern Ticket and experience a cutting-edge concern management
        solution that combines advanced technology with user-centric design.
      </Text>
    </Flex>
  )
}
