import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";

export const revalidate = 0;

type Props = {
  params: {
    postId: string;
  };
};

// export async function generateStaticParams() {
//   const posts = await getPostsMeta();

//   if (!posts) return [];

//   return posts.map((post) => ({
//     postId: post.id,
//   }));
// }

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link
      key={i}
      href={`/tags/${tag}`}
      className="bg-slate-100 p-1 rounded-md hover:bg-slate-300"
    >
      {tag}
    </Link>
  ));

  return (
    <div className="md:mx-16 pt-6 mx-6">
      <a
        href="/"
        className="mb-10 mt-5 p-2 bg-slate-100 rounded-md hover:bg-slate-300"
      >
        ⇠&ensp;Back to home
      </a>
      <h2 className="text-4xl text-center pt-1 mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-2xl text-center pb-4">{pubDate}</p>
      <article className="md:mx-16 mx-4">{content}</article>
      <section className="mt-8">
        <h3 className="text-center underline">Related</h3>
        <div className="flex flex-row gap-4 justify-center pt-1">{tags}</div>
      </section>
    </div>
  );
}
