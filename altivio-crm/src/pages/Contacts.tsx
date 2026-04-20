import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  UserPlus, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  MoreVertical,
  Building,
  Tag,
  Clock,
  MessageSquare,
  Plus
} from 'lucide-react';
import { cn } from '../lib/utils';

const contactsData = [
  { id: 1, name: 'Alice Freeman', role: 'CTO', company: 'Continental Tech', email: 'alice@continental.com', phone: '+1 (555) 123-4567', location: 'London, UK', tags: ['Enterprise', 'Decision Maker'], lastContact: '2 days ago' },
  { id: 2, name: 'Bob Ross', role: 'Head of Growth', company: 'Happy Trees Inc', email: 'bob@happytrees.io', phone: '+1 (555) 987-6543', location: 'San Francisco, CA', tags: ['SME', 'Painter'], lastContact: '5 hours ago' },
  { id: 3, name: 'Charlie Dean', role: 'Sales Lead', company: 'Winchester Sales', email: 'charlie@winchester.com', phone: '+1 (555) 444-3333', location: 'Lawrence, KS', tags: ['Agency'], lastContact: '1 week ago' },
  { id: 4, name: 'David Goggins', role: 'CEO', company: 'Stay Hard Fitness', email: 'goggins@fitness.com', phone: '+1 (555) 000-1111', location: 'Austin, TX', tags: ['Influencer', 'VIP'], lastContact: '4 days ago' },
  { id: 5, name: 'Eve Montgomery', role: 'Marketing Director', company: 'Skyline Media', email: 'eve@skyline.media', phone: '+1 (555) 777-8888', location: 'New York, NY', tags: ['Enterprise'], lastContact: '3 hours ago' },
  { id: 6, name: 'Frank Castle', role: 'Security Agent', company: 'Punisher Corp', email: 'frank@punisher.com', phone: '+1 (555) 666-6666', location: 'Queens, NY', tags: ['Government'], lastContact: '1 month ago' },
];

export default function Contacts() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contactsData.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Contacts</h1>
          <p className="text-slate-500">Manage your network of decision-makers and key stakeholders.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-all">
          <UserPlus className="w-4 h-4" />
          Add Contact
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Contacts', value: '2,482', change: '+12% this month', icon: Users },
          { label: 'Key Stakeholders', value: '184', change: '+4 newly added', icon: Tag },
          { label: 'Recently Contacted', value: '42', change: '8 in the last 24h', icon: Clock },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 leading-none">{stat.value}</h3>
              <p className="text-xs text-emerald-600 font-medium mt-1">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search and List */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, role, email, or company..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {filteredContacts.map((contact, i) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-slate-400 text-xl overflow-hidden shadow-inner">
                  <img src={`https://picsum.photos/seed/${contact.name}/120/120`} alt="" referrerPolicy="no-referrer" />
                </div>
                <div className="flex gap-1.5">
                   <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                      <MessageSquare className="w-4 h-4" />
                   </button>
                   <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                      <MoreVertical className="w-4 h-4" />
                   </button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{contact.name}</h3>
                <p className="text-sm font-semibold text-slate-500">{contact.role} @ {contact.company}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                   <Mail className="w-4 h-4 text-slate-400" />
                   {contact.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                   <Phone className="w-4 h-4 text-slate-400" />
                   {contact.phone}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                   <MapPin className="w-4 h-4 text-slate-400" />
                   {contact.location}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {contact.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded-lg bg-primary-50 text-primary-600 text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Last touch: {contact.lastContact}
                </span>
                <button className="text-primary-600 flex items-center gap-1 hover:underline">
                  Full Profile
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
          
          <button className="border-2 border-dashed border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 text-slate-400 hover:border-primary-300 hover:text-primary-500 hover:bg-primary-50/20 transition-all group">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
              <Plus className="w-6 h-6" />
            </div>
            <span className="font-bold text-sm">Add New Contact</span>
          </button>
        </div>
      </div>
    </div>
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
