"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Code, Users, Zap } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants}>
            <span className="text-teal-400 font-mono tracking-wider">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">We Create Digital Solutions That Drive Results</h2>
            <p className="text-zinc-400 mb-8">
              Founded in 2015, Hawk Tech has grown from a small startup to an industry leader in software development.
              We specialize in creating tailored solutions that help businesses thrive in the digital landscape.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Code className="text-teal-400" />, text: "Cutting-edge development expertise" },
                { icon: <Users className="text-teal-400" />, text: "Client-focused collaborative approach" },
                { icon: <Zap className="text-teal-400" />, text: "Agile methodology for faster delivery" },
                { icon: <CheckCircle className="text-teal-400" />, text: "Quality assurance at every step" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {[
              { number: "8+", text: "Years Experience" },
              { number: "50+", text: "Team Members" },
              { number: "250+", text: "Projects Completed" },
              { number: "100+", text: "Happy Clients" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 p-8 rounded-xl border border-zinc-700/50 hover:border-teal-500/50 transition-colors group"
              >
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 group-hover:from-blue-500 group-hover:to-teal-400 transition-all duration-500">
                  {stat.number}
                </h3>
                <p className="text-zinc-400 mt-2">{stat.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
