import mainImage from "../media/pngimg.com - cabbage_PNG8785-min-resize2.png";

function addHomeContent() {

    const contentDiv = document.querySelector('.content');

    // Main Div parent container - child of contentDiv.

    const mainDiv = document.createElement('div');

    mainDiv.id = 'main-home';

    contentDiv.appendChild(mainDiv);

    // mainDiv children - child of mainDiv

    const mainImg = document.createElement('img');
    const sloganContainer = document.createElement('div');

    mainImg.id = 'main-home-img';
    sloganContainer.id = 'slogan-container-home';

    mainImg.src = mainImage;

    mainImg.alt = 'An uncooked green cabbage head';

    mainDiv.appendChild(mainImg);
    mainDiv.appendChild(sloganContainer);

    // Slogan - child of sloganContainer

    const sloganDiv = document.createElement('div');
    const lineBreak = document.createElement('br');
    const spanElement = document.createElement('span');

    sloganDiv.id = 'slogan-home';

    spanElement.textContent = 'EVERY';

    const textNodeOne = document.createTextNode('100% CABBAGE,');
    const textNodeTwo = document.createTextNode('...');
    const textNodeThree = document.createTextNode('...DAY');

    sloganDiv.appendChild(textNodeOne);
    sloganDiv.appendChild(lineBreak);
    sloganDiv.appendChild(textNodeTwo);
    sloganDiv.appendChild(spanElement);
    sloganDiv.appendChild(textNodeThree);

    sloganContainer.appendChild(sloganDiv);
 }

export default addHomeContent;