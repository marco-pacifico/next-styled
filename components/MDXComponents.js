import Image from "next/image"
import styled from "styled-components"
import { H1 } from "./Typography"

const ResponsiveImage = (props) => (
    <ImageWrapper {...props}>
        <Image fill alt={props.alt} {...props} />
    </ImageWrapper>
  )


const MDXComponents = {
    img: ResponsiveImage,
    h1: H1,
}

export default MDXComponents

const ImageWrapper = styled.span`
    display: block;
    width: 100%;
    aspect-ratio: 2 / 1;
    position: relative;

    & img {
        object-fit: cover;
    }
`


