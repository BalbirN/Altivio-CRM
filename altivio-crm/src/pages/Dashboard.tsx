import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  MoreHorizontal,
  Calendar,
  Clock,
  ChevronRight,
  CheckSquare,
  Briefcase
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';

const revenueData = [
  { name: 'Jan', revenue: 45000 },
  { name: 'Feb', revenue: 52000 },
  { name: 'Mar', revenue: 48000 },
  { name: 'Apr', revenue: 61000 },
  { name: 'May', revenue: 55000 },
  { name: 'Jun', revenue: 67000 },
  { name: 'Jul', revenue: 72000 },
];

const pipelineData = [
  { stage: 'Leads', count: 120, fill: '#CBD5E1' },
  { stage: 'Discovery', count: 85, fill: '#94A3B8' },
  { stage: 'Proposal', count: 42, fill: '#3B82F6' },
  { stage: 'Negotiation', count: 18, fill: '#2563EB' },
  { stage: 'Closing', count: 12, fill: '#1E40AF' },
];

const recentActivities = [
  { id: 1, user: 'Sarah Jenkins', action: 'converted lead', target: 'Project X Solutions', time: '10 min ago' },
  { id: 2, user: 'Mike Ross', action: 'moved deal', target: 'Acme Corp', stage: 'Negotiation', time: '25 min ago' },
  { id: 3, user: 'Alex Rivera', action: 'scheduled meeting', target: 'Global Tech', time: '1 hour ago' },
  { id: 4, user: 'System AI', action: 'scored lead', target: 'Future Dynamics', score: '98', time: '2 hours ago' },
];

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome back, Alex</h1>
          <p className="text-slate-500">Here's what's happening with your sales pipeline today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 shadow-sm">
            <Calendar className="w-4 h-4" />
            Oct 12 - Oct 18, 2026
          </div>
          <button className="bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-all">
            Download Report
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Leads', value: '2,842', icon: Target, trend: '↑ 12.5% this month', trendType: 'up' },
          { label: 'Open Deals', value: '158', icon: Briefcase, trend: '↑ 4.2% this month', trendType: 'up' },
          { label: 'Revenue Forecast', value: '$1.2M', icon: DollarSign, trend: '↑ 18.1% vs target', trendType: 'up' },
          { label: 'Win Rate', value: '24.8%', icon: TrendingUp, trend: 'Stable', trendType: 'stable' },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="polish-card p-5"
          >
            <p className="stat-label">{m.label}</p>
            <h3 className="stat-value">{m.value}</h3>
            <div className={cn(
              "text-[12px] mt-1 flex items-center gap-1 font-medium",
              m.trendType === 'up' ? "text-polish-success" : "text-polish-text-sub"
            )}>
              {m.trend}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Funnel Chart - Spans 3 columns */}
        <div className="lg:col-span-3 polish-card p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-[16px] font-bold text-primary-dark">Sales Funnel Analysis</h3>
              <p className="text-[12px] text-polish-text-sub">Conversion velocity across current quarter</p>
            </div>
            <div className="text-[12px] border border-polish-border py-1 px-3 rounded text-polish-text-sub font-medium">Last 90 Days</div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            {[
              { label: 'Discovery', sub: '420 leads', width: '100%', bg: 'bg-[#DEE3EB]' },
              { label: 'Qualification', sub: '280 leads', width: '80%', bg: 'bg-[#CAD3E0]' },
              { label: 'Proposal', sub: '112 leads', width: '60%', bg: 'bg-[#B3BFD4]' },
              { label: 'Negotiation', sub: '48 deals', width: '40%', bg: 'bg-accent-indigo text-white' },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ width: 0 }}
                animate={{ width: step.width }}
                transition={{ duration: 1, delay: i * 0.15 }}
                className={cn(
                  "h-8 rounded flex items-center px-4 text-[12px] font-semibold",
                  step.bg
                )}
              >
                {step.label} ({step.sub})
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Priority Insights */}
        <div className="lg:col-span-1 bg-primary-dark rounded-lg p-6 text-white ai-glow group">
           <div className="inline-block px-2 py-1 bg-ai-gradient rounded text-[10px] font-bold uppercase tracking-widest mb-4">Altivio AI</div>
           <h4 className="text-[16px] font-bold mb-4">Priority Insights</h4>
           <div className="space-y-4">
              {[
                "Skyline Corp has 85% close probability. Recommend sending final contract today.",
                "3 leads from LinkedIn are showing high intent signals. Auto-assigned to Sarah.",
                "AI detected a risk in Acme Inc deal. Sentiment in last email was hesitant."
              ].map((insight, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-md border-l-4 border-accent-indigo">
                  <p className="text-[13px] leading-relaxed opacity-90">{insight}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Tasks Due Today - Spans 2 columns */}
        <div className="lg:col-span-2 polish-card p-6">
           <h4 className="text-[14px] font-bold text-primary-dark mb-4">Tasks Due Today</h4>
           <div className="divide-y divide-slate-50">
              {[
                { title: 'Follow up with Global Tech', meta: 'Due at 2:00 PM • High Priority' },
                { title: 'Review Q3 Sales Deck', meta: 'Due at 4:30 PM • Marketing Collaboration' },
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-3 py-3">
                  <div className="w-[18px] h-[18px] border-2 border-polish-border rounded" />
                  <div>
                    <div className="text-[14px] font-medium text-polish-text-main">{task.title}</div>
                    <div className="text-[12px] text-polish-text-sub">{task.meta}</div>
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Leaderboard */}
        <div className="lg:col-span-2 polish-card p-6">
           <h4 className="text-[14px] font-bold text-primary-dark mb-4">Leaderboard</h4>
           <div className="space-y-4">
              {[
                { name: 'Sarah K.', initials: 'SK', value: '$420k' },
                { name: 'Marcus J.', initials: 'MJ', value: '$385k' },
                { name: 'Anna L.', initials: 'AL', value: '$310k' },
              ].map((user, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-polish-border flex items-center justify-center text-[10px] font-bold text-primary-dark">{user.initials}</div>
                  <div className="flex-1 text-[13px] font-medium text-polish-text-main">{user.name}</div>
                  <div className="text-[13px] font-bold text-primary-dark">{user.value}</div>
                </div>
              ))}
           </div>
        </div>
      </div>

    </div>
  );
}
