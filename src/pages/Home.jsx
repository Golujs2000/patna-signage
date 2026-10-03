import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Zap, Factory, Award, CheckCircle2, 
  Phone, Sparkles, Ruler, ExternalLink, HelpCircle, MapPin 
} from 'lucide-react';
import { 
  companyInfo, servicesData, signageTypes, portfolioProjects, 
  machineryData, testimonials, faqs, trustedClients 
} from '../data/signageData';
import QuoteForm from '../components/QuoteForm';
import SEO from '../components/SEO';

export default function Home() {
  // Rich FAQPage Schema for Google Search Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const patnaLocalities = [
    { name: "Boring Road", pincode: "800001", focus: "Retail Boutiques & Coaching Hubs" },
    { name: "Bailey Road", pincode: "800014", focus: "Hospitals & Commercial Plazas" },
    { name: "Fraser Road", pincode: "800001", focus: "Corporate Offices & Hotels" },
    { name: "Kankarbagh", pincode: "800020", focus: "Restaurants & Healthcare Clinics" },
    { name: "Danapur & Saguna More", pincode: "801503", focus: "Automobile & Retail Showrooms" },
    { name: "Patliputra Colony", pincode: "800013", focus: "Boutique Cafes & Studios" },
    { name: "Exhibition Road", pincode: "800001", focus: "Wholesale & Business Centers" },
    { name: "Transport Nagar / Zero Mile", pincode: "800007", focus: "Main Workshop & Heavy Logistics" }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Dynamic SEO Meta & FAQ Schema */}
      <SEO 
        title="#1 Sign Board Manufacturer in Patna, Bihar | Est. 1990"
        description="Direct factory sign board manufacturer in Patna, Bihar established in 1990. 34+ years experience in LED 3D acrylic letters, ACP cladding, glow sign boards, titanium steel letters, and retail shopfront facades. 5-year warranty, in-house CNC & laser factory."
        canonicalUrl="/"
        keywords="sign board manufacturer in patna, established 1990 signage patna, led sign board patna, 3d acrylic letters patna, acp sign board bihar, glow sign board maker patna, neon sign patna, stainless steel letters patna, signage company bihar"
        schema={faqSchema}
      />
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden border-b border-slate-200 bg-[#FFFDF8]">
        {/* Background Image: Authentic Storefront Image (100% UNFADED) */}
        <div 
          className="absolute inset-0 bg-cover bg-right"
          style={{
            backgroundImage: `url('${companyInfo.heroImage}')`,
            backgroundPosition: 'right center',
          }}
        >
          {/* Subtle mobile-only tint for small phone screens where image spans under text */}
          <div className="absolute inset-0 bg-[#FFFDF8]/85 sm:hidden"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full z-10">
          <div className="max-w-lg lg:max-w-[530px] space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-brand-red/30 text-brand-red text-xs font-bold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-brand-red font-extrabold">{companyInfo.experienceBadge}</span>
            </div>

            {/* Main Headline (H1 for Technical SEO) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              #1 Sign Board Manufacturer in <span className="text-brand-red">Patna, Bihar</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              Direct factory pricing with in-house CNC routers, 1.5kW fiber laser cutting, and genuine Samsung IP67 waterproof LED modules. 34+ years of craftsmanship with 5-year guaranteed durability.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                to="/signage"
                className="px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm transition-all shadow-xl shadow-brand-red/30 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Sign Boards</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm border border-slate-300 shadow-md transition-all flex items-center gap-2"
              >
                <span>Get Free Quotation</span>
              </Link>

              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                className="px-4 py-3.5 rounded-xl bg-slate-900/5 hover:bg-slate-900/10 text-slate-800 hover:text-brand-red text-xs font-bold flex items-center gap-2 border border-slate-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call Factory: {companyInfo.phoneDisplay}</span>
              </a>
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-300/80 text-xs text-slate-800 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                <span>Zero Middlemen</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>5-Yr LED Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-brand-red shrink-0" />
                <span>Free Site Survey</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS / TRUST BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xl">
          <div className="p-4 border-r border-slate-100 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{companyInfo.experienceYears}</div>
            <div className="text-xs text-brand-red font-bold mt-1">Years Manufacturing</div>
            <p className="text-[11px] text-slate-500 mt-1 font-medium">Est. 1990 in Patna, Bihar</p>
          </div>
          <div className="p-4 border-r border-slate-100 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-red">{companyInfo.projectsCompleted}</div>
            <div className="text-xs text-slate-800 font-bold mt-1">Installed Sign Boards</div>
            <p className="text-[11px] text-slate-500 mt-1 font-medium">Across Bihar & Central India</p>
          </div>
          <div className="p-4 border-r border-slate-100 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">40+</div>
            <div className="text-xs text-brand-gold font-bold mt-1">Skilled Fabricators</div>
            <p className="text-[11px] text-slate-500 mt-1 font-medium">Plus 12 specialized staff</p>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">{companyInfo.warrantyYears}</div>
            <div className="text-xs text-slate-800 font-bold mt-1">Comprehensive Warranty</div>
            <p className="text-[11px] text-slate-500 mt-1 font-medium">Samsung LEDs & transformers</p>
          </div>
        </div>
      </section>

      {/* CORPORATE & HEALTHCARE CLIENT TRUST MARQUEE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider block">
                Trusted Corporate Clientele
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Worked With India’s Top Public & Private Brands
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4" />
              <span>GST Registered • Official B2B Tax Invoicing</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {trustedClients.slice(0, 12).map((client, idx) => (
              <div 
                key={idx}
                className="group bg-white border border-slate-200 hover:border-brand-red/40 rounded-xl p-3 text-center transition-all shadow-sm hover:shadow flex flex-col justify-between items-center min-h-[110px]"
              >
                <div className="h-10 w-full flex items-center justify-center p-1">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-8 max-w-[90px] w-auto object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <div className="w-full mt-1.5 pt-1.5 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-900 line-clamp-1 group-hover:text-brand-red transition-colors">{client.name}</div>
                  <div className="text-[9px] text-slate-500 line-clamp-1">{client.category}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <span>Also serving: State Bank of India (SBI), LIC, TVS Motor, Havells, Reliance Cement, Coca-Cola, Swaraj Tractors, Kotak Life, Mufti</span>
            <Link to="/about" className="text-brand-red font-bold hover:underline inline-flex items-center gap-1">
              <span>View Client Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold text-brand-red uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Specialized Signage Fabrication</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dedicated Service Capabilities
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs font-bold text-brand-red hover:text-brand-red-dark flex items-center gap-1 transition-colors self-start md:self-auto"
          >
            <span>View All Services Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="bg-white border border-slate-200/90 hover:border-brand-red/50 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl flex flex-col"
            >
              <Link to={`/services/${service.slug}`} className="relative h-48 overflow-hidden bg-slate-100 block cursor-pointer">
                <img
                  src={service.image}
                  alt={`${service.title} - Patna Signage`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-brand-red text-white text-[11px] font-bold shadow-md">
                  {service.badge}
                </span>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <Link to={`/services/${service.slug}`} className="block group/title">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-red group-hover/title:text-brand-red transition-colors cursor-pointer">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Pricing:</span>
                    <span className="text-slate-900 font-bold">{service.priceRange}</span>
                  </div>
                  <Link
                    to={`/services/${service.slug}`}
                    className="w-full py-2.5 rounded-lg bg-slate-100 hover:bg-brand-red text-slate-800 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>View Service Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL SEO TARGETING: BIHAR & PATNA LOCALITY COVERAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-red" />
              <span>Hyper-Local Patna & Bihar Presence</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              On-Site Sign Board Services Across All Patna Localities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Our mobile laser survey van visits commercial sites daily across all postal codes of Patna. Direct factory installations with in-house scaffolding crews:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {patnaLocalities.map((loc, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-red/50 transition-all space-y-1 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{loc.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-brand-red font-mono font-bold">{loc.pincode}</span>
                </div>
                <div className="text-[11px] text-slate-500">{loc.focus}</div>
                <div className="text-[10px] text-brand-red font-semibold pt-1">Free 24hr site measurement available</div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-600">
            <div>
              <strong className="text-slate-900">Direct Supply & Installation All Over Bihar & Jharkhand:</strong> Regular commercial project execution across Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Begusarai, Purnea (Bihar) and Ranchi, Jamshedpur, Dhanbad, Bokaro, Deoghar, Hazaribagh (Jharkhand).
            </div>
            <Link
              to="/contact"
              className="text-brand-red hover:underline font-bold flex items-center gap-1 shrink-0"
            >
              <span>Book Site Visit for Your Location</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR SIGNAGE TYPES CATALOG PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                Full Visual Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Explore Popular Sign Board Types
              </h2>
            </div>
            <Link
              to="/signage"
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>See All 10 Types</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {signageTypes.slice(0, 4).map((type) => (
              <div 
                key={type.id}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:border-brand-red/40 hover:bg-white transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <img
                    src={type.image}
                    alt={`${type.name} - Patna Signage`}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                      {type.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-0.5">{type.name}</h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{type.desc}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <div className="text-[11px] font-bold text-slate-900">{type.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-HOUSE FACTORY & CNC MACHINERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-brand-red/20 text-brand-red text-xs font-bold uppercase">
              <Factory className="w-3.5 h-3.5" />
              <span>Direct Patna Manufacturing Facility</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Why Patna's Leading Brands Choose Our In-House Workshop
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Unlike advertising agencies that sub-contract work to third-party shops, Patna Signage owns an industrial fabrication workshop right here in Patna. This means guaranteed material thickness, 30% lower costs, and zero middleman markups.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Computerized Precision:</strong> CNC routing and fiber laser cutting ensure 100% adherence to your brand typography with razor-sharp contours.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Industrial SS 304 Grade Metal:</strong> True non-rusting stainless steel welded with automated micro-welders for 10+ year longevity.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Waterproof Korean/Taiwan LEDs:</strong> Modules rated IP67 encapsulated in silicone so heavy monsoon rains never cause shorts or flickers.
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-md"
              >
                <span>Tour Our Workshop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {machineryData.slice(0, 4).map((machine, idx) => (
              <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-md group hover:shadow-lg transition-all">
                <div className="relative overflow-hidden bg-slate-900">
                  <img
                    src={machine.image}
                    alt={`${machine.title} - Patna Signage CNC Factory`}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-slate-950/85 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white border border-white/10 shadow">
                    {machine.stat}
                  </div>
                </div>
                <div className="p-3.5 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-brand-red transition-colors line-clamp-1">{machine.title}</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{machine.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
              Installed Across Patna & Bihar
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              Recent Commercial Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1 transition-colors"
          >
            <span>View Full Portfolio Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioProjects.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={`${item.title} in ${item.location} - Patna Signage`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-medium">
                    {item.location}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-[11px] text-slate-700 font-medium">
                  Client: {item.clientType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
            Verified Client Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Trusted by Top Business Owners in Patna
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-base">★</span>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="pt-2 border-t border-slate-100">
                <div className="font-bold text-xs text-slate-900">{t.author}</div>
                <div className="text-[11px] text-slate-500">{t.designation}</div>
                <div className="text-[10px] text-brand-red font-bold mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE QUOTE & FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Quote Form Component */}
          <div>
            <QuoteForm />
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-6">
            <div>
              <div className="text-xs font-bold text-brand-red uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-brand-gold" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Got Questions? We Have Answers</h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200/90 rounded-xl p-5 space-y-2 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                    <span className="text-brand-red font-extrabold">Q.</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-red-50 border border-brand-red/20 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">Need immediate guidance?</div>
                <div className="text-[11px] text-slate-600">Speak directly with our senior signage engineer.</div>
              </div>
              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                className="px-3.5 py-2 rounded-lg bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold transition-all shrink-0 shadow-md shadow-brand-red/25"
              >
                Call {companyInfo.phoneDisplay}
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
