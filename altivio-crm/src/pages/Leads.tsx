import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Mail, 
  Phone, 
  Globe, 
  Calendar,
  Sparkles,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../lib/utils';

const leadsData = [
  { id: 1, name: 'Jonathan Wick', company: 'Continental Tech', email: 'j.wick@continental.com', score: 98, status: 'Qualified', source: 'Direct', value: '$24,000', assigned: 'Alex Rivera' },
  { id: 2, name: 'Sarah Connor', company: 'Cyberdyne Systems', email: 's.connor@cyberdyne.io', score: 85, status: 'Contacted', source: 'Web Form', value: '$12,500', assigned: 'Mike Ross' },
  { id: 3, name: 'Tony Stark', company: 'Stark Industries', email: 'tony@stark.com', score: 92, status: 'New', source: 'Referral', value: '$150,000', assigned: 'Alex Rivera' },
  { id: 4, name: 'Bruce Wayne', company: 'Wayne Enterprise', email: 'bruce@wayne.com', score: 74, status: 'Nurturing', source: 'LinkedIn', value: '$45,000', assigned: 'Sarah Jenkins' },
  { id: 5, name: 'Diana Prince', company: 'Themyscira Ltd', email: 'diana@themys.org', score: 89, status: 'Qualified', source: 'Webinar', value: '$32,000', assigned: 'Mike Ross' },
  { id: 6, name: 'Peter Parker', company: 'Daily Bugle', email: 'peter@bugle.com', score: 42, status: 'Lost', source: 'Direct', value: '$5,000', assigned: 'Sarah Jenkins' },
  { id: 7, name: 'Wanda Maximoff', company: 'Hex Tech', email: 'wanda@hex.tech', score: 95, status: 'New', source: 'Referral', value: '$88,000', assigned: 'Alex Rivera' },
];

export default function Leads() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);

  const filteredLeads = leadsData.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleLead = (id: number) => {
    setSelectedLeads(prev => 
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Leads Management</h1>
          <p className="text-slate-500">View, search, and manage your incoming sales opportunities.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            Import CSV
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-all">
            <Plus className="w-4 h-4" />
            Add Lead
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, company, or email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/10 focus:border-primary-500"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50">
            <Sparkles className="w-4 h-4" />
            AI Sort
          </button>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 w-10 text-center">
                  <input 
                    type="checkbox" 
                    className="rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                    onChange={(e) => {
                      if (e.target.checked) setSelectedLeads(filteredLeads.map(l => l.id));
                      else setSelectedLeads([]);
                    }}
                  />
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Lead Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Company</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">AI Score</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Lead Value</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Assigned To</th>
                <th className="px-6 py-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLeads.map((lead, i) => (
                <motion.tr 
                  key={lead.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    "hover:bg-slate-50/50 transition-colors group cursor-pointer",
                    selectedLeads.includes(lead.id) && "bg-primary-50/30"
                  )}
                >
                  <td className="px-6 py-5 text-center">
                    <input 
                      type="checkbox" 
                      checked={selectedLeads.includes(lead.id)}
                      onChange={() => toggleLead(lead.id)}
                      className="rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 leading-tight">{lead.name}</p>
                        <p className="text-xs text-slate-400 font-medium">{lead.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold text-slate-700">{lead.company}</p>
                    <p className="text-xs text-slate-400">{lead.source}</p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "font-mono font-bold text-sm px-2 py-0.5 rounded-lg mb-1",
                        lead.score >= 90 ? "bg-emerald-50 text-emerald-600" : 
                        lead.score >= 70 ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-500"
                      )}>
                        {lead.score}
                      </div>
                      <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full transition-all duration-1000",
                            lead.score >= 90 ? "bg-emerald-500" : 
                            lead.score >= 70 ? "bg-amber-500" : "bg-slate-400"
                          )}
                          style={{ width: `${lead.score}%` }} 
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      lead.status === 'Qualified' && "bg-emerald-50 text-emerald-600 border border-emerald-200",
                      lead.status === 'New' && "bg-blue-50 text-blue-600 border border-blue-200",
                      lead.status === 'Contacted' && "bg-indigo-50 text-indigo-600 border border-indigo-200",
                      lead.status === 'Nurturing' && "bg-amber-50 text-amber-600 border border-amber-200",
                      lead.status === 'Lost' && "bg-slate-100 text-slate-500 border border-slate-200",
                    )}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-slate-900">{lead.value}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Estimated</p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
                          <img src={`https://picsum.photos/seed/${lead.assigned}/40/40`} alt="" referrerPolicy="no-referrer" />
                       </div>
                       <span className="text-sm font-medium text-slate-600">{lead.assigned}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-medium">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
           <p>Showing 7 of 128 leads</p>
           <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-white border border-slate-200 rounded-lg disabled:opacity-50">Prev</button>
              <button className="px-3 py-1 bg-white border border-slate-200 rounded-lg disabled:opacity-50">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
}
