import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  Zap, 
  Bot, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  LayoutDashboard,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-100 selection:text-primary-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Altivio <span className="text-primary-600">CRM</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Features</a>
              <a href="#solutions" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Solutions</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Pricing</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/login')}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors px-4 py-2"
              >
                Log in
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 transition-all px-5 py-2.5 rounded-full shadow-lg shadow-primary-500/20"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold mb-6 uppercase tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5" />
                AI-Powered Sales Automation
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-[1.1]"
              >
                Elevate Every <span className="text-primary-600">Relationship</span> with Intelligence.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Altivio CRM combines traditional sales power with cutting-edge AI to help startups and enterprises close more deals, faster.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button 
                  onClick={() => navigate('/signup')}
                  className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-primary-700 hover:scale-105 transition-all shadow-xl shadow-primary-500/25"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-sm"
                >
                  Book a Demo
                </button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-20 pt-10 border-t border-slate-100"
              >
                <p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by fast-growing teams</p>
                <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50">
                  <div className="text-2xl font-bold text-slate-900 tracking-tighter italic">Stripe</div>
                  <div className="text-2xl font-bold text-slate-900 tracking-tighter italic">Notion</div>
                  <div className="text-2xl font-bold text-slate-900 tracking-tighter italic">Vercel</div>
                  <div className="text-2xl font-bold text-slate-900 tracking-tighter italic">Linear</div>
                  <div className="text-2xl font-bold text-slate-900 tracking-tighter italic">Revolut</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Abstract background elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-100/50 rounded-full blur-[120px] -z-10" />
        </section>

        {/* Feature Grid */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary-600 uppercase tracking-[0.2em] mb-4">Core Capabilities</h2>
              <p className="text-4xl font-bold text-slate-900">Built for Modern Sales Teams</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI Lead Scoring',
                  desc: 'Predict which leads are most likely to convert using our proprietary AI algorithms.',
                  icon: Bot,
                  color: 'primary'
                },
                {
                  title: 'Visual Pipeline',
                  desc: 'Manage your entire sales cycle with a clean, drag-and-drop Kanban board.',
                  icon: Zap,
                  color: 'amber'
                },
                {
                  title: 'Smart Analytics',
                  desc: 'Deep dives into rep performance, conversion rates, and revenue forecasting.',
                  icon: BarChart3,
                  color: 'blue'
                },
                {
                  title: 'Automation Engine',
                  desc: 'Create powerful workflows that handle follow-ups, emails, and CRM updates.',
                  icon: Sparkles,
                  color: 'indigo'
                },
                {
                  title: 'Unified Inbox',
                  desc: 'Every email, meeting, and call synced and organized in one single view.',
                  icon: Users,
                  color: 'emerald'
                },
                {
                  title: 'Enterprise Security',
                  desc: 'Role-based access, 2FA, and full audit logs for high-compliance teams.',
                  icon: ShieldCheck,
                  color: 'rose'
                }
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                    f.color === 'primary' && "bg-primary-100 text-primary-600",
                    f.color === 'amber' && "bg-amber-100 text-amber-600",
                    f.color === 'blue' && "bg-blue-100 text-blue-600",
                    f.color === 'indigo' && "bg-indigo-100 text-indigo-600",
                    f.color === 'emerald' && "bg-emerald-100 text-emerald-600",
                    f.color === 'rose' && "bg-rose-100 text-rose-600"
                  )}>
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-primary-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to scale your revenue?</h2>
              <p className="text-primary-100 text-xl mb-10 max-w-2xl mx-auto font-light">
                Join 5,000+ teams who have already leveled up their customer relationships with Altivio.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => navigate('/signup')}
                  className="w-full sm:w-auto px-10 py-5 bg-white text-primary-900 rounded-full font-bold text-lg hover:bg-primary-50 transition-all shadow-xl"
                >
                  Start Your 14-Day Free Trial
                </button>
                <div className="flex items-center gap-4 text-primary-200">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-primary-800 bg-primary-700 flex items-center justify-center overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium">Join 50k+ users</p>
                </div>
              </div>
            </div>
          </div>
          {/* Background circles */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-600/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-400/20 rounded-full blur-[80px]" />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">Altivio <span className="text-primary-600">CRM</span></span>
              </div>
              <p className="text-slate-500 max-w-xs leading-relaxed">
                Elevate every customer relationship with AI-powered insights and seamless automation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Product</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary-600">Features</a></li>
                <li><a href="#" className="hover:text-primary-600">Integrations</a></li>
                <li><a href="#" className="hover:text-primary-600">AI Assistant</a></li>
                <li><a href="#" className="hover:text-primary-600">Mobile Apps</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Pricing</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary-600">Startups</a></li>
                <li><a href="#" className="hover:text-primary-600">Enterprise</a></li>
                <li><a href="#" className="hover:text-primary-600">Agencies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Resources</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary-600">Blog</a></li>
                <li><a href="#" className="hover:text-primary-600">University</a></li>
                <li><a href="#" className="hover:text-primary-600">API Docs</a></li>
                <li><a href="#" className="hover:text-primary-600">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li><a href="#" className="hover:text-primary-600">About</a></li>
                <li><a href="#" className="hover:text-primary-600">Careers</a></li>
                <li><a href="#" className="hover:text-primary-600">Privacy</a></li>
                <li><a href="#" className="hover:text-primary-600">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2026 Altivio Inc. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-slate-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-slate-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-slate-600 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
