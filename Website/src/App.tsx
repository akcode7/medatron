import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MessageSquare,
  ShieldCheck,
  Zap,
  Clock,
  Users,
  Calendar,
  ClipboardList,
  HeartPulse,
  ChevronRight,
  Globe,
  Database,
  Lock,
  ArrowRight,
  Stethoscope,
  Activity
} from 'lucide-react';

const RippleWaves: React.FC = () => {
  const [ripples, setRipples] = useState<{ id: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples((prev) => [...prev, { id: Date.now() }].slice(-5));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute w-64 h-64 border-2 border-neon-cyan/40 rounded-full animate-[ripple_4s_ease-out_forwards]"
          style={{ transformOrigin: 'center' }}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-neon-cyan/30">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center neon-shadow-cyan group-hover:scale-110 transition-transform">
              <Activity className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter gradient-text">MEDATRON</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
            <a href="#assistant" className="hover:text-neon-cyan transition-colors">Clinical Assistant</a>
            <a href="#engage" className="hover:text-neon-teal transition-colors">Engage</a>
            <a href="#security" className="hover:text-neon-purple transition-colors">Security</a>
            <button className="px-5 py-2 rounded-full border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 transition-all">
              Book Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Ripple Waves Background */}
        <RippleWaves />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-neon-cyan/10 to-transparent blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border-neon-cyan/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                <span className="text-xs font-semibold text-neon-cyan tracking-wider uppercase">Self-Hosted AI for Healthcare</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                The <span className="gradient-text">AI Pulse</span> of Your Hospital.
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                Medatron integrates your hospital's internal data into a secure, unified AI chat interface. Rosters, formularies, and protocols—all at your fingertips.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-neon-cyan text-brand-bg font-bold rounded-xl hover:scale-105 transition-transform flex items-center space-x-2 neon-shadow-cyan">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 glass text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all">
                  Watch Video
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 glass rounded-2xl p-6 border-neon-cyan/30 neon-shadow-cyan animate-float">
                <div className="p-4 bg-brand-bg/80 rounded-xl border border-white/5 space-y-4">
                  <div className="flex items-center space-x-3 text-neon-cyan">
                    <Search className="w-5 h-5" />
                    <span className="text-sm font-mono">search.internal.data</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="space-y-3">
                    <div className="p-3 glass rounded-lg text-sm text-gray-300">
                      "Who is on call for Cardiology today?"
                    </div>
                    <div className="p-3 bg-neon-cyan/5 rounded-lg border border-neon-cyan/20 text-sm">
                      <div className="flex items-center space-x-2 text-neon-cyan mb-1">
                        <Activity className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase">Medatron Assistant</span>
                      </div>
                      Dr. Sarah Jenkins is on Cardiology call (Shift: 18:00 - 08:00). Contact Ext: 412.
                    </div>
                    <div className="p-3 glass rounded-lg text-sm text-gray-300">
                      "What is the protocol for Pediatric Sepsis?"
                    </div>
                    <div className="p-3 bg-neon-cyan/5 rounded-lg border border-neon-cyan/20 text-sm">
                      <div className="flex items-center space-x-2 text-neon-cyan mb-1">
                        <ClipboardList className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase">Clinical Protocol</span>
                      </div>
                      Retrieved from "Pediatrics-2025-V2.pdf". Initial fluid bolus: 20mL/kg isotonic crystalloid...
                    </div>
                  </div>
                </div>
              </div>
              {/* Background Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-cyan/20 blur-3xl rounded-full" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/20 blur-2xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Medatron Engage Section */}
      <section id="engage" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Medatron <span className="text-neon-teal">Engage</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Automate patient queries via WhatsApp, Messenger, and more. Five specialized agents working 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Calendar, title: "Scheduling", desc: "Automated appointment booking" },
              { icon: MessageSquare, title: "FAQ Agent", desc: "Instant answers to common queries" },
              { icon: HeartPulse, title: "Personal Care", desc: "Follow-ups and recovery checks" },
              { icon: Users, title: "Feedback", desc: "Collect patient experience data" },
              { icon: ClipboardList, title: "Registration", desc: "Fast onboarding for new patients" },
            ].map((agent, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-2xl border-white/5 hover:border-neon-teal/30 group transition-all"
              >
                <div className="w-12 h-12 bg-neon-teal/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <agent.icon className="text-neon-teal w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">{agent.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{agent.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center space-x-12 opacity-50">
            <Globe className="w-8 h-8" />
            <MessageSquare className="w-8 h-8" />
            <Zap className="w-8 h-8" />
          </div>
        </div>
      </section>

      {/* WhatsApp Scheduling Section */}
      <section id="whatsapp" className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-bg to-green-950/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <MessageSquare className="text-green-400 w-4 h-4" />
                <span className="text-xs font-semibold text-green-400 tracking-wider uppercase">Native WhatsApp Integration</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Smart <span className="text-green-400">Automated Scheduling</span> on WhatsApp.
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                Connect with patients on the platform they use daily. Our AI agents handle appointments, send reminders, and answer queries 24/7 without staff intervention.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <Calendar className="text-green-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Instant Appointment Booking</h4>
                    <p className="text-sm text-gray-500">Natural language booking directly in the chat.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <Clock className="text-green-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Automated Reminders</h4>
                    <p className="text-sm text-gray-500">Reduce no-shows by 40% with smart, timely notifications.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              {/* Mobile Phone Mockup */}
              <div className="relative w-[300px] h-[600px] rounded-[3rem] border-8 border-gray-900 bg-gray-900 shadow-2xl overflow-hidden ring-4 ring-green-500/20">
                <div className="absolute top-0 w-full h-16 bg-[#202c33]/90 backdrop-blur-md z-20 flex items-center px-6 pt-4 space-x-3 border-b border-white/5">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Activity className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-tighter">Medatron-Care</div>
                    <div className="text-[10px] text-green-400 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span>Always Active</span>
                    </div>
                  </div>
                </div>

                <div className="h-full bg-[#0b141a] pt-20 px-4 space-y-4 overflow-y-auto">
                  <div className="max-w-[80%] bg-[#202c33] p-3 rounded-lg rounded-tl-none text-xs text-white">
                    Hello! I'm your Medatron Assistant. How can I help you today?
                  </div>
                  <div className="max-w-[80%] bg-[#005c4b] p-3 rounded-lg rounded-tr-none text-xs text-white ml-auto">
                    I'd like to book an appointment for tomorrow afternoon.
                  </div>
                  <div className="max-w-[80%] bg-[#202c33] p-3 rounded-lg rounded-tl-none text-xs text-white">
                    <p className="mb-2">Sure! We have slots with Dr. Jenkins at:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 border border-white/10 rounded bg-white/5 text-[10px] text-center">02:30 PM</div>
                      <div className="p-2 border border-white/10 rounded bg-white/5 text-[10px] text-center">04:00 PM</div>
                    </div>
                  </div>
                  <div className="max-w-[80%] bg-[#005c4b] p-3 rounded-lg rounded-tr-none text-xs text-white ml-auto">
                    04:00 PM please.
                  </div>
                  <div className="max-w-[80%] bg-[#202c33] p-3 rounded-lg rounded-tl-none text-xs text-white">
                    <div className="flex items-center space-x-2 text-green-400 mb-1">
                      <Zap className="w-3 h-3" />
                      <span className="font-bold text-[10px]">CONFIRMED</span>
                    </div>
                    Appointment scheduled for tomorrow at 04:00 PM. I'll send you a reminder shortly!
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 h-10 bg-[#2a3942] rounded-full flex items-center px-4 border border-white/5">
                  <div className="text-[10px] text-gray-400 italic">Medatron AI is typing...</div>
                </div>
              </div>

              {/* Glowing WhatsApp floating indicator */}
              <div className="absolute -top-6 -right-6 w-20 h-20 glass rounded-2xl flex items-center justify-center animate-bounce duration-3000 border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <svg className="w-10 h-10 text-green-500 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admin Dashboard Section */}
      <section id="admin" className="py-24 relative overflow-hidden glass border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl neon-shadow-purple">
                <img
                  src="/C:/Users/Ankit%20Sharma/.gemini/antigravity/brain/c8ce2100-22b5-4da3-9ebf-ffc8d3bfc703/medatron_admin_dashboard_workflows_1767547518239.png"
                  alt="Admin Workflow Dashboard"
                  className="w-full h-auto brightness-90 hover:brightness-100 transition-all duration-500"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-purple/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-cyan/20 blur-3xl rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 mb-6">
                <Lock className="text-neon-purple w-4 h-4" />
                <span className="text-xs font-semibold text-neon-purple tracking-wider uppercase">Administrative Command Center</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Build & Scale Your <span className="text-neon-purple">Smart Workflows</span>.
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                Take full control of your hospital’s AI operations. Our intuitive dashboard allows admins to create, manage, and optimize patient journeys.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-neon-purple/10 flex items-center justify-center mb-3">
                    <Database className="text-neon-purple w-4 h-4" />
                  </div>
                  <h4 className="font-bold mb-1">Workflow Builder</h4>
                  <p className="text-xs text-gray-500">Visual editor for WhatsApp appointment lifecycles.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center mb-3">
                    <Zap className="text-neon-cyan w-4 h-4" />
                  </div>
                  <h4 className="font-bold mb-1">Smart Reminders</h4>
                  <p className="text-xs text-gray-500">Automate multi-channel notification logic.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security & Tech Section */}
      <section id="security" className="py-24 glass border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-2xl blur opacity-25" />
                <div className="relative bg-brand-bg p-8 rounded-2xl border border-white/10">
                  <div className="flex items-center space-x-4 mb-8">
                    <ShieldCheck className="w-10 h-10 text-neon-purple" />
                    <div>
                      <h4 className="font-bold text-xl">The Fortress Architecture</h4>
                      <p className="text-sm text-gray-500">Self-Hosted Safety</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center space-x-3">
                        <Database className="w-5 h-5 text-neon-cyan" />
                        <span className="text-sm">RAG Data Engine</span>
                      </div>
                      <span className="text-[10px] text-neon-cyan font-bold py-1 px-2 border border-neon-cyan/30 rounded uppercase tracking-widest">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center space-x-3">
                        <Lock className="w-5 h-5 text-neon-purple" />
                        <span className="text-sm">Self-Hosted LLM</span>
                      </div>
                      <span className="text-[10px] text-neon-purple font-bold py-1 px-2 border border-neon-purple/30 rounded uppercase tracking-widest">Secure</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-neon-teal" />
                        <span className="text-sm">No Third-Party APIs</span>
                      </div>
                      <span className="text-[10px] text-neon-teal font-bold py-1 px-2 border border-neon-teal/30 rounded uppercase tracking-widest">Isolated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Built for <span className="text-neon-purple">Zero-Risk</span> AI.</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Patient data never leaves your hospital perimeter. We use fine-tuned, open-source models (Llama 3, Mistral) hosted on your infrastructure.
              </p>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                  <span>Compliant with health data privacy regulations (HIPAA/GDPR)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                  <span>Integrated with hospital's internal LDAP/Authentication</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                  <span>Onboarding and deployment completed within weeks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 glass rounded-3xl border-white/5">
            <Clock className="w-10 h-10 text-neon-cyan mb-6" />
            <h3 className="text-2xl font-bold mb-4">24/7 Availability</h3>
            <p className="text-gray-400">Never miss a patient query or a staff request, regardless of the time.</p>
          </div>
          <div className="p-8 glass rounded-3xl border-white/5">
            <Zap className="w-10 h-10 text-neon-teal mb-6" />
            <h3 className="text-2xl font-bold mb-4">Reduced Burden</h3>
            <p className="text-gray-400">Automate routine administrative tasks so your staff can focus on care.</p>
          </div>
          <div className="p-8 glass rounded-3xl border-white/5">
            <Stethoscope className="w-10 h-10 text-neon-purple mb-6" />
            <h3 className="text-2xl font-bold mb-4">Fast Setup</h3>
            <p className="text-gray-400">Get your hospital fully integrated and AI-powered in just a few weeks.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-60 text-sm">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-md" />
            <span className="font-bold tracking-tighter">MEDATRON</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="mt-4 md:mt-0">© 2026 Medatron AI. Empowering Modern Healthcare.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
