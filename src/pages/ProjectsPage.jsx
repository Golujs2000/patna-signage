import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioProjects, companyInfo } from '../data/signageData';
import SEO from '../components/SEO';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'LED & Facade', 'SS 3D Letters', 'ACP Signage', 'Retail Facade', 'Corporate', 'Pylon & Totem', 'Display & POS'];

  const filteredProjects = portfolioProjects.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  const projectsSchema = {
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
        "name": "Projects",
        "item": "https://patnasignage.com/projects"
      }
    ]
  };

  return (
    <div className="space-y-16 pb-20">
      <SEO
        title="Commercial Signage Projects & Portfolio in Patna, Bihar"
        description="Browse installed commercial sign boards across Patna: Apex Hospital Bailey Road, Kalyan Jewellers Boring Road, City Center Fraser Road. Direct factory quality."
        canonicalUrl="/projects"
        keywords="sign board projects patna, signage portfolio bihar, led board installation patna, retail facade projects patna"
        schema={projectsSchema}
      />
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-brand-red/20 text-brand-red text-xs font-bold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Installed Commercial Signage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Portfolio & Executed Projects
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            Take a look at real commercial signboards, showroom facades, and titanium 3D letters installed by our team across Patna, Boring Road, Bailey Road, and greater Bihar.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-red text-white shadow-md shadow-brand-red/25'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/90 hover:border-brand-red/40 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={`${project.title} signage board installed in ${project.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-red text-white text-[11px] font-bold shadow-md">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-bold text-brand-red uppercase tracking-wider">
                    Client: {project.clientType}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <span className="text-xs text-slate-400 font-medium">Patna Signage Project</span>
                <Link
                  to="/contact"
                  className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1 transition-colors"
                >
                  <span>Request Similar Sign</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop Guarantee Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-lg">
          <h3 className="text-2xl font-extrabold text-slate-900">Want to See Physical Samples Before Ordering?</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Visit our workshop in Patna to touch and feel live illuminated acrylic letter modules, brushed titanium steel samples, and aluminium composite swatches.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold shadow-md shadow-brand-red/25 cursor-pointer"
            >
              Get Workshop Location
            </Link>
            <a
              href={companyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-slate-300 text-slate-800 hover:border-brand-red hover:text-brand-red hover:bg-slate-50 text-xs font-bold transition-all shadow-sm"
            >
              Request Video Tour
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
