"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Terminal, Play, Pause, RefreshCw, Code, Layers, Database } from "lucide-react"

export function Hero() {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)
  const [userCommand, setUserCommand] = useState("")
  const [showUserInput, setShowUserInput] = useState(false)
  const [activeTab, setActiveTab] = useState("terminal")

  // Terminal commands and responses
  const commands = [
    {
      command: "hawk-tech --version",
      response: "HawkTech CLI v2.5.0 - Cutting-edge software development tools",
    },
    {
      command: "hawk-tech list-services",
      response: `Available services:
- Custom Software Development
- Mobile App Development
- Web Development
- Cloud Solutions
- Data Analytics
- UI/UX Design`,
    },
    {
      command: "hawk-tech showcase --latest",
      response: "Loading latest projects...\nSuccessfully loaded 3 showcase projects.",
    },
    {
      command: "hawk-tech stats --summary",
      response: `Company Statistics:
- 250+ Projects Completed
- 50+ Team Members
- 100+ Happy Clients
- 8+ Years Experience`,
    },
  ]

  // Code sample for the code tab
  const codeSample = `// HawkTech innovative solution example
import { createSolution } from '@hawk-tech/core';
import { AI, Cloud, Mobile } from '@hawk-tech/services';

export async function buildCustomSolution(requirements) {
  // Initialize the project with client requirements
  const project = createSolution({
    client: requirements.client,
    industry: requirements.industry,
    scope: requirements.scope
  });

  // Add necessary services based on requirements
  if (requirements.needsAI) {
    project.integrate(new AI.MachineLearning());
  }

  if (requirements.needsMobile) {
    project.integrate(new Mobile.CrossPlatform({
      ios: true,
      android: true
    }));
  }

  // Deploy to cloud infrastructure
  await project.deployTo(new Cloud.ScalableInfrastructure());

  return project;
}`

  // Data visualization for the data tab
  const dataPoints = [
    { label: "Web Dev", value: 35 },
    { label: "Mobile", value: 28 },
    { label: "Cloud", value: 22 },
    { label: "AI/ML", value: 15 },
  ]

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Auto-typing effect for commands
  useEffect(() => {
    if (isPaused) return

    let timeout: NodeJS.Timeout

    if (isTyping && currentCommand < commands.length) {
      timeout = setTimeout(() => {
        setIsTyping(false)

        // Auto-scroll terminal
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }

        // Move to next command after showing response
        timeout = setTimeout(() => {
          if (currentCommand < commands.length - 1) {
            setCurrentCommand(currentCommand + 1)
            setIsTyping(true)
          } else {
            // After all commands complete, show user input
            setShowUserInput(true)
          }
        }, 2000)
      }, commands[currentCommand].command.length * 50)
    }

    return () => clearTimeout(timeout)
  }, [currentCommand, isTyping, commands.length, isPaused])

  // Handle user input
  const handleUserInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && userCommand.trim()) {
      // Add custom command handling here
      setUserCommand("")
    }
  }

  // Reset the terminal animation
  const resetTerminal = () => {
    setCurrentCommand(0)
    setIsTyping(true)
    setIsPaused(false)
    setShowUserInput(false)
  }

  // Toggle pause/play
  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <section className="relative min-h-screen bg-zinc-950 overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
              scale: Math.random() * 0.5 + 0.5,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <div className="text-teal-500 font-mono text-4xl">
              {["</>", "{}", "[]", "//", "&&", "==", "=>"][Math.floor(Math.random() * 7)]}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 px-4 py-1 rounded-full text-xs font-semibold tracking-wider text-zinc-900">
                INNOVATIVE SOFTWARE SOLUTIONS
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
                We Build{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 inline-block"
              >
                Cutting-Edge
              </motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
                {" "}
                Digital Products
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-zinc-400 text-lg max-w-lg"
            >
              Hawk Tech transforms ideas into powerful software solutions that drive businesses forward with innovative
              technology and exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-zinc-900 font-medium px-8 border-none relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Our Work
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ChevronRight size={16} />
                  </motion.span>
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 hover:border-teal-500 hover:text-teal-400 px-8 transition-colors"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side interactive terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl shadow-teal-500/10 overflow-hidden"
          >
            {/* Terminal header with tabs */}
            <div className="bg-zinc-800 p-3 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`px-3 py-1 rounded-md text-xs ${activeTab === "terminal" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-white"}`}
                  onClick={() => setActiveTab("terminal")}
                >
                  <Terminal size={14} className="mr-1" /> Terminal
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`px-3 py-1 rounded-md text-xs ${activeTab === "code" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-white"}`}
                  onClick={() => setActiveTab("code")}
                >
                  <Code size={14} className="mr-1" /> Code
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`px-3 py-1 rounded-md text-xs ${activeTab === "data" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-white"}`}
                  onClick={() => setActiveTab("data")}
                >
                  <Database size={14} className="mr-1" /> Data
                </Button>
              </div>

              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={togglePause}>
                  {isPaused ? <Play size={14} /> : <Pause size={14} />}
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={resetTerminal}>
                  <RefreshCw size={14} />
                </Button>
              </div>
            </div>

            {/* Terminal content */}
            <AnimatePresence mode="wait">
              {activeTab === "terminal" && (
                <motion.div
                  key="terminal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 font-mono text-sm h-[400px] overflow-auto"
                  ref={terminalRef}
                >
                  <div className="text-green-500 mb-2">Welcome to HawkTech Terminal v2.5.0</div>
                  <div className="text-zinc-500 mb-4">Type 'help' for available commands</div>

                  {commands.slice(0, currentCommand + 1).map((cmd, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-center text-teal-400">
                        <span className="mr-2">$</span>
                        <span>
                          {index === currentCommand && isTyping
                            ? cmd.command.substring(0, Math.floor(Date.now() / 100) % cmd.command.length)
                            : cmd.command}
                          {index === currentCommand && isTyping && showCursor && (
                            <span className="animate-pulse">|</span>
                          )}
                        </span>
                      </div>
                      {(!isTyping || index < currentCommand) && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="text-zinc-300 ml-4 mt-1 whitespace-pre-line"
                        >
                          {cmd.response}
                        </motion.div>
                      )}
                    </div>
                  ))}

                  {showUserInput && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center text-teal-400"
                    >
                      <span className="mr-2">$</span>
                      <input
                        type="text"
                        value={userCommand}
                        onChange={(e) => setUserCommand(e.target.value)}
                        onKeyDown={handleUserInput}
                        className="bg-transparent border-none outline-none text-teal-400 w-full"
                        placeholder="Type a command..."
                        autoFocus
                      />
                      {showCursor && <span className="animate-pulse">|</span>}
                    </motion.div>
                  )}
                </motion.div>
              )}

              {activeTab === "code" && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 font-mono text-sm h-[400px] overflow-auto bg-zinc-950"
                >
                  <pre className="text-zinc-300">
                    {codeSample.split("\n").map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.03 }}
                        className="leading-relaxed"
                      >
                        <span className="text-zinc-600 mr-3">{i + 1}</span>
                        <span className="text-zinc-300">
                          {line.includes("import") && <span className="text-purple-400">import </span>}
                          {line.includes("export") && <span className="text-purple-400">export </span>}
                          {line.includes("async") && <span className="text-purple-400">async </span>}
                          {line.includes("function") && <span className="text-blue-400">function </span>}
                          {line.includes("return") && <span className="text-purple-400">return </span>}
                          {line.includes("await") && <span className="text-purple-400">await </span>}
                          {line.includes("new") && <span className="text-purple-400">new </span>}
                          {line.includes("if") && <span className="text-purple-400">if </span>}
                          {line.replace(/import|export|async|function|return|await|new|if/g, "")}
                        </span>
                      </motion.div>
                    ))}
                  </pre>
                </motion.div>
              )}

              {activeTab === "data" && (
                <motion.div
                  key="data"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 font-mono text-sm h-[400px] overflow-auto flex flex-col justify-center items-center"
                >
                  <h3 className="text-zinc-300 mb-6 text-center">Project Distribution by Type</h3>
                  <div className="w-full max-w-md h-64 flex items-end justify-around gap-4 px-8">
                    {dataPoints.map((point, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <motion.div
                          className="w-16 bg-gradient-to-t from-teal-500 to-blue-500 rounded-t-md relative group"
                          initial={{ height: 0 }}
                          animate={{ height: `${point.value * 2}px` }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                        >
                          <motion.div
                            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 + i * 0.2 }}
                          >
                            {point.value}%
                          </motion.div>
                        </motion.div>
                        <motion.div
                          className="text-xs text-zinc-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 + i * 0.1 }}
                        >
                          {point.label}
                        </motion.div>
                      </div>
                    ))}
                  </div>
                  <motion.div
                    className="mt-8 text-zinc-500 text-xs text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    Based on 250+ completed projects
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="relative w-32 h-32">
          {[
            { icon: <Code size={20} />, delay: 0, distance: 60, angle: 0 },
            { icon: <Layers size={20} />, delay: 1, distance: 60, angle: 72 },
            { icon: <Database size={20} />, delay: 2, distance: 60, angle: 144 },
            { icon: <Terminal size={20} />, delay: 3, distance: 60, angle: 216 },
            { icon: <RefreshCw size={20} />, delay: 4, distance: 60, angle: 288 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-teal-400"
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: Math.cos((item.angle * Math.PI) / 180) * item.distance,
                y: Math.sin((item.angle * Math.PI) / 180) * item.distance,
                opacity: 1,
                rotate: [0, 360],
              }}
              transition={{
                x: { delay: item.delay * 0.2, duration: 0.8, type: "spring" },
                y: { delay: item.delay * 0.2, duration: 0.8, type: "spring" },
                opacity: { delay: item.delay * 0.2, duration: 0.3 },
                rotate: { delay: item.delay * 0.2, duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            >
              {item.icon}
            </motion.div>
          ))}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 0 rgba(45, 212, 191, 0.2)",
                "0 0 0 10px rgba(45, 212, 191, 0)",
                "0 0 0 0 rgba(45, 212, 191, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <Layers size={24} className="text-zinc-900" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
