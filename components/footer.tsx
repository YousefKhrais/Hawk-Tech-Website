import Link from "next/link"
import { Mountain } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Mountain className="h-8 w-8 text-teal-400" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Hawk<span className="text-teal-400">Tech</span>
              </span>
            </Link>
            <p className="text-zinc-400 mb-4">
              Creating innovative software solutions that drive business growth and transform ideas into reality.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-teal-500/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {["Custom Software", "Mobile Development", "Web Development", "Cloud Solutions", "UI/UX Design"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-teal-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">&copy; {new Date().getFullYear()} Hawk Tech. All rights reserved.</p>
          <p className="text-zinc-500 text-sm mt-2 md:mt-0">Designed & Developed with ❤️ by Hawk Tech Team</p>
        </div>
      </div>
    </footer>
  )
}
