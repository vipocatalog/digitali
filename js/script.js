// ===================================================================================
// DATA SOURCE - המידע על כל הקטלוגים נמצא כאן
// כדי להוסיף/לעדכן/למחוק קטלוג, יש לערוך רק את המערך הזה
// ===================================================================================
const catalogs = [
    {
        title: "מפעל ייצור ריהוט כללי לבית 1",
        description: "ריהוט איכותי במחירי מפעל",
        category: "furniture",
        url: "https://vipocatalog.github.io/06/",
        thumbnail: "furniture.webp",
        tags: ["ריהוט", "בית", "ספות", "כיסאות", "מפעל", "שולחנות", "מדפים"]
    },
    {
        title: "ספות יוקרה א",
        description: "ספות יוקרה במחירים משתלמים",
        category: "furniture",
        url: "https://vipoconnect.github.io/18/",
        thumbnail: "luxury-sofas-1.webp",
        tags: ["ספות", "ריהוט", "יוקרה", "סלון", "בית"]
    },
    {
        title: "ספות יוקרה ב",
        description: "ספות יוקרה במחירים משתלמים",
        category: "furniture",
        url: "https://vipoconnect.github.io/19/",
        thumbnail: "luxury-sofas-2.webp",
        tags: ["ספות", "ריהוט", "יוקרה", "סלון", "בית"]
    },
    {
        title: "ספות יוקרה ג",
        description: "ספות יוקרה במחירים משתלמים",
        category: "furniture",
        url: "https://vipoconnect.github.io/20/",
        thumbnail: "luxury-sofas-3.webp",
        tags: ["ספות", "ריהוט", "יוקרה", "סלון", "בית"]
    },
    {
        title: "קטלוג כורסאות עיסוי",
        description: "כורסאות עיסוי איכותיות",
        category: "wellness",
        url: "https://vipoconnect.github.io/21/",
        thumbnail: "massage-chairs.webp",
        tags: ["כורסאות", "עיסוי", "בריאות", "נוחות", "ספא"]
    },
    {
        title: "כורסאות עיסוי עם מכשיר סליקה",
        description: "כורסאות עיסוי מסחריות",
        category: "wellness",
        url: "https://vipocatalog.github.io/02/",
        thumbnail: "massage-chairs-payment.webp",
        tags: ["כורסאות", "עיסוי", "בריאות", "נוחות", "ספא", "סליקה", "מסחרי"]
    },
    {
        title: "מפעל ייצור גלשן חשמלי 3",
        description: "גלשן חשמלי חדשני",
        category: "sports",
        url: "https://vipocatalog.github.io/05/",
        thumbnail: "electric-surfboard.webp",
        tags: ["גלשן", "חשמלי", "ספורט", "ימי", "פנאי"]
    },
    {
        title: "מפעל ייצור שולחן סנוקר",
        description: "שולחנות סנוקר איכותיים",
        category: "sports",
        url: "https://vipocatalog.github.io/09/",
        thumbnail: "snooker-table.webp",
        tags: ["סנוקר", "שולחן", "משחקים", "ספורט", "פנאי", "בילוי"]
    },
    {
        title: "ציוד קמפינג צדנית ומזגן נייד",
        description: "ציוד קמפינג חדשני",
        category: "camping",
        url: "https://vipocatalog.github.io/04/",
        thumbnail: "camping-gear.webp",
        tags: ["קמפינג", "צדנית", "מזגן", "נייד", "טיולים"]
    },
    {
        title: "קטלוג אוהלים 1",
        description: "מגוון אוהלים איכותיים",
        category: "camping",
        url: "https://vipoconnect.github.io/22/",
        thumbnail: "tents.webp",
        tags: ["אוהלים", "קמפינג", "טיולים", "שטח"]
    },
    {
        title: "אריזות לאוכל",
        description: "אריזות איכותיות במחיר מפעל",
        category: "business",
        url: "https://vipocatalog.github.io/01/",
        thumbnail: "food-packages.webp", 
        tags: ["אריזות", "אוכל", "עסקים", "מסעדות", "קייטרינג"]
    },
    {
        title: "מפעל ייצוק מתנפחים 1/א",
        description: "מוצרים מתנפחים איכותיים",
        category: "inflatables",
        url: "https://vipocatalog.github.io/08/",
        thumbnail: "inflatable-factory.webp",
        tags: ["מתנפחים", "מזרונים", "אוהלים", "מוצרים מתנפחים"]
    },
    {
        title: "מזרונים מתנפחים",
        description: "מזרונים מתנפחים איכותיים",
        category: "inflatables",
        url: "https://vipocatalog.github.io/03/",
        thumbnail: "inflatable-mattress.webp",
        tags: ["מזרונים", "מתנפחים", "שינה", "קמפינג"]
    },
    {
        title: "קטלוג אוהל מתנפח 1",
        description: "אוהלים מתנפחים מגוונים",
        category: "inflatables",
        url: "https://vipoconnect.github.io/23/",
        thumbnail: "inflatable-tent.webp",
        tags: ["אוהל", "מתנפח", "קמפינג", "טיולים"]
    },
    {
        title: "קטלוג 10",
        description: "מוצרים מקטלוג 10",
        category: "other",
        url: "https://vipocatalog.github.io/10/",
        thumbnail: "default.webp",
        tags: ["קטלוג", "מוצרים", "vipo"]
    },
    {
        title: "קטלוג 11",
        description: "מוצרים מקטלוג 11",
        category: "other",
        url: "https://vipocatalog.github.io/11/",
        thumbnail: "default.webp",
        tags: ["קטלוג", "מוצרים", "vipo"]
    },
    {
        title: "קטלוג 12",
        description: "מוצרים מקטלוג 12",
        category: "other",
        url: "https://vipocatalog.github.io/12/",
        thumbnail: "default.webp",
        tags: ["קטלוג", "מוצרים", "vipo"]
    },
    {
        title: "קטלוג 13",
        description: "מוצרים מקטלוג 13",
        category: "other",
        url: "https://vipocatalog.github.io/13/",
        thumbnail: "default.webp",
        tags: ["קטלוג", "מוצרים", "vipo"]
    },
    {
        title: "קטלוג 14",
        description: "מוצרים מקטלוג 14",
        category: "other",
        url: "https://vipocatalog.github.io/14/",
        thumbnail: "default.webp",
        tags: ["קטלוג", "מוצרים", "vipo"]
    },
    {
        title: "קטלוג 15",
        description: "מוצרים מקטלוג 15",
        category: "other",
        url: "https://vipocatalog.github.io/15/",
        thumbnail: "default.webp",
        tags: ["קטלוג", "מוצרים", "vipo"]
    },
    {
        title: "קטלוג 16",
        description: "מוצרים מקטלוג 16",
        category: "other",
        url: "https://vipocatalog.github.io/16/",
        thumbnail: "default.webp",
        tags: ["קטלוג", "מוצרים", "vipo"]
    },
    {
        title: "קטלוג 17",
        description: "מוצרים מקטלוג 17",
        category: "other",
        url: "https://vipocatalog.github.io/17/",
        thumbnail: "default.webp",
        tags: ["קטלוג", "מוצרים", "vipo"]
    },
    {
        title: "קטלוג 18",
        description: "מוצרים מקטלוג 18",
        category: "other",
        url: "https://vipocatalog.github.io/18/",
        thumbnail: "default.webp",
        tags: ["קטלוג", "מוצרים", "vipo"]
    }
];

// פונקציית חיפוש
function searchCatalogs(query) {
    if (!query) return [];
    
    query = query.trim().toLowerCase();
    
    // חיפוש בכל השדות הרלוונטיים
    return catalogs.filter(catalog => {
        const titleMatch = catalog.title.toLowerCase().includes(query);
        const descMatch = catalog.description.toLowerCase().includes(query);
        const categoryMatch = catalog.category.toLowerCase().includes(query);
        const tagsMatch = catalog.tags.some(tag => tag.toLowerCase().includes(query));
        
        return titleMatch || descMatch || categoryMatch || tagsMatch;
    });
}

// פונקציה ליצירת כרטיס קטלוג בודד
function createCatalogCard(catalog) {
    return `
        <div class="catalog-card">
            <a href="${catalog.url}" target="_blank">
                <div class="catalog-thumbnail">
                    <img src="images/thumbnails/${catalog.thumbnail}" alt="${catalog.title}">
                </div>
                <h3>${catalog.title}</h3>
                <p>${catalog.description}</p>
            </a>
        </div>
    `;
}

// פונקציית רנדור תוצאות חיפוש
function renderSearchResults(results) {
    const mainContent = document.querySelector('main');
    
    if (!mainContent) return;

    if (results.length === 0) {
        mainContent.innerHTML = `
            <section class="search-results">
                <h2>תוצאות חיפוש</h2>
                <p class="no-results">לא נמצאו תוצאות התואמות את החיפוש שלך. אנא נסה מונחי חיפוש אחרים.</p>
            </section>
        `;
        return;
    }
    
    const resultsHtml = results.map(createCatalogCard).join('');
    
    mainContent.innerHTML = `
        <section class="search-results">
            <h2>תוצאות חיפוש (${results.length})</h2>
            <div class="catalogs-grid">
                ${resultsHtml}
            </div>
        </section>
    `;
}

// ===================================================================================
// DYNAMIC CONTENT RENDERING - טעינת התוכן הדינמי
// ===================================================================================

// פונקציה לטעינת התוכן של דף הבית
function renderIndexPage() {
    const featuredContainer = document.querySelector('.featured-catalogs .catalogs-grid');
    const newestContainer = document.querySelector('.newest-catalogs .catalogs-grid');

    if (featuredContainer && newestContainer) {
        // קטלוגים מומלצים (לדוגמה, 4 הראשונים מקטגוריות שונות)
        const featured = [
            catalogs.find(c => c.category === 'furniture'),
            catalogs.find(c => c.category === 'wellness'),
            catalogs.find(c => c.category === 'sports'),
            catalogs.find(c => c.category === 'inflatables'),
        ].filter(Boolean); // filter(Boolean) to remove any undefined if a category is missing

        // קטלוגים חדשים (לדוגמה, 4 האחרונים שנוספו)
        const newest = catalogs.slice(-4).reverse();

        featuredContainer.innerHTML = featured.map(createCatalogCard).join('');
        newestContainer.innerHTML = newest.map(createCatalogCard).join('');
    }
}

// פונקציה לטעינת התוכן של דף הקטגוריות
function renderCategoriesPage() {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const categories = {
        'furniture': { name: 'ריהוט ובית', icon: 'fa-couch' },
        'wellness': { name: 'בריאות ונוחות', icon: 'fa-spa' },
        'inflatables': { name: 'מוצרים מתנפחים', icon: 'fa-wind' },
        'camping': { name: 'קמפינג וטיולים', icon: 'fa-campground' },
        'sports': { name: 'ספורט ופנאי', icon: 'fa-swimmer' },
        'business': { name: 'מוצרים לעסקים', icon: 'fa-store' },
        'other': { name: 'שונות', icon: 'fa-box' }
    };

    let pageHtml = '';
    for (const categoryId in categories) {
        const catalogsInCategory = catalogs.filter(c => c.category === categoryId);
        if (catalogsInCategory.length > 0) {
            const category = categories[categoryId];
            const catalogsHtml = catalogsInCategory.map(createCatalogCard).join('');
            
            pageHtml += `
                <section class="category-section" id="${categoryId}">
                    <h2><i class="fas ${category.icon}"></i> ${category.name}</h2>
                    <div class="catalogs-grid">
                        ${catalogsHtml}
                    </div>
                </section>
            `;
        }
    }

    mainContent.innerHTML = pageHtml;
}


// המתן לטעינת הדף וטען את התוכן הרלוונטי
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');
    
    // אירוע חיפוש
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value;
            if (query.trim() !== '') {
                const results = searchCatalogs(query);
                renderSearchResults(results);
                
                // שינוי כתובת ה-URL עם פרמטר החיפוש
                const searchParams = new URLSearchParams(window.location.search);
                searchParams.set('q', query);
                history.pushState(null, '', '?' + searchParams.toString());
            }
        });
    } else {
        console.error('טופס החיפוש לא נמצא!');
    }
    
    // בדיקה אם יש פרמטר חיפוש ב-URL, אם כן, הצג תוצאות
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('q');
    
    if (queryParam) {
        searchInput.value = queryParam;
        const results = searchCatalogs(queryParam);
        renderSearchResults(results);
    } else {
        // אם אין חיפוש, טען את התוכן הרגיל של הדף
        if (document.querySelector('.featured-catalogs')) {
            renderIndexPage();
        } else if (document.querySelector('body.page-categories')) { // We will add this class to the body in categories.html
            renderCategoriesPage();
        }
    }
});
