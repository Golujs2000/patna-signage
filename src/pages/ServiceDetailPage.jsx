import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Clock, ShieldCheck, 
  Sparkles, Phone, MessageSquare, Layers, Award 
} from 'lucide-react';
import { servicesData, companyInfo } from '../data/signageData';
import QuoteForm from '../components/QuoteForm';
import SEO from '../components/SEO';

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find other services for related links
  const otherServices = servicesData.filter((s) => s.slug !== slug);

  // Dynamic Service and BreadcrumbList Schema for Google Search
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": service.title,
        "serviceType": "Sign Board Manufacturing",
        "description": service.shortDesc,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Patna Signage",
          "telephone": "+919905279579",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Near Canara Bank, B1, Capital Tower, Fraser Rd",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "postalCode": "800001",
            "addressCountry": "IN"
          }
        },
        "areaServed": [
          { "@type": "City", "name": "Patna" },
          { "@type": "AdministrativeArea", "name": "Bihar" }
        ],
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "description": service.priceRange
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://patnasignage.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://patnasignage.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://patnasignage.com/services/${service.slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Dynamic SEO Meta Tags for each individual service */}
      <SEO
        title={`${service.title} Manufacturer in Patna, Bihar`}
        description={`${service.shortDesc} Direct factory pricing in Patna with ${service.turnaround} turnaround and ${companyInfo.warrantyYears} warranty. Laser precision.`}
        canonicalUrl={`/services/${service.slug}`}
        ogImage={service.image}
        keywords={`${service.title.toLowerCase()} patna, ${service.slug} bihar, custom sign boards patna, commercial signboard manufacturer patna`}
        schema={serviceSchema}
      />
      
      {/* Service Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-red font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-brand-red font-medium">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-brand-red font-bold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-brand-red/20 text-brand-red text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>{service.badge} • Factory Direct Patna</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.shortDesc}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-[11px] text-slate-500 font-semibold">Estimated Price</div>
                  <div className="text-sm font-bold text-brand-red">{service.priceRange}</div>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-[11px] text-slate-500 font-semibold">Turnaround Time</div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-red" />
                    <span>{service.turnaround}</span>
                  </div>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-[11px] text-slate-500 font-semibold">Warranty Coverage</div>
                  <div className="text-sm font-bold text-emerald-600 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{companyInfo.warrantyYears} Warranty</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://wa.me/919905279579?text=Hi%20Patna%20Signage,%20I%20am%20interested%20in%20a%20quotation%20for%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-md shadow-emerald-500/25 flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span>Call {companyInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group bg-slate-100">
                <img
                  src={service.image}
                  alt={`${service.title} fabricated by Patna Signage`}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-brand-gold block">{service.title}</span>
                  <span className="text-[11px] text-slate-200">Fabricated at Patna Signage Workshop</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Full Description, Specs, Features, Applications */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Overview */}
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-red" />
                <span>Service Overview & Engineering</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {service.fullDesc}
              </p>
            </div>

            {/* Specifications Table */}
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                Technical Specifications & Standards
              </h3>
              <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-md divide-y divide-slate-100">
                {service.specs.map((item, idx) => (
                  <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1 sm:gap-4">
                    <span className="font-semibold text-slate-500">{item.label}</span>
                    <span className="font-bold text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Checklist */}
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                Key Features & Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-start gap-2.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Applications */}
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">
                Common Commercial Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800"
                  >
                    • {app}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Quote Form Pre-filled */}
          <div className="lg:col-span-5 space-y-8">
            <QuoteForm preselectedService={service.title} />

            {/* Other Services Switcher */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-4 shadow-md">
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Explore Other Services
              </h4>
              <div className="space-y-2">
                {otherServices.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/services/${other.slug}`}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-brand-red/30 transition-all flex items-center justify-between group block"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                        {other.title}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">{other.badge}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
