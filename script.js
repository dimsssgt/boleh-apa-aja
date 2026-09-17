// bagian 1.1
function kalkulasiDiskon(price, discount) {
    return price - (price * discount)/ 100
}
console.log(kalkulasiDiskon(100,10))

// bagian 1.2
const cart = [
    { title: "Laptop", price: 1000, discountPercent: 10 },
    { title: "Mouse", price: 20, discountPercent: 5 },
    { title: "Keyboard", price: 50, discountPercent: 0 }
];

function applyDiscounts(cart) {
    const result = []
    for (const item of cart){
        const hargaAkhir=kalkulasiDiskon(item.price, item.discountPercent)
        result.push({
            title: item.title,
            hargaAkhir: hargaAkhir
        })
    }
    return result
}
console.log("Hasil diskon: ", applyDiscounts(cart))

// bagian 2.1
const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
  ];

function findProduct(products, id) {
    return products.find(product => product.id === id)
}
console.log(findProduct(products, 3))

// bagian 2.2
const lowStock = products.filter(product => product.stock < 10);
console.log("Stok menipis: ", lowStock);

// bagian 2.3
function updateStock(products, id, newStock) {
    return products.map(p =>
        p.id === id ? { ...p, stock: newStock } : p
    )
}
const updateProduct = updateStock(products, 1, 10)
console.log("Update stock: ", updateProduct)
console.log("Semula: ", products)

// bagian 3
const productss = [
    {
      id: 1,
      title: "Laptop",
      price: 1200,
      rating: 4.5,
      stock: 10,
      category: "laptops",
      tags: ["computer", "electronics", "office"],
      dimensions: { width: 30, height: 2, depth: 20 },
      reviews: [
        { user: "A", rating: 5, comment: "Good product" },
        { user: "B", rating: 4, comment: "Worth it" }
      ]
    },
    {
      id: 2,
      title: "Smartphone",
      price: 800,
      rating: 4.2,
      stock: 15,
      category: "phones",
      tags: ["mobile", "electronics"],
      dimensions: { width: 7, height: 0.8, depth: 15 },
      reviews: [
        { user: "C", rating: 4, comment: "Nice camera" },
        { user: "D", rating: 5, comment: "Fast" },
        { user: "E", rating: 3, comment: "Battery so-so" }
      ]
    }
  ];

//latihan 1
const tags = productss.map(p => p.tags) 
console.log('Semua tag: ',tags)

//latihan 2
function findProductByTag(productss, tag) {
    return productss.filter(p => p.tags.includes(tag))
}
console.log("Produk office: ", findProductByTag(productss, "office"))

//latihan 3
const totalReview = productss.map(p => ({
    id: p.id,
    title: p.title,
    review: p.reviews.length
}))
console.log("Jumlah revire product", totalReview)

//latihan 4
const bintang5 = productss.flatMap(p => p.reviews.filter(r => r.rating === 5))
console.log("Review bintang 5: ", bintang5)

//latihan 5
const ratingMean = productss.map(p => {
    const totalRating = p.reviews.reduce((sum, r) => sum + r.rating, 0)
    const mean = totalRating/p.reviews.length
    return{
        title: p.title,
        raringAvg: mean
    }
})
console.log("Rata-rata rating product: ", ratingMean)

//latihan 6
const mostReview = productss.reduce((max, p) => 
p.reviews.length > max.reviews.length ?
p: max, productss[0])
console.log("rating terbanyak: ", mostReview)

//latihan 7
const semuaRating = productss.flatMap(p => p.reviews.map(r=>r.rating))
console.log("Semua rtaing: ", semuaRating)

// bagian 4
const tag = [
    ["computer", "office"],
    ["electronics"],
    ["gaming", "computer"]
    ];
console.log(tag.flat())
    
const produk = [
    { title: "Laptop", tags: ["computer", "office"] },
    { title: "Phone", tags: ["mobile"] }
];
const allTags = produk.flatMap(p => p.tags);
console.log(allTags)
// ["computer", "office", "mobile"]


// bagian 4.1
const semuaTag = productss.flatMap(p => p.tags)
console.log("Semua Tag produk: ", semuaTag)

// bagian 4.2
const semuaCmn = productss.flatMap(p => p.reviews.map(r=> r.comment))
console.log("Semua komen orang: ", semuaCmn)


// HARI SELANJUTNYA


// bagian 5.1
const laptopPrices = productss
    .filter(p => p.category === "laptops")
    .map(p => p.price);
const avg = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;
console.log("Rata-rata harga dari produk laptop: ", avg)

// bagian 5.2
function getStatistics(productss) {
    const prices = productss.map(p => p.price)
    return {
        totalProducts : productss.length,
        averagePrice : prices.reduce((a, b) => a + b, 0)/productss.length,
        highestPrice : Math.max(...prices),
        lowestPrice : Math.min(...prices),
        totalStock : productss.reduce((sum, p) => sum + p.stock, 0),
        averageRating : productss.reduce((sum, p) => sum + p.rating, 0)/productss.length
    }
}
console.log("Statistik produk: ", getStatistics(productss))

// bagian 6.1
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1;
}
const numbers = [10, 50, 30, 15, 60, 95]
console.log("Indeks dengan angka 10", linearSearch(numbers, 10))

// Latihan 6.2
function linearId(productss, targetId) {
    for (let i = 0; i < productss.length; i++) {
        if (products[i].id === targetId) {
            return i
        }
    }
    return -1
}

console.log("Indeks produk dengan ID 2: ", linearId(productss, 2));

// latihan 7.1
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
    }
    return -1;
}
console.log("Binary search: ",binarySearch(numbers, 60))

// latihan 7.2
const sortedProducts = [...productss].sort((a, b) => a.price - b.price)
function binaryPrice(sortedArray, targetPrice) {
    let left = 0;
    let right = sortedArray.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        
        if (sortedArray[mid].price === targetPrice) {
            return mid
        }
        
        if (sortedArray[mid].price < targetPrice) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return -1
}
console.log("Daftar produk urut:", sortedProducts)
console.log("Indeks produk dengan harga 800:", binaryPrice(sortedProducts, 800))

// bagian 8.1
function bubbleSort(numbers) {
    const arr = [...numbers];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// bagian 8.2
function sortProducts(productss, sortBy) {
        const result = [...productss]
        if (sortBy === "price-asc") {
            return result.sort((a, b) => a.price - b.price)
        } else if (sortBy === "price-desc") {
            return result.sort((a, b) => b.price - a.price)
        } else if (sortBy === "rating") {
            return result.sort((a, b) => b.rating - a.rating)
        } else if (sortBy === "title") {
            return result.sort((a, b) => a.title.localeCompare(b.title))
        }
        
        return result;
}
console.log("Sort harga termurah: ", sortProducts(productss, "price-asc"))
console.log("Sort nama: ", sortProducts(productss, "title"))


// bagian 9.1
function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const key = product.category;
        if (!groups[key]) groups[key] = [];
        groups[key].push(product);
        return groups;
    }, {});
}
console.log("Grouping kategori: ", groupByCategory(productss));

// bagian 9.2
const groupedData = groupByCategory(productss);
console.table(
    Object.keys(groupedData).map(cat => ({
        Category: cat,
        TotalProducts: groupedData[cat].length
    }))
);


// bagian 10.1
function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}
const kata = ["laptop", "phone", "laptop", "tablet", "phone", "laptop"];
console.log("Frekuensi kata: ", countFrequency(kata));

// bagian 10.2
const allTagsProducts = productss.flatMap(p => p.tags);
console.log("Frekuensi kategori: ", countFrequency(productss.map(p => p.category)));
console.log("Frekuensi tags: ", countFrequency(allTagsProducts));


// bagian 11.1
const uniqueCategories = [...new Set(productss.map(p => p.category))];
const uniqueTags = [...new Set(productss.flatMap(p => p.tags))];
console.log("Kategori unik: ", uniqueCategories);
console.log("Tags unik: ", uniqueTags);


// bagian 12.1
function buildProductLookup(products) {
    const productMap = new Map();
    for (const product of products) {
        productMap.set(product.id, product);
    }
    return productMap;
}
const productLookup = buildProductLookup(productss);
console.log("Lookup ID 1: ", productLookup.get(1));


// bagian 13.1, 13.2
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const searchHistory = new Stack();
searchHistory.push("laptop");
searchHistory.push("phone");
console.log("Riwayat terakhir (peek): ", searchHistory.peek());
console.log("Undo pencarian (pop): ", searchHistory.pop());


// bagian 14.1
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const requestQueue = new Queue();
requestQueue.enqueue("Req 1");
requestQueue.enqueue("Req 2");
console.log("Antrean paling depan: ", requestQueue.peek());
console.log("Proses antrean (dequeue): ", requestQueue.dequeue());


// bagian 15.1
const categoriesTree = [
    {
        name: "Electronics",
        children: [
            { name: "Laptop", children: [] },
            { name: "Phone", children: [] }
        ]
    }
];
function printCategories(categories, depth = 0) {
    for (const category of categories) {
        console.log(" ".repeat(depth * 2) + category.name);
        if (category.children.length > 0) {
            printCategories(category.children, depth + 1);
        }
    }
}
console.log("Struktur Kategori:");
printCategories(categoriesTree);


// bagian 16.1, 16.2
function compareSearchSteps(array, target) {
    let linearSteps = 0;
    for (let i = 0; i < array.length; i++) {
        linearSteps++;
        if (array[i] === target) break;
    }

    let binarySteps = 0;
    let left = 0, right = array.length - 1;
    while (left <= right) {
        binarySteps++;
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) break;
        if (array[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return { linearSteps, binarySteps };
}
const bigArray = Array.from({ length: 10000 }, (_, i) => i + 1);
console.log("Perbandingan langkah cari 9999: ", compareSearchSteps(bigArray, 9999));


// bagian 17.1
function renderProducts(products) {
    if (typeof document === "undefined") return; // Skip kalau running di Node.js
    
    const container = document.querySelector("#product-list");
    if (!container) return;
    container.innerHTML = "";
    for (const product of products) {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;
        container.append(card);
    }
}


// bagian 18.1
const state = {
    products: [],
    search: "",
    category: "all",
    sortBy: "default",
    favorites: new Set(),
    status: "idle"
};

function render() {
    let filtered = [...state.products];
    if (state.search) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(state.search.toLowerCase()));
    }
    if (state.category !== "all") {
        filtered = filtered.filter(p => p.category === state.category);
    }
    renderProducts(filtered);
}


// bagian 19.1
if (typeof document !== "undefined") {
    const searchInput = document.querySelector("#search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            state.search = e.target.value;
            render();
        });
    }
}


// bagian 20.1
function getStatisticsRefactored(products) {
    const prices = products.map(p => p.price);
    const totalProducts = products.length;
    const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
    const averagePrice = prices.reduce((a, b) => a + b, 0) / (totalProducts || 1);
    
    return {
        totalProducts,
        averagePrice,
        highestPrice: Math.max(...prices),
        lowestPrice: Math.min(...prices),
        totalStock
    };
}


// bagian 22.1
const checkDataPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve("Data berhasil dimuat");
    else reject("Gagal memuat data");
});
checkDataPromise
    .then(res => console.log("Promise result: ", res))
    .catch(err => console.error(err));


// bagian 23.1, 24.1
async function fetchProductsFromAPI() {
    try {
        state.status = "loading";
        const response = await fetch("https://dummyjson.com/products?limit=30");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        state.products = data.products;
        state.status = "success";
        console.log("Data Fetch berhasil:", state.products);
    } catch (error) {
        state.status = "error";
        console.error("Gagal Fetch data: ", error);
    } finally {
        render();
    }
}


// bagian 25.1, 25.2, 25.3
function partialSearch(products, keyword) {
    const lower = keyword.toLowerCase();
    return products.filter(p => p.title.toLowerCase().includes(lower));
}
console.log("Partial search 'phone': ", partialSearch(productss, "phone"));


// bagian 26 (Aplikasi Akhir Orchestration)
function initApp() {
    state.products = [...productss];
    render();
    console.log("App berhasil di init!");
}
initApp();