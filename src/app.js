/**
 * SYRPETRO Smart Platform - Main Application
 * Meshhadani International Group - 2027
 */

document.addEventListener('DOMContentLoaded', function() {
  // Set theme
  document.documentElement.setAttribute('data-theme', 'light');
  
  // Load app container
  const root = document.getElementById('root');
  root.innerHTML = renderMainApp();
  
  // Initialize event listeners
  initializeEventListeners();
  
  console.log('🎉 SYRPETRO Platform loaded successfully!');
});

function renderMainApp() {
  return `
    <div class="app-container">
      ${renderHeader()}
      ${renderHeroSection()}
      ${renderModulesSection()}
      ${renderHallsSection()}
      ${renderSponsorsSection()}
      ${renderFooter()}
    </div>
  `;
}

function renderHeader() {
  return `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo-section">
            <h1 class="logo-text">🔴 SYRPETRO</h1>
            <p class="logo-subtitle">منصة المعرض الذكية</p>
          </div>
          <nav class="nav">
            <a href="#modules" class="nav-link">المنصات</a>
            <a href="#halls" class="nav-link">القاعات</a>
            <a href="#sponsors" class="nav-link">الراعون</a>
            <button class="btn btn-primary" onclick="alert('قريباً: تسجيل دخول')">دخول</button>
          </nav>
        </div>
      </div>
    </header>
  `;
}

function renderHeroSection() {
  return `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>معرض الطاقة والبترول الدولي</h1>
          <p class="hero-subtitle">Syria International Petroleum, Energy & Mineral Wealth Expo</p>
          <p class="hero-description">
            منصة ذكية متقدمة تجمع بين الزوار والعارضين والشركات الكبرى في قطاع الطاقة والبترول
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary" onclick="alert('تسجيل الزوار - قريباً')">تسجيل زائر</button>
            <button class="btn btn-secondary" onclick="alert('دخول العارض - قريباً')">دخول العارض</button>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <h3>120</h3>
              <p>عارض</p>
            </div>
            <div class="stat-item">
              <h3>3</h3>
              <p>قاعات</p>
            </div>
            <div class="stat-item">
              <h3>5,300 م²</h3>
              <p>المساحة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderModulesSection() {
  const modules = [
    {
      id: 'visitor',
      icon: '👥',
      title: 'تطبيق الزائر',
      description: 'معاينة تفاعلية - خرائط، تذاكر رقمية، وبحث ذكي',
      features: ['خريطة تفاعلية', 'تذكرة QR', 'معلومات العارضين']
    },
    {
      id: 'exhibitor',
      icon: '🏢',
      title: 'بوابة العارض',
      description: 'إدارة الفرص الذهبية والتحليلات الفورية',
      features: ['ماسح الرموز QR', 'تصنيف الفرص', 'تصدير البيانات']
    },
    {
      id: 'organizer',
      icon: '🎛️',
      title: 'مركز العمليات',
      description: 'لوحة التحكم الرئيسية للمنظمين والإداريين',
      features: ['تحليلات فورية', 'خريطة حرارية', 'إدارة الدعم']
    },
    {
      id: 'ai',
      icon: '🤖',
      title: 'مساعد ذكي',
      description: 'محرك بحث بالذكاء الاصطناعي للمنتجات والعارضين',
      features: ['بحث ذكي', 'توصيات شخصية', 'تتبع الاهتمامات']
    }
  ];
  
  let html = '<section id="modules" class="modules-section"><div class="container"><h2>منصات المشروع</h2><div class="modules-grid">';
  
  modules.forEach(module => {
    html += `
      <div class="module-card card">
        <div class="module-icon">${module.icon}</div>
        <h3>${module.title}</h3>
        <p class="module-description">${module.description}</p>
        <ul class="features-list">
          ${module.features.map(f => `<li>✓ ${f}</li>`).join('')}
        </ul>
        <button class="btn btn-primary btn-full" onclick="alert('المزيد عن ${module.title}')">
          معرفة المزيد
        </button>
      </div>
    `;
  });
  
  html += '</div></div></section>';
  return html;
}

function renderHallsSection() {
  const halls = [
    {
      name: 'قاعة 1',
      area: '1,500',
      booths: '35',
      features: 'قاعة محاضرات، منطقة VIP، منطقة B2B',
      sponsors: 'ENOC, Novaterra Energy, ConocoPhillips'
    },
    {
      name: 'قاعة 2',
      area: '1,800',
      booths: '40',
      features: 'منطقة الزيوت، الطاقة، الآلات الثقيلة',
      sponsors: 'Oscar Lubricants, LUKOIL, Bizol'
    },
    {
      name: 'قاعة 25',
      area: '2,000',
      booths: '45',
      features: 'الاستقبال الرئيسي، غرفة الصحافة، الخدمات',
      sponsors: 'SPC, UCC Holding, Chamco Petroleum'
    }
  ];
  
  let html = '<section id="halls" class="halls-section"><div class="container"><h2>القاعات والمعارض</h2><div class="halls-grid">';
  
  halls.forEach(hall => {
    html += `
      <div class="hall-card card">
        <h3>${hall.name}</h3>
        <div class="hall-stats">
          <div class="stat"><strong>${hall.area}</strong> <span>متر مربع</span></div>
          <div class="stat"><strong>${hall.booths}</strong> <span>عارض</span></div>
        </div>
        <div class="hall-info">
          <p><strong>المميزات:</strong> ${hall.features}</p>
          <p><strong>الراعون الرئيسيون:</strong> ${hall.sponsors}</p>
        </div>
        <button class="btn btn-primary btn-full" onclick="showHallDetails('${hall.name}')">
          عرض الخريطة
        </button>
      </div>
    `;
  });
  
  html += '</div></div></section>';
  return html;
}

function renderSponsorsSection() {
  const sponsors = [
    { tier: 'البلاتينيوم', companies: ['ENOC (الإمارات)', 'Novaterra Energy', 'ConocoPhillips', 'Oscar Lubricants'] },
    { tier: 'الذهب', companies: ['SPC (الشركة السورية القابضة)', 'UCC Holding', 'LUKOIL', 'Bizol'] },
    { tier: 'الماسي', companies: ['Chamco Petroleum', 'Island Petroleum', 'Al-Badr Institute', 'UNI GAZ'] }
  ];
  
  let html = '<section id="sponsors" class="sponsors-section"><div class="container"><h2>الراعون والشركاء</h2><div class="sponsors-grid">';
  
  sponsors.forEach(group => {
    html += `
      <div class="sponsor-group">
        <h3 class="sponsor-tier">${group.tier}</h3>
        <ul class="sponsor-list">
          ${group.companies.map(c => `<li>• ${c}</li>`).join('')}
        </ul>
      </div>
    `;
  });
  
  html += '</div></div></section>';
  return html;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>عن المعرض</h4>
            <p>معرض سيربترول الدولي لقطاع الطاقة والبترول والثروات المعدنية، تنظيم مجموعة مشهداني الدولية</p>
          </div>
          <div class="footer-section">
            <h4>روابط سريعة</h4>
            <ul>
              <li><a href="#">عن المنصة</a></li>
              <li><a href="#">اتصل بنا</a></li>
              <li><a href="#">سياسة الخصوصية</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>تابعنا</h4>
            <p>Facebook • Twitter • LinkedIn • Instagram</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026-2027 SYRPETRO | Meshhadani International Group | جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  `;
}

function initializeEventListeners() {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function showHallDetails(hallName) {
  alert(`معاينة خريطة ${hallName}\n\nقريباً: خريطة تفاعلية كاملة بتفاصيل جميع العارضين والخدمات`);
}
