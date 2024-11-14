import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    'Pay once and get life-time access to our high quality components.',
  plans: [
    {
      id: 'basic',
      title: 'Basic',
      description:
        'Essential tools to streamline communication and access documentation for small teams.',
      price: '$29/month',
      features: [
        {
          title: 'AI-Powered Information Retrieval',
        },
        {
          title: 'Basic Documentation Management',
        },
        {
          title: 'Single Workspace',
        },
        {
          title: 'Client Dashboard Access',
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
      id: 'pro',
      title: 'Pro',
      description:
        'Advanced features for growing teams needing flexibility and automation.',
      price: '$79/month',
      features: [
        {
          title: 'Customizable Workspaces',
        },
        {
          title: 'Automated Project Documentation',
        },
        {
          title: 'Multiple Workspace Integrations',
        },
        {
          title: 'Secure Role-Based Access Control',
        },
        {
          title: 'Priority Support',
        },
        {
          title: 'Analytics and Reporting',
        },
      ],
      action: {
        href: '#',
      },
    },

    {
      id: 'enterprise',
      title: 'Enterprise',
      description:
        'Comprehensive solutions for large organizations.',
      price: 'Contact us',
      features: [
        {
          title: 'Unlimited Workspaces and Integrations',
        },
        {
          title: 'API Access for Custom Integrations',
        },
        {
          title: 'Advanced Analytics & Insights',
        },
        {
          title: 'Dedicated Account Manager',
        },
        {
          title: 'Real-Time Notifications and Alerts',
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
