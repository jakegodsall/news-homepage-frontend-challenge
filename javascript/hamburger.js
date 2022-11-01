const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');

const hamburgerClick = (e) => {
    e.target.classList.toggle('opened');
    overlay.classList.toggle('active');
};

hamburger.addEventListener('click', hamburgerClick);
