// ─── Page Renderers ───

// Utility: animate elements when they enter viewport
function observeElements(selector) {
  requestAnimationFrame(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
  });
}

// ════════════════════════════════════════════
//  HOME / BRAND PAGE
// ════════════════════════════════════════════
function renderHomePage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <!-- Hero Section -->
    <section class="hero" id="hero-section">
      <div class="hero-bg">
        <img src="images/hero.png" alt="Re:Han Camellia" class="hero-bg-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge fade-up">OneThera by Re:Han</div>
        <h1 class="hero-title fade-up">
          <span class="hero-title-accent">'</span>Re<span class="hero-title-sep">:</span>Han
        </h1>
        <p class="hero-slogan fade-up">${BRAND.slogan}</p>
        <p class="hero-description fade-up">${BRAND.description}</p>
        <a href="#/products" class="hero-cta fade-up" id="hero-cta-btn">
          제품 라인업 보기
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
      <div class="hero-scroll-indicator fade-up">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <!-- Brand Philosophy -->
    <section class="brand-section" id="brand-philosophy">
      <div class="container">
        <div class="section-header">
          <span class="section-label fade-up">BRAND PHILOSOPHY</span>
          <h2 class="section-title fade-up">자연과 과학의 조화</h2>
          <p class="section-subtitle fade-up">
            Re:Han은 한국의 전통 뷰티 지혜와 현대 피부과학을 결합하여,<br class="hide-mobile" />
            글로벌 소비자를 위한 프리미엄 스킨케어를 선보입니다.
          </p>
        </div>
        <div class="philosophy-grid">
          ${BRAND.philosophy
            .map(
              (item, i) => `
            <div class="philosophy-card fade-up" style="transition-delay:${i * 0.12}s" id="philosophy-${i}">
              <div class="philosophy-icon">${item.icon}</div>
              <h3 class="philosophy-title">${item.title}</h3>
              <p class="philosophy-text">${item.text}</p>
              <div class="philosophy-line"></div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- Brand Story -->
    <section class="story-section" id="brand-story">
      <div class="container">
        <div class="story-grid">
          <div class="story-visual fade-up">
            <div class="story-logo-box">
              <span class="story-logo-accent">'</span>Re<span class="story-logo-sep">:</span>Han
            </div>
            <div class="story-ornament">
              <svg viewBox="0 0 200 200" class="ornament-svg">
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(183,142,78,0.2)" stroke-width="1"/>
                <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(183,142,78,0.15)" stroke-width="1"/>
                <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(183,142,78,0.1)" stroke-width="1"/>
              </svg>
            </div>
          </div>
          <div class="story-content fade-up">
            <span class="section-label">OUR STORY</span>
            <h2 class="story-title">Less for Us,<br/>More for the World</h2>
            <div class="story-divider"></div>
            <p class="story-text">
              Re:Han은 "우리를 위해서는 조금 덜, 세상을 위해서는 조금 더"라는 철학을 바탕으로 탄생한 프로페셔널 화장품 브랜드입니다.
            </p>
            <p class="story-text">
              축적된 국제 영업 경험과 한국 스킨케어의 강점을 결합하여, 글로벌 소비자들에게 진정으로 효과적이고 지속 가능한 뷰티 솔루션을 제안합니다.
            </p>
            <p class="story-text">
              OneThera 라인은 Re:Han의 핵심 브랜드로, 피부과학 기반의 고효능 스킨케어 제품을 선보이며, "하나의 테라피"라는 의미처럼 각 제품이 피부에 맞춤 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Teaser -->
    <section class="featured-section" id="featured-products">
      <div class="container">
        <div class="section-header">
          <span class="section-label fade-up">FEATURED</span>
          <h2 class="section-title fade-up">대표 제품</h2>
        </div>
        <div class="featured-grid">
          ${PRODUCTS.slice(0, 3)
            .map(
              (p, i) => `
            <a href="#/product/${p.id}" class="featured-card fade-up" style="transition-delay:${i * 0.1}s" id="featured-${p.id}">
              <div class="featured-img-wrap">
                <img src="${p.image}" alt="${p.brand} ${p.code} ${p.name}" loading="lazy" />
                ${p.badge ? `<span class="product-badge badge-${p.badge.toLowerCase()}">${p.badge}</span>` : ""}
              </div>
              <div class="featured-info">
                <span class="featured-brand">${p.brand}</span>
                <h3 class="featured-name">${p.code} ${p.name}</h3>
                <p class="featured-name-kr">${p.nameKr}</p>
                <span class="featured-price">${p.price}</span>
              </div>
            </a>
          `
            )
            .join("")}
        </div>
        <div class="featured-cta-wrap fade-up">
          <a href="#/products" class="btn-outline" id="view-all-products-btn">
            전체 제품 보기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `;

  // Trigger animations
  observeElements(".fade-up");
}

// ════════════════════════════════════════════
//  PRODUCTS LIST PAGE
// ════════════════════════════════════════════
function renderProductsPage() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <section class="page-hero" id="products-hero">
      <div class="container">
        <span class="section-label fade-up">ONETHERA LINEUP</span>
        <h1 class="page-hero-title fade-up">제품 라인업</h1>
        <p class="page-hero-subtitle fade-up">
          피부과학 기반의 고효능 스킨케어, OneThera의 모든 제품을 만나보세요.
        </p>
      </div>
    </section>

    <section class="products-section" id="products-grid-section">
      <div class="container">
        <!-- Category Filter -->
        <div class="product-filters fade-up" id="product-filters">
          <button class="filter-btn active" data-filter="all">전체</button>
          ${[...new Set(PRODUCTS.map((p) => p.category))]
            .map(
              (cat) =>
                `<button class="filter-btn" data-filter="${cat}">${cat}</button>`
            )
            .join("")}
        </div>

        <div class="products-grid" id="products-grid">
          ${PRODUCTS.map(
            (p, i) => `
            <a href="#/product/${p.id}" class="product-card fade-up" data-category="${p.category}" style="transition-delay:${i * 0.06}s" id="product-card-${p.id}">
              <div class="product-card-img">
                <img src="${p.image}" alt="${p.brand} ${p.code} ${p.name}" loading="lazy" />
                ${p.badge ? `<span class="product-badge badge-${p.badge.toLowerCase()}">${p.badge}</span>` : ""}
                <div class="product-card-overlay">
                  <span class="overlay-text">자세히 보기</span>
                </div>
              </div>
              <div class="product-card-info">
                <div class="product-card-top">
                  <span class="product-card-brand">${p.brand}</span>
                  <span class="product-card-category">${p.category}</span>
                </div>
                <h3 class="product-card-name">${p.code} ${p.name}</h3>
                <p class="product-card-name-kr">${p.nameKr}</p>
                <p class="product-card-desc">${p.shortDesc}</p>
                <div class="product-card-bottom">
                  <span class="product-card-price">${p.price}</span>
                  <span class="product-card-volume">${p.volume}</span>
                </div>
              </div>
            </a>
          `
          ).join("")}
        </div>
      </div>
    </section>
  `;

  // Filter functionality
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".product-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "";
          requestAnimationFrame(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          });
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });

  observeElements(".fade-up");
}

// ════════════════════════════════════════════
//  PRODUCT DETAIL PAGE
// ════════════════════════════════════════════
function renderProductDetailPage(params) {
  const product = PRODUCTS.find((p) => p.id === params.id);
  if (!product) {
    document.getElementById("app").innerHTML = `
      <section class="error-section">
        <div class="container">
          <h1>제품을 찾을 수 없습니다</h1>
          <a href="#/products" class="btn-outline">제품 목록으로 돌아가기</a>
        </div>
      </section>
    `;
    return;
  }

  // Find related products (same category, excluding current)
  const related = PRODUCTS.filter(
    (p) => p.id !== product.id
  ).slice(0, 3);

  const app = document.getElementById("app");
  app.innerHTML = `
    <!-- Breadcrumb -->
    <div class="breadcrumb" id="detail-breadcrumb">
      <div class="container">
        <a href="#/">홈</a>
        <span class="breadcrumb-sep">›</span>
        <a href="#/products">제품</a>
        <span class="breadcrumb-sep">›</span>
        <span class="breadcrumb-current">${product.code} ${product.name}</span>
      </div>
    </div>

    <!-- Product Detail Hero -->
    <section class="detail-hero" id="detail-hero">
      <div class="container">
        <div class="detail-grid">
          <div class="detail-image fade-up" id="detail-image">
            <div class="detail-image-inner">
              ${product.badge ? `<span class="product-badge badge-${product.badge.toLowerCase()} detail-badge">${product.badge}</span>` : ""}
              <img src="${product.image}" alt="${product.brand} ${product.code} ${product.name}" />
            </div>
          </div>
          <div class="detail-info fade-up">
            <span class="detail-brand">${product.brand}</span>
            <h1 class="detail-title" id="detail-title">${product.code} ${product.name}</h1>
            <p class="detail-title-kr">${product.nameKr}</p>
            <div class="detail-meta">
              <span class="detail-price">${product.price}</span>
              <span class="detail-volume">${product.volume}</span>
            </div>
            <div class="detail-divider"></div>
            <p class="detail-description">${product.description}</p>
            <div class="detail-highlights">
              <h3 class="detail-highlights-title">주요 특징</h3>
              <ul class="detail-highlights-list">
                ${product.highlights
                  .map(
                    (h) => `
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    ${h}
                  </li>
                `
                  )
                  .join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Detail Tabs -->
    <section class="detail-tabs-section" id="detail-tabs-section">
      <div class="container">
        <div class="detail-tabs" id="detail-tabs">
          <button class="detail-tab active" data-tab="ingredients">핵심 성분</button>
          <button class="detail-tab" data-tab="howtouse">사용 방법</button>
        </div>
        <div class="detail-tab-content">
          <div class="tab-panel active" id="tab-ingredients">
            <div class="ingredients-grid">
              ${product.ingredients
                .map(
                  (ing, i) => `
                <div class="ingredient-card fade-up" style="transition-delay:${i * 0.08}s">
                  <div class="ingredient-number">${String(i + 1).padStart(2, "0")}</div>
                  <h4 class="ingredient-name">${ing.name}</h4>
                  <p class="ingredient-desc">${ing.desc}</p>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
          <div class="tab-panel" id="tab-howtouse">
            <div class="howtouse-content">
              <div class="howtouse-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <p class="howtouse-text">${product.howToUse}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Products -->
    <section class="related-section" id="related-products">
      <div class="container">
        <div class="section-header">
          <span class="section-label fade-up">YOU MAY ALSO LIKE</span>
          <h2 class="section-title fade-up">추천 제품</h2>
        </div>
        <div class="related-grid">
          ${related
            .map(
              (p, i) => `
            <a href="#/product/${p.id}" class="product-card fade-up" style="transition-delay:${i * 0.08}s" id="related-${p.id}">
              <div class="product-card-img">
                <img src="${p.image}" alt="${p.brand} ${p.code} ${p.name}" loading="lazy" />
                ${p.badge ? `<span class="product-badge badge-${p.badge.toLowerCase()}">${p.badge}</span>` : ""}
                <div class="product-card-overlay">
                  <span class="overlay-text">자세히 보기</span>
                </div>
              </div>
              <div class="product-card-info">
                <div class="product-card-top">
                  <span class="product-card-brand">${p.brand}</span>
                  <span class="product-card-category">${p.category}</span>
                </div>
                <h3 class="product-card-name">${p.code} ${p.name}</h3>
                <p class="product-card-name-kr">${p.nameKr}</p>
                <div class="product-card-bottom">
                  <span class="product-card-price">${p.price}</span>
                  <span class="product-card-volume">${p.volume}</span>
                </div>
              </div>
            </a>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  // Tab functionality
  const tabBtns = document.querySelectorAll(".detail-tab");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document
        .getElementById("tab-" + btn.dataset.tab)
        .classList.add("active");
    });
  });

  observeElements(".fade-up");
}
