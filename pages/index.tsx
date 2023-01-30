import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link';
import cardPhoto from '../public/images/2017-hero.png'

import { getSortedPostsData } from '../utils/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({
  allPostsData
}: {
  allPostsData: {
    description: string
    title: string
    id: string
  }[]
}) {
  return (
    <>
    
        <Title>
          Blog
        </Title>

        <Description>
          This is my blog.
        </Description>

        <Grid>
          <Link href={`/about`}>
              <Card>
                <CardTitle>About</CardTitle>
                <CardDescription>A bit about me</CardDescription>
              </Card>
          </Link>
         
          {allPostsData.map(({ id, title, description }) => (
            <Link key={id} href={`/posts/${id}`}>
              <Card>
                  <StyledImage
                    src={cardPhoto} // Route of the image file
                    alt="mountain at sunrise"
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />  
                
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </Card>
            </Link>
          ))}

        </Grid>
    </>       
  )
}


const Title = styled.h1`
  margin: 0;
  line-height: 1.04;
  font-size: 80px;
  letter-spacing: -3.1725px;
  text-align: center;
  font-weight: 500;

  & a {
    color: #0070f3;
    text-decoration: none;

    &:hover, :focus, :active {
      text-decoration: underline;
    }
  }
`
const Description = styled.p`
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 300;
`
const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;

  @media (prefers-color-scheme: dark) {
    background: #111;
  }
`
const Grid = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;

 @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`
const Card = styled.div`

  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  /* transition: color 0.15s ease, border-color 0.15s ease; */
  max-width: 360px;

  &:hover, :focus, :active {
      color: #0070f3;
      border-color: #0070f3;
    }
  
`
const CardTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`
const CardDescription = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.555555556;
  font-weight: 300;
  letter-spacing: 0.2px;
  color: var(--color-text-secondary);
`


const ImageWrapper = styled.div`
  position: relative;
  flex: 1 1 200px;
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
  border-radius: 8px;
`
const StyledImage = styled(Image)`
  object-fit: cover;
  display: block;
  width: 100%;
  height: auto;
`


