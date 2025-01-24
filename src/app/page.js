
import Link from "next/link";

export default async function Home() {
  // Fetch blog posts from the mock API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {data.slice(0, 12).map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
          >
          
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.body.slice(0, 50)}...
              </p>
              <Link
                href={`/${post.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
