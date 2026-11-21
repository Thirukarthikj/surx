import React from 'react'
import FuelplateRecipesTemplate from './components/ui/fuelplate-recipes-template'

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Permanent Crystal Clear Cosmic Background Styling */}
      <style>{`
        .fpt-hero-frame {
          background: #05020c !important;
        }
        .fpt-hero-frame::after {
          display: none !important;
        }
        .fpt-hero-img .fpt-pic img {
          filter: contrast(1.08) brightness(1.02) !important;
          image-rendering: -webkit-optimize-contrast !important;
          object-fit: cover !important;
        }
        .fpt-hero-copy {
          color: #ffffff !important;
        }
        .fpt-hero h1 {
          color: #ffffff !important;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.9), 0 0 40px rgba(139, 92, 246, 0.5) !important;
        }
        .fpt-hero p {
          color: #e2e8f0 !important;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85) !important;
        }
        .fpt-hero-copy .fpt-btn {
          background: rgba(255, 255, 255, 0.95) !important;
          color: #0f172a !important;
          box-shadow: 0 8px 24px -6px rgba(124, 58, 237, 0.5) !important;
          border: 1px solid rgba(255, 255, 255, 0.8) !important;
          font-weight: 600 !important;
        }
        .fpt-hero-copy .fpt-btn:hover {
          background: #ffffff !important;
          transform: translateY(-2px) scale(1.02) !important;
        }
        .fpt-plate {
          background: rgba(15, 23, 42, 0.78) !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(139, 92, 246, 0.25) !important;
        }
        .fpt-plate b {
          color: #ffffff !important;
        }
        .fpt-plate small {
          color: #94a3b8 !important;
        }
        .fpt-plate-bars {
          color: #94a3b8 !important;
        }
      `}</style>

      <FuelplateRecipesTemplate
        key="fuelplate"
        brand="surxtech"
        tagline="Custom digital solutions, modern web platforms, and mobile apps."
        palette={{ accent: "#7c3aed", soft: "#ede9fe", ink: "#0f172a" }}
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
            src: "/hero.jpg?v=3",
            alt: "Cosmic glowing purple accretion disk and event horizon",
            tone: "#0f051d",
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
