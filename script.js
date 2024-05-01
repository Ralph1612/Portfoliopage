if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('modeIcon').textContent = 'light_mode';
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    
    var modeIcon = document.getElementById('modeIcon');
    modeIcon.textContent = body.classList.contains('dark-mode') ? 'light_mode' : 'dark_mode';
}

window.addEventListener('load', function() {
    var loader = document.querySelector('.loader');
    setTimeout(function() {
        loader.style.animation = 'paused';
    }, 1500); 
});

// Scroll Funktion, wenn unterer Rand erreicht, neue Seite wird geladen
window.addEventListener('scroll', function() {
    var header = document.querySelector('.combined');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;

    if ((scrollPosition + windowHeight) >= bodyHeight) {
        var currentPage = window.location.pathname;
        var nextPage;

        switch(currentPage) {
            case '/index.html':
                nextPage = '/Portfoliopage/projekte.html';
                break;
            case '/Portfoliopage/projekte.html':
                nextPage = '/Portfoliopage/Profil.html';
                break;
            case '/Portfoliopage/profil.html':
                nextPage = '/Portfoliopage/kontakt.html';
                break;
            case '/Portfoliopage/kontakt.html':
                nextPage = '/Portfoliopage/index.html';
                break;
            default:
                nextPage = '/Portfoliopage/index.html';
        }

        setTimeout(function() {
            window.location.href = nextPage;
        }, 1000); 

        header.style.transition = 'opacity 1s ease';
        header.style.opacity = '0';
    }

    if (scrollPosition > (windowHeight / 2)) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
});



const hSections = document.querySelectorAll('.erfahrung-slider');

//attach wheel event listener to each hSection
hSections.forEach((hSection) => {

    const jobWidth = hSection.querySelector('.job').clientWidth;
    // getting the width of the section
    // we will scroll this amount on mouse scroll
    const scrollAmount = hSection.clientWidth;
    hSection.addEventListener('wheel', function (e) {
        // we need to stop vertical page scroll when
        // scrolling on the horizontal section
        e.preventDefault();

        // if the mouse wheel is scrolling upward, we will scroll
        //  to the left
        if (e.deltaY > 0) hSection.scrollLeft += 200;
        // otherwise to the right
        else hSection.scrollLeft -= scrollAmount;
    });
});


const hSectionsAusbildung = document.querySelectorAll('.ausbildung-slider');

//attach wheel event listener to each hSection
hSectionsAusbildung.forEach((hSection) => {
    // getting the width of the section
    // we will scroll this amount on mouse scroll
    const scrollAmount = hSection.clientWidth;
    hSection.addEventListener('wheel', function (e) {
        // we need to stop vertical page scroll when
        // scrolling on the horizontal section
        e.preventDefault();

        // if the mouse wheel is scrolling upward, we will scroll
        //  to the left
        if (e.deltaY > 0) hSection.scrollLeft += 200;
        // otherwise to the right
        else hSection.scrollLeft -= scrollAmount;
    });
});

