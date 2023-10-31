import mainImage from "../media/pngimg.com - cabbage_PNG8785-min-resize2.png";

function addHomeContent() {

   const contentDiv = document.querySelector('.content');

   // Main Div parent container - child of contentDiv

   const mainDiv = document.createElement('div');
   mainDiv.classList.add('main');
   contentDiv.appendChild(mainDiv);

   // mainDiv children - child of mainDiv

   const mainImg = document.createElement('img');
   mainImg.classList.add('main-img');
   mainImg.src = mainImage;
   mainImg.alt = 'An uncooked green cabbage head';
   const sloganContainer = document.createElement('div');
   sloganContainer.classList.add('slogan-container');
   mainDiv.appendChild(mainImg);
   mainDiv.appendChild(sloganContainer);

   // Slogan - child of sloganContainer

   const sloganDiv = document.createElement('div');
   sloganDiv.classList.add('slogan');
   
   const textNodeOne = document.createTextNode('100% CABBAGE,');
   const textNodeTwo = document.createTextNode('...');
   const textNodeThree = document.createTextNode('...DAY');
   
   const lineBreak = document.createElement('br')
   
   const spanElement = document.createElement('span');
   spanElement.textContent = 'EVERY';
   
   sloganDiv.appendChild(textNodeOne);
   sloganDiv.appendChild(lineBreak);
   sloganDiv.appendChild(textNodeTwo);
   sloganDiv.appendChild(spanElement);
   sloganDiv.appendChild(textNodeThree);
   
   sloganContainer.appendChild(sloganDiv);
 }

export default addHomeContent;