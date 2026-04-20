import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Github, 
  Mail, 
  Lock, 
  ArrowRight, 
  LayoutDashboard, 
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function AuthPage({ type }: { type: 'login' | 'signup' }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 font-sans bg-white overflow-hidden">
      {/* Left Pane - Form */}
      <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative">
        <div className="absolute top-8 left-8 lg:left-24">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Altivio CRM</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-md w-full mx-auto"
        >
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              {type === 'login' ? 'Welcome Back' : 'Get Started with Altivio'}
            </h1>
            <p className="text-slate-500">
              {type === 'login' 
                ? 'Enter your credentials to access your sales workspace.' 
                : 'Join 5,000+ teams scaling their business with intelligent CRM.'}
            </p>
          </header>

          <div className="space-y-4 mb-8">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
              {type === 'login' ? 'Continue with Google' : 'Sign up with Google'}
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-slate-900 border border-slate-900 rounded-xl font-semibold text-white hover:bg-slate-800 transition-all shadow-sm">
              <Github className="w-5 h-5" />
              {type === 'login' ? 'Continue with GitHub' : 'Sign up with GitHub'}
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
              <span className="px-4 bg-white text-slate-400">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@acme.com"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5 ml-1">
                <label className="block text-sm font-bold text-slate-700">Password</label>
                {type === 'login' && (
                  <a href="#" className="text-xs font-semibold text-primary-600 hover:underline">Forgot?</a>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-primary-500/20 disabled:opacity-50 disabled:pointer-events-none"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {type === 'login' ? 'Enter Dashboard' : 'Create Free Account'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <footer className="mt-10 text-center text-sm text-slate-500 font-medium">
            {type === 'login' ? (
              <>Don't have an account? <Link to="/signup" className="text-primary-600 font-bold hover:underline">Sign up for free</Link></>
            ) : (
              <>Already have an account? <Link to="/login" className="text-primary-600 font-bold hover:underline">Log in</Link></>
            )}
          </footer>
        </motion.div>
      </div>

      {/* Right Pane - Feature Showcase */}
      <div className="hidden lg:flex bg-slate-900 relative p-16 flex-col justify-end overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-600/30 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" /> Latest Release v4.2
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold text-white mb-8 leading-tight">
              Predict your revenue with <span className="text-primary-400 italic">98% accuracy</span>.
            </h2>
            
            <div className="space-y-6">
              {[
                { title: 'AI-Powered Lead Scoring', desc: 'Stop wasting time on low-quality leads and focus on conversion.' },
                { title: 'Automated Workflows', desc: 'Let Altivio handle follow-ups, emails, and repetitive admin work.' },
                { title: 'Bank-Level Security', desc: 'Secure your customer data with SSAE 16 / ISAE 3402 SOC 2 compliance.' }
              ].map((f, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-200 mb-1">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating UI Elements for decoration */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-96 right-0 w-64 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl rotate-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary-500" />
              <div className="flex-1 space-y-1.5">
                <div className="h-2 w-20 bg-white/20 rounded" />
                <div className="h-1.5 w-12 bg-white/10 rounded" />
              </div>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded mb-1.5" />
            <div className="h-1.5 w-3/4 bg-white/5 rounded" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
