import { ScrollAnimations } from "@/components/scroll-animations"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <ScrollAnimations />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
