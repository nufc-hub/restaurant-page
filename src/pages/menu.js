/*blended cabbage
grated cabbage
special - purple cabbage*/

import firstImage from '../media/cabbage-juice.png'

function addMenuContent() {

    const contentDiv = document.querySelector('.content');
 
    // Main Div parent container - child of contentDiv
 
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'main-menu');
    contentDiv.appendChild(mainDiv);
 
    // mainDiv children - child of mainDiv
 

    // Menu item one picture
    const imgOne = document.createElement('img');
    imgOne.setAttribute('id', 'img-one-menu');
    imgOne.src = firstImage;
    imgOne.alt = 'Blended cabbage juice in a glass';
    mainDiv.appendChild(imgOne);
 
    // Menu item one description & price
 
    const imgOneText = document.createElement('div');
    imgOneText.setAttribute('id', 'txt-one-menu');
    
    const textNodeOne = document.createTextNode('Blended Cabbage');
    const textNodeTwo = document.createTextNode('.....');
   
    
    const spanElement = document.createElement('span');
    spanElement.textContent = '$1';
    
    imgOneText.appendChild(textNodeOne);
    imgOneText.appendChild(textNodeTwo);
    imgOneText.appendChild(spanElement);
    
    mainDiv.appendChild(imgOneText);

    // add item two container here to include all the elements created below.
    // or think of ways to make this code shorter will still including all three menu items
 
  }

  export default addMenuContent;