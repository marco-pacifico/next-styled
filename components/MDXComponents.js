// import Image from "next/image"
// import styled from "styled-components"

// const ResponsiveImage = (props) => (
//     <Image fill alt={props.alt} {...props} />
//   )

const MDXComponents = {
    p: (props) => <p style={ {color:"red"} } { ...props }/>,

}

export default MDXComponents

// const ImageWrapper = styled.div`
//     width: 100%;
//     height: auto;
//     position: relative;

// `
