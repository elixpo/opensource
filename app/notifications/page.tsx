'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

interface NotificationItem {
  id: string;
  title: string;
  desc: string;
  time: string;
  type: 'PR' | 'Points' | 'System' | 'Mentorship';
  read: boolean;
}

const initialNotifications: NotificationItem[] = [
  {
    id: '1',
    title: 'PR #284 merged',
    desc: 'Sofia Chen merged your contribution: "Configure Turbopack configurations for OpenNext build scripts" to elixpo/opensource.',
    time: '2 minutes ago',
    type: 'PR',
    read: false,
  },
  {
    id: '2',
    title: 'Points Awarded',
    desc: 'You received +200 points for verifying bug claims in elixpo/cli issue tracker.',
    time: '18 minutes ago',
    type: 'Points',
    read: false,
  },
  {
    id: '3',
    title: 'New Contest Draft',
    desc: 'Winter Maintainers Sprint was successfully configured by workspace project admin.',
    time: '34 minutes ago',
    type: 'System',
    read: true,
  },
  {
    id: '4',
    title: 'Mentor Assigned',
    desc: 'Kenji Sato has been assigned as your technical mentor for the OpenCode Summer 2026 contest.',
    time: '1 day ago',
    type: 'Mentorship',
    read: true,
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const toggleRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: !n.read } : n));
  };

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="eyebrow">User inbox</p>
                <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">
                  Notifications.
                </h1>
              </div>
              <button
                onClick={markAllRead}
                className="button-secondary text-xs !py-2 self-start sm:self-auto"
              >
                Mark all as read
              </button>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              {notifications.length === 0 ? (
                <div className="surface p-12 text-center text-[#777] dark:text-neutral-500">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent mx-auto mb-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9 6 9-6" />
                    </svg>
                  </div>
                  <p className="font-mono text-sm font-bold">Inbox clean. No notifications left.</p>
                </div>
              ) : (
                notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`surface p-6 flex items-start gap-4 hover:border-[#bbb] transition ${
                      n.read ? 'opacity-70' : 'border-l-4 border-l-accent'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[9px] font-bold text-accent uppercase bg-accent-soft dark:bg-accent/10 px-2 py-0.5 rounded">
                          {n.type}
                        </span>
                        <span className="text-[10px] text-[#777] dark:text-neutral-500">{n.time}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-bold text-ink dark:text-neutral-200">{n.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#555] dark:text-neutral-400">{n.desc}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleRead(n.id)}
                        className="rounded-lg p-1.5 text-[#777] hover:bg-[#f0f0f0] dark:hover:bg-neutral-800 dark:text-neutral-400 transition"
                        title={n.read ? 'Mark as unread' : 'Mark as read'}
                      >
                        {n.read ? (
                          <span className="block h-3 w-3 rounded-full border-2 border-neutral-350 dark:border-neutral-600" />
                        ) : (
                          <span className="block h-3 w-3 rounded-full bg-accent" />
                        )}
                      </button>
                      <button
                        onClick={() => removeNotification(n.id)}
                        className="rounded-lg p-1.5 text-[#777] hover:bg-[#f0f0f0] dark:hover:bg-neutral-800 dark:text-neutral-400 transition"
                        title="Delete notification"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
