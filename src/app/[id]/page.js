


export default async function PostDetails({params}) {

  const { id } = params;

  if (!id) return <div>Loading...</div>;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-6">{post.body}</p>
       
      </div>
    </div>
  );
}
