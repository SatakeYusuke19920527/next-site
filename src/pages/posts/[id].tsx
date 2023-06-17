import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/Layout';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getStaticPaths = async () => {
  const res = await axios.get(apiUrl);
  const posts = res.data;
  const paths = posts.map((post: any) => ({
    params: {
      id: String(post.id),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: any }) {
  console.log('🚀 ~ file: [id].tsx:22 ~ getStaticProps ~ params:', params);
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/` + params.id
  );
  const post = res.data;
  return {
    props: {
      post,
    },
  };
}

const Post = ({ post }: { post: any }) => {
  console.log('🚀 ~ file: [id].tsx:12 ~ Post ~ posts:', post);
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {'ID : '}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
};

export default Post;
