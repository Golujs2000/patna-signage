import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, ShieldCheck, Award, Cpu, CheckCircle2, 
  MapPin, Phone, Sparkles, ArrowRight 
} from 'lucide-react';
import { companyInfo, machineryData } from '../data/signageData';
import SEO from '../components/SEO';

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://patnasignage.com/about#webpage",
        "url": "https://patnasignage.com/about",
        "name": "About Patna Signage - Direct Factory Sign Board Manufacturer",
        "description": "Learn about Bihar's premier signage manufacturing facility. 15+ years of in-house CNC routers, laser metal cutters, and automated letter benders.",
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
        "url": "https://patnasignage.com",
        "logo": "https://patnasignage.com/assets/patna-signage-logo.svg",
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
        title="About Patna Signage | In-House CNC & Laser Factory in Patna"
        description="Discover Bihar's premier signage fabrication workshop. 15+ years experience, heavy CNC routers, fiber laser cutters, SS 304 stainless steel standards."
        canonicalUrl="/about"
        keywords="about patna signage, signage factory bihar, sign board workshop patna, cnc cutting bihar, laser cutting sign board patna"
        schema={aboutSchema}
      />
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-brand-red/20 text-brand-red text-xs font-bold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Manufacturing Facility in Patna</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Patna Signage
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Founded with a commitment to bring world-class architectural signage and retail branding to Bihar, Patna Signage operates a full-scale in-house industrial manufacturing workshop with zero reliance on outside brokers.
          </p>
        </div>
      </section>

      {/* Story & Workshop Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
              15+ Years of Engineering Craftsmanship
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Bihar's Direct Factory Sign Board Manufacturer
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              When business owners in Patna order signboards through middlemen or advertising agencies, their orders are often sub-contracted to third-party fabrication shops in other states or fabricated using substandard extruded plastics and unbranded low-grade LEDs that burn out in a few months.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong className="text-slate-900">Patna Signage changed the equation.</strong> We invested in heavy industrial CNC machinery, computerized laser cutters, and automatic letter benders right here in Patna. Every single board is precision engineered, water-tested, and quality checked under one roof.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-2xl font-extrabold text-brand-red">{companyInfo.experienceYears}</div>
                <div className="text-xs text-slate-900 font-bold">Years Experience</div>
                <p className="text-[11px] text-slate-500 mt-1">Deep mastery of Bihar climate durability</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-2xl font-extrabold text-slate-900">{companyInfo.projectsCompleted}</div>
                <div className="text-xs text-slate-900 font-bold">Successful Signboards</div>
                <p className="text-[11px] text-slate-500 mt-1">Retailers, hospitals, malls, schools</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-brand-red text-white text-[11px] font-bold shadow-md">
                  Patna Workshop Facility
                </span>
                <p className="text-xs text-slate-100 mt-2">
                  Visit our workshop anytime for live demonstrations of laser cutting and sample inspections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Tour */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
            Industrial Equipment
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            State-of-the-Art In-House Machinery
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            Eliminating human error with automated computer numeric control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {machineryData.map((machine, idx) => (
            <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <img
                  src={machine.image}
                  alt={`${machine.title} at Patna Signage facility`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider">
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
            <h3 className="text-2xl font-extrabold text-slate-900">Looking for a Trusted Signage Partner?</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Drop by our office on Fraser Road near Canara Bank (B1 Capital Tower) to inspect sample boards and talk with our fabrication masters in person.
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
