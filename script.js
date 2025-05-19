// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

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
            
            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        }
    });
});

// Add animation to burger menu
const burgerAnimation = () => {
    const lines = document.querySelectorAll('.burger div');
    lines.forEach(line => {
        line.style.transition = 'all 0.3s ease';
    });
};

burgerAnimation();

// Add scroll event listener for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Menu More Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const moreBtn = document.getElementById('menu-more-btn');
    const extraItems = document.querySelectorAll('.extra-menu-item');
    let isExpanded = false;

    if (moreBtn) {
        moreBtn.addEventListener('click', function() {
            isExpanded = !isExpanded;
            
            extraItems.forEach(item => {
                if (isExpanded) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('menu-item-visible');
                    }, 50);
                    moreBtn.textContent = 'Less';
                } else {
                    item.classList.remove('menu-item-visible');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                    moreBtn.textContent = 'More';
                }
            });
        });
    }
});

// Initialize cart array
let cart = [];

// Cart Functions
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
                    <button class="cart-remove-btn" data-idx="${idx}">&times;</button>
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
    
    // Animate cart icon
    const cartIcon = document.querySelector('.cart-icon-container');
    if (cartIcon) {
        cartIcon.style.animation = 'none';
        cartIcon.offsetHeight; // Trigger reflow
        cartIcon.style.animation = 'pulse 0.5s ease';
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
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

    // Menu More Button
    const moreBtn = document.getElementById('menu-more-btn');
    const extraItems = document.querySelectorAll('.extra-menu-item');
    let isExpanded = false;

    if (moreBtn) {
        moreBtn.addEventListener('click', function() {
            isExpanded = !isExpanded;
            
            extraItems.forEach(item => {
                if (isExpanded) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('menu-item-visible');
                    }, 50);
                    moreBtn.textContent = 'Less';
                } else {
                    item.classList.remove('menu-item-visible');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                    moreBtn.textContent = 'More';
                }
            });
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

// Loading animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('hidden');
    }
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

// Add parallax effect to sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.about-section, .contact-section');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.backgroundPositionY = `${scrolled * speed}px`;
    });
});

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