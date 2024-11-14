import {
  Box,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'

import React from 'react'

import {
  ButtonLink,
  ButtonLinkProps,
} from '#components/button-link/button-link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Section, SectionProps, SectionTitle } from '#components/section'

import { gtag } from '../../lib/gtag'

export interface TeamSizePlan {
  id: string
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
  features: Array<TeamSizeFeatureProps | null>
  action: ButtonLinkProps & { label?: string }
  isRecommended?: boolean
}

export interface TeamSizeProps extends SectionProps {
  description: React.ReactNode
  plans: Array<TeamSizePlan>
}

export const TeamSize: React.FC<TeamSizeProps> = (props) => {
  const { children, plans, title, description, ...rest } = props

  const handleClick = (planId: string) => {
    console.log('Clicked on plan:', planId)
    // Send tracking event (using Google Analytics gtag as an example)
    gtag('event', 'click', {
      event_category: 'TeamSize',
      event_label: planId,
      value: 1,
    })
  }
  return (
    <Section id="pricing" pos="relative" {...rest}>
      <Box zIndex="2" pos="relative">
        <SectionTitle title={title} description={description}></SectionTitle>
        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          {plans?.map((plan) => (
            <TeamSizeBox
              key={plan.id}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              flex="1"
            >
              <TeamSizeFeatures>
                {plan.features.map((feature, i) =>
                  feature ? (
                    <TeamSizeFeature key={i} {...feature} />
                  ) : (
                    <br key={i} />
                  ),
                )}
              </TeamSizeFeatures>
              <ButtonLink
                colorScheme="primary"
                {...plan.action}
                onClick={() => handleClick(plan.id)}
              >
                {plan.action.label || 'Learn more'}
              </ButtonLink>
            </TeamSizeBox>
          ))}
        </SimpleGrid>
        {children}
      </Box>
    </Section>
  )
}

const TeamSizeFeatures: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <VStack
      align="stretch"
      justifyContent="stretch"
      spacing="4"
      mb="8"
      flex="1"
    >
      {children}
    </VStack>
  )
}

export interface TeamSizeFeatureProps {
  title: React.ReactNode
  iconColor?: string
}

const TeamSizeFeature: React.FC<TeamSizeFeatureProps> = (props) => {
  const { title, iconColor = 'primary.500' } = props
  return (
    <HStack>
      <Icon as={FiCheck} color={iconColor} />
      <Text flex="1" fontSize="sm">
        {title}
      </Text>
    </HStack>
  )
}

export interface TeamSizeBoxProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
}

const TeamSizeBox: React.FC<TeamSizeBoxProps> = (props) => {
  const { title, description, price, children, ...rest } = props
  return (
    <VStack
      zIndex="2"
      bg="whiteAlpha.600"
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="stretch"
      border="1px solid"
      borderColor="gray.400"
      _dark={{
        bg: 'blackAlpha.300',
        borderColor: 'gray.800',
      }}
      {...rest}
    >
      <Heading as="h3" size="md" fontWeight="bold" fontSize="lg" mb="2">
        {title}
      </Heading>
      <Box color="muted">{description}</Box>
      <Box fontSize="2xl" fontWeight="bold" py="4">
        {price}
      </Box>
      <VStack align="stretch" justifyContent="stretch" spacing="4" flex="1">
        {children}
      </VStack>
    </VStack>
  )
}
