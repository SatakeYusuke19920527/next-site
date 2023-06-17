import Layout from '../components/Layout';
import Post from '../components/Post';
// import { getAllPostsData } from '../lib/posts';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getStaticProps = async () => {
  const res = await axios.get(apiUrl);
  return {
    props: {
      posts: res.data,
    },
  };
};

export default function Blog({ posts }: { posts: any }) {
  console.log('🚀 ~ file: blog-page.tsx:23 ~ Blog ~ posts:', posts);
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post: any) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}
