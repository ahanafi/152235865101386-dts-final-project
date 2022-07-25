import bgHero from '../assets/img/bg-hero.jpg';

const changeBodyBackground = () => {
    document.body.style.background = `linear-gradient(rgb(65, 81, 119, 8.9),rgb(29, 93, 110, 0.7)), url(${bgHero}) no-repeat fixed center center`;
    document.body.style.height = '85vh';
}

const resetBodyBackground = () => {
    document.body.style.background = '#fefefe';
    document.body.style.height = 'auto';
}

export {
    changeBodyBackground, resetBodyBackground
}