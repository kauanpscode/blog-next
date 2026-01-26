import { useEffect, useState } from 'react';
import { PostData } from '../domain/posts/post';
import { GetStaticProps } from 'next';

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
