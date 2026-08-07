import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function CodeOfConduct() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="shell max-w-3xl">
            <p className="eyebrow">Guidelines</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">
              Code of Conduct.
            </h1>
            <p className="mt-4 text-xs font-mono text-[#777]">Last updated: August 2026</p>
            
            <div className="mt-10 prose prose-slate max-w-none text-sm leading-7 text-[#444] flex flex-col gap-6">
              <p>
                Elixpo Open Source is committed to providing a welcoming, safe, and inclusive environment for everyone who participates, regardless of their background, identity, gender, level of experience, or ethnicity.
              </p>

              <h2 className="text-xl font-bold text-ink mt-6">1. Our Standards</h2>
              <p>
                We expect all community members (contributors, maintainers, mentors, and ambassadors) to adhere to standards that promote healthy, constructive collaboration:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-1.5 pl-2">
                <li>Demonstrating empathy and kindness toward other members.</li>
                <li>Being respectful of differing opinions, viewpoints, and experiences.</li>
                <li>Giving and gracefully accepting constructive feedback.</li>
                <li>Accepting responsibility and apologizing to those affected by our mistakes.</li>
                <li>Focusing on what is best for the overall developer community.</li>
              </ul>

              <h2 className="text-xl font-bold text-ink mt-6">2. Unacceptable Behavior</h2>
              <p>
                Behavior that undermines a welcoming environment is strictly prohibited and includes:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-1.5 pl-2">
                <li>The use of sexualized language or imagery, and unwelcome sexual attention.</li>
                <li>Trolling, insulting, derogatory comments, or personal and political attacks.</li>
                <li>Public or private harassment of any kind.</li>
                <li>Publishing others private information, such as physical or email addresses, without explicit permission.</li>
                <li>Other conduct which could reasonably be considered inappropriate in a professional setting.</li>
              </ul>

              <h2 className="text-xl font-bold text-ink mt-6">3. Enforcement & Reporting</h2>
              <p>
                Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at <a href="mailto:conduct@elixpo.com" className="text-accent underline font-medium">conduct@elixpo.com</a>. All complaints will be reviewed and investigated promptly and fairly.
              </p>
              <p>
                Community maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project leadership.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
