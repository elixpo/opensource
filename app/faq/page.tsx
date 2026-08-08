import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FaqAccordion } from '@/components/faq-accordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about registration, contribution rules, scoring, and certificates.',
};

const faqCategories = [
  {
    category: 'Registration',
    items: [
      {
        question: 'Who can register as a contributor?',
        answer:
          'Anyone with a GitHub account can register as a contributor. There is no restriction based on experience level — beginners and experienced developers are equally welcome.',
      },
      {
        question: 'Can I register as both a contributor and a mentor?',
        answer:
          "Each program run typically expects one primary role per contest, but you can hold different roles across different contests depending on what you sign up for.",
      },
      {
        question: 'Is there a deadline to register?',
        answer:
          "Yes, each contest has its own registration window shown on the contest page and timeline. Late registration may be allowed at the host's discretion.",
      },
    ],
  },
  {
    category: 'Contribution Rules',
    items: [
      {
        question: 'How do I claim an issue?',
        answer:
          'Open the issue you want to work on and use the "Claim this Issue" button. Once claimed, you have a window of time to submit a pull request before it becomes available again.',
      },
      {
        question: 'Can I work on multiple issues at once?',
        answer:
          "This depends on the contest's configuration. Some programs cap the number of actively claimed issues per contributor to keep things fair, so check the contest rules.",
      },
      {
        question: 'What happens if my PR is not merged in time?',
        answer:
          'If your pull request is still in review when the contest period ends, reach out to the project mentor. Policies vary by contest, so check the specific contest guidelines.',
      },
    ],
  },
  {
    category: 'Points & Scoring',
    items: [
      {
        question: 'How are points calculated?',
        answer:
          'Points are typically awarded based on issue difficulty, PR quality, and review outcomes. Mentors can also award bonus points with a documented reason.',
      },
      {
        question: 'Where can I see my current score?',
        answer:
          'Your points and rank are visible on your contributor dashboard and on the public leaderboard.',
      },
    ],
  },
  {
    category: 'Certificates',
    items: [
      {
        question: 'How do I get my certificate?',
        answer:
          "Certificates are generated automatically once you meet a contest's completion criteria. You can download it from your dashboard once it is issued.",
      },
      {
        question: 'Can employers verify my certificate?',
        answer:
          "Yes, each certificate has a public verification page so anyone with the link or ID can confirm it is authentic.",
      },
    ],
  },
  {
    category: 'Technical Issues',
    items: [
      {
        question: 'I cannot log in with GitHub. What should I do?',
        answer:
          "Double check that you have authorized the Elixpo GitHub App for your account or organization. If the issue persists, reach out through the contact page.",
      },
      {
        question: 'My contribution is not showing up on the platform.',
        answer:
          "Activity sync can take a few minutes after a PR is merged. If it is still not reflected after a while, contact support with the PR link.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main>
      <Navbar />
      <section className="shell py-20 md:py-28">
        <p className="eyebrow">Need a hand?</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-.04em] md:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#666]">
          Answers to the most common questions about registration, contributing, scoring, and
          certificates.
        </p>

        <div className="mt-14 flex flex-col gap-12">
          {faqCategories.map((group) => (
            <div key={group.category}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#999]">
                {group.category}
              </h2>
              <FaqAccordion items={group.items} />
            </div>
          ))}
        </div>

        <div className="surface mt-16 flex flex-col items-start gap-4 p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Still stuck?</p>
            <h3 className="mt-2 text-xl font-bold">We are happy to help.</h3>
          </div>
          <Link href="/contact" className="button-primary">
            Contact support
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}