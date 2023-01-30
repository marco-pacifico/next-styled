import styled from "styled-components"
import Head from 'next/head'
import DarkToggle from "./DarkToggle"

export default function Layout({ children }) {
    return (
        <>
          <Head>
              <title>Marco Pacifico</title>
              <meta property="og:title" content="Marco Pacifico" key="title" />
              <meta name="description" content="Marco Pacifico's design portfolio and blog." />
              <link rel="icon" href="/favicon.ico" />
              {/* <meta name="theme-color" content="#fff"/> */}
              {/* <meta name="theme-color" content="#0b3e05" media="(prefers-color-scheme: dark)"/> */}
          </Head>
          {/* <Wrapper> */}
            <Header>
                <DarkToggle/>
            </Header>
            <Main>
                {children}
            </Main>
          {/* </Wrapper> */}
          <Footer></Footer>
        </>
    )
}

const Header = styled.header`
  padding: 1rem 2rem;
`
const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #222;
  }
`