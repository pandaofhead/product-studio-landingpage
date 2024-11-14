import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'CentralSpace',
    description: 'All rights reserved @2024',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        label: 'Login',
        href: '/#',
      },
      {
        label: 'Sign Up',
        href: '/#',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by <Link href="">Cornell Tech Product Studio</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:hq48@cornell.edu',
        label: 'Contact',
      },
      {
        href: '',
        label: <FaTwitter size="14" />,
      },
      {
        href: '',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with CentralSpace',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'Designed to be accessible and usable for everyone.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Customize the look and feel of your app with a theme that fits your brand.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Build your team with a set of composable components that work together.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Bring your ideas to life with a productive development experience.',
      },
    ],
  },
}

export default siteConfig
