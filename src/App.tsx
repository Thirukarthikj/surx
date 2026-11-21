import React from 'react'
import FuelplateRecipesTemplate from './components/ui/fuelplate-recipes-template'

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Permanent Crystal Clear Background Styling */}
      <style>{`
        .fpt-hero-frame::after {
          display: none !important;
        }
        .fpt-hero-img .fpt-pic img {
          filter: contrast(1.06) brightness(1.02) !important;
          image-rendering: -webkit-optimize-contrast !important;
        }
      `}</style>

      <FuelplateRecipesTemplate
        key="fuelplate"
        brand="surxtech"
        tagline="Custom digital solutions, modern web platforms, and mobile apps."
        nav={[
          { label: "About", href: "#about" },
          { label: "Service", href: "#service" },
          { label: "Project", href: "#project" },
          { label: "Contact", href: "#contact" },
        ]}
        features={[
          {
            title: "01. Built Around Your Business",
            text: "Every business is unique. We create custom digital solutions that match your goals, brand identity, and business requirements.",
          },
          {
            title: "02. Complete Digital Solutions",
            text: "From professional websites to Android apps and web applications, we bring all your digital needs together.",
          },
          {
            title: "03. Technology That Grows With You",
            text: "We build modern, responsive, and scalable solutions designed to support your business as it grows.",
          },
        ]}
        hero={{
          title: "Performance Driven\nDigital Solutions.",
          text: "From bespoke web and mobile apps to scalable cloud engineering, we build modern technology solutions that drive business growth.",
          cta: "Get In Touch",
          image: {
            src: "/hero.jpg?v=2",
            alt: "Futuristic high-definition circuit board schematic",
            tone: "#e5e7eb",
            focus: "50% 50%",
          },
        }}
        showcase={{
          title: "Innovative IT Services\nEngineered to Scale.",
          text: "From responsive web development to mobile apps and enterprise SaaS, discover the complete digital solutions we deliver.",
        }}
      />
    </div>
  )
}
