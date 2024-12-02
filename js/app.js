// 상수 데이터
const quickCategories = [
    { name: "로켓배송", icon: "🚀", link: "/rocket-delivery" },
    { name: "로켓프레시", icon: "🥬", link: "/rocket-fresh" },
    { name: "쿠팡비즈", icon: "💼", link: "/coupang-biz" },
    { name: "로켓직구", icon: "✈️", link: "/global" },
    { name: "골드박스", icon: "📦", link: "/goldbox" },
    { name: "와우회원할인", icon: "🏷️", link: "/wow-discount" },
    { name: "이벤트/쿠폰", icon: "🎉", link: "/events" },
    { name: "기획전", icon: "🎯", link: "/promotions" }
];

// 판매자 특가 데이터
const sellerDeals = [
    {
        id: 1,
        name: "[산지직송] 24년산 햅쌀 햇발250m첩원평양 철분",
        price: 43000,
        image: "/assets/images/seller1.jpg",
        rating: 4.5,
        reviews: 1064,
        badge: "특가진행중"
    },
    {
        id: 2,
        name: "제주도 서귀포 노지 하우스 고당도 골 밀감 감귤",
        price: 14600,
        image: "/assets/images/seller2.jpg",
        rating: 4.0,
        reviews: 2741,
        badge: "특가진행중"
    },
    {
        id: 3,
        name: "크리스피 허니 눈꽃 쌀과자, 800g, 1개",
        price: 18990,
        image: "/assets/images/seller3.jpg",
        rating: 4.8,
        reviews: 33821,
        badge: "특가진행중"
    },
    {
        id: 4,
        name: "농촌남자 경산 햇 대추, 1kg(특초), 1개",
        price: 25900,
        image: "/assets/images/seller4.jpg",
        rating: 4.5,
        reviews: 644,
        badge: "특가진행중"
    },
    {
        id: 5,
        name: "맛있는 후리가케 밥료루 주먹밥 김맛 북타입",
        price: 11030,
        image: "/assets/images/seller5.jpg",
        rating: 4.5,
        reviews: 904,
        badge: "특가진행중"
    }
];

// 글로벌 특가 데이터
const globalDeals = [
    {
        id: 1,
        name: "[특가] 탑시엔프즈 접이식 캠핑 웨건 다용도 아웃도어 캠핑카트",
        originalPrice: 59900,
        salePrice: 23900,
        discount: 60,
        image: "/assets/images/product1.jpg",
        rating: 4.5,
        reviews: 2085,
        badge: "로켓배송"
    },
    {
        id: 2,
        name: "[카드할인] Jin Zhong Tai 일본식 세라믹 찬기 세트, 17개, 세트 A",
        originalPrice: 25000,
        salePrice: 8630,
        discount: 66,
        image: "/assets/images/product2.jpg",
        rating: 4.5,
        reviews: 1637,
        badge: "로켓배송"
    },
    {
        id: 3,
        name: "필립스 무선충전 접이식 스탠드, 화이트",
        originalPrice: 9000,
        salePrice: 1520,
        discount: 83,
        image: "/assets/images/product3.jpg",
        rating: 4.5,
        reviews: 1434,
        badge: "로켓배송"
    },
    {
        id: 4,
        name: "Jin Zhong Tai 세라믹 접시 세트, 9개, 레트로라인+옐로우",
        originalPrice: 13900,
        salePrice: 8100,
        discount: 42,
        image: "/assets/images/product4.jpg",
        rating: 4.5,
        reviews: 640,
        badge: "로켓배송"
    },
    {
        id: 5,
        name: "Fveja'Siv 설겔 알루미늄 가정용 웍그릇, 20cm, 화이트, 1개",
        originalPrice: 37000,
        salePrice: 11800,
        discount: 68,
        image: "/assets/images/product5.jpg",
        rating: 4.5,
        reviews: 1567,
        badge: "로켓배송"
    }
];

// DOM 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', () => {
    initializeQuickCategories();
    initializeSellerDeals();
    initializeGlobalDeals();
    initializeSearchForm();
});

// 판매자 특가용 상품 카드 생성 함수
function createSellerProductCard(product) {
    return `
        <div class="product-card" onclick="location.href='/products/seller/${product.id}'">
            <div class="product-image-wrap">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <span class="special-badge">${product.badge}</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="price-wrap">
                    <span class="price">${product.price.toLocaleString()}원</span>
                </div>
                <div class="rating-wrap">
                    <span class="rating-stars">★</span>
                    <span class="rating">${product.rating}</span>
                    <span>(${product.reviews.toLocaleString()})</span>
                </div>
            </div>
        </div>
    `;
}

// 글로벌특가용 상품 카드 생성 함수
function createGlobalProductCard(product) {
    return `
        <div class="product-card" onclick="location.href='/products/global/${product.id}'">
            <div class="product-image-wrap">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <span class="discount-badge">지금 ${product.discount}% 할인 중</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="price-wrap">
                    <div>
                        <span class="discount-rate">${product.discount}%</span>
                        <span class="price">${product.salePrice.toLocaleString()}원</span>
                    </div>
                    <div class="original-price">${product.originalPrice.toLocaleString()}원</div>
                </div>
                <div class="rocket-badge">${product.badge}</div>
                <div class="rating-wrap">
                    <span class="rating-stars">★</span>
                    <span class="rating">${product.rating}</span>
                    <span>(${product.reviews.toLocaleString()})</span>
                </div>
            </div>
        </div>
    `;
}

// 퀵 카테고리 초기화
function initializeQuickCategories() {
    const container = document.getElementById('quickCategories');
    if (!container) return;

    container.innerHTML = quickCategories.map(category => `
        <a href="${category.link}" class="category-item">
            <span class="category-icon">${category.icon}</span>
            <span>${category.name}</span>
        </a>
    `).join('');
}

// 판매자 특가 초기화
function initializeSellerDeals() {
    const container = document.getElementById('sellerDeals');
    if (!container) return;

    container.innerHTML = sellerDeals.map(product => createSellerProductCard(product)).join('');
}

// 글로벌 특가 초기화
function initializeGlobalDeals() {
    const container = document.getElementById('globalDeals');
    if (!container) return;

    container.innerHTML = globalDeals.map(product => createGlobalProductCard(product)).join('');
}

// 검색 폼 초기화
function initializeSearchForm() {
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');
    if (!form || !input) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = input.value.trim();
        if (query) {
            location.href = `/pages/search?query=${encodeURIComponent(query)}`;
        }
    });
}