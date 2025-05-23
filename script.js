// Menu data
const menu = {
    "Burgers": [
        { name: "AK-47", price: 8.99, details: "Crispy Pork, Lettuce, Tomato, Cheese, Pineapple, Honey & Mustard, Sweet Chilli, Fries.", image: "burgers.jpg" },
        { name: "TNT", price: 9.99, details: "Burger Pork, Cheese, Egg, Jalapenos, Pickle, Lettuce, Mint Mayo, Hot Sauce, Fries.", image: "burgers.jpg" },
        { name: "Bazouka Burger", price: 12.99, details: "Juicy pork patty, crispy bacon, and golden fries in a fresh bun", image: "burgers.jpg" },
        { name: "Kalash", price: 7.99, details: "Crispy Chicken, Lettuce, Tomato, Cheese, BBQ Sauce, Honey & Mustard, Sweet Chilli, Fries.", image: "burgers.jpg" },
        { name: "Pulled Pork Sandwich", price: 10.99, details: "Tender pulled pork, tangy BBQ sauce, and coleslaw in a toasted bun", image: "burgers.jpg" }
    ],
    "Appetisers": [
        { name: "Chicken Tenders", price: 5.99, details: "", image: "burgers.jpg" },
        { name: "Buffalo Wings", price: 6.99, details: "", image: "burgers.jpg" },
        { name: "Crispy Wings", price: 6.99, details: "", image: "burgers.jpg" },
        { name: "Steamed Chicken", price: 5.99, details: "As from 200g.", image: "burgers.jpg" },
        { name: "Chassive", price: 5.99, details: "Honey Pork Sausage.", image: "burgers.jpg" },
        { name: "Pork Ribs", price: 8.99, details: "As from 300g.", image: "burgers.jpg" },
        { name: "Crispy Pork Belly", price: 8.99, details: "", image: "burgers.jpg" },
        { name: "BBQ Pork Ribs", price: 18.99, details: "Slow-cooked pork ribs glazed with our signature BBQ sauce", image: "burgers.jpg" },
        { name: "Pork Belly Bites", price: 8.99, details: "Crispy pork belly cubes served with spicy dipping sauce", image: "burgers.jpg" }
    ],
    "Mix Platter": [
        { name: "Chicken Mix Platter", price: 19.99, details: "Chicken Tenders, Buffalo Wings, Crispy Wings & Steamed Chicken.", image: "burgers.jpg" },
        { name: "Pork Mix Platter", price: 22.99, details: "Honey Porc Sausage, Chassive, Pork Ribs & Crispy Belly.", image: "burgers.jpg" },
        { name: "Mix Platter", price: 15.99, details: "Succulent chicken wings and crispy fries with our special sauce", image: "burgers.jpg" }
    ],
    "Tacos": [
        { name: "Tacos Chicken", price: 5.99, details: "", image: "images/tacos-chicken.jpg" },
        { name: "Tacos H.Porc Sausage", price: 6.99, details: "", image: "images/tacos-hporc-sausage.jpg" },
        { name: "Tacos Chassive", price: 6.99, details: "", image: "images/tacos-chassive.jpg" },
        { name: "Tacos Porc Meat", price: 7.99, details: "", image: "images/tacos-porc-meat.jpg" },
        { name: "Spicy Pork Tacos", price: 9.99, details: "Soft tortillas filled with spicy pork, fresh salsa, and lime", image: "images/spicy-pork-tacos.jpg" }
    ],
    "Salad": [
        { name: "Crispy Chicken Salad", price: 7.99, details: "Lettuce, Onion, Tomato, Olive, Crispy Chicken, Mint Mayo, Nachos Crumbles.", image: "images/crispy-chicken-salad.jpg" },
        { name: "Porc Meat Salad", price: 8.99, details: "Lettuce, Onion, Tomato, Olive, Porc Meat, Mint Mayo, Nachos Crumbles.", image: "images/porc-meat-salad.jpg" }
    ],
    "Fries": [
        { name: "Cheese Fries", price: 3.99, details: "", image: "images/cheese-fries.jpg" },
        { name: "Cheese + Bacon Fries", price: 5.99, details: "", image: "images/cheese-bacon-fries.jpg" },
        { name: "Mafiozzo Porc Fries", price: 8.99, details: "", image: "images/mafiozzo-porc-fries.jpg" },
        { name: "Fries Only", price: 2.99, details: "", image: "images/fries-only.jpg" }
    ],
    "Add On": [
        { name: "Bacon", price: 0.99, details: "", image: "images/add-on-bacon.jpg" },
        { name: "Pineapple", price: 0.59, details: "", image: "images/add-on-pineapple.jpg" },
        { name: "Pickle", price: 0.59, details: "", image: "images/add-on-pickle.jpg" },
        { name: "Jalapenos", price: 0.59, details: "", image: "images/add-on-jalapenos.jpg" },
        { name: "Mushroom", price: 0.59, details: "", image: "images/add-on-mushroom.jpg" }
    ],
    "Pasta": [
        { name: "Chicken & Mushroom Tagliatelle", price: 9.99, details: "Choose your sauce: RED or WHITE. Tender chicken breast paired with earthy mushrooms in a perfectly balanced sauce.", image: "images/chicken-mushroom-tagliatelle.jpg" },
        { name: "Pork Meat Sauté Tagliatelle", price: 10.99, details: "Choose your sauce: RED or WHITE. Succulent pork morsels blended into a savory, flavorful sauce for a hearty experience.", image: "images/pork-meat-saute-tagliatelle.jpg" },
        { name: "Mussels in White Wine Tagliatelle", price: 11.99, details: "Choose your sauce: RED or WHITE. Fresh mussels delicately simmered in a fragrant white wine reduction.", image: "images/mussels-white-wine-tagliatelle.jpg" },
        { name: "Seafood Medley Tagliatelle", price: 12.99, details: "Choose your sauce: RED or WHITE. An exquisite combination of prawns, calamari, and mussels tossed in a luscious sauce.", image: "images/seafood-medley-tagliatelle.jpg" }
    ]
};

// Generate menu tabs and content
document.addEventListener('DOMContentLoaded', function() {
    const menuTabs = document.querySelector('.menu-tabs');
    const menuContent = document.querySelector('.menu-content');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Initialize ScrollReveal and target only the <h2> inside #menu
        ScrollReveal().reveal('#menu h2', {
            origin: 'left',      // Animation starts from the left
            distance: '100px',   // Distance the element moves from the left
            duration: 1000,      // Animation lasts 1 second (1000ms)
            delay: 200,          // Delay of 0.2 seconds before starting
            easing: 'ease-in-out', // Smooth animation curve
            reset: false         // Animation runs only once
        });
    }

    

    // Generate tab buttons
    Object.keys(menu).forEach(category => {
        const tabButton = document.createElement('button');
        tabButton.className = 'tab-button';
        tabButton.textContent = category;
        tabButton.setAttribute('data-category', category);
        menuTabs.appendChild(tabButton);
    });

    // Generate category content
    Object.keys(menu).forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.id = category;
        categoryDiv.className = 'category-content';
        categoryDiv.style.display = 'none';

        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'menu-items';

        menu[category].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.details}</p>
                <span class="price">$${item.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
            `;
            itemsDiv.appendChild(itemDiv);
        });

        categoryDiv.appendChild(itemsDiv);
        menuContent.appendChild(categoryDiv);
    });

    // Show first category by default
    const firstCategory = Object.keys(menu)[0];
    document.getElementById(firstCategory).style.display = 'block';

    // Tab event listeners
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            document.querySelectorAll('.category-content').forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(category).style.display = 'block';
        });
    });

    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            if (name && price) {
                addToCart(name, price);
            }
        });
    });

    // Cart icon click
    const cartIcon = document.querySelector('.cart-icon-container');
    if (cartIcon) {
        cartIcon.addEventListener('click', showCartModal);
    }

    // Close cart modal
    const closeBtn = document.getElementById('cart-modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', hideCartModal);
    }

    // Cart modal background click
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === this) hideCartModal();
        });
    }

    // Remove items from cart
    const cartItemsList = document.getElementById('cart-items-list');
    if (cartItemsList) {
        cartItemsList.addEventListener('click', function(e) {
            if (e.target.classList.contains('cart-remove-btn')) {
                const idx = parseInt(e.target.getAttribute('data-idx'));
                cart.splice(idx, 1);
                updateCartCount();
                updateCartModal();
            }
        });
    }

    // Checkout button
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) return;
            let orderMsg = 'Order from Porky Porky:%0A';
            cart.forEach(item => {
                orderMsg += `${item.name} x${item.qty} - $${(item.price * item.qty).toFixed(2)}%0A`;
            });
            let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
            orderMsg += `Total: $${total.toFixed(2)}`;
            const whatsappNumber = '1234567890';
            const waUrl = `https://wa.me/${whatsappNumber}?text=${orderMsg}`;
            window.open(waUrl, '_blank');
        });
    }

    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            burger.classList.toggle('toggle');
        });
    }

    // Initialize cart count
    updateCartCount();
});

// Cart array
let cart = [];

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

function updateCartModal() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartItemsList && cartTotal) {
        cartItemsList.innerHTML = '';
        let total = 0;
        
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cart.forEach((item, idx) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-modal-item';
                itemDiv.innerHTML = `
                    <div class="cart-item-info">
                        <span class="cart-item-name">${item.name}</span>
                        <span class="cart-item-price">$${item.price.toFixed(2)} x ${item.qty}</span>
                    </div>
                    <button class="cart-remove-btn" data-idx="${idx}">×</button>
                `;
                cartItemsList.appendChild(itemDiv);
                total += item.price * item.qty;
            });
        }
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

function showCartModal() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = 'flex';
        updateCartModal();
    }
}

function hideCartModal() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}

function addToCart(name, price) {
    const found = cart.find(item => item.name === name);
    if (found) {
        found.qty += 1;
    } else {
        cart.push({ name, price: parseFloat(price), qty: 1 });
    }
    updateCartCount();
    showCartModal();
    
    const cartIcon = document.querySelector('.cart-icon-container');
    if (cartIcon) {
        cartIcon.style.animation = 'none';
        cartIcon.offsetHeight;
        cartIcon.style.animation = 'pulse 0.5s ease';
    }
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.menu-item, .about-content, .contact-info');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Add hover effect to social media icons
const socialIcons = document.querySelectorAll('.social-links a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-5px)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
    });
});

// Add typing effect to hero text
const heroText = document.querySelector('.hero-content h2');
const text = heroText.textContent;
heroText.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

setTimeout(typeWriter, 500);


document.addEventListener('DOMContentLoaded', function() {
    // Your existing code (e.g., cart logic, tab functionality) remains here

    const continueOrderingBtn = document.getElementById('continue-ordering-btn');
    if (continueOrderingBtn) {
        continueOrderingBtn.addEventListener('click', hideCartModal);
    }

    // Your existing code continues here
});

// Ensure this function exists in your code
function hideCartModal() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}
