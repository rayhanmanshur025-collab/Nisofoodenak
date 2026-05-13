// ========== DATA PRODUK (27 ITEM) ==========
const products = [
    { id: 1, nama: "Molen Pisang Original", hargaEcer: 16000, hargaReseller: 13500, hargaAgen: 11500, gambar: "/molen-pisang-original.jpg" },
    { id: 2, nama: "Risoles Beef Mayo", hargaEcer: 19000, hargaReseller: 16500, hargaAgen: 13500, gambar: "/risoles-beef-mayo.jpg" },
    { id: 3, nama: "Risol Bihun", hargaEcer: 15000, hargaReseller: 12500, hargaAgen: 10500, gambar: "/risol-bihun.jpg" },
    { id: 4, nama: "Keju Aroma", hargaEcer: 16000, hargaReseller: 12500, hargaAgen: 10500, gambar: "/keju-aroma.jpg" },
    { id: 5, nama: "Sosis Solo Ayam", hargaEcer: 16500, hargaReseller: 14000, hargaAgen: 12000, gambar: "/sosis-solo-ayam.jpg" },
    { id: 6, nama: "Molen Pisang Coklat", hargaEcer: 17000, hargaReseller: 14500, hargaAgen: 12500, gambar: "/molen-pisang-coklat.jpg" },
    { id: 7, nama: "Martabak Telur", hargaEcer: 13500, hargaReseller: 11500, hargaAgen: 9500, gambar: "/martabak-telur.jpg" },
    { id: 8, nama: "Pisang Lumer Coklat", hargaEcer: 16000, hargaReseller: 13500, hargaAgen: 11500, gambar: "/pisang-lumer-coklat.jpg" },
    { id: 9, nama: "Pisang Lumer Milo", hargaEcer: 17000, hargaReseller: 14500, hargaAgen: 12500, gambar: "/pisang-lumer-milo.jpg" },
    { id: 10, nama: "Tape Lumer", hargaEcer: 16000, hargaReseller: 13500, hargaAgen: 11500, gambar: "/tape-lumer.jpg" },
    { id: 11, nama: "Pastel Sayur Bihun", hargaEcer: 17000, hargaReseller: 14500, hargaAgen: 12500, gambar: "/pastel-sayur.jpg" },
    { id: 12, nama: "Risoles Rogout", hargaEcer: 19000, hargaReseller: 16500, hargaAgen: 13500, gambar: "/risoles-rogout.jpg" },
    { id: 13, nama: "Combro Pedas", hargaEcer: 16000, hargaReseller: 13500, hargaAgen: 11500, gambar: "/combro.jpg" },
    { id: 14, nama: "Misro", hargaEcer: 16000, hargaReseller: 13500, hargaAgen: 11500, gambar: "/misro.jpg" },
    { id: 15, nama: "Cilok Bumbu Kacang", hargaEcer: 15000, hargaReseller: 12500, hargaAgen: 10500, gambar: "/cilok-ayam.jpg" },
    { id: 16, nama: "Pisang Goreng Wijen", hargaEcer: 16000, hargaReseller: 13500, hargaAgen: 11500, gambar: "/pisang-goreng-wijen.jpg" },
    { id: 17, nama: "Mozarella Goreng", hargaEcer: 21000, hargaReseller: 18500, hargaAgen: 15500, gambar: "/mozarella-goreng.jpg" },
    { id: 18, nama: "Corndough Mozarella", hargaEcer: 20000, hargaReseller: 17500, hargaAgen: 14500, gambar: "/corndog-mozarella.jpg" },
    { id: 19, nama: "Hottang Mozarella", hargaEcer: 22000, hargaReseller: 20000, hargaAgen: 17000, gambar: "/hottang-mozarella.jpg" },
    { id: 20, nama: "Onde-onde Kacang Hijau", hargaEcer: 17000, hargaReseller: 14500, hargaAgen: 12500, gambar: "/onde-onde.jpg" },
    { id: 21, nama: "Cireng Isi Ayam Pedas", hargaEcer: 17500, hargaReseller: 15000, hargaAgen: 13000, gambar: "/cireng-ayam.jpg" },
    { id: 22, nama: "Tahu Bakso Ayam", hargaEcer: 16500, hargaReseller: 14000, hargaAgen: 12000, gambar: "/tahu-bakso-ayam.jpg" },
    { id: 23, nama: "Tahu Jeletot", hargaEcer: 17500, hargaReseller: 14500, hargaAgen: 12500, gambar: "/tahu-jeletot.jpg" },
    { id: 24, nama: "Sempol", hargaEcer: 16500, hargaReseller: 14000, hargaAgen: 12000, gambar: "/sempol.jpg" },
    { id: 25, nama: "Chili Oil", hargaEcer: 21000, hargaReseller: 18500, hargaAgen: 15500, gambar: "/chili-oil.jpg" },
    { id: 26, nama: "Kebab Original", hargaEcer: 17500, hargaReseller: 13500, hargaAgen: 11500, gambar: "/kebab-original.jpg" },
    { id: 27, nama: "Kebab Pedas", hargaEcer: 17500, hargaReseller: 13500, hargaAgen: 11500, gambar: "/kebab-pedas.jpg" }
];

// ========== VARIABEL ==========
let cart = {};
let currentTier = "ecer";
let nomorWA = "6285810822897";

// ========== FUNGSI GET HARGA ==========
function getPrice(produk) {
    if (currentTier === "ecer") return produk.hargaEcer;
    if (currentTier === "reseller") return produk.hargaReseller;
    return produk.hargaAgen;
}

// ========== KIRIM WA ==========
function kirimWA(pesan) {
    let url = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);
    window.open(url, "_blank");
}

// ========== RESELLER ==========
function pesanReseller(nama, harga) {
    let pilihan = prompt("RESELLER\nProduk: " + nama + "\nHarga: Rp " + harga + "\n\n1. 25 pcs\n2. 50 pcs\n3. 75 pcs\n4. 100 pcs\n5. Custom");
    if (!pilihan) return;
    let jml = 0;
    if (pilihan === "1") jml = 25;
    else if (pilihan === "2") jml = 50;
    else if (pilihan === "3") jml = 75;
    else if (pilihan === "4") jml = 100;
    else if (pilihan === "5") {
        let c = prompt("Jumlah pcs:");
        if (!c) return;
        jml = parseInt(c);
        if (jml < 25) { alert("Min 25 pcs"); return; }
    } else { alert("Pilihan salah"); return; }
    let total = harga * jml;
    kirimWA("ORDER RESELLER\nProduk: " + nama + "\nJumlah: " + jml + " pcs\nTotal: Rp " + total);
}

// ========== AGEN ==========
function pesanAgen(nama, harga) {
    let pilihan = prompt("AGEN\nProduk: " + nama + "\nHarga: Rp " + harga + "\n\n1. 100 pcs\n2. 200 pcs\n3. 300 pcs\n4. 400 pcs\n5. Custom");
    if (!pilihan) return;
    let jml = 0;
    if (pilihan === "1") jml = 100;
    else if (pilihan === "2") jml = 200;
    else if (pilihan === "3") jml = 300;
    else if (pilihan === "4") jml = 400;
    else if (pilihan === "5") {
        let c = prompt("Jumlah pcs:");
        if (!c) return;
        jml = parseInt(c);
        if (jml < 100) { alert("Min 100 pcs"); return; }
    } else { alert("Pilihan salah"); return; }
    let total = harga * jml;
    kirimWA("ORDER AGEN\nProduk: " + nama + "\nJumlah: " + jml + " pcs\nTotal: Rp " + total);
}

// ========== RENDER PRODUK ==========
function renderProducts() {
    let grid = document.getElementById("productGrid");
    if (!grid) return;
    grid.innerHTML = "";
    
    for (let i = 0; i < products.length; i++) {
        let p = products[i];
        let harga = getPrice(p);
        let qty = cart[p.id] || 0;
        
        let card = document.createElement("div");
        card.className = "product-card";
        
        let img = document.createElement("img");
        img.className = "product-img";
        img.src = p.gambar;
        img.onerror = function() { this.src = "https://placehold.co/400x400/ff8c42/white?text=NisoFood"; };
        
        let namaDiv = document.createElement("div");
        namaDiv.className = "product-name";
        namaDiv.innerText = p.nama;
        
        let hargaDiv = document.createElement("div");
        hargaDiv.className = "product-price";
        hargaDiv.innerText = "Rp " + harga.toLocaleString();
        
        let qtyDiv = document.createElement("div");
        qtyDiv.style.cssText = "display:flex; justify-content:center; gap:15px; margin-top:12px;";
        
        let minus = document.createElement("button");
        minus.innerText = "-";
        minus.style.cssText = "background:#c0392b; color:white; width:32px; height:32px; border-radius:50%; border:none; cursor:pointer;";
        minus.onclick = (function(id) {
            return function() {
                if (cart[id] && cart[id] > 0) {
                    cart[id]--;
                    if (cart[id] === 0) delete cart[id];
                }
                updateAll();
            };
        })(p.id);
        
        let span = document.createElement("span");
        span.innerText = qty;
        span.style.cssText = "font-size:1.1rem; font-weight:bold; min-width:30px; text-align:center;";
        
        let plus = document.createElement("button");
        plus.innerText = "+";
        plus.style.cssText = "background:#2e7d32; color:white; width:32px; height:32px; border-radius:50%; border:none; cursor:pointer;";
        plus.onclick = (function(id) {
            return function() {
                if (!cart[id]) cart[id] = 0;
                cart[id]++;
                updateAll();
            };
        })(p.id);
        
        qtyDiv.appendChild(minus);
        qtyDiv.appendChild(span);
        qtyDiv.appendChild(plus);
        
        let btnDiv = document.createElement("div");
        btnDiv.style.cssText = "display:flex; gap:8px; margin-top:10px;";
        
        let btnReseller = document.createElement("button");
        btnReseller.innerText = "Reseller";
        btnReseller.style.cssText = "background:#f39c12; color:white; border:none; padding:8px; border-radius:20px; cursor:pointer; font-size:12px; font-weight:bold; flex:1;";
        btnReseller.onclick = (function(n, h) {
            return function() { pesanReseller(n, h); };
        })(p.nama, p.hargaReseller);
        
        let btnAgen = document.createElement("button");
        btnAgen.innerText = "Agen";
        btnAgen.style.cssText = "background:#2e7d32; color:white; border:none; padding:8px; border-radius:20px; cursor:pointer; font-size:12px; font-weight:bold; flex:1;";
        btnAgen.onclick = (function(n, h) {
            return function() { pesanAgen(n, h); };
        })(p.nama, p.hargaAgen);
        
        btnDiv.appendChild(btnReseller);
        btnDiv.appendChild(btnAgen);
        
        card.appendChild(img);
        card.appendChild(namaDiv);
        card.appendChild(hargaDiv);
        card.appendChild(qtyDiv);
        card.appendChild(btnDiv);
        
        grid.appendChild(card);
    }
}

// ========== UPDATE KERANJANG ==========
function updateAll() {
    updateCart();
    renderProducts();
    updateCount();
    saveData();
}

function updateCart() {
    let container = document.getElementById("cartItemsList");
    if (!container) return;
    container.innerHTML = "";
    let total = 0;
    
    for (let id in cart) {
        let prod = products.find(p => p.id == id);
        if (prod) {
            let qty = cart[id];
            let price = getPrice(prod);
            let sub = price * qty;
            total += sub;
            let div = document.createElement("div");
            div.style.cssText = "display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #eee;";
            div.innerText = prod.nama + " x" + qty + " = Rp " + sub.toLocaleString();
            container.appendChild(div);
        }
    }
    
    if (Object.keys(cart).length === 0) {
        let p = document.createElement("p");
        p.style.textAlign = "center";
        p.innerText = "Keranjang kosong";
        container.appendChild(p);
    }
    
    let totalEl = document.getElementById("cartTotal");
    if (totalEl) totalEl.innerText = "Total: Rp " + total.toLocaleString();
}

function updateCount() {
    let count = 0;
    for (let id in cart) count += cart[id];
    let spans = document.querySelectorAll("#cartCount");
    spans.forEach(s => s.innerText = count);
}

function saveData() {
    localStorage.setItem("nisofood_cart", JSON.stringify(cart));
    localStorage.setItem("nisofood_tier", currentTier);
}

function loadData() {
    let savedCart = localStorage.getItem("nisofood_cart");
    if (savedCart) cart = JSON.parse(savedCart);
    let savedTier = localStorage.getItem("nisofood_tier");
    if (savedTier) setTier(savedTier);
}

function setTier(tier) {
    currentTier = tier;
    let cards = document.querySelectorAll(".price-card");
    cards.forEach(card => {
        if (card.getAttribute("data-tier") === tier) {
            card.classList.add("selected");
        } else {
            card.classList.remove("selected");
        }
    });
    updateAll();
}

function checkoutWA() {
    let totalItem = 0, detail = "", grandTotal = 0;
    for (let id in cart) {
        let prod = products.find(p => p.id == id);
        if (prod) {
            let qty = cart[id];
            totalItem += qty;
            let price = getPrice(prod);
            let sub = price * qty;
            grandTotal += sub;
            detail += "- " + prod.nama + " : " + qty + " pcs = Rp " + sub.toLocaleString() + "\n";
        }
    }
    if (totalItem === 0) { alert("Keranjang kosong"); return; }
    let tierName = "Ecer";
    if (currentTier === "reseller") tierName = "Reseller";
    if (currentTier === "agen") tierName = "Agen";
    kirimWA("STRUK NISofood\n\n" + detail + "\nLevel: " + tierName + "\nTotal: " + totalItem + " pcs\nTotal Bayar: Rp " + grandTotal.toLocaleString());
}

function loadBestSeller() {
    let preview = document.getElementById("bestSellerPreview");
    if (!preview) return;
    preview.innerHTML = "";
    let grid = document.createElement("div");
    grid.className = "product-grid";
    grid.style.cssText = "grid-template-columns:repeat(auto-fill, minmax(170px,1fr));";
    for (let i = 0; i < 3; i++) {
        let p = products[i];
        let card = document.createElement("div");
        card.className = "product-card";
        let img = document.createElement("img");
        img.className = "product-img";
        img.src = p.gambar;
        let nama = document.createElement("div");
        nama.className = "product-name";
        nama.innerText = p.nama;
        let harga = document.createElement("div");
        harga.className = "product-price";
        harga.innerText = "Rp " + getPrice(p).toLocaleString();
        card.appendChild(img);
        card.appendChild(nama);
        card.appendChild(harga);
        grid.appendChild(card);
    }
    preview.appendChild(grid);
}

// ========== START ==========
document.addEventListener("DOMContentLoaded", function() {
    loadData();
    renderProducts();
    updateCart();
    loadBestSeller();
    
    document.querySelectorAll(".price-card").forEach(card => {
        card.onclick = () => setTier(card.getAttribute("data-tier"));
    });
    
    let cartIcon = document.getElementById("cartIcon");
    let sidebar = document.getElementById("cartSidebar");
    let overlay = document.getElementById("overlay");
    if (cartIcon) {
        cartIcon.onclick = () => {
            sidebar.classList.add("open");
            overlay.classList.add("active");
        };
    }
    document.querySelectorAll("#closeCartBtn, .close-cart").forEach(btn => {
        btn.onclick = () => {
            sidebar.classList.remove("open");
            overlay.classList.remove("active");
        };
    });
    document.getElementById("checkoutBtn").onclick = checkoutWA;
    
    setTimeout(() => {
        let preloader = document.getElementById("preloader");
        let mainContent = document.getElementById("mainContent");
        if (preloader) preloader.classList.add("hide");
        if (mainContent) mainContent.classList.add("show");
    }, 500);
});
