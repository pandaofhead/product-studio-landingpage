'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import teamsize from '#data/teamsize'
import testimonials from '#data/testimonials'

export const metadata: Metadata = {
  title: 'CentralSpace',
  description:
    'CentralSpace is a Centralized Workspace that helps you bridge the gap between developers and clients.',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <FeaturesSection />

      <PricingSection />
      <TeamSizeSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Bridge your communication gap
                <Br /> faster and easier
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                CentralSpace is a <Em>Centralized Workspace</Em>
                <Br /> that helps you <Br /> bridge the gap between developers
                and clients.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8" />

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href=""
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Accessible',
            icon: FiSmile,
            description: 'Designed with accessibility in mind, for all users.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Themable',
            icon: FiSliders,
            description:
              'Multiple themes with darkmode support, always have the perfect starting point for your next project.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Composable',
            icon: FiGrid,
            description:
              'Build your team with a set of composable components that work together.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Productive',
            icon: FiThumbsUp,
            description:
              'Bring your ideas to life with a productive development experience.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Know your team and clients better
          <Br /> with CentralSpace
        </Heading>
      }
      description={
        <>
          CentralSpace is a centralized workspace that helps you bridge the gap
          <Br />
          between developers and clients. It is designed to be accessible,
          themable, and composable for small teams.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'AI-Powered Information Retrieval',
          icon: FiSearch,
          description:
            'Leverage AI to quickly retrieve relevant documentation and answers, reducing time spent searching for information across multiple sources.',
          variant: 'inline',
        },

        {
          title: 'Automated Documentation Generation',
          icon: FiCopy,
          description:
            'Automatically generate and update documentation based on project changes, ensuring that all stakeholders have access to the latest information.',
          variant: 'inline',
        },

        {
          title: 'Customizable Workspace Setup',
          icon: FiToggleLeft,
          description:
            'Choose from a variety of templates or set up a personalized workspace tailored to the unique needs of your team and projects.',
          variant: 'inline',
        },

        {
          title: 'Seamless API Integrations',
          icon: FiCode,
          description:
            'Integrate CentralSpace APIs with your existing tools and platforms, keeping your workflows connected and allowing easy access to project details.',
          variant: 'inline',
        },

        {
          title: 'Centralized Communication Hub',
          icon: FiUserPlus,
          description:
            'Bring developers and clients together with dedicated channels, messaging, and feedback tools to keep everyone aligned and informed.',
          variant: 'inline',
        },

        {
          title: 'Real-Time Updates and Notifications',
          icon: FiFlag,
          description:
            'Stay updated on project progress with real-time notifications and alerts, ensuring no critical information is missed by any team member.',
          variant: 'inline',
        },

        {
          title: 'Access Permissions & Security Controls',
          icon: FiLock,
          description:
            'Set role-based permissions and control access to sensitive information, giving both clients and developers the access they need without compromising security.',
          variant: 'inline',
        },

        {
          title: 'Analytics and Reporting',
          icon: FiTrendingUp,
          description:
            'Track workspace activity, document engagement, and communication patterns to improve collaboration and identify areas for optimization.',
          variant: 'inline',
        },
      ]}
    />
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted"></Text>
    </Pricing>
  )
}

const TeamSizeSection = () => {
  return (
    <Pricing {...teamsize}>
      <Text p="8" textAlign="center" color="muted"></Text>
    </Pricing>
  )
}

export default Home
