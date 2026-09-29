/**
 * Patna Signage - Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close on nav link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other accordions
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));
      // Toggle clicked
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. Portfolio Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory.includes(filterValue)) {
          item.style.display = 'flex';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 5. Quote Form Submission & Toast
  const quoteForm = document.getElementById('signageQuoteForm');
  const toastMsg = document.getElementById('toastNotification');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = 'Submitting Request...';
      submitBtn.disabled = true;

      // Extract form details
      const name = document.getElementById('clientName')?.value || 'Customer';
      const phone = document.getElementById('clientPhone')?.value || '';
      const business = document.getElementById('businessName')?.value || '';
      const service = document.getElementById('signageService')?.value || 'Signage';

      setTimeout(() => {
        submitBtn.innerHTML = '✓ Request Received!';
        showToast(`Thank you, ${name}! Your quotation request for ${service} has been received. Our fabrication team will call you at ${phone}.`);
        quoteForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 4000);
      }, 900);
    });
  }

  function showToast(message) {
    if (!toastMsg) return;
    const textSpan = toastMsg.querySelector('.toast-text');
    if (textSpan) textSpan.innerText = message;
    toastMsg.classList.add('show');

    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 5500);
  }

  // 6. Day / Night Illumination Toggle for Hero Storefront
  const glowToggleBtn = document.getElementById('toggleGlowMode');
  const storefrontFrame = document.querySelector('.storefront-frame');
  
  if (glowToggleBtn && storefrontFrame) {
    let isGlowing = true;
    glowToggleBtn.addEventListener('click', () => {
      isGlowing = !isGlowing;
      if (isGlowing) {
        storefrontFrame.style.filter = 'drop-shadow(0 0 25px rgba(255, 106, 0, 0.6)) brightness(1.08)';
        glowToggleBtn.innerHTML = '💡 Night Glow: ON';
        glowToggleBtn.style.background = 'rgba(255, 106, 0, 0.3)';
      } else {
        storefrontFrame.style.filter = 'none';
        glowToggleBtn.innerHTML = '💡 Night Glow: OFF';
        glowToggleBtn.style.background = 'rgba(8, 27, 51, 0.85)';
      }
    });
  }
});
