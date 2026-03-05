import { getPostData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <article className="max-w-3xl mx-auto px-4 py-20 prose prose-invert prose-orange">
        <span className="bg-orange-600 px-2 py-1 text-xs font-bold rounded uppercase">{post.category}</span>
        <h1 className="text-5xl font-black mt-6 mb-8">{post.title}</h1>
        <div className="flex gap-4 text-zinc-400 mb-12 border-b border-zinc-800 pb-8">
          <span>{post.author}</span> • <span>{post.readTime}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
      <Footer />
    </div>
  );
