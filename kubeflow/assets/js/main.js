// Theme management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.setupToggleListeners();
  }

  applyTheme(theme) {
    console.log('Current theme:', this.theme);
    console.log('Setting theme to:', theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    this.theme = theme;
    localStorage.setItem('theme', theme);
    
    console.log('Applied theme class:', theme, 'to', this.theme);
  }

  toggle() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }

  setupToggleListeners() {
    const toggleButtons = document.querySelectorAll('[data-theme-toggle]');
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => this.toggle());
    });
  }
}

// Mobile menu management
class MobileMenu {
  constructor() {
    this.menu = document.querySelector('#mobile-menu');
    this.toggle = document.querySelector('#mobile-menu-toggle');
    this.overlay = document.querySelector('#mobile-menu-overlay');
    this.init();
  }

  init() {
    if (this.toggle) {
      this.toggle.addEventListener('click', () => this.toggleMenu());
    }
    
    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.closeMenu());
    }

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.closeMenu();
      }
    });

    // Close menu when clicking menu links
    const menuLinks = document.querySelectorAll('#mobile-menu a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
  }

  toggleMenu() {
    if (this.isOpen()) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    if (this.menu) {
      this.menu.classList.remove('translate-x-full');
      this.menu.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    }
  }

  closeMenu() {
    if (this.menu) {
      this.menu.classList.add('translate-x-full');
      this.menu.classList.remove('translate-x-0');
      document.body.style.overflow = '';
    }
  }

  isOpen() {
    return this.menu && this.menu.classList.contains('translate-x-0');
  }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.animate-slide-up, .animate-fade-in, .feature-card'
  );
  
  animatedElements.forEach(el => observer.observe(el));
}

// Copy code functionality
function initCodeCopyButtons() {
  const codeBlocks = document.querySelectorAll('.code-block');
  
  codeBlocks.forEach(block => {
    const copyButton = block.querySelector('[data-copy-code]');
    const codeElement = block.querySelector('code');
    
    if (copyButton && codeElement) {
      copyButton.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(codeElement.textContent);
          
          // Visual feedback
          const originalText = copyButton.innerHTML;
          copyButton.innerHTML = `
            <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          `;
          
          setTimeout(() => {
            copyButton.innerHTML = originalText;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy code:', err);
        }
      });
    }
  });
}

// Newsletter form handling
function initNewsletterForm() {
  const form = document.querySelector('#newsletter-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = form.querySelector('input[type="email"]').value;
      
      // Here you would typically send the email to your newsletter service
      console.log('Newsletter signup:', email);
      
      // Show success message
      const button = form.querySelector('button');
      const originalText = button.textContent;
      button.textContent = 'Subscribed!';
      button.disabled = true;
      
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 3000);
    });
  }
}

// Navigation active state
function initNavigationActiveState() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to current section link
        const activeLink = document.querySelector(`a[href="#${id}"]`);
        if (activeLink && activeLink.classList.contains('nav-link')) {
          activeLink.classList.add('active');
        }
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '-10% 0px -80% 0px'
  });
  
  sections.forEach(section => observer.observe(section));
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new MobileMenu();
  initSmoothScrolling();
  initScrollAnimations();
  initCodeCopyButtons();
  initNewsletterForm();
  initNavigationActiveState();
});

// Handle page load animations
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});