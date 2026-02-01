import { Post } from "@/components/posts/post";
import { getPostBySlug } from "@/queries/blog-data";

export default async function PostDetailsPage({ params }) {
  params = await params;
  const slug = params.slug;
  const post = await getPostBySlug(slug);
	return <Post post={post} />;
}
