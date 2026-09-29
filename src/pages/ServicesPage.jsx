import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Factory, Zap, 
  Sparkles, Layers, Cpu, Compass 
} from 'lucide-react';
import { servicesData, companyInfo } from '../data/signageData';
import SEO from '../components/SEO';

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
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
      }
    ]
  };

  return (
    <div className="space-y-16 pb-20">
      <SEO
        title="Signage Manufacturing & Fabrication Services in Patna, Bihar"
        description="End-to-end commercial signage fabrication in Patna. In-house CNC router grooving, laser metal cutting, channel letter bending, and IP67 Samsung LED illumination."
        canonicalUrl="/services"
        keywords="signage fabrication services patna, led board making patna, acp fabrication bihar, 3d channel letter bending, sign board installation patna"
        schema={servicesSchema}
      />
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-brand-red/20 text-brand-red text-xs font-bold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Industrial Signage Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Signage Fabrication & Branding Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            From computerized 3D letter bending and precision CNC router cutting to complete retail facade structural cladding, we deliver end-to-end turnkey architectural branding in Bihar.
          </p>
        </div>
      </section>

      {/* Services Detailed Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.slug}
              className="bg-white border border-slate-200/90 hover:border-brand-red/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                <Link to={`/services/${service.slug}`} className="relative h-56 overflow-hidden bg-slate-100 block cursor-pointer">
                  <img
                    src={service.image}
                    alt={`${service.title} - Factory Patna`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-red text-white text-xs font-bold shadow-md">
                    {service.badge}
                  </span>
                  <div className="absolute bottom-3 left-4 text-xs font-bold text-white bg-slate-900/80 px-2.5 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm">
                    Service 0{index + 1}
                  </div>
                </Link>

                <div className="p-6 space-y-4">
                  <Link to={`/services/${service.slug}`} className="block group/title">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-red group-hover/title:text-brand-red transition-colors cursor-pointer">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block font-semibold">Starting Price</span>
                  <span className="text-xs font-bold text-slate-900">{service.priceRange}</span>
                </div>
                <Link
                  to={`/services/${service.slug}`}
                  className="px-4 py-2.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold transition-all shadow-md shadow-brand-red/25 flex items-center gap-1.5"
                >
                  <span>Dedicated Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Production Quality Assurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
              Engineering Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Our 4-Stage In-House Manufacturing Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-brand-red flex items-center justify-center font-extrabold text-sm">
                01
              </div>
              <h4 className="text-sm font-bold text-slate-900">Laser & CAD Layout</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                1:1 scale digital vector drafting to eliminate any letter alignment errors before cutting.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-extrabold text-sm">
                02
              </div>
              <h4 className="text-sm font-bold text-slate-900">Robotic Metal Bending</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automatic channel letter bending machine creates flawless, gapless letter walls.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-brand-red flex items-center justify-center font-extrabold text-sm">
                03
              </div>
              <h4 className="text-sm font-bold text-slate-900">IP67 Waterproofing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Encapsulated silicone LED modules and heavy-gauge copper wiring resistant to waterlogging.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold text-sm">
                04
              </div>
              <h4 className="text-sm font-bold text-slate-900">24-Hr Burn-In Test</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous 24-hour illuminated stress testing in our workshop prior to site dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto space-y-4 shadow-sm">
          <h3 className="text-xl font-extrabold text-slate-900">Have a Unique Signage Requirement?</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We fabricate bespoke custom letters, rooftop sky signs, illuminated monuments, and corporate interior signage packages.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-lg bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold shadow-md shadow-brand-red/25 cursor-pointer"
            >
              Contact Engineering Desk
            </Link>
            <a
              href={companyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-800 hover:border-brand-red hover:text-brand-red hover:bg-white text-xs font-bold transition-all shadow-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
