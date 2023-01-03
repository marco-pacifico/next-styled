import { getAllPostIds, getPostData } from '../../utils/posts';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return( 
        <div>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            {postData.description}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    )
}