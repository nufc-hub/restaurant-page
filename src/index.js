import '../src/styles/header.css';
import '../src/styles/home.css';
import '../src/styles/menu.css';
import '../src/styles/contact.css';
import addHomeContent from './pages/home';
import addMenuContent from './pages/menu';
import addContactContent from './pages/contact';
import firstLoad from '../src/functions/firstLoad';
import removeMainDiv from '../src/functions/removePageContent';

firstLoad(console.log('load'));

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

homeButton.addEventListener('click', () => {
    removeMainDiv();
    addHomeContent();
    console.log('home');
})


menuButton.addEventListener('click', () => {
    removeMainDiv();
    addMenuContent();
    console.log('menu');
})



contactButton.addEventListener('click', () => {
    removeMainDiv();
    addContactContent();
    console.log('contact');
})