// 검색 결과 데이터 (실제로는 서버에서 가져와야 함)
const searchProducts = {
    "냉장고": [
        {
            id: 101,
            name: "[LG전자] 2023년 신제품 냉장고",
            originalPrice: 1450000,
            salePrice: 990000,
            discount: 32,
            image: "/assets/images/product1.jpg",
            badge: "로켓배송",
            rating: 4.7,
            reviews: 235
        },
        {
            id: 102,
            name: "[삼성전자] 비스포크 냉장고",
            originalPrice: 1280000,
            salePrice: 890000,
            discount: 30,
            image: "/assets/images/product2.jpg",
            badge: "로켓프레시",
            rating: 4.8,
            reviews: 442
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    
    if (query) {
        document.getElementById('searchKeyword').textContent = query;
        document.getElementById('searchInput').value = query;
        showSearchResults(query);
    }
});

function showSearchResults(query) {
    const resultsContainer = document.getElementById('searchResults');
    const products = searchProducts[query] || [];

    if (products.length === 0) {
        resultsContainer.innerHTML = `
            <div class="col-span-full text-center py-12 text-gray-500">
                '${query}'에 대한 검색 결과가 없습니다.
            </div>
        `;
        return;
    }

    const productsHTML = products.map(product => `
        <div class="product-card" onclick="location.href='/products/${product.id}'">
            <div class="relative mb-3">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="w-full aspect-square object-cover rounded">
                <span class="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    ${product.badge}
                </span>
            </div>
            <h3 class="text-sm hover:text-blue-500 mb-2 line-clamp-2">
                ${product.name}
            </h3>
            <div class="space-y-1">
                <div class="flex items-baseline space-x-2">
                    <span class="text-red-500 font-bold">${product.discount}%</span>
                    <span class="font-bold text-lg">
                        ${product.salePrice.toLocaleString()}원
                    </span>
                </div>
                <div class="text-gray-400 text-sm line-through">
                    ${product.originalPrice.toLocaleString()}원
                </div>
                <div class="text-sm text-gray-600">
                    ⭐${product.rating} (${product.reviews.toLocaleString()})
                </div>
            </div>
        </div>
    `).join('');

    resultsContainer.innerHTML = productsHTML;
}

// 검색 폼 초기화
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        location.href = `/pages/search?query=${encodeURIComponent(query)}`;
    }
});
