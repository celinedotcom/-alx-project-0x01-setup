import React, { useState } from "react";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData } from "@/interfaces";

interface PostsPageProps {
  posts: PostData[];
}

const Posts: React.FC<PostsPageProps> = ({ posts: initialPosts }) => {
  const [posts, setPosts] = useState<PostData[]>(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: PostData) => {
    setPosts([post, ...posts]);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={openModal}
          >
            Add Post
          </button>
        </div>

        {isModalOpen && <PostModal onClose={closeModal} onSubmit={handleAddPost} />}

        <div className="grid grid-cols-3 gap-2 mt-4">
          {posts.map(({ title, body, userId, id }, key) => (
            <PostCard
              title={title}
              body={body}
              userId={userId}
              id={id || key}
              key={key}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
