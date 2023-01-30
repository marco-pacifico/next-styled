import Image from "next/image"
import styled from "styled-components"

const StyledImage = (props) => (
    <ImageWrapper>
        <Image fill alt={props.alt} src={props.src} {...props} />
    </ImageWrapper>
)

const ImageWrapper = styled.span`
    display: block;
    width: 50%;
    aspect-ratio: 2 / 1;
    position: relative;
`

export default StyledImage
