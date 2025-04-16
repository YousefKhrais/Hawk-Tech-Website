"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = ["all", "web", "mobile", "software", "design"]

  const projects = [
    {
      title: "Fintech Dashboard",
      category: "web",
      image: "/fintech-dashboard-v1.png",
      description: "A comprehensive financial dashboard for monitoring transactions and analytics in real-time.",
    },
    {
      title: "Health App",
      category: "mobile",
      image: "/fitness-tracker-dashboard.png",
      description: "Mobile application for health monitoring with workout tracking and nutritional guidance.",
    },
    {
      title: "E-commerce Platform",
      category: "web",
      image: "/sleek-tech-store.png",
      description: "Full-featured e-commerce solution with inventory management and payment processing.",
    },
    {
      title: "Inventory System",
      category: "software",
      image: "/barcode-inventory-scan.png",
      description: "Enterprise inventory management system with real-time tracking and reporting capabilities.",
    },
    {
      title: "Travel App UI",
      category: "design",
      image: "/placeholder.svg?height=600&width=800&query=travel booking app interface design with destination images",
      description: "User interface design for a travel booking application with a focus on user experience.",
    },
    {
      title: "CRM Software",
      category: "software",
      image: "/placeholder.svg?height=600&width=800&query=customer relationship management software dashboard",
      description: "Custom CRM solution for managing customer relationships, sales, and marketing campaigns.",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-zinc-900">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-400 font-mono tracking-wider">OUR WORK</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Featured Projects</h2>
          <p className="text-zinc-400 mb-8">
            Explore our portfolio of successful projects delivering innovative solutions across different industries.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className={cn(
                  "capitalize border-zinc-700",
                  activeCategory === category ? "bg-teal-500/10 text-teal-400 border-teal-500/50" : "hover:bg-zinc-800",
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
              className="group relative overflow-hidden rounded-xl bg-zinc-800/30 border border-zinc-800"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-50"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider bg-teal-500/10 text-teal-400 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full h-8 w-8 border-zinc-700 hover:bg-teal-500/20 hover:border-teal-500/50"
                  >
                    <ExternalLink size={14} className="text-teal-400" />
                  </Button>
                </div>
                <p className="text-zinc-400 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="bg-teal-500 hover:bg-teal-400 text-zinc-900">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}
