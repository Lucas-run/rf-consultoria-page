import { useEffect, useState } from "react";
import Post from "../components/Post";
import { Link } from "react-router";

export default function Blog() {
  const [posts, setPosts] = useState([]); //lista de todos os posts
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:3333/api/posts";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar os posts");
        }

        const data = await response.json();
        setPosts(data);
        console.log(posts);
      } catch (error) {
        setError(err.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen mt-[5rem]">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Blog
      </h1>

      {error && <p className="text-red-500 text-center">{`Erro: ${error}`}</p>}
      {posts.length === 0 && !error ? (
        <p className="text-gray-500 text-center">Carregando posts...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-4">
            {posts.map((post) => (
              <Link key={post.id} to={`/rf-consultoria-page/blog/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
