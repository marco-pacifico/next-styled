import styled from "styled-components";
import MorePosts from "./MorePosts"

export default function BlogLayout({ children }) {
  return (
    <>
      <Main>{children}</Main>
      <MorePosts/>
    </>
  );
}


const Main = styled.section`
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
`

