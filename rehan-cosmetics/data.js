// ─── Re:Han OneThera Product Data ───
const PRODUCTS = [
  {
    id: "a1-serum",
    code: "A-1",
    name: "Premium Vitality Serum",
    nameKr: "프리미엄 바이탈리티 세럼",
    brand: "OneThera",
    category: "세럼",
    image: "images/serum.png",
    price: "₩68,000",
    volume: "50ml / 1.69 fl. oz.",
    shortDesc: "히알루론산 & 인삼 추출물로 피부에 깊은 활력을 선사하는 프리미엄 세럼",
    description:
      "OneThera A-1 Premium Vitality Serum은 고농축 히알루론산과 한국산 인삼 추출물을 핵심 성분으로 담아, 피부 깊숙이 수분과 활력을 전달합니다. 가벼운 텍스처로 빠르게 흡수되며, 지속적인 사용으로 피부결이 정돈되고 생기 있는 광채를 되찾을 수 있습니다.",
    highlights: [
      "고농축 히알루론산이 피부 깊숙이 수분 공급",
      "한국산 인삼 추출물로 피부 활력 증진",
      "가벼운 텍스처, 빠른 흡수력",
      "모든 피부 타입에 사용 가능",
    ],
    ingredients: [
      { name: "Hyaluronic Acid", desc: "다단계 수분 공급 및 보습 장벽 강화" },
      { name: "Ginseng Extract", desc: "피부 활력 증진 및 탄력 개선" },
      { name: "Niacinamide", desc: "피부톤 균일화 및 모공 관리" },
      { name: "Panthenol", desc: "피부 진정 및 보호막 형성" },
    ],
    howToUse:
      "세안 후 토너로 피부를 정돈한 다음, 적당량을 손에 덜어 얼굴과 목에 부드럽게 펴 발라 주세요. 아침 · 저녁 사용을 권장합니다.",
    badge: "BEST",
  },
  {
    id: "c2-cream",
    code: "C-2",
    name: "Brightening Cream",
    nameKr: "브라이트닝 크림",
    brand: "OneThera",
    category: "크림",
    image: "images/cream.png",
    price: "₩78,000",
    volume: "50ml",
    shortDesc: "고성능 브라이트닝 포뮬러로 환한 피부결을 완성하는 프리미엄 크림",
    description:
      "OneThera C-2 Brightening Cream은 비타민C 유도체와 알파아르부틴을 결합한 고성능 미백 포뮬러로, 칙칙한 피부톤을 환하게 가꿔줍니다. 풍부한 보습력으로 피부를 촉촉하게 감싸며, 화사하고 건강한 피부 광채를 오래 유지시켜 줍니다.",
    highlights: [
      "비타민C 유도체 & 알파아르부틴 듀얼 브라이트닝",
      "풍부한 보습력으로 촉촉한 피부 유지",
      "멜라닌 생성 억제로 고른 피부톤",
      "Made in Korea 프리미엄 포뮬러",
    ],
    ingredients: [
      {
        name: "Vitamin C Derivative",
        desc: "항산화 작용 및 피부톤 개선",
      },
      { name: "Alpha-Arbutin", desc: "멜라닌 생성 억제, 미백 효과" },
      { name: "Shea Butter", desc: "깊은 보습 및 피부 보호" },
      { name: "Centella Asiatica", desc: "피부 진정 및 재생 촉진" },
    ],
    howToUse:
      "스킨케어의 마지막 단계에서 적당량을 덜어 얼굴과 목에 부드럽게 발라주세요. 밤 사용 시 더욱 효과적입니다.",
    badge: "NEW",
  },
  {
    id: "b1-toner",
    code: "B-1",
    name: "Hydrating Toner",
    nameKr: "하이드레이팅 토너",
    brand: "OneThera",
    category: "토너",
    image: "images/toner.png",
    price: "₩45,000",
    volume: "150ml / 5.07 fl. oz.",
    shortDesc: "트리플 히알루론 컴플렉스로 촉촉한 피부 장벽을 완성하는 토너",
    description:
      "OneThera B-1 Hydrating Toner는 트리플 히알루론 컴플렉스를 담은 어드밴스드 배리어 리페어 토너입니다. 세 가지 분자 크기의 히알루론산이 피부 깊숙한 층부터 표면까지 촘촘하게 수분을 채우고, 손상된 피부 장벽을 복원하여 촉촉하고 건강한 피부를 가꿔줍니다.",
    highlights: [
      "트리플 히알루론 컴플렉스 – 3중 보습",
      "어드밴스드 배리어 리페어 기술",
      "촉촉하고 밸런스 잡힌 피부 컨디션",
      "약산성 포뮬러로 민감한 피부에도 순한 사용감",
    ],
    ingredients: [
      {
        name: "Triple Hyaluronic Complex",
        desc: "다양한 분자 크기로 층층 수분 공급",
      },
      {
        name: "Ceramide NP",
        desc: "피부 장벽 강화 및 수분 손실 방지",
      },
      { name: "Betaine", desc: "천연 보습 인자로 피부 진정" },
      { name: "Allantoin", desc: "피부 보호 및 컨디셔닝" },
    ],
    howToUse:
      "세안 후 적당량을 화장솜이나 손바닥에 덜어 얼굴 전체에 가볍게 두드리며 흡수시켜 주세요.",
    badge: null,
  },
  {
    id: "d3-essence",
    code: "D-3",
    name: "Rejuvenating Essence",
    nameKr: "리쥬버네이팅 에센스",
    brand: "OneThera",
    category: "에센스",
    image: "images/essence.png",
    price: "₩89,000",
    volume: "15ml / 0.5 fl. oz.",
    shortDesc: "안티에이징 · 활력 · 수분 삼박자를 갖춘 고농축 리쥬버네이팅 에센스",
    description:
      "OneThera D-3 Rejuvenating Essence는 안티에이징, 활력, 수분의 삼박자를 모두 갖춘 고농축 에센스입니다. 한 방울로 피부에 깊은 영양을 전달하며, 탄력 개선과 주름 관리에 집중적인 효과를 발휘합니다. 소량으로도 강력한 효능을 발휘하는 프리미엄 안티에이징 솔루션입니다.",
    highlights: [
      "Anti-Aging · Vitality · Hydration 트리플 효과",
      "고농축 포뮬러, 소량으로 강력한 효능",
      "Formulated in Korea – 한국 제조",
      "골드 앰플 디자인의 럭셔리 패키징",
    ],
    ingredients: [
      { name: "Retinol", desc: "세포 재생 촉진 및 주름 개선" },
      { name: "Peptide Complex", desc: "피부 탄력 강화 및 리프팅" },
      { name: "Squalane", desc: "고보습 및 피부 유연성 개선" },
      { name: "Gold Extract", desc: "피부 광채 및 안티에이징" },
    ],
    howToUse:
      "토너 후 2~3방울을 손끝에 덜어 얼굴 전체에 가볍게 탭핑하며 흡수시켜 주세요. 매일 아침 · 저녁 사용을 권장합니다.",
    badge: "PREMIUM",
  },
  {
    id: "e1-cleanser",
    code: "E-1",
    name: "Gentle Cleanser",
    nameKr: "젠틀 클렌저",
    brand: "OneThera",
    category: "클렌저",
    image: "images/cleanser.png",
    price: "₩38,000",
    volume: "200ml / 6.76 fl. oz.",
    shortDesc: "밸런싱 & 모이스처라이징 포뮬러로 부드럽게 세정하는 젠틀 클렌저",
    description:
      "OneThera E-1 Gentle Cleanser는 밸런싱 & 모이스처라이징 포뮬러로, 피부의 천연 수분을 지키면서도 꼼꼼하게 세정합니다. 순한 성분으로 민감한 피부에도 자극 없이 사용할 수 있으며, 세안 후에도 당김 없이 촉촉한 피부를 유지합니다.",
    highlights: [
      "밸런싱 & 모이스처라이징 포뮬러",
      "민감한 피부에도 순한 저자극 세정",
      "세안 후 당김 없는 촉촉한 마무리",
      "Made in Korea 프리미엄 클렌저",
    ],
    ingredients: [
      {
        name: "Coconut-derived Surfactant",
        desc: "부드러운 거품, 순한 세정",
      },
      { name: "Glycerin", desc: "보습력 유지 및 피부 보호" },
      { name: "Tea Tree Extract", desc: "항균 및 피부 진정" },
      { name: "Chamomile Extract", desc: "민감 피부 진정 및 컨디셔닝" },
    ],
    howToUse:
      "적당량을 젖은 손에 덜어 부드럽게 거품을 낸 후, 얼굴에 원을 그리며 마사지하고 미온수로 깨끗이 헹궈 주세요.",
    badge: null,
  },
  {
    id: "s1-sunscreen",
    code: "S-1",
    name: "UV Defense SPF 50+",
    nameKr: "UV 디펜스 선크림",
    brand: "OneThera",
    category: "선케어",
    image: "images/sunscreen.png",
    price: "₩42,000",
    volume: "50ml / 1.69 fl. oz.",
    shortDesc: "브로드 스펙트럼 PA++++ 자외선 차단과 보습을 동시에 제공하는 프리미엄 선크림",
    description:
      "OneThera S-1 UV Defense SPF 50+는 강력한 브로드 스펙트럼 PA++++ 자외선 차단 효과와 보습력을 동시에 제공하는 프리미엄 선크림입니다. 가벼운 텍스처로 백탁 없이 마무리되며, 일상과 야외 활동 모두에 적합한 데일리 선케어 솔루션입니다.",
    highlights: [
      "SPF 50+ · PA++++ 광범위 자외선 차단",
      "보습 & 프로텍티브 듀얼 케어",
      "백탁 없는 가벼운 텍스처",
      "Korean Skincare 프리미엄 포뮬러",
    ],
    ingredients: [
      {
        name: "Zinc Oxide",
        desc: "물리적 자외선 차단 (UVA/UVB)",
      },
      { name: "Hyaluronic Acid", desc: "보습 및 수분 유지" },
      { name: "Vitamin E", desc: "항산화 보호 및 피부 영양" },
      { name: "Centella Asiatica", desc: "자외선 스트레스로부터 진정" },
    ],
    howToUse:
      "외출 15~20분 전, 스킨케어 마지막 단계에서 적당량을 얼굴과 목에 고르게 발라 주세요. 2~3시간마다 덧바르면 효과적입니다.",
    badge: null,
  },
];

// Brand story data
const BRAND = {
  name: "'Re:Han",
  fullName: "Re:Han Cosmetics",
  slogan: "Less for Us, More for the World",
  subBrand: "OneThera",
  description:
    "글로벌 고객을 위한 프로페셔널 화장품 브랜드 Re:Han은 축적된 국제 영업 경험을 바탕으로 탄생했습니다.",
  philosophy: [
    {
      title: "Science & Nature",
      icon: "🔬",
      text: "첨단 피부과학 기술과 자연에서 영감 받은 성분의 조화. 과학적으로 검증된 효능을 자연 유래 원료로 구현합니다.",
    },
    {
      title: "Global Standard",
      icon: "🌏",
      text: "글로벌 시장에서의 풍부한 경험을 바탕으로, 세계 어디서나 신뢰할 수 있는 품질 기준을 적용합니다.",
    },
    {
      title: "Sustainable Beauty",
      icon: "🌿",
      text: "'Less for Us, More for the World' — 환경을 생각하는 지속 가능한 뷰티를 추구합니다.",
    },
  ],
};
