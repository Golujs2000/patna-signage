import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, PhoneCall, Sparkles, Filter } from 'lucide-react';
import { signageTypes, companyInfo } from '../data/signageData';
import SEO from '../components/SEO';

export default function SignagePage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All', 
    'Outdoor', 
    'Indoor', 
    'Awards & Trophies', 
    'Frames & Displays', 
    'Neon & Creative', 
    'Printing & Media', 
    'Luxury', 
    'Standard'
  ];

  const filteredTypes = signageTypes.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Outdoor') return item.category.toLowerCase().includes('outdoor') || item.category.toLowerCase().includes('facade') || item.category.toLowerCase().includes('highway');
    if (activeFilter === 'Indoor') return item.category.toLowerCase().includes('indoor') || item.category.toLowerCase().includes('interior') || item.category.toLowerCase().includes('commercial');
    if (activeFilter === 'Awards & Trophies') return item.category.toLowerCase().includes('award') || item.category.toLowerCase().includes('troph') || item.category.toLowerCase().includes('memento');
    if (activeFilter === 'Frames & Displays') return item.category.toLowerCase().includes('frame') || item.category.toLowerCase().includes('clip-on') || item.category.toLowerCase().includes('lightbox') || item.category.toLowerCase().includes('display') || item.category.toLowerCase().includes('pos');
    if (activeFilter === 'Neon & Creative') return item.category.toLowerCase().includes('neon') || item.category.toLowerCase().includes('creative') || item.category.toLowerCase().includes('trendy');
    if (activeFilter === 'Printing & Media') return item.category.toLowerCase().includes('printing') || item.category.toLowerCase().includes('media');
    if (activeFilter === 'Luxury') return item.category.toLowerCase().includes('luxury') || item.category.toLowerCase().includes('architectural');
    if (activeFilter === 'Standard') return item.category.toLowerCase().includes('standard') || item.category.toLowerCase().includes('safety');
    return true;
  });

  const signageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Commercial Sign Board Types - Patna Signage",
    "description": "Comprehensive list of commercial sign boards fabricated in Patna, Bihar including LED acrylic, ACP, SS 304, and flex boards.",
    "itemListElement": signageTypes.map((t, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": t.name,
      "description": t.desc,
      "image": t.image
    }))
  };

  return (
    <div className="space-y-16 pb-20">
      <SEO
        title="Sign Board Catalog, Trophies, Mementos & Frames in Patna | Patna Signage"
        description="Explore 20+ commercial visual branding formats in Patna: LED 3D letters, ACP facades, neon signs, trophies, mementos, crystal awards, clipon boards, and photo frames with factory prices."
        canonicalUrl="/signage"
        keywords="led 3d letters patna, neon sign boards patna, trophies manufacturer patna, corporate mementos bihar, crystal awards patna, clipon board patna, photo frames patna, signage company bihar"
        schema={signageSchema}
      />
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-brand-red/20 text-brand-red text-xs font-bold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Complete Visual Signage Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Commercial Sign Board Types & Formats
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Manufactured in our Patna facility with laser cutting, computerized CNC grooving, and high-lumen waterproof Samsung LED modules. Engineered for maximum visibility and 10+ year lifespan.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-brand-red text-white shadow-md shadow-brand-red/25'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {cat} Signage
            </button>
          ))}
        </div>
      </section>

      {/* Signage Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTypes.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-brand-red/40 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={`${item.name} board manufactured in Patna, Bihar`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-brand-red text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="text-[11px] font-bold text-slate-500">Specifications:</div>
                    <div className="text-xs text-slate-800 font-medium">{item.specs}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block font-semibold">Estimated Rate</span>
                  <span className="text-sm font-bold text-brand-red">{item.price}</span>
                </div>
                <Link
                  to="/contact"
                  className="px-3.5 py-2 rounded-lg bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold transition-all flex items-center gap-1 shadow-md shadow-brand-red/20"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free Site Visit CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-50 via-slate-50 to-amber-50 border border-brand-red/20 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-slate-900">Need On-Site Measurement in Patna?</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Our technical field team visits your showroom or building with laser measuring meters to inspect elevations and discuss lighting styles with zero consultation charge.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white text-xs sm:text-sm font-bold shadow-md shadow-brand-red/30 transition-all"
            >
              Book Free Site Visit
            </Link>
            <a
              href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
              className="px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 transition-all flex items-center gap-2 shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-brand-red" />
              <span>Call Factory</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
