"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Laptop, Layout, LineChart, Smartphone } from "lucide-react"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: <Code size={24} />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your specific business needs and challenges.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: <Layout size={24} />,
      title: "Web Development",
      description: "Responsive, modern web applications built with the latest technologies and frameworks.",
    },
    {
      icon: <Database size={24} />,
      title: "Cloud Solutions",
      description: "Scalable, secure cloud infrastructure and migration services for your business.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Data Analytics",
      description: "Extract meaningful insights from your data with our advanced analytics solutions.",
    },
    {
      icon: <Laptop size={24} />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging digital experiences.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-400 font-mono tracking-wider">WHAT WE DO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Our Services</h2>
          <p className="text-zinc-400">
            We offer a comprehensive range of software development services to help your business thrive in the digital
            era.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                  },
                },
              }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-teal-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
