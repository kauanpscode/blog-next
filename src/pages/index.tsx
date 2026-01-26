import { useEffect, useState } from 'react';
import { PostData } from '../domain/posts/post';
import { GetStaticProps } from 'next';

const getPosts = async (): Promise<PostData[]> => {
  const response = await fetch('http://localhost:1337/api/posts');
  const jsonPosts = await response.json();

  return jsonPosts.data;
};

export type HomeProps = {
  posts: PostData[];
};

export default function Home({posts}: HomeProps) {
  // const [posts, setPosts] = useState<PostData[]>([]);

  // useEffect(() => {
  //   getPosts().then((response) => setPosts(response));
  // }, [posts]);

  return (
    <div>
      {posts.map(post => (
        <h2 key={post.title}>{post.title}</h2>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getPosts();

  return {
    props : {
      posts
    },
    revalidate: 60,
  }
}
