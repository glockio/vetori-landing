import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  PlayCircle,
  Sparkles,
  Share2,
  Database,
  Map,
  Layers,
  ArrowRight,
  Zap,
  Globe,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const APP_URL = import.meta.env.VITE_APP_URL

// --- Components ---

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
)

const UIMockup = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl border border-border bg-background/50 backdrop-blur shadow-2xl overflow-hidden aspect-video flex flex-col">
      {/* Mock Header */}
      <div className="h-12 border-b border-border flex items-center px-4 justify-between bg-card/50">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <div className="h-4 w-px bg-border" />
          <span className="text-xs font-medium text-muted-foreground flex items-center gap-2">
            Global Supply Chain{' '}
            <Badge variant="outline" className="text-[10px] h-5">
              v2.4
            </Badge>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant="secondary"
            className="animate-pulse bg-green-500/10 text-green-500 border-green-500/20"
          >
            ● Live
          </Badge>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Mock Sidebar (Slides) */}
        <div className="w-64 border-r border-border bg-card/30 flex flex-col p-3 gap-3 hidden md:flex">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`p-3 rounded-lg border ${
                i === 2
                  ? 'border-primary/50 bg-primary/5'
                  : 'border-border bg-card'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-muted-foreground">
                  0{i}
                </span>
                {i === 2 && <Sparkles className="w-3 h-3 text-primary" />}
              </div>
              <div className="h-12 rounded bg-muted/50 w-full mb-2" />
              <div className="h-2 w-2/3 bg-muted rounded" />
            </div>
          ))}
        </div>

        {/* Mock Viewport (Map) */}
        <div className="flex-1 relative bg-slate-950 overflow-hidden">
          {/* Abstract Map Dots */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1.2, 1],
              x: [0, -50, -100, 0],
              y: [0, 20, -20, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          >
            {/* Simulated Nodes */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-blue-500/60 blur-[1px]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </motion.div>

          {/* UI Overlay */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-center">
            <div className="bg-background/80 backdrop-blur-md border border-white/10 p-4 rounded-xl max-w-lg w-full shadow-2xl">
              <div className="h-4 w-3/4 bg-foreground/80 rounded mb-3" />
              <div className="h-3 w-full bg-muted-foreground/30 rounded mb-2" />
              <div className="h-3 w-5/6 bg-muted-foreground/30 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground">V</span>
            </div>
            Vetori
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#solutions"
              className="hover:text-foreground transition-colors"
            >
              Solutions
            </a>
            <a
              href="#pricing"
              className="hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-sm border-primary/30 bg-primary/5 text-primary"
            >
              <Sparkles className="w-3 h-3 mr-2 inline" />
              The Narrative OS for Data
            </Badge>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-balance">
              Don't just show data.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Tell the story.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
              Turn complex network and geospatial datasets into cinematic,
              interactive experiences. Move beyond static dashboards to
              narrative intelligence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Button size="lg" className="h-12 px-8 text-base group">
                Start Building
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base"
              >
                <PlayCircle className="w-4 h-4 mr-2" />
                View Demo
              </Button>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div style={{ opacity, scale }} className="relative z-10">
            <UIMockup />
            {/* Glow effect behind mockup */}
            <div className="absolute -inset-10 bg-gradient-to-r from-primary/30 to-purple-600/30 blur-3xl -z-10 opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        className="py-24 bg-muted/30 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">A complete Narrative OS</h2>
            <p className="text-muted-foreground text-lg">
              Vetori combines a powerful graph database engine with a cinematic
              presentation layer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Database}
              delay={0.1}
              title="Graph Native"
              description="Import nodes and edges directly. Vetori understands relationships, not just rows and columns."
            />
            <FeatureCard
              icon={Layers}
              delay={0.2}
              title="Smart Slides"
              description="Automatically generate slide sequences from your data using expander templates. Turn 1,000 rows into a guided tour instantly."
            />
            <FeatureCard
              icon={Map}
              delay={0.3}
              title="Cinematic Camera"
              description="Direct the viewer's attention. Pan, zoom, and focus on specific data points with keyframe animation control."
            />
            <FeatureCard
              icon={Zap}
              delay={0.4}
              title="Narrative Intelligence"
              description="Auto-calculated pacing based on reading speed (WPM). The presentation waits for the user to read before moving on."
            />
            <FeatureCard
              icon={Globe}
              delay={0.5}
              title="Embed Anywhere"
              description="Publish to the web with a single click. Embed interactive stories into your existing website or Notion docs."
            />
            <FeatureCard
              icon={Share2}
              delay={0.6}
              title="Live Updates"
              description="Update your data source, and your published stories update automatically. No need to redeploy."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to tell your story?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join forward-thinking teams using Vetori to visualize supply chains,
            investigative data, and complex networks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-lg">
              Get Started for Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 text-lg bg-background"
            >
              Contact Sales
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required for free tier.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground text-xs">V</span>
            </div>
            Vetori
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Documentation
            </a>
            <a href="#" className="hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground">
              GitHub
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vetori Inc.
          </div>
        </div>
      </footer>
    </div>
  )
}
