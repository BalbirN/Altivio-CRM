import { useState } from 'react';
import { motion, Reorder } from 'motion/react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  DollarSign, 
  Clock, 
  MoreVertical,
  Calendar,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Target
} from 'lucide-react';
import { cn } from '../lib/utils';

const initialPipeline = [
  { id: 'leads', title: 'New Leads', color: 'slate' },
  { id: 'discovery', title: 'Discovery', color: 'blue' },
  { id: 'proposal', title: 'Proposal', color: 'indigo' },
  { id: 'negotiation', title: 'Negotiation', color: 'amber' },
  { id: 'closing', title: 'Closing', color: 'emerald' },
];

const initialDeals = [
  { id: 'd1', title: 'Vercel Enterprise License', company: 'Vercel Inc.', value: 45000, stage: 'leads', owner: 'Alex Rivera', probability: 20, priority: 'high' },
  { id: 'd2', title: 'Workspace Expansion', company: 'Notion Labs', value: 12500, stage: 'discovery', owner: 'Mike Ross', probability: 40, priority: 'medium' },
  { id: 'd3', title: 'Global Platform Integration', company: 'Global Tech', stage: 'discovery', value: 88000, owner: 'Sarah Jenkins', probability: 35, priority: 'high' },
  { id: 'd4', title: 'Q4 Support Plan', company: 'Acme Corp', stage: 'proposal', value: 5000, owner: 'Alex Rivera', probability: 65, priority: 'low' },
  { id: 'd5', title: 'New Sales Stack', company: 'Linear', stage: 'proposal', value: 32000, owner: 'Mike Ross', probability: 60, priority: 'medium' },
  { id: 'd6', title: 'Infrastructure Revamp', company: 'Future Dynamics', stage: 'negotiation', value: 120000, owner: 'Alex Rivera', probability: 85, priority: 'high' },
  { id: 'd7', title: 'CRM Migration', company: 'Revolut', stage: 'closing', value: 75000, owner: 'Sarah Jenkins', probability: 95, priority: 'high' },
];

export default function Deals() {
  const [deals, setDeals] = useState(initialDeals);

  const getStageDeals = (stageId: string) => deals.filter(d => d.stage === stageId);

  const getTotalValue = (stageId: string) => {
    return getStageDeals(stageId).reduce((sum, d) => sum + d.value, 0).toLocaleString();
  };

  return (
    <div className="p-8 space-y-8 h-full flex flex-col max-w-[1800px] mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 flex-shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            Sales Pipeline
            <span className="text-sm font-medium px-2 py-0.5 rounded-lg bg-slate-100 text-slate-500">Main Pipeline</span>
          </h1>
          <p className="text-slate-500 text-sm">Track and manage your revenue opportunities across the funnel.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex -space-x-2 mr-4 hidden md:flex">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                    <img src={`https://picsum.photos/seed/user${i}/80/80`} alt="" referrerPolicy="no-referrer" />
                  </div>
                ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-400 shadow-sm">+5</div>
          </div>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <TrendingUp className="w-4 h-4" />
            Forecast
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-all">
            <Plus className="w-4 h-4" />
            New Deal
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 flex-shrink-0 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 flex-1">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Quick search deals..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/10"
            />
          </div>
          <div className="h-4 w-px bg-slate-200 mx-2" />
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">
            <Filter className="w-4 h-4" />
            Any Amount
          </button>
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">
            <Users className="w-4 h-4" />
            All Owners
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 text-slate-400 hover:text-slate-900 rounded-lg bg-slate-50 font-bold">Board</button>
          <button className="p-2 text-slate-400 hover:text-slate-900 rounded-lg">List</button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex gap-6 h-full min-w-max">
          {initialPipeline.map(stage => {
            const stageDeals = getStageDeals(stage.id);
            return (
              <div key={stage.id} className="w-80 flex flex-col h-full rounded-2xl">
                {/* Column Header */}
                <div className="px-4 py-3 mb-4 flex justify-between items-center flex-shrink-0 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className={cn(
                        "w-2.5 h-2.5 rounded-full",
                        stage.color === 'slate' && "bg-slate-400",
                        stage.color === 'blue' && "bg-blue-500",
                        stage.color === 'indigo' && "bg-indigo-500",
                        stage.color === 'amber' && "bg-amber-500",
                        stage.color === 'emerald' && "bg-emerald-500"
                    )} />
                    <span className="font-bold text-sm text-slate-900">{stage.title}</span>
                    <span className="text-xs font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">{stageDeals.length}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-500">${getTotalValue(stage.id)}</span>
                </div>

                {/* Column Content */}
                <div className="flex-1 space-y-4 overflow-y-auto px-1 pr-2 pb-10 scrollbar-hide">
                  {stageDeals.map((deal, i) => (
                    <motion.div
                      key={deal.id}
                      layoutId={deal.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -4 }}
                      className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-grab active:cursor-grabbing group"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className={cn(
                          "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                          deal.priority === 'high' ? "bg-rose-50 text-rose-600" : 
                          deal.priority === 'medium' ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                        )}>
                          {deal.priority} Priority
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-slate-600 transition-all">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>

                      <h4 className="font-bold text-slate-900 leading-snug mb-1 group-hover:text-primary-600 transition-colors">{deal.title}</h4>
                      <p className="text-xs text-slate-400 font-medium mb-4 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        {deal.company}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                          <DollarSign className="w-4 h-4 text-emerald-500" />
                          {deal.value.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
                          <Target className="w-3 h-3" />
                          {deal.probability}%
                        </div>
                      </div>

                      <div className="h-1 w-full bg-slate-50 rounded-full mb-4 overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full transition-all duration-700",
                            deal.probability >= 70 ? "bg-emerald-500" : 
                            deal.probability >= 40 ? "bg-primary-500" : "bg-slate-300"
                          )} 
                          style={{ width: `${deal.probability}%` }}
                        />
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          12d
                        </div>
                        <div className="w-6 h-6 rounded-full bg-slate-100 border border-white shadow-sm overflow-hidden" title={deal.owner}>
                          <img src={`https://picsum.photos/seed/${deal.owner}/40/40`} alt="" referrerPolicy="no-referrer" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 hover:border-primary-300 hover:text-primary-500 hover:bg-primary-50/30 transition-all text-sm font-bold flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" />
                    Drop Here
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Briefcase(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>
    </svg>
  );
}

function Users(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
