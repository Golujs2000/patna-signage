import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, ShieldCheck, Award, Cpu, CheckCircle2, 
  MapPin, Phone, Sparkles, ArrowRight, Users, Printer, Building2
} from 'lucide-react';
import { companyInfo, machineryData, trustedClients } from '../data/signageData';
import SEO from '../components/SEO';

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://patnasignage.com/about#webpage",
        "url": "https://patnasignage.com/about",
        "name": "About Patna Signage - Established 1990 Sign Board & Fabrication Facility",
        "description": "Learn about Bihar's premier signage manufacturing facility. Established in 1990 with 34+ years experience, 40+ skilled craftsmen, heavy CNC routers, fiber laser cutters, and HP Latex printers.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://patnasignage.com/" },
            { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://patnasignage.com/about" }
          ]
        }
      },
      {
        "@type": "Organization",
        "name": "Patna Signage",
        "legalName": "Patna Signage / Kashish Ad",
        "url": "https://patnasignage.com",
        "logo": "https://patnasignage.com/assets/patna-signage-logo.svg",
        "foundingDate": "1990",
        "foundingLocation": "Patna, Bihar",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near Canara Bank, B1, Capital Tower, Fraser Rd",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "800001",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <div className="space-y-16 pb-20">
      <SEO
        title="About Patna Signage | Established 1990 | CNC & Laser Factory in Patna"
        description="Discover Bihar's premier signage fabrication workshop established in 1990. 34+ years experience, 40+ skilled workforce, heavy CNC routers, 1.5kW fiber laser cutters, HP Latex 570, and trusted by Fortune 500 brands."
        canonicalUrl="/about"
        keywords="about patna signage, kashish ad patna, signage factory bihar, established 1990 sign board patna, cnc cutting bihar, laser cutting sign board patna, capital tower fraser road signage"
        schema={aboutSchema}
      />
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-brand-red/20 text-brand-red text-xs font-bold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Established 1990 • 34+ Years of Industry Excellence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Patna Signage
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Pioneering the signage and printing industry in Patna since 1990. Operating alongside sister concern <strong>Kashish Ad</strong> at Capital Tower, Fraser Road, we provide complete in-house fabrication, architectural cladding, and commercial branding across Bihar, Jharkhand, and Central India.
          </p>
        </div>
      </section>

      {/* Story & Workshop Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-gold" />
              <span>34+ Years of Engineering Craftsmanship</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Bihar's Most Trusted Sign Board Manufacturer Since 1990
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Founded in 1990 in Patna, our enterprise was established with a singular vision: to eliminate third-party broker markups and substandard materials by building an authentic, industrial-grade signage manufacturing infrastructure right in the heart of Bihar.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Over the past three decades, we have continuously scaled our production capacity. Today, our dedicated facility employs <strong>nearly 40 skilled fabrication artisans and 12 specialized staff members</strong>, backed by computerized CNC routers, 1.5 kW fiber laser metal cutters, HP Latex 570 high-resolution printers, UV flatbeds, and robotic channel letter benders.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-2xl font-extrabold text-brand-red">1990</div>
                <div className="text-xs text-slate-900 font-bold">Founded Year</div>
                <p className="text-[11px] text-slate-500 mt-1">34+ continuous years</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-2xl font-extrabold text-slate-900">40+</div>
                <div className="text-xs text-slate-900 font-bold">Skilled Labors</div>
                <p className="text-[11px] text-slate-500 mt-1">Plus 12 expert staff</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm col-span-2 sm:col-span-1">
                <div className="text-2xl font-extrabold text-brand-gold">{companyInfo.projectsCompleted}</div>
                <div className="text-xs text-slate-900 font-bold">Completed Projects</div>
                <p className="text-[11px] text-slate-500 mt-1">Across Central India</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src={companyInfo.heroImage}
                alt="Patna Signage Workshop Exterior Facility"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-red text-white text-[11px] font-bold shadow-md">
                    Capital Tower, Fraser Road
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-slate-200 text-[11px] font-medium">
                    GST Registered Facility
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Visit our Fraser Road facility for live demonstrations of laser cutting, sample material inspection, and technical engineering consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Tour - Full 6 Machines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Cpu className="w-4 h-4 text-brand-gold" />
            <span>In-House Industrial Infrastructure</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Advanced In-House Production Machinery
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            No outside brokers or third-party outsourcing. Every cut, weld, bend, and print is executed in our own facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {machineryData.map((machine, idx) => (
            <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <img
                  src={machine.image}
                  alt={`${machine.title} at Patna Signage facility`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 inline-block">
                    {machine.stat}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{machine.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{machine.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise & Corporate Clients Roster */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Trusted by India's Top Brands & Public Sector Leaders
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              From Fortune 500 conglomerates to national healthcare networks, we deliver turnkey branding with standard compliance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {trustedClients.map((client, idx) => (
              <div 
                key={idx} 
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-red/40 transition-all text-center flex flex-col justify-center items-center shadow-sm"
              >
                <div className="text-xs font-bold text-slate-900 line-clamp-1">{client.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{client.category}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span><strong>GST-Compliant B2B Billing:</strong> Official tax invoices with GSTIN provided for all corporate clients.</span>
            </div>
            <Link to="/contact" className="text-brand-red font-bold hover:underline flex items-center gap-1 shrink-0">
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Material Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-8">
            Our Uncompromising Material Standards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <div className="font-bold text-sm text-brand-red">Genuine SS 304 Grade</div>
              <p className="text-slate-600 leading-relaxed">
                Resistant to acid rain and high humidity. Will never rust or stain your building facade unlike cheaper 202/201 grade steel.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <div className="font-bold text-sm text-slate-900">100% Cast Acrylic</div>
              <p className="text-slate-600 leading-relaxed">
                We use premium cast acrylic sheets that won't turn yellow or brittle after exposure to scorching Bihar summer UV rays.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <div className="font-bold text-sm text-brand-red">Samsung Waterproof LEDs</div>
              <p className="text-slate-600 leading-relaxed">
                IP67 silicone-encapsulated injection LED modules designed for 50,000+ continuous burning hours.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <div className="font-bold text-sm text-emerald-600">MeanWell Power Supplies</div>
              <p className="text-slate-600 leading-relaxed">
                Built-in lightning and voltage fluctuation surge protection to prevent transformer burnout during power spikes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Address & Location CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-50 via-slate-50 to-amber-50 border border-brand-red/20 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
              Visit Our Patna Facility
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">Looking for a Trusted Signage & Print Partner?</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Drop by our facility on Fraser Road near Canara Bank (B1 & A-6/B-16 Capital Tower) to inspect live machinery, explore product displays, and plan your project with our master craftsmen.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white text-xs sm:text-sm font-bold shadow-md shadow-brand-red/25 transition-all"
            >
              Get Workshop Directions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
