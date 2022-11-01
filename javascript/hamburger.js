const hamburger = document.getElementById('hamburger');
const innerHamburger = hamburger.getFirstChild;
const overlay = document.getElementById('overlay');

const hamburgerClick = () => {
    hamburger.classList.toggle('opened');
    overlay.classList.toggle('active');
};

hamburger.addEventListener('click', hamburgerClick);
innerHamburger.addEventListener('click', hamburgerClick);
