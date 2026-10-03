import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { companyInfo, navLinks, servicesData } from '../data/signageData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm py-2' : 'bg-white/95 backdrop-blur-md py-3 border-b border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)]'}`}>
      {/* Top micro bar */}
      <div className="hidden lg:block border-b border-slate-100 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-brand-red font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              {companyInfo.tagline}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">{companyInfo.subtitle}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Hours: {companyInfo.hours}</span>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 font-bold">
              <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <a 
                href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} 
                className="text-slate-900 hover:text-brand-red transition-colors"
                title="Call Primary Hotline"
              >
                {companyInfo.phoneDisplay}
              </a>
              <span className="text-slate-300 font-normal">/</span>
              <a 
                href={`tel:${companyInfo.secondaryPhone.replace(/\s+/g, '')}`} 
                className="text-slate-900 hover:text-brand-red transition-colors"
                title="Call Secondary Hotline"
              >
                {companyInfo.secondaryPhoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Authentic Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={companyInfo.logo || "/assets/patna-signage-logo.svg"} 
            alt="Patna Signage - Signage | Branding | Fabrication" 
            className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
              (link.path === '/services' && location.pathname.startsWith('/services'));

            if (link.path === '/services') {
              return (
                <div 
                  key={link.path} 
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1 ${
                      isActive 
                        ? 'text-brand-red bg-brand-red/10' 
                        : 'text-slate-700 hover:text-brand-red hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {/* Dropdown for each individual service */}
                  <div className={`absolute top-full left-0 w-72 pt-2 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-white border border-slate-200 rounded-xl shadow-2xl p-2.5">
                      <div className="text-[11px] font-bold text-brand-red uppercase tracking-wider px-3 py-1.5 border-b border-slate-100">
                        Our Specialized Services
                      </div>
                      <div className="mt-1 space-y-1">
                        {servicesData.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className={`block px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                              location.pathname === `/services/${s.slug}`
                                ? 'bg-brand-red text-white'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-brand-red'
                            }`}
                          >
                            <div className="font-semibold">{s.title}</div>
                            <div className={`text-[10px] truncate mt-0.5 ${location.pathname === `/services/${s.slug}` ? 'text-white/80' : 'text-slate-400'}`}>{s.badge}</div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-100 px-2">
                        <Link 
                          to="/services" 
                          className="text-[11px] text-brand-red hover:underline font-bold flex items-center justify-between"
                        >
                          View All Services Overview
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive 
                    ? 'text-brand-red bg-brand-red/10' 
                    : 'text-slate-700 hover:text-brand-red hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Phone CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={companyInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-300 text-slate-700 hover:border-brand-red hover:text-brand-red hover:bg-red-50/50 transition-colors"
          >
            WhatsApp Estimate
          </a>
          <Link
            to="/contact"
            className="px-4 py-2 text-xs font-bold rounded-lg bg-brand-red hover:bg-brand-red-dark text-white transition-all shadow-md shadow-brand-red/25 flex items-center gap-1.5"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
                location.pathname === link.path
                  ? 'bg-brand-red text-white'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Services Sub-list */}
          <div className="pt-2 border-t border-slate-100 space-y-1">
            <div className="px-4 text-xs font-bold text-brand-red uppercase tracking-wider mb-2">
              Individual Service Pages
            </div>
            {servicesData.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="block px-4 py-1.5 text-xs text-slate-600 hover:text-brand-red"
              >
                • {s.title}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                className="w-full text-center py-2.5 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-bold flex items-center justify-center gap-1.5 hover:bg-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <span className="truncate">{companyInfo.phoneDisplay}</span>
              </a>
              <a
                href={`tel:${companyInfo.secondaryPhone.replace(/\s+/g, '')}`}
                className="w-full text-center py-2.5 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-bold flex items-center justify-center gap-1.5 hover:bg-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <span className="truncate">{companyInfo.secondaryPhoneDisplay}</span>
              </a>
            </div>
            <Link
              to="/contact"
              className="w-full text-center py-2.5 rounded-lg bg-brand-red text-white text-xs font-bold shadow-md shadow-brand-red/30"
            >
              Request Free Site Measurement
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
