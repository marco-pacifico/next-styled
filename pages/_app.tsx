import GlobalStyles from './globalstyles/global-styles.js'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../components/MDXComponents'
import Layout from '../components/layout.js'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components = { MDXComponents }>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyles/>
      </Layout>
    </MDXProvider>
  )
}

// export default function App({ Component, pageProps }) {
//   const getLayout = Component.getLayout || ((page) => page)
//   return getLayout(
//     <MDXProvider components={MDXComponents}>
//       <GlobalStyles />
//       <Component {...pageProps} />
//     </MDXProvider>
//   )
// }
