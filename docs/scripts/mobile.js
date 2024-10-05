// No phones please!
const bypassButton = document.getElementById('mobile-bypass');

function doBypass(bypass) {
    if (window.innerWidth <= 768 && bypass === 'false') {
        document.getElementById('mobile-message').style.display = 'flex'; 
        document.getElementById("page-container").style.display = 'none';
    } else {
        document.getElementById('mobile-message').style.display = 'none';
        document.getElementById("page-container").style.display = 'flex'; 
    }
}

function bypassMob() {
    localStorage.setItem('bypass','true');
    doBypass('true');
}

bypassButton.addEventListener('click', bypassMob)

const savedby = localStorage.getItem('bypass') || 'false';
doBypass(savedby);
