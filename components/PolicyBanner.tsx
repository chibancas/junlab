import Link from 'next/link'
import './PolicyBanner.css'

export default function PolicyBanner() {
  return (
    <main className="policy grid grid-cols-1 gap-2.5 justify-center place-items-center align-middle">
      <h1>Privacy & Cookies Policy</h1>

      <h2>No analytics, no tracking</h2>

      <p>
        This website does not use analytics, advertising tools, or tracking
        cookies. No personal data is collected for marketing or profiling
        purposes.
      </p>

      <p>
        The site is built using modern web technologies that may rely on
        technical cookies or browser storage strictly necessary for proper
        functionality.
      </p>

      <section>
        <h3>Technologies used</h3>

        <nav>
              <Link
                href="https://nextjs.org/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </Link>
              <span> - React framework for server-rendered applications</span>

              <Link
                href="https://react.dev/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                React & React DOM
              </Link>
              <span> - UI rendering library</span>

              <Link
                href="https://lucide.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lucide React
              </Link>
              <span> - Icon library</span>
            
              <Link
                href="https://www.npmjs.com/package/typewriter-effect"
                target="_blank"
                rel="noopener noreferrer"
              >
                Typewriter Effect
              </Link>
        </nav>
      </section>

      <section>
        <h3>Development tools</h3>

        <p>
          During development, tools such as Tailwind CSS, TypeScript and ESLint
          are used to improve code quality and maintainability. These tools do
          not collect or process user data.
        </p>
      </section>
    </main>
  )
}
