"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

/* Aurora background component */
function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div className="absolute -top-24 -left-24 w-[36rem] h-[36rem] 
        bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 
        rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse 
        motion-safe:animate-none" />
      <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] 
        bg-gradient-to-tr from-cyan-400 via-teal-400 to-emerald-300 
        rounded-full mix-blend-screen blur-3xl opacity-25 
        animate-[aurora-pulse-6s_6s_ease-in-out_infinite] 
        motion-safe:animate-none" />
      <div className="absolute top-1/3 -left-10 w-[28rem] h-[28rem] 
        bg-gradient-to-tr from-indigo-500 via-sky-400 to-purple-400 
        rounded-full mix-blend-screen blur-3xl opacity-20 
        animate-[aurora-pulse-7s_7s_ease-in-out_infinite] 
        motion-safe:animate-none" />
    </div>
  );
}

const modules = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Master the building blocks of modern web development",
    icon: "🏗️",
    sessions: "12 Sessions",
    duration: "5-15 min each"
  },
  {
    id: 2,
    title: "Modern Front-End Frameworks",
    description: "React, Vue, and cutting-edge framework mastery",
    icon: "⚛️",
    sessions: "15 Sessions",
    duration: "5-15 min each"
  },
  {
    id: 3,
    title: "Styling & UI Libraries",
    description: "Create stunning interfaces with modern CSS and libraries",
    icon: "🎨",
    sessions: "10 Sessions",
    duration: "5-15 min each"
  },
  {
    id: 4,
    title: "Advanced Front-End & Tooling",
    description: "Professional development workflows and optimization",
    icon: "🔧",
    sessions: "18 Sessions",
    duration: "5-15 min each"
  },
  {
    id: 5,
    title: "AI Agent Creation & Prompt Engineering",
    description: "Build intelligent applications with AI integration",
    icon: "🤖",
    sessions: "14 Sessions",
    duration: "5-15 min each"
  },
  {
    id: 6,
    title: "Cross-Cutting Concerns",
    description: "Security, performance, and deployment best practices",
    icon: "🛡️",
    sessions: "16 Sessions",
    duration: "5-15 min each"
  }
];

const features = [
  {
    title: "Unique Module System",
    description: "Self-contained modules with no artificial difficulty tiers",
    icon: "📚"
  },
  {
    title: "Consumable Intervals",
    description: "Perfect 5-15 minute sessions that fit your schedule",
    icon: "⏱️"
  },
  {
    title: "Gamified Learning",
    description: "Engaging, conversational tone with real-world scenarios",
    icon: "🎮"
  },
  {
    title: "Professional Focus",
    description: "Industry-relevant skills with clear, insightful analogies",
    icon: "💼"
  }
];

const promptCategories = [
  'All',
  'Front-End Debugging',
  'Code Review',
  'Performance',
  'Accessibility',
  'Prompt Engineering',
  'AI Agents',
];

const prompts = [
  {
    id: 'p1',
    category: 'Front-End Debugging',
    title: 'Debug UI State Bug',
    text: 'You are a senior front-end engineer. Analyze this React component and find why the state is not updating on rapid clicks. Propose a fix with minimal changes and explain tradeoffs. Code: <paste component>.'
  },
  {
    id: 'p2',
    category: 'Front-End Debugging',
    title: 'CSS Specificity Issue',
    text: 'Explain why this element style is not applying. Show how to diagnose specificity issues, then provide 3 fixes ranked by maintainability. HTML/CSS: <paste snippet>.'
  },
  {
    id: 'p3',
    category: 'Code Review',
    title: 'PR Review Checklist',
    text: 'Review the following pull request for readability, correctness, and performance. Use a checklist (naming, tests, edge cases, complexity, security). Provide actionable suggestions with code diffs. PR: <link or diff>.'
  },
  {
    id: 'p4',
    category: 'Performance',
    title: 'Next.js Performance Audit',
    text: 'Act as a performance lead. Audit this Next.js page for hydration, bundle size, and data fetching. Recommend code-split points, memoization spots, and a metric plan (LCP, FID, CLS). Code: <paste>.'
  },
  {
    id: 'p5',
    category: 'Accessibility',
    title: 'A11y Audit – Component',
    text: 'Perform an accessibility audit for this component. Cover roles, name/description, keyboard nav, focus order, contrast, and screen reader output. Provide fixes with ARIA examples. Code: <paste>.'
  },
  {
    id: 'p6',
    category: 'Prompt Engineering',
    title: 'System + Task + Style',
    text: 'Create a robust prompt using STS (System-Task-Style) for a documentation generator. Include constraints, examples, and a refusal policy. Output as a reusable template.'
  },
  {
    id: 'p7',
    category: 'AI Agents',
    title: 'Agent Task Graph',
    text: 'Design a task graph for an AI coding agent that builds a Next.js page. Define nodes (plan, scaffold, implement, test), tools, inputs/outputs, and stop conditions. Return as JSON.'
  },
  {
    id: 'p8',
    category: 'Performance',
    title: 'Web Vitals Triage',
    text: 'Given Web Vitals data, identify the primary bottleneck and propose a prioritized 3-step remediation plan with expected impact and verification method. Data: <paste>.'
  },
  {
    id: 'p9',
    category: 'Code Review',
    title: 'Security-Oriented Review',
    text: 'Do a security-first review focusing on injection, auth, secrets, and SSRF. Provide patterns to adopt/avoid with code examples. Code/PR: <paste>.'
  },
  {
    id: 'p10',
    category: 'Prompt Engineering',
    title: 'Few-shot Prompt Pack',
    text: 'Create a few-shot prompt for converting imperative React code to declarative hooks-based code. Include 3 examples and a rubric for correctness.'
  }
];

export default function Home() {
  const [activeModule, setActiveModule] = React.useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [promptSearch, setPromptSearch] = React.useState('');
  const [activePromptTab, setActivePromptTab] = React.useState('All');
  const [copySuccess, setCopySuccess] = React.useState<string | null>(null);

  const filteredPrompts = prompts.filter(p => {
    const matchesTab = activePromptTab === 'All' || p.category === activePromptTab;
    const q = promptSearch.toLowerCase();
    const matchesSearch = p.title.toLowerCase().includes(q) || p.text.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return matchesTab && matchesSearch;
  });

  const copyPrompt = async (text: string, promptId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(promptId);
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (e) {
      alert('Copy failed. Please select and copy manually.');
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen relative text-white bg-slate-950">
        <Aurora />

        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <span className="text-white font-bold text-lg">CDA</span>
                </div>
                <h1 className="text-2xl font-bold">Cyber Dev Academy</h1>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#modules" className="text-white/80 hover:text-white transition-colors">Modules</a>
                <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
                <a href="#prompts" className="text-white/80 hover:text-white transition-colors">Prompt Library</a>
                <Button variant="ghost" size="md">
                  Start Learning
                </Button>
              </div>

              <button 
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Toggle menu</span>
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-white/10">
                <div className="flex flex-col space-y-4">
                  <a href="#modules" className="text-white/80 hover:text-white transition-colors">Modules</a>
                  <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
                  <a href="#prompts" className="text-white/80 hover:text-white transition-colors">Prompt Library</a>
                  <Button variant="ghost" size="md" className="w-full">
                    Start Learning
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Master Web Development
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-sky-300 to-emerald-300">
                  with Aurora UI
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mt-6 leading-relaxed">
                Gamified, scenario-driven learning. Professional analogies. Sessions you can finish between sips of coffee.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg">
                🚀 Start Your Journey
              </Button>
              <Button variant="ghost" size="lg">
                🔍 Explore Modules
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-fuchsia-300 mb-2">85+</div>
                <div className="text-white/80">Total Sessions</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-sky-300 mb-2">5–15</div>
                <div className="text-white/80">Minutes Per Session</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-emerald-300 mb-2">6</div>
                <div className="text-white/80">Core Modules</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Why Choose CDA?</h3>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Our unique approach combines gamification with professional development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Core Learning Modules</h3>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Self-contained modules designed for maximum learning efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module) => (
                <div 
                  key={module.id} 
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all cursor-pointer transform hover:scale-105"
                  onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{module.icon}</div>
                    <div className="text-right">
                      <div className="text-sm text-fuchsia-200 font-semibold">{module.sessions}</div>
                      <div className="text-xs text-white/60">{module.duration}</div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3">{module.title}</h4>
                  <p className="text-white/80 mb-4">{module.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-sky-300 hover:text-sky-200 transition-colors font-semibold">
                      Learn More →
                    </button>
                    <span className="text-white/60">
                      {activeModule === module.id ? '▲' : '▼'}
                    </span>
                  </div>

                  {activeModule === module.id && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="text-sm text-white/80">
                        <p className="mb-2">✨ Gamified learning experience</p>
                        <p className="mb-2">🎯 Real-world scenarios</p>
                        <p className="mb-2">💡 Professional analogies</p>
                        <p>🚀 Hands-on projects</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prompt Library */}
        <section id="prompts" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-4xl font-bold mb-4">Prompt Library</h3>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Pre-made, battle-tested prompts ready to copy and paste into your favorite LLM.
              </p>
            </div>

            {/* Tabs and Search */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {promptCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActivePromptTab(cat)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${
                      activePromptTab === cat 
                        ? 'bg-white/20 border-white/30 text-white' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative max-w-md w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">🔍</span>
                <input
                  value={promptSearch}
                  onChange={(e) => setPromptSearch(e.target.value)}
                  placeholder="Search prompts..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300/40 text-white placeholder-white/60"
                />
              </div>
            </div>

            {/* Prompt Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrompts.map((p) => (
                <div key={p.id} className="rounded-xl p-5 bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-sky-200/80 mb-1">{p.category}</div>
                      <h4 className="text-lg font-semibold">{p.title}</h4>
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="md" className="h-8 px-3 text-xs">
                            Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <div className="space-y-4">
                            <div>
                              <div className="text-xs uppercase tracking-wider text-sky-200/80 mb-1">{p.category}</div>
                              <h3 className="text-xl font-semibold">{p.title}</h3>
                            </div>
                            <pre className="text-white/90 text-sm whitespace-pre-wrap leading-relaxed bg-black/20 p-4 rounded-lg border border-white/5 max-h-96 overflow-y-auto">
                              {p.text}
                            </pre>
                            <div className="flex justify-end gap-2">
                              <Button 
                                variant="ghost" 
                                size="md"
                                onClick={() => copyPrompt(p.text, p.id)}
                              >
                                {copySuccess === p.id ? '✓ Copied!' : 'Copy Prompt'}
                              </Button>
                              <DialogClose asChild>
                                <Button variant="ghost" size="md">Close</Button>
                              </DialogClose>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="md"
                            className="h-8 px-3 text-xs"
                            onClick={() => copyPrompt(p.text, p.id)}
                          >
                            {copySuccess === p.id ? '✓' : '📋'}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {copySuccess === p.id ? 'Copied!' : 'Copy to clipboard'}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                  <pre className="mt-3 text-white/90 text-sm whitespace-pre-wrap leading-relaxed bg-black/20 p-3 rounded-lg border border-white/5 line-clamp-4 overflow-hidden">
                    {p.text.length > 150 ? p.text.substring(0, 150) + '...' : p.text}
                  </pre>
                </div>
              ))}
            </div>

            {filteredPrompts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/60 text-lg">No prompts found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl p-12 border border-white/10 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-cyan-400/10">
              <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Skills?</h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who've accelerated their careers with our unique learning approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  🚀 Start Free Trial
                </Button>
                <Button variant="ghost" size="lg">
                  📚 View Curriculum
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <span className="text-white font-bold text-lg">CDA</span>
                  </div>
                  <h4 className="text-2xl font-bold">Cyber Dev Academy</h4>
                </div>
                <p className="text-white/80 max-w-md">
                  Transforming developers through gamified, consumable learning experiences. 
                  Master modern web development one module at a time.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-4">Learning</h5>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#modules" className="hover:text-white transition-colors">All Modules</a></li>
                  <li><a href="#features" className="hover:text-white transition-colors">Getting Started</a></li>
                  <li><a href="#prompts" className="hover:text-white transition-colors">Prompt Library</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Certificates</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-4">Support</h5>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
              <p>&copy; 2025 Cyber Dev Academy. All rights reserved. Built with Tailwind v4 + Radix UI ✨</p>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}