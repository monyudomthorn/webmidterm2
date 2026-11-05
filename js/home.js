// ==========================================================================
// Coffee House - Home Page Controller
// FreshSip Design Architecture
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------------------------
    // 1. Drinks Data Model (Expanded Menu by Category)
    // --------------------------------------------------------------------------
    const drinks = [
        // --- ICED & COLD BREW ---
        {
            id: 'drink-1',
            name: 'Spanish Iced Latte',
            category: 'iced',
            categoryName: 'Iced Coffee',
            price: 3.80,
            badge: 'Popular',
            badgeClass: 'popular',
            desc: 'Smooth espresso, rich condensed milk, fresh whole milk, and cold ice.',
            image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-3',
            name: 'Nitro Cold Brew',
            category: 'iced',
            categoryName: 'Cold Brew',
            price: 4.00,
            badge: 'New',
            badgeClass: 'new',
            desc: 'Slow-steeped cold brew infused with nitrogen for a velvety head and sweet finish.',
            image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-10',
            name: 'Brown Sugar Shaken Espresso',
            category: 'iced',
            categoryName: 'Iced Espresso',
            price: 4.40,
            badge: 'Bestseller',
            badgeClass: 'bestseller',
            desc: 'Blonde roast shaken with brown sugar, warm cinnamon, and creamy oat milk.',
            image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-11',
            name: 'Coconut Cream Cold Brew',
            category: 'iced',
            categoryName: 'Cold Brew',
            price: 4.20,
            badge: 'Fresh',
            badgeClass: 'fresh',
            desc: 'Signature 20-hour cold brew topped with sweet coconut cream cold foam.',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-12',
            name: 'Iced Caramel Cloud Macchiato',
            category: 'iced',
            categoryName: 'Iced Coffee',
            price: 4.30,
            badge: 'Popular',
            badgeClass: 'popular',
            desc: 'Fluffy cold foam cloud layered with bold espresso and golden caramel grid.',
            image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-13',
            name: 'Classic Iced Americano',
            category: 'iced',
            categoryName: 'Iced Coffee',
            price: 3.20,
            badge: 'Classic',
            badgeClass: '',
            desc: 'Freshly pulled dark espresso shots poured over clear ice and filtered chilled water.',
            image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-29',
            name: 'Iced Vanilla Bean Latte',
            category: 'iced',
            categoryName: 'Iced Coffee',
            price: 4.10,
            badge: 'Sweet',
            badgeClass: 'popular',
            desc: 'Espresso mixed with aromatic Madagascan vanilla bean syrup and chilled whole milk.',
            image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-30',
            name: 'Vanilla Sweet Cream Cold Brew',
            category: 'iced',
            categoryName: 'Cold Brew',
            price: 4.15,
            badge: 'Popular',
            badgeClass: 'popular',
            desc: 'Custom blend cold brew accented with vanilla and finished with a cascade of sweet cream.',
            image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=80'
        },

        // --- HOT ESPRESSO ---
        {
            id: 'drink-2',
            name: 'Caramel Macchiato',
            category: 'hot',
            categoryName: 'Hot Espresso',
            price: 4.20,
            badge: 'Bestseller',
            badgeClass: 'bestseller',
            desc: 'Steamed milk with vanilla syrup, marked with espresso & caramel drizzle.',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-4',
            name: 'Classic Cappuccino',
            category: 'hot',
            categoryName: 'Hot Coffee',
            price: 3.60,
            badge: 'Classic',
            badgeClass: '',
            desc: 'Equal parts dark espresso, warm steamed milk, and rich velvety micro-foam.',
            image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-7',
            name: 'Vanilla Flat White',
            category: 'hot',
            categoryName: 'Hot Espresso',
            price: 3.80,
            badge: 'Classic',
            badgeClass: '',
            desc: 'Double ristretto shot gently blended with smooth, creamy micro-textured milk.',
            image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-14',
            name: 'Double Ristretto Espresso',
            category: 'hot',
            categoryName: 'Hot Espresso',
            price: 2.60,
            badge: 'Pure',
            badgeClass: '',
            desc: 'Two intense, sweet, full-bodied espresso extractions with dense hazelnut crema.',
            image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-15',
            name: 'Hazelnut Mocha Latte',
            category: 'hot',
            categoryName: 'Hot Espresso',
            price: 4.20,
            badge: 'Popular',
            badgeClass: 'popular',
            desc: 'Rich Belgian dark chocolate and roasted hazelnut praline melted into espresso.',
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-16',
            name: 'Cinnamon Dolce Latte',
            category: 'hot',
            categoryName: 'Hot Espresso',
            price: 4.40,
            badge: 'Seasonal',
            badgeClass: 'new',
            desc: 'Freshly steamed milk with cinnamon dolce syrup, topped with sweetened whipped cream.',
            image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-31',
            name: 'Spanish Cortado',
            category: 'hot',
            categoryName: 'Hot Espresso',
            price: 3.40,
            badge: 'Artisan',
            badgeClass: 'bestseller',
            desc: 'Equal parts dark espresso and velvety steamed warm milk to reduce acidity.',
            image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-32',
            name: 'Dark Roast Cafe Americano',
            category: 'hot',
            categoryName: 'Hot Coffee',
            price: 3.00,
            badge: 'Bold',
            badgeClass: '',
            desc: 'Espresso shots topped with hot water create a light layer of crema and deep flavor.',
            image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format&fit=crop&q=80'
        },

        // --- TEA & REFRESHERS ---
        {
            id: 'drink-9',
            name: 'Ceremonial Matcha Latte',
            category: 'tea',
            categoryName: 'Tea & Latte',
            price: 4.20,
            badge: 'Organic',
            badgeClass: 'fresh',
            desc: 'Japanese Uji stone-ground green tea whisked with silky steamed milk and vanilla.',
            image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-17',
            name: 'Peach Blossom Green Tea',
            category: 'tea',
            categoryName: 'Iced Tea',
            price: 3.50,
            badge: 'Fresh',
            badgeClass: 'fresh',
            desc: 'Delicate green tea infused with sun-ripened white peaches and fresh mint sprigs.',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-18',
            name: 'Royal Spiced Chai Latte',
            category: 'tea',
            categoryName: 'Tea & Latte',
            price: 3.90,
            badge: 'Classic',
            badgeClass: '',
            desc: 'Black Assam tea brewed with cardamom, fresh ginger, cloves, and frothy steamed milk.',
            image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-19',
            name: 'Strawberry Hibiscus Refresher',
            category: 'tea',
            categoryName: 'Refresher',
            price: 3.80,
            badge: 'Popular',
            badgeClass: 'popular',
            desc: 'Tart ruby hibiscus tea shaken with sweet strawberry puree, lemonade, and real fruit.',
            image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-20',
            name: 'Earl Grey Lavender Mist',
            category: 'tea',
            categoryName: 'Tea & Latte',
            price: 3.40,
            badge: 'Calming',
            badgeClass: '',
            desc: 'Fragrant bergamot black tea infused with French culinary lavender and oat milk.',
            image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-33',
            name: 'Honey Jasmine Green Tea',
            category: 'tea',
            categoryName: 'Iced Tea',
            price: 3.30,
            badge: 'Floral',
            badgeClass: 'fresh',
            desc: 'Aromatic jasmine petals steeped with green tea and sweetened with raw wildflower honey.',
            image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-34',
            name: 'Mango Dragonfruit Cooler',
            category: 'tea',
            categoryName: 'Refresher',
            price: 3.90,
            badge: 'New',
            badgeClass: 'new',
            desc: 'Tropical sweet mango and diced red dragonfruit shaken over ice with green tea.',
            image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-35',
            name: 'Passion Fruit Iced Black Tea',
            category: 'tea',
            categoryName: 'Iced Tea',
            price: 3.60,
            badge: 'Tropical',
            badgeClass: 'popular',
            desc: 'Premium black tea shaken with tangy passion fruit juice, lemon slices, and ice.',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=80'
        },

        // --- FRAPPUCCINO & BLENDED ---
        {
            id: 'drink-5',
            name: 'Mocha Cookie Frappe',
            category: 'frappe',
            categoryName: 'Frappuccino',
            price: 4.50,
            badge: 'Popular',
            badgeClass: 'popular',
            desc: 'Dark chocolate mocha and roast coffee blended with fresh milk & cookie crumbles.',
            image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-21',
            name: 'Caramel Ribbon Crunch Frappe',
            category: 'frappe',
            categoryName: 'Frappuccino',
            price: 4.80,
            badge: 'Bestseller',
            badgeClass: 'bestseller',
            desc: 'Rich buttery dark caramel syrup blended with milk and topped with crunchy sugar crystals.',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-22',
            name: 'Java Chip Chocolate Frappe',
            category: 'frappe',
            categoryName: 'Frappuccino',
            price: 4.60,
            badge: 'New',
            badgeClass: 'new',
            desc: 'Roasted coffee and rich mocha sauce blended with choco chips and vanilla whipped cream.',
            image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-36',
            name: 'Matcha Green Tea Cream Frappe',
            category: 'frappe',
            categoryName: 'Frappuccino',
            price: 4.70,
            badge: 'Organic',
            badgeClass: 'fresh',
            desc: 'Sweetened ceremonial matcha blended with milk and ice, topped with whipped cream.',
            image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-37',
            name: 'Strawberries & Cream Frappe',
            category: 'frappe',
            categoryName: 'Frappuccino',
            price: 4.50,
            badge: 'Sweet',
            badgeClass: 'popular',
            desc: 'Summer strawberry puree layered with a splash of milk and topped with whipped cream.',
            image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-38',
            name: 'White Chocolate Mocha Frappe',
            category: 'frappe',
            categoryName: 'Frappuccino',
            price: 4.80,
            badge: 'Deluxe',
            badgeClass: 'bestseller',
            desc: 'White chocolate sauce and dark coffee blended with milk and crowned with whipped cream.',
            image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500&auto=format&fit=crop&q=80'
        },

        // --- BAKERY & PASTRIES ---
        {
            id: 'drink-6',
            name: 'French Butter Croissant',
            category: 'bakery',
            categoryName: 'Pastry',
            price: 2.80,
            badge: 'Fresh',
            badgeClass: 'fresh',
            desc: 'Golden flaky pastry baked fresh every morning with 100% French churned butter.',
            image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-8',
            name: 'Belgian Choco Donut',
            category: 'bakery',
            categoryName: 'Bakery',
            price: 2.20,
            badge: 'Fresh',
            badgeClass: 'fresh',
            desc: 'Soft and pillowy artisan yeast donut dipped in rich dark chocolate ganache.',
            image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-23',
            name: 'Warm Cinnamon Swirl Roll',
            category: 'bakery',
            categoryName: 'Bakery',
            price: 3.50,
            badge: 'Warm',
            badgeClass: 'popular',
            desc: 'Oven-fresh brioche dough swirled with Saigon cinnamon and cream cheese glaze.',
            image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-24',
            name: 'Wild Blueberry Crumb Muffin',
            category: 'bakery',
            categoryName: 'Bakery',
            price: 2.90,
            badge: 'Fresh',
            badgeClass: 'fresh',
            desc: 'Moist golden muffin packed with plump wild blueberries and streusel crunch.',
            image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-25',
            name: 'Artisan Tiramisu Cup',
            category: 'bakery',
            categoryName: 'Dessert',
            price: 4.50,
            badge: 'Chef Special',
            badgeClass: 'popular',
            desc: 'Espresso-soaked ladyfingers layered with sweet mascarpone mousse and Valrhona cocoa.',
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-39',
            name: 'Almond Cream Croissant',
            category: 'bakery',
            categoryName: 'Pastry',
            price: 3.40,
            badge: 'Crunchy',
            badgeClass: 'bestseller',
            desc: 'Twice-baked croissant filled with rich almond frangipane and topped with sliced almonds.',
            image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-40',
            name: 'Dark Choco Fudge Brownie',
            category: 'bakery',
            categoryName: 'Bakery',
            price: 2.80,
            badge: 'Rich',
            badgeClass: 'popular',
            desc: 'Dense, chewy chocolate brownie baked with 70% dark Belgian cocoa and walnuts.',
            image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-41',
            name: 'New York Baked Cheesecake',
            category: 'bakery',
            categoryName: 'Dessert',
            price: 4.60,
            badge: 'Classic',
            badgeClass: '',
            desc: 'Velvety smooth cream cheese filling on a buttery graham cracker crust.',
            image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=80'
        },

        // --- SIGNATURE SPECIALS ---
        {
            id: 'drink-26',
            name: 'Honey Cinnamon Cloud Latte',
            category: 'signature',
            categoryName: 'House Signature',
            price: 4.80,
            badge: 'Signature',
            badgeClass: 'signature',
            desc: 'Organic raw wildflower honey, double espresso, oat milk, and a dusting of cinnamon cloud.',
            image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-27',
            name: 'Pistachio Cloud Cold Brew',
            category: 'signature',
            categoryName: 'House Signature',
            price: 4.90,
            badge: 'Signature',
            badgeClass: 'signature',
            desc: 'Signature slow-steeped cold brew crowned with silky salted pistachio sweet cream.',
            image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-28',
            name: 'Salted Caramel Affogato',
            category: 'signature',
            categoryName: 'House Signature',
            price: 4.20,
            badge: 'Signature',
            badgeClass: 'signature',
            desc: 'Two scoops of handcrafted Madagascan vanilla gelato drowned in a boiling double ristretto.',
            image: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-42',
            name: 'Smoked Vanilla Bean Latte',
            category: 'signature',
            categoryName: 'House Signature',
            price: 4.60,
            badge: 'Chef Special',
            badgeClass: 'signature',
            desc: 'Blonde espresso infused with smoked Tahitian vanilla syrup and velvety micro-foam.',
            image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-43',
            name: 'Orange Blossom Espresso Tonic',
            category: 'signature',
            categoryName: 'House Signature',
            price: 4.10,
            badge: 'Refreshing',
            badgeClass: 'new',
            desc: 'Crisp Indian tonic water, double espresso shot, orange blossom mist, and candied citrus.',
            image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80'
        },
        {
            id: 'drink-44',
            name: 'Toffee Nut Crunch Latte',
            category: 'signature',
            categoryName: 'House Signature',
            price: 4.75,
            badge: 'Limited',
            badgeClass: 'bestseller',
            desc: 'Espresso, steamed whole milk, sweet toffee nut syrup, whipped cream, and toffee sprinkles.',
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=80'
        }
    ];

    // --------------------------------------------------------------------------
    // 2. State & Cart
    // --------------------------------------------------------------------------
    let currentCategory = 'all';
    let cart = [
        {
            id: 'drink-1-demo',
            drinkId: 'drink-1',
            name: 'Spanish Iced Latte',
            price: 3.80,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80',
            customs: 'Regular (12oz) • 70% Sweet • Normal Ice',
            note: 'Less ice'
        },
        {
            id: 'drink-6-demo',
            drinkId: 'drink-6',
            name: 'French Butter Croissant',
            price: 2.80,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80',
            customs: 'Warm & Toasted',
            note: ''
        }
    ];

    // DOM Elements
    const productsGrid = document.getElementById('products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cartCounter = document.getElementById('cart-counter');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartDrawer = document.getElementById('cart-drawer');
    const btnOpenCart = document.getElementById('btn-open-cart');
    const btnCloseCart = document.getElementById('btn-close-cart');
    const cartDrawerBody = document.getElementById('cart-drawer-body');
    const cartGrandTotal = document.getElementById('cart-grand-total');
    const btnCheckout = document.getElementById('btn-checkout');
    const btnLogout = document.getElementById('btn-logout');

    // Drink Customization Modal (Mon-Der Function) Elements
    const customModalBackdrop = document.getElementById('drink-custom-modal-backdrop');
    const btnCloseCustomModal = document.getElementById('btn-close-custom-modal');
    const modalDrinkImg = document.getElementById('modal-drink-img');
    const modalDrinkBadge = document.getElementById('modal-drink-badge');
    const modalDrinkCat = document.getElementById('modal-drink-category');
    const modalDrinkTitle = document.getElementById('modal-drink-title');
    const modalDrinkDesc = document.getElementById('modal-drink-desc');
    const modalDrinkBasePrice = document.getElementById('modal-drink-base-price');
    const customModalTotalPrice = document.getElementById('custom-modal-total-price');
    const customQtyVal = document.getElementById('custom-qty-val');
    const btnCustomQtyDec = document.getElementById('btn-custom-qty-dec');
    const btnCustomQtyInc = document.getElementById('btn-custom-qty-inc');
    const btnCustomAddToCart = document.getElementById('btn-custom-add-to-cart');
    const customNoteInput = document.getElementById('custom-note-input');

    // Modal Dynamic Sections
    const customSizeSection = document.getElementById('custom-size-section');
    const customSugarSection = document.getElementById('custom-sugar-section');
    const customIceSection = document.getElementById('custom-ice-section');
    const customAddonSection = document.getElementById('custom-addon-section');
    const customBakerySection = document.getElementById('custom-bakery-section');

    let activeModalDrink = null;
    let activeModalQty = 1;

    // --------------------------------------------------------------------------
    // 3. Render Drink Cards (Exact FreshSip Structure)
    // --------------------------------------------------------------------------
    function renderDrinks() {
        if (!productsGrid) return;

        const filtered = drinks.filter(d => currentCategory === 'all' || d.category === currentCategory);

        productsGrid.innerHTML = filtered.map(drink => `
            <div class="drink-card" data-id="${drink.id}">
                <div class="drink-image">
                    ${drink.badge ? `<span class="badge-custom ${drink.badgeClass}">${drink.badge}</span>` : ''}
                    <button type="button" class="favorite" title="Favorite">
                        <i class="bi bi-heart"></i>
                    </button>
                    <img src="${drink.image}" alt="${drink.name}" loading="lazy">
                </div>

                <div class="drink-content">
                    <div class="drink-category">
                        ${drink.categoryName}
                    </div>

                    <h3>${drink.name}</h3>

                    <p>${drink.desc}</p>

                    <div class="drink-bottom">
                        <div>
                            <span class="price">$${drink.price.toFixed(2)}</span>
                            <small>/ cup</small>
                        </div>

                        <button type="button" class="order-btn" data-id="${drink.id}" title="Customize & Order">
                            <i class="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Attach Listeners
        // 1. Quick '+' button opens customization modal
        productsGrid.querySelectorAll('.order-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = e.currentTarget.dataset.id;
                openCustomModal(id);
            });
        });

        // 2. Clicking anywhere on the drink card opens the customization modal
        productsGrid.querySelectorAll('.drink-card').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                if (e.target.closest('.favorite')) return;
                const id = card.dataset.id;
                openCustomModal(id);
            });
        });

        // 3. Favorite heart toggle
        productsGrid.querySelectorAll('.favorite').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.currentTarget.classList.toggle('active');
                const icon = e.currentTarget.querySelector('i');
                if (e.currentTarget.classList.contains('active')) {
                    icon.classList.remove('bi-heart');
                    icon.classList.add('bi-heart-fill');
                } else {
                    icon.classList.remove('bi-heart-fill');
                    icon.classList.add('bi-heart');
                }
            });
        });
    }

    // --------------------------------------------------------------------------
    // 4. Drink Customization Modal (Mon-Der Functionality)
    // --------------------------------------------------------------------------
    function openCustomModal(drinkId) {
        const drink = drinks.find(d => d.id === drinkId);
        if (!drink) return;

        activeModalDrink = drink;
        activeModalQty = 1;

        if (customQtyVal) customQtyVal.textContent = '1';
        if (customNoteInput) customNoteInput.value = '';

        // Reset radio buttons to standard defaults
        const defaultSize = document.querySelector('input[name="custom-size"][value="Regular (12oz)"]');
        if (defaultSize) defaultSize.checked = true;

        const defaultSugar = document.querySelector('input[name="custom-sugar"][value="70% Sweet"]');
        if (defaultSugar) defaultSugar.checked = true;

        const defaultIce = document.querySelector('input[name="custom-ice"][value="Normal Ice"]');
        if (defaultIce) defaultIce.checked = true;

        const defaultBakery = document.querySelector('input[name="custom-bakery"][value="Warm & Toasted"]');
        if (defaultBakery) defaultBakery.checked = true;

        // Reset add-on checkboxes
        document.querySelectorAll('input[name="custom-addon"]').forEach(cb => cb.checked = false);

        // Populate drink details
        if (modalDrinkImg) {
            modalDrinkImg.src = drink.image;
            modalDrinkImg.alt = drink.name;
        }

        if (modalDrinkBadge) {
            if (drink.badge) {
                modalDrinkBadge.textContent = drink.badge;
                modalDrinkBadge.className = `badge-custom ${drink.badgeClass || 'badge-popular'}`;
                modalDrinkBadge.style.display = 'inline-block';
            } else {
                modalDrinkBadge.style.display = 'none';
            }
        }

        if (modalDrinkCat) modalDrinkCat.textContent = drink.categoryName;
        if (modalDrinkTitle) modalDrinkTitle.textContent = drink.name;
        if (modalDrinkDesc) modalDrinkDesc.textContent = drink.desc;
        if (modalDrinkBasePrice) modalDrinkBasePrice.textContent = `$${drink.price.toFixed(2)}`;

        // Smart Category Option Visibility
        if (drink.category === 'bakery') {
            if (customSizeSection) customSizeSection.style.display = 'none';
            if (customSugarSection) customSugarSection.style.display = 'none';
            if (customIceSection) customIceSection.style.display = 'none';
            if (customAddonSection) customAddonSection.style.display = 'none';
            if (customBakerySection) customBakerySection.style.display = 'flex';
        } else if (drink.category === 'hot') {
            if (customSizeSection) customSizeSection.style.display = 'flex';
            if (customSugarSection) customSugarSection.style.display = 'flex';
            if (customIceSection) customIceSection.style.display = 'none';
            if (customAddonSection) customAddonSection.style.display = 'flex';
            if (customBakerySection) customBakerySection.style.display = 'none';
        } else {
            // Iced, Frappe, Tea, Signature
            if (customSizeSection) customSizeSection.style.display = 'flex';
            if (customSugarSection) customSugarSection.style.display = 'flex';
            if (customIceSection) customIceSection.style.display = 'flex';
            if (customAddonSection) customAddonSection.style.display = 'flex';
            if (customBakerySection) customBakerySection.style.display = 'none';
        }

        recalculateModalTotal();

        // Show modal with smooth entrance
        if (customModalBackdrop) {
            customModalBackdrop.classList.add('active');
            customModalBackdrop.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeCustomModal() {
        if (customModalBackdrop) {
            customModalBackdrop.classList.remove('active');
            customModalBackdrop.setAttribute('aria-hidden', 'true');
            if (!cartDrawer || !cartDrawer.classList.contains('active')) {
                document.body.style.overflow = '';
            }
        }
    }

    function recalculateModalTotal() {
        if (!activeModalDrink) return { unitPrice: 0, total: 0 };

        let unitPrice = activeModalDrink.price;

        if (activeModalDrink.category !== 'bakery') {
            const sizeOption = document.querySelector('input[name="custom-size"]:checked');
            if (sizeOption && sizeOption.dataset.extra) {
                unitPrice += parseFloat(sizeOption.dataset.extra);
            }

            document.querySelectorAll('input[name="custom-addon"]:checked').forEach(cb => {
                if (cb.dataset.extra) {
                    unitPrice += parseFloat(cb.dataset.extra);
                }
            });
        }

        const total = unitPrice * activeModalQty;

        if (customModalTotalPrice) {
            customModalTotalPrice.textContent = `$${total.toFixed(2)}`;
        }

        return { unitPrice, total };
    }

    // Modal Stepper Listeners
    if (btnCustomQtyDec) {
        btnCustomQtyDec.addEventListener('click', () => {
            if (activeModalQty > 1) {
                activeModalQty--;
                if (customQtyVal) customQtyVal.textContent = activeModalQty;
                recalculateModalTotal();
            }
        });
    }

    if (btnCustomQtyInc) {
        btnCustomQtyInc.addEventListener('click', () => {
            if (activeModalQty < 99) {
                activeModalQty++;
                if (customQtyVal) customQtyVal.textContent = activeModalQty;
                recalculateModalTotal();
            }
        });
    }

    // Dynamic Recalculation on option change
    document.querySelectorAll('input[name="custom-size"], input[name="custom-addon"]').forEach(input => {
        input.addEventListener('change', recalculateModalTotal);
    });

    // Close Modal Events
    if (btnCloseCustomModal) btnCloseCustomModal.addEventListener('click', closeCustomModal);
    if (customModalBackdrop) {
        customModalBackdrop.addEventListener('click', (e) => {
            if (e.target === customModalBackdrop) {
                closeCustomModal();
            }
        });
    }

    // Escape Key to close modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && customModalBackdrop && customModalBackdrop.classList.contains('active')) {
            closeCustomModal();
        }
    });

    // Add to Order from Customization Modal
    if (btnCustomAddToCart) {
        btnCustomAddToCart.addEventListener('click', () => {
            if (!activeModalDrink) return;

            const { unitPrice } = recalculateModalTotal();
            const customsList = [];

            if (activeModalDrink.category === 'bakery') {
                const bakeryOption = document.querySelector('input[name="custom-bakery"]:checked');
                if (bakeryOption) customsList.push(bakeryOption.value);
            } else {
                const sizeOption = document.querySelector('input[name="custom-size"]:checked');
                const sugarOption = document.querySelector('input[name="custom-sugar"]:checked');
                const iceOption = document.querySelector('input[name="custom-ice"]:checked');

                if (sizeOption) customsList.push(sizeOption.value);
                if (sugarOption) customsList.push(sugarOption.value);
                if (activeModalDrink.category !== 'hot' && iceOption) {
                    customsList.push(iceOption.value);
                }

                const addonList = [];
                document.querySelectorAll('input[name="custom-addon"]:checked').forEach(cb => {
                    addonList.push(cb.value);
                });
                if (addonList.length > 0) {
                    customsList.push(addonList.join(', '));
                }
            }

            const customsText = customsList.join(' • ');
            const noteText = customNoteInput ? customNoteInput.value.trim() : '';

            // Check if identical customized item exists
            const existing = cart.find(item => 
                item.drinkId === activeModalDrink.id && 
                item.customs === customsText && 
                item.note === noteText
            );

            if (existing) {
                existing.quantity += activeModalQty;
            } else {
                cart.push({
                    id: `${activeModalDrink.id}-${Date.now()}`,
                    drinkId: activeModalDrink.id,
                    name: activeModalDrink.name,
                    price: unitPrice,
                    quantity: activeModalQty,
                    image: activeModalDrink.image,
                    customs: customsText,
                    note: noteText
                });
            }

            closeCustomModal();
            updateCart();

            // Fire Artisan Toast Notification (Without Shadow)
            if (typeof Swal !== 'undefined') {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2400,
                    timerProgressBar: true,
                    customClass: {
                        popup: 'coffee-toast-popup'
                    },
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });

                Toast.fire({
                    html: `
                        <div class="coffee-toast-body">
                            <img src="${activeModalDrink.image}" alt="${activeModalDrink.name}" class="coffee-toast-thumb" onerror="this.src='../images/coffee-logo.png'">
                            <div class="coffee-toast-info">
                                <span class="coffee-toast-tag"><i class="bi bi-check2-circle"></i> Added to Order</span>
                                <div class="coffee-toast-title">${activeModalDrink.name}</div>
                                <span class="coffee-toast-price">$${unitPrice.toFixed(2)} • ${activeModalQty} item${activeModalQty > 1 ? 's' : ''}</span>
                            </div>
                        </div>
                    `
                });
            }
        });
    }

    // --------------------------------------------------------------------------
    // 5. Cart Operations
    // --------------------------------------------------------------------------
    function updateCart() {
        const count = cart.reduce((acc, curr) => acc + curr.quantity, 0);
        if (cartCounter) {
            cartCounter.textContent = count;
        }

        const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        if (cartGrandTotal) {
            cartGrandTotal.textContent = `$${total.toFixed(2)}`;
        }

        if (!cartDrawerBody) return;

        if (cart.length === 0) {
            cartDrawerBody.innerHTML = `
                <div class="cart-empty">
                    <svg class="cart-empty-coffee-icon" viewBox="0 0 24 24" width="46" height="46" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                        <path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path>
                        <line x1="6" y1="2" x2="6" y2="4"></line>
                        <line x1="10" y1="2" x2="10" y2="4"></line>
                        <line x1="14" y1="2" x2="14" y2="4"></line>
                    </svg>
                    <h5 style="font-size: 16px; color: #2b1810; margin-top: 12px; font-weight: 700;">Your cart is empty</h5>
                    <p style="font-size: 13px; color: #888;">Select delicious fresh coffee from the menu.</p>
                </div>
            `;
            return;
        }

        cartDrawerBody.innerHTML = cart.map((item, idx) => `
            <div class="cart-row">
                <img src="${item.image}" alt="${item.name}" class="cart-thumb" onerror="this.src='../images/coffee-logo.png'">
                <div class="cart-meta">
                    <div class="cart-meta-name">${item.name}</div>
                    ${item.customs ? `<div class="cart-meta-customs">${item.customs}</div>` : ''}
                    ${item.note ? `<div class="cart-meta-note"><i class="bi bi-chat-left-text"></i> ${item.note}</div>` : ''}
                    <div class="cart-meta-price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <div class="cart-ctrls">
                    <button type="button" class="btn-cart-step" data-action="dec" data-idx="${idx}">-</button>
                    <span class="cart-qty-val">${item.quantity}</span>
                    <button type="button" class="btn-cart-step" data-action="inc" data-idx="${idx}">+</button>
                </div>
            </div>
        `).join('');

        cartDrawerBody.querySelectorAll('.btn-cart-step').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.currentTarget.dataset.idx, 10);
                const action = e.currentTarget.dataset.action;
                if (action === 'inc') {
                    cart[idx].quantity += 1;
                } else if (action === 'dec') {
                    cart[idx].quantity -= 1;
                    if (cart[idx].quantity <= 0) {
                        cart.splice(idx, 1);
                    }
                }
                updateCart();
            });
        });
    }

    // Drawer Toggles
    function openDrawer() {
        if (cartOverlay && cartDrawer) {
            cartOverlay.classList.add('active');
            cartDrawer.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeDrawer() {
        if (cartOverlay && cartDrawer) {
            cartOverlay.classList.remove('active');
            cartDrawer.classList.remove('active');
            if (!customModalBackdrop || !customModalBackdrop.classList.contains('active')) {
                document.body.style.overflow = '';
            }
        }
    }

    if (btnOpenCart) btnOpenCart.addEventListener('click', openDrawer);
    if (btnCloseCart) btnCloseCart.addEventListener('click', closeDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', closeDrawer);

    // --------------------------------------------------------------------------
    // 6. Category Filters
    // --------------------------------------------------------------------------
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentCategory = e.currentTarget.dataset.category;
            renderDrinks();
        });
    });

    // --------------------------------------------------------------------------
    // 7. Checkout with Order Receipt Breakdown
    // --------------------------------------------------------------------------
    if (btnCheckout) {
        btnCheckout.addEventListener('click', () => {
            if (cart.length === 0) {
                Swal.fire({
                    icon: 'info',
                    title: 'Your Cart is Empty',
                    text: 'Explore our artisan menu and choose your favorite coffee first!',
                    confirmButtonText: 'Browse Menu',
                    customClass: {
                        popup: 'coffee-modal-popup',
                        confirmButton: 'coffee-modal-confirm-btn'
                    },
                    buttonsStyling: false
                });
                return;
            }

            const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
            const totalCount = cart.reduce((a, c) => a + c.quantity, 0);
            const orderNo = `#CH-${Math.floor(100 + Math.random() * 900)}`;

            const receiptItemsHtml = cart.map(it => `
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px; font-size:13px; border-bottom:1px dashed #e5ded7; padding-bottom:6px;">
                    <div style="text-align:left;">
                        <strong>${it.name}</strong> <span style="color:#c88d51; font-weight:700;">x${it.quantity}</span>
                        ${it.customs ? `<div style="font-size:11px; color:#8c6a51; margin-top:2px;">${it.customs}</div>` : ''}
                        ${it.note ? `<div style="font-size:10.5px; color:#9ca3af; font-style:italic;">Note: ${it.note}</div>` : ''}
                    </div>
                    <div style="font-weight:700; color:#2b1810; margin-left:12px;">$${(it.price * it.quantity).toFixed(2)}</div>
                </div>
            `).join('');

            Swal.fire({
                title: 'Confirm Coffee Order',
                html: `
                    <div style="text-align:left; margin-bottom:12px; font-size:13.5px; color:#555;">
                        Review your order details (${totalCount} item${totalCount > 1 ? 's' : ''}):
                    </div>
                    <div style="max-height:180px; overflow-y:auto; margin-bottom:16px; background:#faf7f4; padding:12px 14px; border-radius:14px; border:1px solid #ebdcd0;">
                        ${receiptItemsHtml}
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:16px; font-weight:800; color:#2b1810; padding:2px 4px;">
                        <span>Total Due:</span>
                        <span style="color:#a86230;">$${total.toFixed(2)}</span>
                    </div>
                `,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: '☕ Place Order',
                cancelButtonText: 'Keep Browsing',
                customClass: {
                    popup: 'coffee-modal-popup',
                    confirmButton: 'coffee-modal-confirm-btn',
                    cancelButton: 'coffee-modal-cancel-btn'
                },
                buttonsStyling: false
            }).then((res) => {
                if (res.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Order Placed Successfully!',
                        html: `
                            <p style="font-size:14px; color:#6b7280; margin-bottom:12px;">
                                Your order <strong style="color:#2b1810;">${orderNo}</strong> is being freshly handcrafted!
                            </p>
                            <div style="background:#faf7f4; border-radius:12px; padding:12px; font-size:13px; color:#2b1810; border:1px solid #ebdcd0; text-align:left;">
                                <div><i class="bi bi-geo-alt-fill" style="color:#c88d51;"></i> <strong>Pickup Counter:</strong> Counter A (Barista Station)</div>
                                <div style="margin-top:4px;"><i class="bi bi-clock-history" style="color:#c88d51;"></i> <strong>Estimated Wait:</strong> 3 - 5 mins</div>
                            </div>
                        `,
                        confirmButtonText: 'Great, Thanks!',
                        customClass: {
                            popup: 'coffee-modal-popup',
                            confirmButton: 'coffee-modal-confirm-btn'
                        },
                        buttonsStyling: false
                    });
                    cart = [];
                    updateCart();
                    closeDrawer();
                }
            });
        });
    }

    // --------------------------------------------------------------------------
    // 8. Logout
    // --------------------------------------------------------------------------
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            Swal.fire({
                title: 'Sign Out?',
                text: 'Are you sure you want to return to the welcome screen?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes, Sign Out',
                cancelButtonText: 'Stay Here',
                customClass: {
                    popup: 'coffee-modal-popup',
                    confirmButton: 'coffee-modal-confirm-btn',
                    cancelButton: 'coffee-modal-cancel-btn'
                },
                buttonsStyling: false
            }).then((res) => {
                if (res.isConfirmed) {
                    window.location.href = 'index.html';
                }
            });
        });
    }

    // --------------------------------------------------------------------------
    // 8. Active Scrollspy for Navbar (Turn light on Menu, About, Contact on scroll)
    // --------------------------------------------------------------------------
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const trackedSections = [
        document.getElementById('home'),
        document.getElementById('menu'),
        document.getElementById('about'),
        document.getElementById('contact'),
        document.getElementById('footer')
    ].filter(Boolean);

    function handleScrollSpy() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const offset = 140; // Fixed navbar buffer

        let currentActiveId = 'home';

        // Check if user has scrolled near bottom of page
        if ((window.innerHeight + scrollPosition) >= document.documentElement.scrollHeight - 70) {
            currentActiveId = 'contact';
        } else {
            trackedSections.forEach(sec => {
                const top = sec.offsetTop - offset;
                const height = sec.offsetHeight;
                if (scrollPosition >= top && scrollPosition < top + height) {
                    currentActiveId = sec.id;
                }
            });
        }

        if (currentActiveId === 'footer') {
            currentActiveId = 'contact';
        }

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentActiveId}` || (currentActiveId === 'contact' && href === '#footer')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    window.addEventListener('load', handleScrollSpy);
    handleScrollSpy();

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Initial render
    renderDrinks();
    updateCart();
});
