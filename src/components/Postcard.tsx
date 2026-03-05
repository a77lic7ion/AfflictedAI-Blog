import Link from 'next/link';
export default function PostCard({ post, index }: any) {
  return (
    <Link href={`/posts/${post.slug}`} className="group block py-8 border-b border-zinc-800 last:border-0">
      <div className="flex gap-6">
        <div className="text-4xl font-bold text-zinc-800">{String(index + 2).padStart(2, '0')}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-orange-500">{post.title}</h3>
          <p className="text-zinc-400 text-sm mt-2">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
