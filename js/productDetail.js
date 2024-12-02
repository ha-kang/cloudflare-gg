// 상품 데이터 - 판매자 특가
const sellerProducts = {
    "1": {
        id: 1,
        name: "[산지직송] 24년산 햅쌀 햇발250m첩원평양 철분",
        category: "식품",
        categoryPath: "식품 > 쌀/잡곡",
        price: 43000,
        image: "/assets/images/product1.jpg",
        badge: "특가진행중",
        rating: 4.5,
        reviews: 1064,
        description: `
            <h3>상품 필수 정보</h3>
            <table class="w-full border-collapse border border-gray-200 mb-4">
                <tr>
                    <th class="border border-gray-200 bg-gray-50 p-2">제품명</th>
                    <td class="border border-gray-200 p-2">24년산 햅쌀</td>
                </tr>
                <tr>
                    <th class="border border-gray-200 bg-gray-50 p-2">원산지</th>
                    <td class="border border-gray-200 p-2">국내산</td>
                </tr>
            </table>

            <h3>상품 상세 설명</h3>
            <p class="mb-4">전국 최고 품질의 햅쌀입니다.</p>
            
            <ul class="list-disc pl-5 mb-4">
                <li>신선한 햅쌀</li>
                <li>깨끗한 도정</li>
                <li>농부의 정성</li>
                <li>당일 출고</li>
            </ul>
        `
    },
    "2": {
        id: 2,
        name: "제주도 서귀포 노지 하우스 고당도 골 밀감 감귤",
        category: "식품",
        categoryPath: "식품 > 과일",
        price: 14600,
        image: "/assets/images/product2.jpg",
        badge: "특가진행중",
        rating: 4.0,
        reviews: 2741,
        description: `
            <h3>상품 필수 정보</h3>
            <table class="w-full border-collapse border border-gray-200 mb-4">
                <tr>
                    <th class="border border-gray-200 bg-gray-50 p-2">제품명</th>
                    <td class="border border-gray-200 p-2">제주 감귤</td>
                </tr>
                <tr>
                    <th class="border border-gray-200 bg-gray-50 p-2">원산지</th>
                    <td class="border border-gray-200 p-2">제주도</td>
                </tr>
            </table>

            <h3>상품 상세 설명</h3>
            <p class="mb-4">제주 서귀포의 달콤한 감귤입니다.</p>
        `
    }
    // 나머지 판매자 특가 상품들...
};

// 글로벌 특가 상품 데이터
const globalProducts = {
    "1": {
        id: 1,
        name: "[특가] 탑시엔프즈 접이식 캠핑 웨건",
        category: "캠핑/아웃도어",
        categoryPath: "스포츠/레저 > 캠핑 > 캠핑가구",
        originalPrice: 59900,
        salePrice: 23900,
        discount: 60,
        image: "/assets/images/product6.jpg",
        badge: "로켓배송",
        rating: 4.5,
        reviews: 2085,
        description: `
            <h3>상품 필수 정보</h3>
            <table class="w-full border-collapse border border-gray-200 mb-4">
                <tr>
                    <th class="border border-gray-200 bg-gray-50 p-2">제품명</th>
                    <td class="border border-gray-200 p-2">접이식 캠핑 웨건</td>
                </tr>
                <tr>
                    <th class="border border-gray-200 bg-gray-50 p-2">제조사</th>
                    <td class="border border-gray-200 p-2">탑시엔프즈</td>
                </tr>
            </table>
        `
    },
    "2": {
        id: 2,
        name: "[카드할인] Jin Zhong Tai 일본식 세라믹 찬기 세트",
        category: "주방용품",
        categoryPath: "주방용품 > 식기/접시",
        originalPrice: 25000,
        salePrice: 8630,
        discount: 66,
        image: "/assets/images/product7.jpg",
        badge: "로켓배송",
        rating: 4.5,
        reviews: 1637,
        description: `
            <h3>상품 필수 정보</h3>
            <table class="w-full border-collapse border border-gray-200 mb-4">
                <tr>
                    <th class="border border-gray-200 bg-gray-50 p-2">제품명</th>
                    <td class="border border-gray-200 p-2">세라믹 찬기 세트</td>
                </tr>
                <tr>
                    <th class="border border-gray-200 bg-gray-50 p-2">제조사</th>
                    <td class="border border-gray-200 p-2">Jin Zhong Tai</td>
                </tr>
            </table>
        `
    }
    // 나머지 글로벌 특가 상품들...
};

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    const { type, id } = getProductIdFromUrl();
    const product = type === 'seller' ? sellerProducts[id] : globalProducts[id];
    
    if (product) {
        displayProductDetails(product, type);
    } else {
        handleProductNotFound();
    }
});

// URL에서 상품 정보 추출
function getProductIdFromUrl() {
    const pathArray = window.location.pathname.split('/');
    // products/seller/1 형식에서 추출
    const type = pathArray[2];  // seller 또는 global
    const id = pathArray[3];    // 상품 ID
    return { type, id };
}

// 상품 정보 표시
function displayProductDetails(product, type) {
    // 기본 정보 업데이트
    document.title = `${product.name} - 쿠팡 클론`;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.name;
    document.getElementById('badgeText').textContent = product.badge;
    document.getElementById('categoryPath').textContent = product.categoryPath;

    // 가격 정보 업데이트 (타입에 따라 다르게 표시)
    if (type === 'global') {
        document.getElementById('discountPercent').textContent = `${product.discount}%`;
        document.getElementById('price').textContent = `${product.salePrice.toLocaleString()}원`;
        document.getElementById('originalPrice').textContent = `${product.originalPrice.toLocaleString()}원`;
    } else {
        document.getElementById('price').textContent = `${product.price.toLocaleString()}원`;
    }

    // 평점 및 리뷰 업데이트
    document.getElementById('ratingStars').textContent = '⭐'.repeat(Math.floor(product.rating));
    document.getElementById('reviewCount').textContent = `${product.reviews.toLocaleString()}개 평점`;

    // 상품 설명 업데이트
    document.getElementById('productDescription').innerHTML = product.description;
}

// 상품을 찾을 수 없을 때 처리
function handleProductNotFound() {
    alert('상품을 찾을 수 없습니다.');
    window.location.href = '/';
}

// 장바구니 담기 처리
function handleAddToCart() {
    const { type, id } = getProductIdFromUrl();
    alert('장바구니에 추가되었습니다.');
}

// 바로구매 처리
function handleBuyNow() {
    const { type, id } = getProductIdFromUrl();
    location.href = `/checkout?type=${type}&product=${id}`;
}