import GlobalStyles from './globalstyles/global-styles.js'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../components/MDXComponents'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components = { MDXComponents }>
      <Component {...pageProps} />
      <GlobalStyles/>
    </MDXProvider>
  )
}
