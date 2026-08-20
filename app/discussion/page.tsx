'use client';

import { useEffect, useState } from 'react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { EmptyState } from '@/components/states/EmptyState';
import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { type Discussion, mockDiscussions } from '@/lib/data/discussions';

const projectOptions = [
  { value: 'all', label: 'All Projects' },
  { value: 'elixpo/opensource', label: 'elixpo/opensource' },
  { value: 'elixpo/cli', label: 'elixpo/cli' },
  { value: 'elixpo/ui', label: 'elixpo/ui' },
  { value: 'elixpo/accounts', label: 'elixpo/accounts' },
];

const visibilityOptions = [
  { value: 'public', label: 'Public' },
  { value: 'contributors', label: 'All contributors' },
  { value: 'project-members', label: 'Project members' },
];

export default function DiscussionPage() {
  const [discussions, setDiscussions] = useState<Discussion[]>(mockDiscussions);
  const [search, setSearch] = useState('');
  const [projectFilter, setProjectFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Form state for new discussion
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  const [newProject, setNewProject] = useState('elixpo/opensource');
  const [newTags, setNewTags] = useState('');
  const [newVisibility, setNewVisibility] = useState('public');

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort discussions
  const filtered = discussions
    .filter((d) => {
      const matchesSearch =
        search.trim() === '' ||
        d.title.toLowerCase().includes(search.toLowerCase()) ||
        d.body.toLowerCase().includes(search.toLowerCase());
      const matchesProject =
        projectFilter === 'all' || d.project === projectFilter;
      return matchesSearch && matchesProject;
    })
    .sort((a, b) => {
      if (sortBy === 'active') {
        return b.commentCount - a.commentCount;
      }
      // Default: newest — pinned first, then by id descending
      if (a.status === 'Pinned' && b.status !== 'Pinned') return -1;
      if (b.status === 'Pinned' && a.status !== 'Pinned') return 1;
      return b.id.localeCompare(a.id);
    });

  function handleCreateDiscussion() {
    if (!newTitle.trim() || !newBody.trim()) return;

    const newDiscussion: Discussion = {
      id: `d${Date.now()}`,
      title: newTitle.trim(),
      body: newBody.trim(),
      author: { name: 'You', avatar: 'YO' },
      project: newProject,
      tags: newTags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      createdAt: 'Just now',
      updatedAt: 'Just now',
      commentCount: 0,
      status: 'Open',
    };

    setDiscussions((prev) => [newDiscussion, ...prev]);
    setNewTitle('');
    setNewBody('');
    setNewProject('elixpo/opensource');
    setNewTags('');
    setNewVisibility('public');
    setDialogOpen(false);
  }

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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Select
                value={projectFilter}
                onChange={(e) => setProjectFilter(e.target.value)}
              >
                {projectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Select>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="active">Most Active</option>
              </Select>
            </div>

            <Button
              variant="primary"
              className="whitespace-nowrap w-full md:w-auto"
              onClick={() => setDialogOpen(true)}
            >
              Open Discussion
            </Button>
          </div>

          {isLoading ? (
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="surface p-5 animate-pulse">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-4 w-24 rounded bg-gray-200 dark:bg-neutral-800" />
                    <div className="h-4 w-12 rounded bg-gray-200 dark:bg-neutral-800" />
                  </div>
                  <div className="h-5 w-3/4 rounded bg-gray-200 dark:bg-neutral-800 mb-2" />
                  <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-neutral-800" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState
              title="No discussions found"
              description={
                search || projectFilter !== 'all'
                  ? 'Try adjusting your search or filters.'
                  : 'Be the first to start a discussion!'
              }
              action={
                <Button variant="primary" onClick={() => setDialogOpen(true)}>
                  Open Discussion
                </Button>
              }
            />
          ) : (
            <div className="flex flex-col gap-4">
              {filtered.map((discussion) => (
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
          )}
        </section>
      </div>
      <Footer />

      {/* Open Discussion Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogHeader>
          <DialogTitle>Open a new discussion</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-2">
          <div>
            <label
              htmlFor="disc-title"
              className="block text-xs font-bold text-ink dark:text-neutral-300 mb-1.5"
            >
              Title
            </label>
            <Input
              id="disc-title"
              type="text"
              placeholder="Discussion title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="disc-body"
              className="block text-xs font-bold text-ink dark:text-neutral-300 mb-1.5"
            >
              Description
            </label>
            <textarea
              id="disc-body"
              rows={4}
              placeholder="Describe your discussion..."
              value={newBody}
              onChange={(e) => setNewBody(e.target.value)}
              className="w-full rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-sm text-ink placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-accent dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="disc-project"
                className="block text-xs font-bold text-ink dark:text-neutral-300 mb-1.5"
              >
                Related project
              </label>
              <Select
                id="disc-project"
                value={newProject}
                onChange={(e) => setNewProject(e.target.value)}
              >
                {projectOptions
                  .filter((p) => p.value !== 'all')
                  .map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
              </Select>
            </div>

            <div>
              <label
                htmlFor="disc-visibility"
                className="block text-xs font-bold text-ink dark:text-neutral-300 mb-1.5"
              >
                Visibility
              </label>
              <Select
                id="disc-visibility"
                value={newVisibility}
                onChange={(e) => setNewVisibility(e.target.value)}
              >
                {visibilityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div>
            <label
              htmlFor="disc-tags"
              className="block text-xs font-bold text-ink dark:text-neutral-300 mb-1.5"
            >
              Tags{' '}
              <span className="font-normal text-[#999] dark:text-neutral-500">
                (comma-separated)
              </span>
            </label>
            <Input
              id="disc-tags"
              type="text"
              placeholder="e.g. Help, Feature Request"
              value={newTags}
              onChange={(e) => setNewTags(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            size="sm"
            disabled={!newTitle.trim() || !newBody.trim()}
            onClick={handleCreateDiscussion}
          >
            Create Discussion
          </Button>
        </DialogFooter>
      </Dialog>
    </main>
  );
}
