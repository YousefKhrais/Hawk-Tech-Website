"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const contactInfo = [
    {
      icon: <Mail className="text-teal-400" />,
      title: "Email Us",
      details: "info@hawktech.com",
      action: "Send an email",
      link: "mailto:info@hawktech.com",
    },
    {
      icon: <Phone className="text-teal-400" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      action: "Make a call",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="text-teal-400" />,
      title: "Visit Us",
      details: "123 Tech Boulevard, San Francisco, CA",
      action: "Get directions",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-400 font-mono tracking-wider">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Contact Us</h2>
          <p className="text-zinc-400">
            Have a project in mind? We'd love to hear from you. Get in touch with our team and let's create something
            amazing together.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 },
                },
              }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-teal-500/50 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-400 mb-4">{item.details}</p>
              <a href={item.link} className="text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors">
                {item.action} →
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <form className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="John Doe" className="bg-zinc-800/50 border-zinc-700" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="bg-zinc-800/50 border-zinc-700"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Project Inquiry" className="bg-zinc-800/50 border-zinc-700" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                className="bg-zinc-800/50 border-zinc-700 min-h-32"
              />
            </div>
            <div className="md:col-span-2">
              <Button className="bg-teal-500 hover:bg-teal-400 text-zinc-900 w-full md:w-auto">Send Message</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
