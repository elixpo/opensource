import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { mockDiscussions } from '@/lib/data/discussions';

export default function Discussion() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-[#FAFAFA] dark:bg-black">
      <div>
        <Navbar />

        <section className="shell py-16 md:py-24">
          <div className="mb-10">
            <h1 className="text-4xl font-black tracking-tight text-ink dark:text-neutral-100 md:text-5xl">
              Discussions
            </h1>
            <p className="mt-4 text-base text-[#666] dark:text-neutral-400 max-w-2xl">
              Project conversations, ideas, and help.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between mb-8">
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto flex-1">
              <Input
                type="search"
                placeholder="Search discussions..."
                className="max-w-[300px]"
              />
              <Select defaultValue="all">
                <option value="all">All Projects</option>
                <option value="elixpo/opensource">elixpo/opensource</option>
                <option value="elixpo/cli">elixpo/cli</option>
                <option value="elixpo/ui">elixpo/ui</option>
                <option value="elixpo/accounts">elixpo/accounts</option>
              </Select>
              <Select defaultValue="newest">
                <option value="newest">Newest</option>
                <option value="active">Most Active</option>
              </Select>
            </div>

            <Button
              variant="primary"
              className="whitespace-nowrap w-full md:w-auto"
            >
              Open Discussion
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            {mockDiscussions.map((discussion) => (
              <div
                key={discussion.id}
                className="surface p-5 hover:border-[#bbb] dark:hover:border-neutral-700 transition cursor-pointer flex flex-col md:flex-row gap-5 items-start md:items-center justify-between"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300">
                      {discussion.project}
                    </span>
                    {discussion.status === 'Pinned' && (
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-accent-soft dark:bg-accent/20 text-accent">
                        Pinned
                      </span>
                    )}
                    {discussion.status === 'Resolved' && (
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-green-100 dark:bg-emerald-950/40 text-green-800 dark:text-emerald-400">
                        Resolved
                      </span>
                    )}
                    {discussion.status === 'Open' && (
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400">
                        Open
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-ink dark:text-neutral-100 truncate mb-1">
                    {discussion.title}
                  </h3>

                  <p className="text-sm text-[#666] dark:text-neutral-400 line-clamp-1 mb-3">
                    {discussion.body}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#777] dark:text-neutral-500">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center text-[9px] font-bold">
                        {discussion.author.avatar}
                      </div>
                      <span>{discussion.author.name}</span>
                    </div>
                    <span>·</span>
                    <span>{discussion.createdAt}</span>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      {discussion.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-[#555] dark:text-neutral-400 hover:text-ink dark:hover:text-white transition"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#777] dark:text-neutral-400 shrink-0">
                  <div className="flex flex-col items-end">
                    <span className="flex items-center gap-1 font-bold text-ink dark:text-neutral-200">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      {discussion.commentCount}
                    </span>
                    <span className="text-[10px]">replies</span>
                  </div>
                  <div className="hidden md:flex flex-col items-end">
                    <span className="text-ink dark:text-neutral-300">
                      {discussion.updatedAt}
                    </span>
                    <span className="text-[10px]">last activity</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
