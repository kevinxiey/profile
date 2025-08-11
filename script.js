// Initialize Swiper and GLightbox when DOM is ready
console.log('🚀 Initializing Swiper and GLightbox...');

// Theme toggle and small helpers
(function () {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  const isLight = saved ? saved === 'light' : !prefersDark;

  setTheme(isLight ? 'light' : 'dark');
  updateIcon();

  btn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || (prefersDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
    updateIcon();
  });

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }

  function updateIcon() {
    const isDark = (document.documentElement.dataset.theme || '').includes('dark');
    btn.textContent = isDark ? '🌙' : '☀️';
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Initialize Swiper and GLightbox after DOM loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing Swiper and GLightbox...');
  
  // Initialize Swiper for Device Carousel (Respiratory Device)
  const deviceSwiper = new Swiper('.device-carousel', {
    // Basic settings
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    
    // Autoplay
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.device-carousel .swiper-button-next',
      prevEl: '.device-carousel .swiper-button-prev',
    },
    
    // Pagination dots
    pagination: {
      el: '.device-carousel .swiper-pagination',
      clickable: true,
    },
    
    // Keyboard control
    keyboard: {
      enabled: true,
    },
    
    // Touch settings
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    
    // Effect
    effect: 'slide',
    
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    }
  });

  // Initialize Swiper for HVAC Carousel
  const hvacSwiper = new Swiper('.hvac-carousel', {
    // Basic settings
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    
    // Autoplay
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.hvac-carousel .swiper-button-next',
      prevEl: '.hvac-carousel .swiper-button-prev',
    },
    
    // Pagination dots
    pagination: {
      el: '.hvac-carousel .swiper-pagination',
      clickable: true,
    },
    
    // Keyboard control
    keyboard: {
      enabled: true,
    },
    
    // Touch settings
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    
    // Effect
    effect: 'slide',
    
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    }
  });

  // Initialize Swiper for System Architect Carousel
  const systemSwiper = new Swiper('.system-carousel', {
    // Basic settings
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    
    // Autoplay
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.system-carousel .swiper-button-next',
      prevEl: '.system-carousel .swiper-button-prev',
    },
    
    // Pagination dots
    pagination: {
      el: '.system-carousel .swiper-pagination',
      clickable: true,
    },
    
    // Keyboard control
    keyboard: {
      enabled: true,
    },
    
    // Touch settings
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    
    // Effect
    effect: 'slide',
    
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    }
  });

  // Initialize Swiper for Data Scientist Carousel
  const dataSwiper = new Swiper('.data-carousel', {
    // Basic settings
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    
    // Autoplay
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.data-carousel .swiper-button-next',
      prevEl: '.data-carousel .swiper-button-prev',
    },
    
    // Pagination dots
    pagination: {
      el: '.data-carousel .swiper-pagination',
      clickable: true,
    },
    
    // Keyboard control
    keyboard: {
      enabled: true,
    },
    
    // Touch settings
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    
    // Effect
    effect: 'slide',
    
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    }
  });

  // Initialize Swiper for Research Assistant Carousel
  const raSwiper = new Swiper('.ra-carousel', {
    // Basic settings
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    
    // Autoplay
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.ra-carousel .swiper-button-next',
      prevEl: '.ra-carousel .swiper-button-prev',
    },
    
    // Pagination dots
    pagination: {
      el: '.ra-carousel .swiper-pagination',
      clickable: true,
    },
    
    // Keyboard control
    keyboard: {
      enabled: true,
    },
    
    // Touch settings
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    
    // Effect
    effect: 'slide',
    
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    }
  });
  
  // Initialize GLightbox for image popup
  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: false,
    zoomable: false,  // Disable zoom button
    draggable: false, // Disable dragging
    closeButton: true, // Keep close button
    touchFollowAxis: false,
    keyboardNavigation: true,
    descPosition: 'bottom',
    skin: 'clean',  // Use clean skin for better customization
    moreText: 'See more',
    moreLength: 60,
    openEffect: 'fade',
    closeEffect: 'fade',
    slideEffect: 'slide',
    width: '80vw',  // Set width to 80% of viewport width
    height: '80vh', // Set height to 80% of viewport height
    plyr: {
      css: false,
      js: false
    },
    svg: {
      close: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>',
      next: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6l6 6-6 6"/></svg>',
      prev: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6l-6 6 6 6"/></svg>'
    }
  });
  
  console.log('✅ Swiper and GLightbox initialized successfully!');
});



