"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    // This would normally use a library like GSAP or Framer Motion for more complex animations
    // For this example, we'll use simple IntersectionObserver

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    // Add a small delay to ensure the DOM elements are ready
    setTimeout(() => {
      const elements = document.querySelectorAll(".animate-on-scroll")
      elements.forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return null
}
