import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  PlayCircle,
  Sparkles,
  Share2,
  Map as MapIcon,
  ArrowRight,
  Zap,
  Presentation,
  FileSpreadsheet,
  RefreshCw,
  CheckCircle2,
  Clock,
  Users,
  ChevronRight,
  Package,
  Building2,
  Globe,
  Camera,
  Move,
  Layers,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// --- Configuration ---
const APP_URL = import.meta.env.VITE_APP_URL || 'http://localhost:3000'

// --- Components ---

const PainPointCard = ({ icon: Icon, problem, impact, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative p-6 rounded-2xl bg-card border border-red-500/20 hover:border-red-500/40 transition-all group"
  >
    <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
      <Icon className="w-5 h-5 text-red-500" />
    </div>
    <div className="mt-3">
      <h4 className="font-semibold text-lg mb-2 text-foreground">{problem}</h4>
      <p className="text-sm text-muted-foreground">{impact}</p>
    </div>
  </motion.div>
)

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

const UseCaseCard = ({ icon: Icon, title, scenario, delay }) => (
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
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{scenario}</p>
  </motion.div>
)

const ComparisonTable = () => (
  <div className="overflow-hidden rounded-2xl border border-border bg-card">
    <table className="w-full">
      <thead className="bg-muted/50 border-b border-border">
        <tr>
          <th className="text-left p-4 text-sm font-semibold">Task</th>
          <th className="text-center p-4 text-sm font-semibold text-red-500">
            Traditional Workflow
          </th>
          <th className="text-center p-4 text-sm font-semibold text-green-500 bg-primary/5">
            With Vetori
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        <tr className="hover:bg-muted/30 transition-colors">
          <td className="p-4 text-sm">Create map-based presentation</td>
          <td className="p-4 text-center text-sm text-muted-foreground">
            Screenshot → Paste → Annotate
          </td>
          <td className="p-4 text-center text-sm font-semibold bg-primary/5">
            Direct editing in browser
          </td>
        </tr>
        <tr className="hover:bg-muted/30 transition-colors">
          <td className="p-4 text-sm">Update with new data</td>
          <td className="p-4 text-center text-sm text-muted-foreground">
            Redo all screenshots
          </td>
          <td className="p-4 text-center text-sm font-semibold bg-primary/5">
            Upload new CSV
          </td>
        </tr>
        <tr className="hover:bg-muted/30 transition-colors">
          <td className="p-4 text-sm">Share with stakeholders</td>
          <td className="p-4 text-center text-sm text-muted-foreground">
            Static PDF/PPT file
          </td>
          <td className="p-4 text-center text-sm font-semibold bg-primary/5">
            Interactive web link
          </td>
        </tr>
        <tr className="hover:bg-muted/30 transition-colors">
          <td className="p-4 text-sm">Show progression over time</td>
          <td className="p-4 text-center text-sm text-muted-foreground">
            Multiple static slides
          </td>
          <td className="p-4 text-center text-sm font-semibold bg-primary/5">
            Smooth camera animations
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

const UIMockup = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl border border-border bg-background/50 backdrop-blur shadow-2xl overflow-hidden aspect-video flex flex-col">
      {/* Browser Chrome */}
      <div className="h-10 border-b border-border flex items-center px-4 bg-muted/30 gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-amber-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/20" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-background/50 rounded-md px-3 py-1 text-[10px] text-muted-foreground w-64 text-center flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            vetori.app/s/supply-chain-q3
          </div>
        </div>
      </div>

      <div className="flex-1 relative bg-slate-950 overflow-hidden">
        {/* Abstract Map Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* Animated Map Nodes */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M 200 300 Q 400 100 600 300"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Simulated Nodes */}
          <div className="absolute top-1/3 left-1/4">
            <div className="relative">
              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 relative" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap border border-white/10">
                Distribution Center A
              </div>
            </div>
          </div>

          <div className="absolute top-1/3 right-1/4">
            <div className="relative">
              <div className="w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] z-10 relative" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap border border-white/10">
                Retail Partner B
              </div>
            </div>
          </div>
        </motion.div>

        {/* Presentation Overlay */}
        <div className="absolute bottom-8 left-8 max-w-sm">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-background/95 backdrop-blur-md border border-border p-5 rounded-xl shadow-2xl"
          >
            <h3 className="font-semibold text-lg mb-2">
              Q3 Logistics Expansion
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              We successfully connected the western hub to our new retail
              partners, reducing delivery times by 14%.
            </p>
            <div className="flex gap-4 pt-2 border-t border-border/50">
              <div className="text-xs">
                <span className="text-muted-foreground block">Volume</span>
                <span className="font-bold text-foreground">2.4M</span>
              </div>
              <div className="text-xs">
                <span className="text-muted-foreground block">Transit</span>
                <span className="font-bold text-green-500">-14%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const handleSignIn = () => (window.location.href = `${APP_URL}/login`)
  const handleSignUp = () => (window.location.href = `${APP_URL}/signup`)

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div
            className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-primary-foreground font-bold">V</span>
            </div>
            Vetori
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a
              href="#problem"
              className="hover:text-foreground transition-colors"
            >
              The Problem
            </a>
            <a
              href="#how-it-works"
              className="hover:text-foreground transition-colors"
            >
              How it Works
            </a>
            <a
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Button
              size="sm"
              onClick={handleSignUp}
              className="shadow-lg shadow-primary/20"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-sm border-primary/30 bg-primary/5 text-primary rounded-full"
            >
              <Camera className="w-3 h-3 mr-2 inline" />
              Interactive map presentations for location data
            </Badge>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-balance">
              Don't just show data.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Tell the story.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 text-balance leading-relaxed">
              You have 50 locations to map, connections to visualize, and a
              story to tell. With PowerPoint, you're looking at an all-nighter.
            </p>

            <p className="text-2xl font-semibold text-foreground max-w-2xl mx-auto mb-10">
              With Vetori? You'll be done in 60 seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="h-14 px-8 text-base group shadow-xl shadow-primary/20"
                onClick={handleSignUp}
              >
                Start for Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="text-sm text-muted-foreground">
                No credit card required • Works in your browser
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div style={{ opacity, scale }} className="relative z-10">
            <UIMockup />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-purple-600/30 blur-3xl -z-10 opacity-40" />
          </motion.div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stop taking screenshots of maps.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn complex network and geospatial datasets into cinematic,
            interactive experiences. Move beyond static dashboards to narrative
            intelligence.
          </p>
        </div>
      </section>

      {/* The Real Problem Section */}
      <section id="problem" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              The Weekly Report Nightmare
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You're not building presentations. You're fighting software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <PainPointCard
              icon={Clock}
              delay={0.1}
              problem="Hours spent on manual screenshot work"
              impact="You export data, screenshot your mapping tool, paste into PowerPoint, add arrows and labels. By the time you're done, the data has changed."
            />
            <PainPointCard
              icon={RefreshCw}
              delay={0.2}
              problem="Start over every single time"
              impact="New quarter? New data? Hope you saved that template. Now multiply that copy-paste nightmare by 50 locations."
            />
            <PainPointCard
              icon={FileSpreadsheet}
              delay={0.3}
              problem="Juggling multiple tools"
              impact="CSV in Excel, screenshots from mapping software, layout in PowerPoint, export to PDF. You're a data analyst, not a graphic designer."
            />
            <PainPointCard
              icon={Users}
              delay={0.4}
              problem="Stakeholders can't explore your insights"
              impact="They get a static PDF. They can't zoom, can't click, can't understand the connections. So they ask for three more versions."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              From Data to Story in Your Browser
            </h2>
            <p className="text-muted-foreground text-lg">
              No installations. No complex setup. Just your data and your story.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-border via-primary/50 to-border -z-10" />

            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-2 border-blue-500/50 flex items-center justify-center mb-6 shadow-lg transition-all group-hover:scale-105">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-sm">
                  1
                </div>
                <FileSpreadsheet className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Import Your Data</h3>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                Upload CSV files with your locations and connections. Works with
                addresses, coordinates, or place names.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-2 border-purple-500/50 flex items-center justify-center mb-6 shadow-lg transition-all group-hover:scale-105">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center text-sm">
                  2
                </div>
                <Camera className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Design Camera Views
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                Set up camera positions for each part of your story. Pan, zoom,
                and focus on what matters. Add narration for each view.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 border-2 border-green-500/50 flex items-center justify-center mb-6 shadow-lg transition-all group-hover:scale-105">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green-500 text-white font-bold flex items-center justify-center text-sm">
                  3
                </div>
                <Share2 className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Share & Present</h3>
              <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                Send a link. Your audience gets an interactive experience they
                can explore, not a static PDF they can't.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Built for Complex Data Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create compelling map-based presentations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Camera}
              delay={0.1}
              title="Cinematic Camera Control"
              description="Set camera positions for each part of your story. Smooth animations guide your viewer's attention exactly where you want it."
            />
            <FeatureCard
              icon={Layers}
              delay={0.2}
              title="Multi-Moment Slides"
              description="One slide can have multiple camera views. Show the big picture, then zoom into specific regions—all in one smooth sequence."
            />
            <FeatureCard
              icon={Move}
              delay={0.3}
              title="Animated Transitions"
              description="Camera movements between views are smooth and professional. No jarring cuts—just cinematic storytelling."
            />
            <FeatureCard
              icon={MapIcon}
              delay={0.4}
              title="Network Visualization"
              description="Show nodes, edges, and connections on an interactive map. Perfect for supply chains, territories, and infrastructure."
            />
            <FeatureCard
              icon={Sparkles}
              delay={0.5}
              title="Smart Slide Templates"
              description="Create one template slide and expand it across multiple locations automatically. Build 50 slides from one design."
            />
            <FeatureCard
              icon={Share2}
              delay={0.6}
              title="Web-Based Sharing"
              description="Share a link. Stakeholders view in their browser—no PowerPoint required. Works on desktop and mobile."
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfect For</h2>
            <p className="text-lg text-muted-foreground">
              Teams working with location and network data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <UseCaseCard
              icon={Package}
              delay={0.1}
              title="Supply Chain Operations"
              scenario="Visualize distribution networks, shipping routes, warehouse locations, and delivery performance across regions."
            />
            <UseCaseCard
              icon={Building2}
              delay={0.2}
              title="Territory Planning"
              scenario="Show sales territories, customer locations, market penetration, and expansion opportunities with geographic context."
            />
            <UseCaseCard
              icon={Globe}
              delay={0.3}
              title="Infrastructure Networks"
              scenario="Map distributed systems, service areas, connectivity status, and network topology for infrastructure reviews."
            />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              A Better Way to Work with Maps
            </h2>
            <p className="text-lg text-muted-foreground">
              Stop fighting with screenshots and PowerPoint
            </p>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-purple-500/10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Data Deserves a Better Story
          </h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Stop wrestling with screenshots and static slides. Create
            interactive, animated presentations that bring your location data to
            life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="h-14 px-10 text-lg shadow-xl group"
              onClick={handleSignUp}
            >
              Get Started Free
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 text-lg bg-background"
              onClick={() => (window.location.href = 'mailto:sales@vetori.app')}
            >
              Contact Sales
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Works in your browser</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Start creating immediately</span>
            </div>
          </div>
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
            <a
              href="mailto:support@vetori.app"
              className="hover:text-foreground transition-colors"
            >
              Support
            </a>
            <a
              href="mailto:sales@vetori.app"
              className="hover:text-foreground transition-colors"
            >
              Sales
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
