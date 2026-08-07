'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Settings() {
  const [email, setEmail] = useState('ayushman@elixpo.com');
  const [username, setUsername] = useState('ayushman');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    console.log("Settings successfully updated.");
  };

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell max-w-3xl">
            <p className="eyebrow">User profile settings</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">
              Settings.
            </h1>
            <p className="mt-2 text-sm text-[#777] dark:text-neutral-500">
              Customize your profile metadata, link git credentials, and specify email dispatch rules.
            </p>

            <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
              <div className="surface p-6 md:p-8 flex flex-col gap-6">
                <h3 className="text-lg font-bold text-ink dark:text-neutral-200">General Information</h3>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold text-[#777] uppercase">Username</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="rounded-lg border border-[var(--line)] px-3 py-2.5 text-sm font-medium text-ink focus:border-[#bbb] outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold text-[#777] uppercase">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-lg border border-[var(--line)] px-3 py-2.5 text-sm font-medium text-ink focus:border-[#bbb] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Integrations */}
              <div className="surface p-6 md:p-8 flex flex-col gap-4">
                <h3 className="text-lg font-bold text-ink dark:text-neutral-200">Connected Accounts</h3>
                <div className="flex items-center justify-between border-t border-[var(--line)] dark:border-neutral-800 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft dark:bg-accent/10 text-accent">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink dark:text-neutral-200">GitHub Authentication</p>
                      <p className="text-xs text-[#777]">Connected as @ayushman-dev</p>
                    </div>
                  </div>
                  <button type="button" className="button-secondary text-xs !py-1.5 !px-3.5">
                    Disconnect
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button type="submit" className="button-primary">
                  Save Changes
                </button>
                {saved && (
                  <span className="text-xs font-mono font-bold text-green-600 animate-fade-in">
                    ✓ Profile settings updated successfully!
                  </span>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
