import { useState } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Target, 
  CheckSquare, 
  BarChart2, 
  MessageSquare, 
  Settings, 
  Bell, 
  Search,
  Menu,
  X,
  LogOut,
  ChevronLeft,
  Briefcase,
  Layers,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import AISalesAssistant from './AISalesAssistant';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Target, label: 'Leads', path: '/leads' },
  { icon: Briefcase, label: 'Deals', path: '/deals' },
  { icon: Users, label: 'Contacts', path: '/contacts' },
  { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
  { icon: MessageSquare, label: 'Communication', path: '/messages' },
  { icon: BarChart2, label: 'Reports', path: '/reports' },
  { icon: Layers, label: 'Automation', path: '/automation' },
];

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-screen bg-polish-bg overflow-hidden font-sans">
      {/* Sidebar - Professional Polish Style */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 240 : 80 }}
        className="relative bg-primary-dark text-white z-30 hidden md:flex flex-col flex-shrink-0 transition-all duration-300 ease-in-out shadow-xl"
      >
        <div className="p-6 flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg cursor-pointer flex items-center justify-center w-8 h-8" onClick={() => navigate('/')}>
            <span className="text-primary-dark font-extrabold text-lg">A</span>
          </div>
          {isSidebarOpen && (
            <span className="font-bold text-lg text-white tracking-tight cursor-pointer" onClick={() => navigate('/')}>Altivio CRM</span>
          )}
        </div>

        <nav className="flex-1 py-4 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-6 py-2.5 transition-all group",
                  isActive 
                    ? "bg-white/10 text-white border-l-4 border-accent-indigo" 
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 flex-shrink-0 transition-colors",
                  isActive ? "text-white" : "text-white/50 group-hover:text-white"
                )} />
                {isSidebarOpen && <span className="text-[14px]">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="py-4 space-y-1 border-t border-white/10">
          <Link
            to="/settings"
            className={cn(
              "flex items-center gap-3 px-6 py-2.5 transition-all text-white/70 hover:bg-white/5 hover:text-white",
              location.pathname === '/settings' && "bg-white/10 text-white"
            )}
          >
            <Settings className="w-5 h-5" />
            {isSidebarOpen && <span className="text-[14px]">Settings</span>}
          </Link>
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-6 py-2.5 transition-all text-white/70 hover:bg-rose-500/10 hover:text-rose-400"
          >
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span className="text-[14px]">Sign Out</span>}
          </button>
        </div>

        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-20 bg-white border border-polish-border rounded-full p-1 hover:shadow-lg transition-all z-10"
        >
          <ChevronLeft className={cn("w-4 h-4 text-primary-dark transition-transform", !isSidebarOpen && "rotate-180")} />
        </button>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header - Professional Polish Style */}
        <header className="bg-white border-b border-polish-border h-16 flex items-center justify-between px-8 z-20 flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-polish-text-sub" />
              <input 
                type="text" 
                placeholder="Search everywhere (CMD + K)..." 
                className="w-full pl-10 pr-4 py-2 bg-[#F7FAFC] border border-polish-border rounded-md text-sm text-polish-text-main focus:outline-none focus:ring-2 focus:ring-accent-indigo/20 focus:border-accent-indigo transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:block text-sm font-medium text-polish-text-sub">North America Workspace</div>
            <button className="relative p-2 text-polish-text-sub hover:text-primary-dark transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-polish-success rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-accent-indigo text-white flex items-center justify-center text-[10px] font-bold shadow-sm overflow-hidden group-hover:ring-2 group-hover:ring-accent-indigo/20 transition-all">
                AR
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      
      {/* AI Assistant FAB - Professional Polish AI Glow */}
      <button 
        onClick={() => setIsAIOpen(!isAIOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary-dark text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group border border-white/10 ai-glow overflow-hidden"
      >
        <Sparkles className="w-6 h-6 z-10" />
        <span className="absolute right-full mr-4 bg-primary-dark text-white text-[11px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">AI Assistant</span>
      </button>

      <AISalesAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
    </div>
  );
}

