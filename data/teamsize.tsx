import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Choose your Team Size',
  description:
    'We have different plans for different team sizes. Choose the one that fits your needs.',
  plans: [
    {
      id: 'small-team',
      title: '1-10 Members',
      description:
        'Solo developers and small teams that need a single workspace for their projects.',
      price: '',
      features: [
        {
          title: 'Single Workspace',
        },
        {
          title: 'Basic Documentation Management',
        },
        {
          title: 'Standard Support',
        },
      ],
      action: {
        href: '#',
      },
    },

    {
      id: 'medium-team',
      title: '11-50 Members',
      description:
        'Perfect for growing teams that need multiple workspaces and enhanced communication tools.',
      price: '',
      features: [
        {
          title: 'Multiple Workspaces',
        },
        {
          title: 'Automated Project Documentation',
        },
        {
          title: 'Secure Role-Based Access Control',
        },
        {
          title: 'Priority Support',
        },
      ],
      action: {
        href: '#',
      },
    },

    {
      id: 'large-team',
      title: '51+ Members',
      description:
        'Best suited for large organizations with complex needs and advanced security requirements.',
      price: '',
      features: [
        {
          title: 'Unlimited Workspaces',
        },
        {
          title: 'Advanced Analytics & Reporting',
        },
        {
          title: 'Dedicated Account Manager',
        },
        {
          title: '24/7 Priority Support',
        },
      ],
      action: {
        href: '#',
      },
    },
  ],
}
