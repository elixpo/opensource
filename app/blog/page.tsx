import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

const posts = [
  {
    title: 'Introducing Elixpo Open Source v1.0',
    excerpt:
      'We are launching the standard for running open-source competitions. Sync repositories, configure scoring ledgers, and automate developer payouts.',
    date: 'Aug 04, 2026',
    readTime: '4 min read',
    author: 'Elixpo Core Team',
    tag: 'Announcements',
  },
  {
    title: 'How we build Next.js apps for Cloudflare edge routing',
    excerpt:
      'An in-depth look at our backend architecture: using OpenNext, Cloudflare D1 database engines, and edge-native middleware pipelines.',
    date: 'Jul 28, 2026',
    readTime: '8 min read',
    author: 'Sofia Chen',
    tag: 'Engineering',
  },
  {
    title: 'A guide to winning your first contribution leaderboard',
    excerpt:
      'Best practices for finding active issues, communicating effectively with maintainers, and maximizing points through top-tier PR reviews.',
    date: 'Jun 15, 2026',
    readTime: '5 min read',
    author: 'Alex Rivera',
    tag: 'Guide',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell">
            <p className="eyebrow">Blog & News</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-6xl max-w-2xl">
              Latest from Elixpo.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#666] dark:text-neutral-400">
              Stories, technical guides, and announcements directly from the
              core development team and active community members.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="surface flex flex-col justify-between overflow-hidden hover:border-[#bbb] dark:hover:border-neutral-700 transition group"
                >
                  <div className="p-6">
                    <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest bg-accent-soft px-2 py-1 rounded">
                      {post.tag}
                    </span>
                    <h3 className="mt-5 text-xl font-extrabold text-ink dark:text-neutral-100 group-hover:text-accent transition leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#555] dark:text-neutral-300">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="border-t border-[var(--line)] bg-[#fafafa] dark:bg-neutral-900/60 px-6 py-4 flex items-center justify-between text-xs text-[#777] dark:text-neutral-400 font-mono">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
