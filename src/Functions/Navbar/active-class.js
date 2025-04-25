export const activeClass = () => {
    const navLinksEls = document.querySelectorAll('.navbar-enlace');

    navLinksEls.forEach((link) => {
        link.addEventListener('click', () => {
            link.classList.add('active');
        });
    });
};