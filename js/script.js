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
        url: "https://lp6.me/qqZH7",
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
        url: "https://lp6.me/y0Xcx",
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
        title: "קטלוג אוהל מתנפח 1",
        description: "אוהלים מתנפחים מגוונים",
        category: "inflatables",
        url: "https://vipoconnect.github.io/23/",
        thumbnail: "inflatable-tent.webp",
        tags: ["אוהל", "מתנפח", "קמפינג", "טיולים"]
    },
    {
        title: "H3 מפעל ייצור מתנפחים 01",
        description: "מגוון מוצרים מתנפחים איכותיים",
        category: "inflatables",
        url: "https://vipocatalog.github.io/10/",
        thumbnail: "page_10.webp",
        tags: ["מתנפחים", "מזרונים", "אוהלים", "מוצרים מתנפחים"]
    },
    {
        title: "מפעל ייצור אוהלים 01",
        description: "קטלוג מוצרי אוהלים ממפעל",
        category: "camping",
        url: "https://vipocatalog.github.io/11/",
        thumbnail: "page_11.webp",
        tags: ["אוהלים", "קמפינג", "טיולים", "מפעל"]
    },
    {
        title: "מפעל ייצור לונה פרק 01",
        description: "מתקנים ומשחקים ללונה פארק",
        category: "business",
        url: "https://vipocatalog.github.io/12/",
        thumbnail: "page_12.webp",
        tags: ["לונה פארק", "מתקנים", "משחקים", "בילוי", "עסקים"]
    },

    {
        title: "מפעל ייצור מתנפחים 02",
        description: "מגוון מוצרים מתנפחים איכותיים",
        category: "inflatables",
        url: "https://vipocatalog.github.io/14/",
        thumbnail: "page_14.webp",
        tags: ["מתנפחים", "מזרונים", "אוהלים", "ימי", "פנאי"]
    },
    {
        title: "מפעל ייצור מתנפחים לחצר 01",
        description: "מתנפחים ומשחקים לחצר ולגינה",
        category: "inflatables",
        url: "https://vipocatalog.github.io/15/",
        thumbnail: "page_15.webp",
        tags: ["מתנפחים", "חצר", "גינה", "משחקים", "בריכות", "פעילות"]
    },
    {
        title: "מפעל ייצור רמקולים 1",
        description: "רמקולים ומערכות שמע איכותיות",
        category: "electronics",
        url: "https://vipocatalog.github.io/16/",
        thumbnail: "page_16.webp",
        tags: ["רמקולים", "אודיו", "מוזיקה", "שמע", "אלקטרוניקה"]
    },
    {
        title: "מפעל ייצור מזנון + מקרן",
        description: "מזנונים ומקרנים לבית",
        category: "furniture",
        url: "https://vipocatalog.github.io/17/",
        thumbnail: "page_17.webp",
        tags: ["מזנון", "מקרן", "ריהוט", "בית", "קולנוע ביתי", "טלוויזיה"]
    },
    {
        title: "מפעל ייצור פילטר 1",
        description: "פילטרים ומערכות סינון מים",
        category: "home",
        url: "https://vipocatalog.github.io/18/",
        thumbnail: "page_18.webp",
        tags: ["פילטר", "סינון מים", "איכות מים", "בריאות", "מערכות סינון"]
    },
    {
        title: "כסאות בר",
        description: "כסאות בר מעוצבים",
        category: "furniture",
        url: "https://lp6.me/MZKP3",
        thumbnail: "new/25.webp",
        tags: ["כסאות בר", "ריהוט", "מטבח", "פינת אוכל", "עיצוב הבית"]
    },
    {
        title: "ספות מעוצבות",
        description: "ספות יוקרה מעוצבות",
        category: "furniture",
        url: "https://lp6.me/8Qyup",
        thumbnail: "new/19.webp",
        tags: ["ספות", "ריהוט", "סלון", "עיצוב הבית", "נוחות"]
    },
    {
        title: "כורסאות עיסוי",
        description: "כורסאות עיסוי חדשניות",
        category: "wellness",
        url: "https://lp6.me/Af7eO",
        thumbnail: "new/30.webp",
        tags: ["כורסאות עיסוי", "עיסוי", "בריאות", "רווחה", "טיפוח", "פינוק"]
    },
    {
        title: "ג'קוזי",
        description: "ג'קוזי מפנק במחיר אטרקטיבי",
        category: "wellness",
        url: "https://lp6.me/sG6yQ",
        thumbnail: "new/26.webp",
        tags: ["ג'קוזי", "ספא", "פינוק", "בריאות", "רווחה", "אמבטיה"]
    },
    {
        title: "דשא סינטטי",
        description: "דשא סינטטי איכותי לחצר ולגינה",
        category: "outdoor",
        url: "https://lp6.me/Icq4b",
        thumbnail: "new/34.webp",
        tags: ["דשא סינטטי", "גינה", "עיצוב חוץ", "חצר", "נוי"]
    },
    {
        title: "ספות סלון 2",
        description: "ספות מעוצבות לסלון",
        category: "furniture",
        url: "https://lp6.me/snhha",
        thumbnail: "new/28.webp",
        tags: ["ספות", "סלון", "ריהוט", "עיצוב הבית", "נוחות"]
    },
    {
        title: "מסכי חוץ",
        description: "מסכי תצוגה לשימוש חיצוני",
        category: "electronics",
        url: "https://lp6.me/uLv04",
        thumbnail: "new/36.webp",
        tags: ["מסכים", "חוץ", "טכנולוגיה", "פרסום", "עסקים"]
    },
    {
        title: "מסכי לד",
        description: "מסכי לד איכותיים למגוון שימושים",
        category: "electronics",
        url: "https://lp6.me/sM8V1",
        thumbnail: "new/41.webp",
        tags: ["מסכי לד", "אלקטרוניקה", "טכנולוגיה", "תצוגה", "חיסכון באנרגיה"]
    },
    {
        title: "דף A4",
        description: "נייר משרדי איכותי",
        category: "business",
        url: "https://lp6.me/aIcAa",
        thumbnail: "new/23.webp",
        tags: ["נייר", "הדפסה", "משרד", "ציוד משרדי"]
    },

    {
        title: "סירות ספורט",
        description: "סירות ספורט מתקדמות",
        category: "water",
        url: "https://lp6.me/kd2BP",
        thumbnail: "new/29.webp",
        tags: ["סירות", "ספורט ימי", "ים", "שייט", "נופש"]
    },
    {
        title: "סככות וסכך",
        description: "פתרונות הצללה למרפסת ולחצר",
        category: "outdoor",
        url: "https://lp6.me/6Fmy1",
        thumbnail: "new/31.webp",
        tags: ["סכך", "הצללה", "חצר", "מרפסת", "גינה", "קיץ"]
    },
    {
        title: "כורסאות וספות",
        description: "מגוון כורסאות וספות לסלון",
        category: "furniture",
        url: "https://lp6.me/hUYAQ",
        thumbnail: "new/22.webp",
        tags: ["כורסאות", "ספות", "סלון", "ריהוט", "נוחות"]
    },
    {
        title: "חלונות לבית",
        description: "חלונות איכותיים במחירי מפעל",
        category: "home",
        url: "https://lp6.me/oUghk",
        thumbnail: "new/38.webp",
        tags: ["חלונות", "בית", "בנייה", "שיפוץ", "בידוד"]
    },
    {
        title: "פרגולות מעוצבות",
        description: "פרגולות איכותיות לחצר ולגינה",
        category: "outdoor",
        url: "https://lp6.me/4Xrbg",
        thumbnail: "new/32.webp",
        tags: ["פרגולות", "גינה", "חצר", "הצללה", "עיצוב חוץ"]
    },
    {
        title: "מיטות",
        description: "מיטות איכותיות בעיצוב חדשני",
        category: "furniture",
        url: "https://lp6.me/XjGWY",
        thumbnail: "new/24.webp",
        tags: ["מיטות", "חדר שינה", "ריהוט", "נוחות", "עיצוב פנים"]
    },
    {
        title: "משקפי עיסוי",
        description: "משקפי עיסוי חדשניים",
        category: "wellness",
        url: "https://lp6.me/sACMN",
        thumbnail: "new/27.webp",
        tags: ["משקפי עיסוי", "עיסוי", "בריאות", "רווחה", "טיפוח"]
    },
    {
        title: "סכך איכותי",
        description: "סכך לסוכה ולמרפסת",
        category: "outdoor",
        url: "https://lp6.me/VaSf6",
        thumbnail: "new/33.webp",
        tags: ["סכך", "סוכות", "הצללה", "חצר", "מרפסת"]
    },
    {
        title: "אוהל איגלו",
        description: "אוהלי איגלו איכותיים לקמפינג",
        category: "camping",
        url: "https://lp6.me/iNCOx",
        thumbnail: "new/20.webp",
        tags: ["איגלו", "אוהלים", "קמפינג", "טיולים", "שטח"]
    },
    {
        title: "יחידות נופש",
        description: "יחידות נופש להשכרה ולמכירה",
        category: "realestate",
        url: "https://lp6.me/Tsysy",
        thumbnail: "new/37.webp",
        tags: ["יחידות נופש", "נדלן", "תיירות", "נופש", "צימרים"]
    },
    {
        title: "דלתות מעוצבות",
        description: "דלתות איכותיות לבית",
        category: "home",
        url: "https://lp6.me/KuSxh",
        thumbnail: "new/39.webp",
        tags: ["דלתות", "בית", "עיצוב פנים", "שיפוץ", "בנייה"]
    },
    {
        title: "חיפוי עץ",
        description: "חיפויי עץ איכותיים לבית",
        category: "home",
        url: "https://lp6.me/UTYvj",
        thumbnail: "new/40.webp",
        tags: ["חיפוי עץ", "עץ", "עיצוב פנים", "קירות", "רצפה"]
    },
    {
        title: "חיפוי חוץ",
        description: "חיפויים איכותיים לקירות חוץ",
        category: "outdoor",
        url: "https://lp6.me/kXZgV",
        thumbnail: "new/35.webp",
        tags: ["חיפוי חוץ", "בנייה", "עיצוב חוץ", "קירות", "איטום"]
    },
    {
        title: "מזרונים מתנפחים",
        description: "מזרונים מתנפחים איכותיים לשינה נוחה",
        category: "inflatables",
        url: "https://vipocatalog.github.io/03/",
        thumbnail: "new/42.webp",
        tags: ["מזרונים", "מתנפחים", "שינה", "נוחות", "אירוח"]
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
        'outdoor': { name: 'מוצרי חוץ', icon: 'fa-tree' },
        'electronics': { name: 'מוצרי אלקטרוניקה', icon: 'fa-tv' },
        'realestate': { name: 'נדל"ן', icon: 'fa-home' },
        'home': { name: 'מוצרי בית', icon: 'fa-door-open' },
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
