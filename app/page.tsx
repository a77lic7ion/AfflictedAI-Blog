import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import PostCard from '@/components/PostCard';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const allPosts = getSortedPostsData();
  const featured = allPosts[0];
  const others = allPosts.slice(1);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Featured Post */}
          <Link href={`/posts/${featured.slug}`} className="group block mb-12 border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900">
            <div className="aspect-video relative bg-zinc-800">
              <div className="absolute bottom-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                <span className="bg-orange-600 px-2 py-1 text-xs font-bold rounded">{featured.category}</span>
                <h2 className="text-3xl font-black mt-4 group-hover:text-orange-500">{featured.title}</h2>
              </div>
            </div>
          </Link>
          {/* List */}
          <div className="divide-y divide-zinc-800">
            {others.map((post, i) => <PostCard key={post.slug} post={post} index={i} />)}
          </div>
        </div>
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
