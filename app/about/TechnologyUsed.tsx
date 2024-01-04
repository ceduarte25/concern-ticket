'use client'

import { Flex, Grid, Heading, HoverCard, Text } from '@radix-ui/themes'
import { IconType } from 'react-icons'
import { SiAxios, SiGooglecloud, SiReact, SiZod } from 'react-icons/si'
import {
  TbBeach,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandRadixUi,
  TbBrandSentry,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVercel,
  TbShieldLock,
} from 'react-icons/tb'

export default function TechnologyUsed() {
  return (
    <Flex direction='column' gap='1'>
      <Heading>Technology Used</Heading>
      <Flex gap='1' className='overflow-auto'>
        {technologies.map((technology) => (
          <HoverCard.Root key={technology.label}>
            <HoverCard.Trigger>
              <a>
                <Grid className='justify-items-center'>
                  <technology.Icon size={50} />
                  <Text className='lg:hidden whitespace-normal' size='2'>
                    {technology.label}
                  </Text>
                </Grid>
              </a>
            </HoverCard.Trigger>
            <HoverCard.Content size='2'>
              <Text>{technology.label}</Text>
            </HoverCard.Content>
          </HoverCard.Root>
        ))}
      </Flex>
    </Flex>
  )
}

const technologies: { Icon: IconType; label: string }[] = [
  { Icon: TbBrandNextjs, label: 'NextJs' },
  { Icon: SiReact, label: 'React' },
  { Icon: TbBrandTypescript, label: 'TypeScript' },
  { Icon: TbBrandRadixUi, label: 'Radix' },
  { Icon: TbBrandTailwind, label: 'Tailwind CSS' },
  { Icon: TbBrandPrisma, label: 'Prisma' },
  { Icon: TbBrandMysql, label: 'MySQL' },
  { Icon: SiZod, label: 'Zod' },
  { Icon: SiAxios, label: 'Axios' },
  { Icon: TbShieldLock, label: 'NextAuth' },
  { Icon: SiGooglecloud, label: 'Google Cloud' },
  { Icon: TbBrandVercel, label: 'Vercel' },
  { Icon: TbBrandSentry, label: 'Sentry' },
  { Icon: TbBeach, label: 'TanStack Query' },
]
