// ==========================================
// PRODUCT DATA
// ==========================================

const products = [

    // ======================================
    // T-SHIRTS
    // ======================================

    {
        id: 1,
        name: "Printed T-Shirt 1",
        category: "T-Shirts",
        price: 599,
        image: "images/tshirt1.jpg",
        description: "Stylish printed T-shirt for everyday wear."
    },

    {
        id: 2,
        name: "Printed T-Shirt 2",
        category: "T-Shirts",
        price: 599,
        image: "images/tshirt2.jpg",
        description: "Comfortable printed T-shirt with a modern design."
    },

    {
        id: 3,
        name: "2 T-Shirt Combo",
        category: "T-Shirts",
        price: 999,
        image: "images/tshirt3.jpg",
        description: "A stylish combo featuring two T-shirts."
    },

    {
        id: 4,
        name: "Printed T-Shirt 4",
        category: "T-Shirts",
        price: 649,
        image: "images/tshirt4.jpg",
        description: "Modern printed T-shirt suitable for casual outfits."
    },

    {
        id: 5,
        name: "Printed T-Shirt 5",
        category: "T-Shirts",
        price: 699,
        image: "images/tshirt5.jpg",
        description: "Trendy printed T-shirt with a comfortable fit."
    },

    {
        id: 6,
        name: "Classic Plain T-Shirt",
        category: "T-Shirts",
        price: 499,
        image: "images/tshirt6.jpg",
        description: "Classic plain T-shirt available in five different colors.",

        colors: [
            {
                name: "Sky Blue",
                image: "images/tshirt6.jpg"
            },
            {
                name: "Dark Blue",
                image: "images/tshirt7.jpg"
            },
            {
                name: "White",
                image: "images/tshirt8.jpg"
            },
            {
                name: "Grey",
                image: "images/tshirt9.jpg"
            },
            {
                name: "Black",
                image: "images/tshirt10.jpg"
            }
        ]
    },

    // ======================================
    // JEANS
    // ======================================

    {
        id: 11,
        name: "Classic Jeans",
        category: "Jeans",
        price: 1199,
        image: "images/jeans1.jpg",
        description: "Classic everyday jeans with a comfortable fit."
    },

    {
        id: 12,
        name: "Black Denim Jeans",
        category: "Jeans",
        price: 1299,
        image: "images/jeans2.jpg",
        description: "Classic black denim jeans."
    },

    {
        id: 13,
        name: "Grey Denim Jeans",
        category: "Jeans",
        price: 1399,
        image: "images/jeans3.jpg",
        description: "Dark grey jeans for a stylish everyday look."
    },

    {
        id: 14,
        name: "Blue Jeans",
        category: "Jeans",
        price: 1299,
        image: "images/jeans4.jpg",
        description: "Comfortable blue jeans for casual outfits."
    },

    // ======================================
    // SNEAKERS
    // ======================================

    {
        id: 15,
        name: "Everyday Sneakers",
        category: "Sneakers",
        price: 1799,
        image: "images/sneakers1.jpg",
        description: "Comfortable sneakers for everyday use."
    },

    {
        id: 16,
        name: "Classic Sneakers",
        category: "Sneakers",
        price: 1999,
        image: "images/sneakers2.jpg",
        description: "Classic sneakers with a clean design."
    },

    {
        id: 17,
        name: "Sport Sneakers",
        category: "Sneakers",
        price: 2199,
        image: "images/sneakers3.jpg",
        description: "Sporty sneakers designed for active lifestyles."
    },

    {
        id: 18,
        name: "Casual Sneakers",
        category: "Sneakers",
        price: 1899,
        image: "images/sneakers4.jpg",
        description: "Casual sneakers for everyday outfits."
    },

    {
        id: 19,
        name: "Urban Sneakers",
        category: "Sneakers",
        price: 2299,
        image: "images/sneakers5.jpg",
        description: "Modern urban sneakers."
    },

    {
        id: 20,
        name: "Premium Sneakers",
        category: "Sneakers",
        price: 2499,
        image: "images/sneakers6.jpg",
        description: "Premium sneakers with a stylish design."
    },

    // ======================================
    // BACKPACKS
    // ======================================

    {
        id: 21,
        name: "Everyday Backpack",
        category: "Backpacks",
        price: 899,
        image: "images/backpack1.jpg",
        description: "Practical backpack for everyday use."
    },

    {
        id: 22,
        name: "Travel Backpack",
        category: "Backpacks",
        price: 1099,
        image: "images/backpack2.jpg",
        description: "Spacious backpack suitable for travelling."
    },

    {
        id: 23,
        name: "College Backpack",
        category: "Backpacks",
        price: 999,
        image: "images/backpack3.jpg",
        description: "Perfect backpack for college students."
    },

    {
        id: 24,
        name: "Premium Backpack",
        category: "Backpacks",
        price: 1299,
        image: "images/backpack4.jpg",
        description: "Premium backpack with a modern design."
    },

    {
        id: 25,
        name: "Compact Backpack",
        category: "Backpacks",
        price: 799,
        image: "images/backpack5.jpg",
        description: "Compact backpack for daily essentials."
    },

    // ======================================
    // WATCHES
    // ======================================

    {
        id: 26,
        name: "Classic Watch",
        category: "Watches",
        price: 1499,
        image: "images/watch1.jpg",
        description: "Classic watch suitable for everyday wear."
    },

    {
        id: 27,
        name: "Elegant Watch",
        category: "Watches",
        price: 1699,
        image: "images/watch2.jpg",
        description: "Elegant watch with a stylish appearance."
    },

    {
        id: 28,
        name: "Minimal Watch",
        category: "Watches",
        price: 1399,
        image: "images/watch3.jpg",
        description: "Minimal watch with a clean design."
    },

    {
        id: 29,
        name: "Luxury Style Watch",
        category: "Watches",
        price: 2299,
        image: "images/watch4.jpg",
        description: "Luxury-inspired watch for special occasions."
    },

    {
        id: 30,
        name: "Classic Black Watch",
        category: "Watches",
        price: 1599,
        image: "images/watch5.jpg",
        description: "Classic black watch."
    },

    {
        id: 31,
        name: "Modern Watch",
        category: "Watches",
        price: 1899,
        image: "images/watch6.jpg",
        description: "Modern watch with a contemporary style."
    },

    {
        id: 32,
        name: "Premium Watch",
        category: "Watches",
        price: 2499,
        image: "images/watch7.jpg",
        description: "Premium-looking watch."
    },

    {
        id: 33,
        name: "Stylish Watch",
        category: "Watches",
        price: 1299,
        image: "images/watch8.jpg",
        description: "Simple watch for everyday use."
    },

    {
        id: 34,
        name: "Stack Watch",
        category: "Watches",
        price: 1799,
        image: "images/watch9.jpg",
        description: "Stylish watch for casual outfits."
    },

    {
        id: 35,
        name: "Everyday Watch",
        category: "Watches",
        price: 2199,
        image: "images/watch10.jpg",
        description: "Signature-style watch."
    },

    // ======================================
    // SUNGLASSES
    // ======================================

    {
        id: 36,
        name: "Classic Sunglasses",
        category: "Sunglasses",
        price: 699,
        image: "images/sunglass1.jpg",
        description: "Classic sunglasses for everyday style."
    },

    {
        id: 37,
        name: "Black Sunglasses",
        category: "Sunglasses",
        price: 799,
        image: "images/sunglass2.jpg",
        description: "Classic black sunglasses."
    },

    {
        id: 38,
        name: "Oval Sunglasses",
        category: "Sunglasses",
        price: 899,
        image: "images/sunglass3.jpg",
        description: "Oval-frame sunglasses."
    },

    {
        id: 39,
        name: "Premium Sunglasses",
        category: "Sunglasses",
        price: 999,
        image: "images/sunglass4.jpg",
        description: "Premium-style sunglasses."
    },

    {
        id: 40,
        name: "Classic Brown Sunglasses",
        category: "Sunglasses",
        price: 849,
        image: "images/sunglass5.jpg",
        description: "Classic brown sunglasses."
    },

    {
        id: 41,
        name: "Modern Sunglasses",
        category: "Sunglasses",
        price: 1099,
        image: "images/sunglass6.jpg",
        description: "Modern sunglasses with a stylish design."
    },

    // ======================================
    // JEWELLERY
    // ======================================

    {
        id: 42,
        name: "Minimal Jewellery",
        category: "Jewellery",
        price: 599,
        image: "images/jewellery1.jpg",
        description: "Minimal jewellery for everyday styling."
    },

    {
        id: 43,
        name: "Elegant Jewellery",
        category: "Jewellery",
        price: 799,
        image: "images/jewellery2.jpg",
        description: "Elegant jewellery design."
    },

    {
        id: 44,
        name: "Classic Jewellery",
        category: "Jewellery",
        price: 699,
        image: "images/jewellery3.jpg",
        description: "Classic jewellery for a simple look."
    },

    {
        id: 45,
        name: "Premium Jewellery",
        category: "Jewellery",
        price: 999,
        image: "images/jewellery4.jpg",
        description: "Premium-style jewellery."
    },

    // ======================================
    // HANDBAGS
    // ======================================

    {
        id: 46,
        name: "Elegant Handbag",
        category: "Handbags",
        price: 1299,
        image: "images/handbag1.jpg",
        description: "Elegant handbag for special occasions and outings."
    },

    {
        id: 47,
        name: "Classic Handbag",
        category: "Handbags",
        price: 1499,
        image: "images/handbag2.jpg",
        description: "Classic handbag with a stylish design."
    },

    {
        id: 48,
        name: "Floral Handmade Handbag",
        category: "Handbags",
        price: 1099,
        image: "images/handbag3.jpg",
        description: "A beautiful handmade handbag perfect for a relaxed desert vibe."
    },

    {
        id: 49,
        name: "Premium Handbag",
        category: "Handbags",
        price: 1799,
        image: "images/handbag4.jpg",
        description: "Premium handbag for stylish outfits."
    },

    {
        id: 50,
        name: "Stylish Handbag",
        category: "Handbags",
        price: 1599,
        image: "images/handbag5.jpg",
        description: "Stylish handbag for fashionable occasions."
    },

    {
        id: 51,
        name: "Trendy Handbag",
        category: "Handbags",
        price: 999,
        image: "images/handbag6.jpg",
        description: "A chic and fashionable handbag designed to elevate your look on special occasions and outings."
    },

    {
        id: 52,
        name: "Luxury Handbag",
        category: "Handbags",
        price: 1999,
        image: "images/handbag7.jpg",
        description: "Luxury-style handbag."
    }

];


// ==========================================
// CART
// ==========================================

let cart =
    JSON.parse(localStorage.getItem("shopEaseCart")) || [];


// ==========================================
// FEATURED PRODUCTS
// ==========================================

function showFeatured() {

    setActiveCategory("Featured");

    const featuredIds = [
        1,
        2,
        3,
        26,
        42,
        15,
        46
    ];

    const featuredProducts =
        products.filter(function(product) {

            return featuredIds.includes(product.id);

        });

    displayProducts(featuredProducts);

    scrollToShop();

}


// ==========================================
// SHOW CATEGORY
// ==========================================

function showCategory(category) {

    setActiveCategory(category);

    const filteredProducts =
        products.filter(function(product) {

            return product.category === category;

        });

    displayProducts(filteredProducts);

    scrollToShop();

}


// ==========================================
// FILTER PRODUCTS
// ==========================================

function filterProducts(category) {

    if (category === "All") {

        setActiveCategory("All");

        displayProducts(products);

        scrollToShop();

        return;

    }

    showCategory(category);

}


// ==========================================
// ACTIVE CATEGORY
// ==========================================

function setActiveCategory(category) {

    const buttons =
        document.querySelectorAll(".category-btn");

    buttons.forEach(function(button) {

        button.classList.remove("active");

        if (
            button.textContent
                .toLowerCase()
                .includes(category.toLowerCase())
        ) {

            button.classList.add("active");

        }

    });

}


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts(productList) {

    const productGrid =
        document.getElementById("productGrid");

    productGrid.innerHTML = "";

    if (productList.length === 0) {

        productGrid.innerHTML =
            "<p>No products found.</p>";

        return;

    }

    productList.forEach(function(product) {

        const card =
            document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
                onclick="openProductDetails(${product.id})"
                onerror="this.style.display='none'"
            >

            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-price">
                    ₹${product.price}
                </p>

                ${
                    product.colors
                    ?
                    `<p class="product-color">
                        Available in 5 colors
                    </p>`
                    :
                    ""
                }

                <button
                    class="view-product-btn"
                    onclick="openProductDetails(${product.id})"
                >
                    View Product
                </button>

                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>

        `;

        productGrid.appendChild(card);

    });

}


// ==========================================
// SEARCH
// ==========================================

function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();

    if (searchText === "") {

        showFeatured();

        return;

    }

    const results =
        products.filter(function(product) {

            return (
                product.name
                    .toLowerCase()
                    .includes(searchText)
                ||
                product.category
                    .toLowerCase()
                    .includes(searchText)
            );

        });

    setActiveCategory("");

    displayProducts(results);

    scrollToShop();

}


// ==========================================
// SHOW SHOP
// ==========================================

function showShop() {

    document.getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

    setTimeout(function() {

        showFeatured();

    }, 300);

}


// ==========================================
// PRODUCT DETAILS
// ==========================================

let selectedColor = null;


function openProductDetails(productId) {

    const product =
        products.find(function(item) {

            return item.id === productId;

        });

    if (!product) {
        return;
    }

    selectedColor = null;

    const details =
        document.getElementById("productDetails");

    let colorHTML = "";

    if (product.colors) {

        colorHTML = `

            <p class="color-title">
                Select Color:
            </p>

            <div class="color-options">

                ${product.colors.map(function(color, index) {

                    return `

                        <button
                            class="color-option ${
                                index === 0 ? "active" : ""
                            }"
                            onclick="selectColor(
                                ${product.id},
                                ${index}
                            )"
                        >
                            ${color.name}
                        </button>

                    `;

                }).join("")}

            </div>

        `;

        selectedColor = product.colors[0];

    }

    details.innerHTML = `

        <div>

            <img
                id="detailImage"
                src="${
                    product.colors
                    ? product.colors[0].image
                    : product.image
                }"
                class="detail-image"
                alt="${product.name}"
            >

        </div>

        <div>

            <p class="detail-category">
                ${product.category}
            </p>

            <h2 class="detail-name">
                ${product.name}
            </h2>

            <p class="detail-price">
                ₹${product.price}
            </p>

            <p class="detail-description">
                ${product.description}
            </p>

            ${colorHTML}

            <button
                class="detail-add-btn"
                onclick="addDetailedProduct(${product.id})"
            >
                🛒 Add to Cart
            </button>

        </div>

    `;

    document.getElementById("productModal")
        .classList.add("show");

}


// ==========================================
// SELECT COLOR
// ==========================================

function selectColor(productId, colorIndex) {

    const product =
        products.find(function(item) {

            return item.id === productId;

        });

    if (!product || !product.colors) {
        return;
    }

    selectedColor =
        product.colors[colorIndex];

    document.getElementById("detailImage")
        .src = selectedColor.image;

    const buttons =
        document.querySelectorAll(".color-option");

    buttons.forEach(function(button, index) {

        button.classList.toggle(
            "active",
            index === colorIndex
        );

    });

}


// ==========================================
// CLOSE PRODUCT DETAILS
// ==========================================

function closeProductDetails() {

    document.getElementById("productModal")
        .classList.remove("show");

}


// ==========================================
// ADD DETAILED PRODUCT
// ==========================================

function addDetailedProduct(productId) {

    const product =
        products.find(function(item) {

            return item.id === productId;

        });

    if (!product) {
        return;
    }

    addToCart(
        productId,
        selectedColor
            ? selectedColor.name
            : ""
    );

    closeProductDetails();

}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(productId, selectedColorName = "") {

    const product =
        products.find(function(item) {

            return item.id === productId;

        });

    if (!product) {
        return;
    }

    const cartId =
        selectedColorName
        ? productId + "-" + selectedColorName
        : productId;

    const existingItem =
        cart.find(function(item) {

            return String(item.cartId) === String(cartId);

        });

    if (existingItem) {

        existingItem.quantity++;

    } else {

        let productImage = product.image;

        if (selectedColorName && product.colors) {

            const selectedVariant =
                product.colors.find(function(color) {

                    return color.name === selectedColorName;

                });

            if (selectedVariant) {
                productImage = selectedVariant.image;
            }

        }

        cart.push({

            cartId: cartId,

            id: product.id,

            name: product.name,

            price: product.price,

            image: productImage,

            color: selectedColorName,

            quantity: 1

        });

    }

    saveCart();

    updateCartCount();

    alert("✅ Product added to cart!");

}


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

    localStorage.setItem(
        "shopEaseCart",
        JSON.stringify(cart)
    );

}


// ==========================================
// CART COUNT
// ==========================================

function updateCartCount() {

    const count =
        cart.reduce(function(total, item) {

            return total + item.quantity;

        }, 0);

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {

        cartCount.textContent = count;

    }

}


// ==========================================
// OPEN CART
// ==========================================

function openCart() {

    renderCart();

    document.getElementById("cartModal")
        .classList.add("show");

}


// ==========================================
// CLOSE CART
// ==========================================

function closeCart() {

    document.getElementById("cartModal")
        .classList.remove("show");

}


// ==========================================
// RENDER CART
// ==========================================

function renderCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    if (cart.length === 0) {

        cartItems.innerHTML =
            `
            <p class="empty-cart">
                Your cart is empty.
            </p>
            `;

        cartTotal.textContent = "₹0";

        return;

    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item) {

        total +=
            item.price * item.quantity;

        const cartItem =
            document.createElement("div");

        cartItem.className =
            "cart-item";

        cartItem.innerHTML = `

            <div class="cart-item-info">

                <img
                    src="${item.image}"
                    class="cart-item-image"
                    alt="${item.name}"
                >

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    ${
                        item.color
                        ?
                        `<p>
                            Color: ${item.color}
                        </p>`
                        :
                        ""
                    }

                    <p>
                        ₹${item.price} ×
                        ${item.quantity}
                    </p>

                </div>

            </div>

            <button
                class="remove-btn"
                onclick="removeFromCart('${String(item.cartId)}')"
            >
                Remove
            </button>

        `;

        cartItems.appendChild(cartItem);

    });

    cartTotal.textContent =
        "₹" + total;

}


// ==========================================
// REMOVE FROM CART
// ==========================================

function removeFromCart(cartId) {

    cartId = String(cartId);

    const itemIndex =
        cart.findIndex(function(item) {

            return String(item.cartId) === cartId;

        });

    if (itemIndex === -1) {

        console.log("Cart item not found:", cartId);

        return;

    }

    cart[itemIndex].quantity--;

    if (cart[itemIndex].quantity <= 0) {

        cart.splice(itemIndex, 1);

    }

    saveCart();

    updateCartCount();

    renderCart();

}


// ==========================================
// CHECKOUT
// ==========================================

function checkout() {

    if (cart.length === 0) {

        alert("🛒 Your cart is empty.");

        return;

    }

    const checkoutModal =
        document.getElementById("checkoutModal");

    const checkoutSummary =
        document.getElementById("checkoutSummary");

    let total = 0;

    let itemCount = 0;

    cart.forEach(function(item) {

        total +=
            item.price * item.quantity;

        itemCount +=
            item.quantity;

    });

    checkoutSummary.innerHTML = `

        <strong>Order Summary</strong>

        <p>
            ${itemCount} product(s)
        </p>

        <strong>
            Total: ₹${total}
        </strong>

    `;

    closeCart();

    checkoutModal.classList.add("show");

}


// ==========================================
// CLOSE CHECKOUT
// ==========================================

function closeCheckout() {

    document.getElementById("checkoutModal")
        .classList.remove("show");

}


// ==========================================
// CHECKOUT FORM
// ==========================================

const checkoutForm =
    document.getElementById("checkoutForm");

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const message =
                document.getElementById("checkoutMessage");

            const customerName =
                document.getElementById("checkoutName")
                    .value.trim();

            const customerPhone =
                document.getElementById("checkoutPhone")
                    .value.trim();

            const customerAddress =
                document.getElementById("checkoutAddress")
                    .value.trim();

            const paymentMethod =
                document.getElementById("paymentMethod")
                    .value;

            let total = 0;

            cart.forEach(function(item) {

                total +=
                    item.price * item.quantity;

            });

            const order = {

                orderId:
                    "ORD" + Date.now(),

                customerName:
                    customerName,

                customerPhone:
                    customerPhone,

                customerAddress:
                    customerAddress,

                paymentMethod:
                    paymentMethod,

                items:
                    JSON.parse(JSON.stringify(cart)),

                total:
                    total,

                date:
                    new Date().toLocaleString()

            };

            const orders =
                JSON.parse(
                    localStorage.getItem("shopEaseOrders")
                ) || [];

            orders.push(order);

            localStorage.setItem(
                "shopEaseOrders",
                JSON.stringify(orders)
            );

            message.textContent =
                "✅ Order placed successfully! Thank you for shopping with ShopEase.";

            message.className =
                "success-message";

            cart = [];

            saveCart();

            updateCartCount();

            checkoutForm.reset();

            setTimeout(function() {

                closeCheckout();

            }, 2000);

        }
    );

}


// ==========================================
// SCROLL TO SHOP
// ==========================================

function scrollToShop() {

    document.getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// LOGIN
// ==========================================

function openLogin() {

    document.getElementById("loginModal")
        .classList.add("show");

}


function closeLogin() {

    document.getElementById("loginModal")
        .classList.remove("show");

}


// ==========================================
// SIGNUP
// ==========================================

function openSignup() {

    document.getElementById("signupModal")
        .classList.add("show");

}


function closeSignup() {

    document.getElementById("signupModal")
        .classList.remove("show");

}


function showSignup() {

    closeLogin();

    openSignup();

}


function showLogin() {

    closeSignup();

    openLogin();

}


// ==========================================
// SIGNUP FORM
// ==========================================

const signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("signupName")
                    .value.trim();

            const email =
                document.getElementById("signupEmail")
                    .value.trim();

            const password =
                document.getElementById("signupPassword")
                    .value;

            const confirmPassword =
                document.getElementById("signupConfirm")
                    .value;

            const terms =
                document.getElementById("signupTerms")
                    .checked;

            const message =
                document.getElementById("signupMessage");

            if (name === "") {

                message.textContent =
                    "❌ Please enter your full name.";

                message.className =
                    "error-message";

                return;

            }

            if (password.length < 6) {

                message.textContent =
                    "❌ Password must be at least 6 characters.";

                message.className =
                    "error-message";

                return;

            }

            if (password !== confirmPassword) {

                message.textContent =
                    "❌ Passwords do not match.";

                message.className =
                    "error-message";

                return;

            }

            if (!terms) {

                message.textContent =
                    "❌ Please accept the Terms & Conditions.";

                message.className =
                    "error-message";

                return;

            }

            const user = {

                name: name,

                email: email,

                password: password

            };

            localStorage.setItem(
                "shopEaseUser",
                JSON.stringify(user)
            );

            message.textContent =
                "✅ Account created successfully!";

            message.className =
                "success-message";

            signupForm.reset();

            setTimeout(function() {

                closeSignup();

                openLogin();

                document.getElementById("loginEmail")
                    .value = email;

            }, 1200);

        }
    );

}


// ==========================================
// LOGIN FORM
// ==========================================

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const email =
                document.getElementById("loginEmail")
                    .value.trim();

            const password =
                document.getElementById("loginPassword")
                    .value;

            const message =
                document.getElementById("loginMessage");

            const savedUser =
                localStorage.getItem("shopEaseUser");

            if (!savedUser) {

                message.textContent =
                    "❌ No account found. Please sign up first.";

                message.className =
                    "error-message";

                return;

            }

            const user =
                JSON.parse(savedUser);

            if (email !== user.email) {

                message.textContent =
                    "❌ Email is incorrect.";

                message.className =
                    "error-message";

                return;

            }

            if (password !== user.password) {

                message.textContent =
                    "❌ Password is incorrect.";

                message.className =
                    "error-message";

                return;

            }

            message.textContent =
                "✅ Login successful! Welcome, " +
                user.name + "!";

            message.className =
                "success-message";

            sessionStorage.setItem(
                "shopEaseLoggedIn",
                "true"
            );

            updateAuthButton();

            setTimeout(function() {

                closeLogin();

            }, 1000);

        }
    );

}


// ==========================================
// LOGIN / LOGOUT BUTTON
// ==========================================

function updateAuthButton() {

    const savedUser =
        localStorage.getItem("shopEaseUser");

    const loggedIn =
        sessionStorage.getItem("shopEaseLoggedIn");

    const loginButton =
        document.getElementById("loginButton");

    const logoutButton =
        document.getElementById("logoutButton");

    if (!loginButton || !logoutButton) {
        return;
    }

    if (savedUser && loggedIn === "true") {

        loginButton.style.display = "none";

        logoutButton.style.display = "block";

    } else {

        loginButton.style.display = "block";

        logoutButton.style.display = "none";

    }

}


// ==========================================
// LOGOUT
// ==========================================

function logout() {

    sessionStorage.removeItem("shopEaseLoggedIn");

    updateAuthButton();

    alert("✅ You have been logged out.");

}


// ==========================================
// INITIAL LOAD
// ==========================================

showFeatured();

updateCartCount();

updateAuthButton();