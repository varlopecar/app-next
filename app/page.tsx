import Link from "next/link";

const getPosts = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
};

export type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const data = await getPosts();
  const posts: Post[] = data.posts;

  return (
    <main className="container px-8 py-8">
      <Link
        className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href={"/dashboard"}
      >
        Go to the dashboard
      </Link>
      <h1 className="pt-3 text-4xl font-bold">Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="py-4">
          <h2 className="text-2xl font-bold">{post.title}</h2>
        </div>
      ))}
    </main>
  );
}
