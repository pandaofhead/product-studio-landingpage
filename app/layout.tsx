import { ColorModeScript, theme } from '@chakra-ui/react'
import type { Metadata } from 'next'

import { Provider } from './provider'

export const metadata: Metadata = {
  title: 'CentralSpace',
  description:
    'CentralSpace is a Centralized Workspace that helps you bridge the gap between developers and clients.',
}

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = theme.config.initialColorMode

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-Z3EKN1HPPV`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z3EKN1HPPV');
            `,
          }}
        />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
