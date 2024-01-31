import { getPostsMeta } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>;
  }

  return (
    <section className="mt-12 mx-auto max-w-2xl">
      <h1 className="text-center text-4xl font-bold">My Blog</h1>
      <ul className="w-full indent-8 list-none p-4">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
