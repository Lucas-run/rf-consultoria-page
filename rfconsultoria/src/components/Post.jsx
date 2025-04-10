import { useEffect, useState } from "react";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = `http://localhost:3333/api/posts/${id}`; //desenvolvimento
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Erro ao buscar o post");
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPost(); // Chama a função dentro do useEffect
  }, [id]);

  if (error) {
    return <p className="text-red-500 text-center">{`Erro: ${error}`}</p>;
  }

  if (!post) {
    return <p className="text-gray-500 text-center">Carregando...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
