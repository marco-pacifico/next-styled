import styled from 'styled-components'
import POSTS from '../public/data/posts.js'
import Link from 'next/link.js'

const MorePosts = ({currentPost}) => {
    const filteredPOSTS = POSTS.filter((post) => post.id !== currentPost);
    return (
      <Section>
            {filteredPOSTS.map((post) => (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                    {post.title}
                </Link>
             </li>
            ))}
  
    </Section>      
    )
}

export default MorePosts

const Section = styled.section`
    max-width: 600px;
    margin: 0 auto;
    min-height: 100vh;

`
