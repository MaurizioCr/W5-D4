const parole = document.querySelectorAll('.parole i');
let currentIndex = 0;

function mostraParola(index) {
    parole.forEach((parola, i) => {
        if (i === index) {
            parola.style.display = 'inline';
            parola.style.animation = 'fadeInOut 3s forwards';
        } else {
            parola.style.display = 'none';
            parola.style.animation = 'none';
        }
    });
}

function animaParole() {
    mostraParola(currentIndex);
    currentIndex = (currentIndex + 1) % parole.length;
}

setInterval(animaParole, 3000);
